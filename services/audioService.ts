class AudioService {
  private context: AudioContext | null = null;

  private getContext(): AudioContext {
    if (!this.context) {
      this.context = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    return this.context;
  }

  // Helper to create a brief envelope
  private createGain(ctx: AudioContext, startTime: number, duration: number, peak: number = 0.1) {
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0, startTime);
    gain.gain.linearRampToValueAtTime(peak, startTime + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
    gain.connect(ctx.destination);
    return gain;
  }

  playClick() {
    try {
      const ctx = this.getContext();
      if (ctx.state === 'suspended') ctx.resume();
      const t = ctx.currentTime;
      
      const osc = ctx.createOscillator();
      const gain = this.createGain(ctx, t, 0.1, 0.1);
      
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(600, t);
      osc.frequency.exponentialRampToValueAtTime(300, t + 0.1);
      
      osc.connect(gain);
      osc.start(t);
      osc.stop(t + 0.1);
    } catch (e) { console.error('Audio error', e); }
  }

  playFlip() {
    try {
      const ctx = this.getContext();
      if (ctx.state === 'suspended') ctx.resume();
      const t = ctx.currentTime;
      
      // White noise for "Whoosh"
      const bufferSize = ctx.sampleRate * 0.2;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }
      
      const noise = ctx.createBufferSource();
      noise.buffer = buffer;
      
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(200, t);
      filter.frequency.linearRampToValueAtTime(1000, t + 0.1);
      filter.frequency.linearRampToValueAtTime(200, t + 0.2);
      
      const gain = this.createGain(ctx, t, 0.2, 0.15);
      
      noise.connect(filter);
      filter.connect(gain);
      noise.start(t);
    } catch (e) { console.error('Audio error', e); }
  }

  playCorrect() {
    try {
      const ctx = this.getContext();
      if (ctx.state === 'suspended') ctx.resume();
      const t = ctx.currentTime;

      // Arpeggio C Major: C5, E5, G5, C6
      const freqs = [523.25, 659.25, 783.99, 1046.50];
      
      freqs.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = this.createGain(ctx, t + i * 0.08, 0.3, 0.1);
        
        osc.type = 'square'; // 8-bit style
        osc.frequency.value = freq;
        
        osc.connect(gain);
        osc.start(t + i * 0.08);
        osc.stop(t + i * 0.08 + 0.3);
      });
    } catch (e) { console.error('Audio error', e); }
  }

  playIncorrect() {
    try {
      const ctx = this.getContext();
      if (ctx.state === 'suspended') ctx.resume();
      const t = ctx.currentTime;

      const osc = ctx.createOscillator();
      const gain = this.createGain(ctx, t, 0.5, 0.15);
      
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(150, t);
      osc.frequency.linearRampToValueAtTime(50, t + 0.5); // Slide down
      
      // Vibrato
      const lfo = ctx.createOscillator();
      lfo.frequency.value = 10;
      const lfoGain = ctx.createGain();
      lfoGain.gain.value = 20;
      lfo.connect(lfoGain);
      lfoGain.connect(osc.frequency);
      lfo.start(t);
      lfo.stop(t + 0.5);

      osc.connect(gain);
      osc.start(t);
      osc.stop(t + 0.5);
    } catch (e) { console.error('Audio error', e); }
  }
}

export const audioService = new AudioService();
