import React from 'react';
import { SuperheroProfile } from '../types';
import { audioService } from '../services/audioService';
import { Zap, Clock, Shield, Coffee, Heart, Music, HelpCircle } from 'lucide-react';

interface Props {
  profile: SuperheroProfile;
  onClick?: () => void;
  className?: string;
  selected?: boolean;
  style?: React.CSSProperties;
}

const SuperheroBadge: React.FC<Props> = ({ profile, onClick, className = '', selected = false, style }) => {
  const getIcon = () => {
    switch (profile.icon) {
      case 'clock': return <Clock className="w-8 h-8" />;
      case 'coffee': return <Coffee className="w-8 h-8" />;
      case 'zap': return <Zap className="w-8 h-8" />;
      case 'heart': return <Heart className="w-8 h-8" />;
      case 'shield': return <Shield className="w-8 h-8" />;
      case 'music': return <Music className="w-8 h-8" />;
      default: return <HelpCircle className="w-8 h-8" />;
    }
  };

  const handleClick = () => {
    audioService.playClick();
    if (onClick) onClick();
  };

  return (
    <button
      onClick={handleClick}
      style={style}
      className={`
        relative overflow-hidden group transition-all duration-200 ease-in-out
        flex flex-col items-center justify-center p-3 rounded-xl
        comic-border comic-shadow
        hover:-translate-y-1 hover:shadow-lg
        ${selected ? 'ring-4 ring-black scale-105' : ''}
        ${profile.color}
        ${className}
      `}
    >
      <div className="bg-white p-2 rounded-full border-2 border-black mb-2 shadow-sm group-hover:scale-110 transition-transform">
        {getIcon()}
      </div>
      
      {/* 
        Changed font from 'comic-font' (Bangers/Narrow) to 'font-black' (Comic Neue/Wide).
        Removed 'comic-font' class.
      */}
      <h3 className="text-lg md:text-xl font-black text-black uppercase text-center leading-tight tracking-wide drop-shadow-sm font-sans">
        {profile.heroName}
      </h3>
      
      <p className="text-[10px] md:text-xs font-bold text-black/80 uppercase tracking-widest mt-1 bg-white/30 px-2 py-0.5 rounded-full">
        {profile.idiom}
      </p>
    </button>
  );
};

export default SuperheroBadge;