export enum IdiomType {
  SPEND_TIME = 'Spend Time',
  WASTE_TIME = 'Waste Time',
  SAVE_TIME = 'Save Time',
  MAKE_TIME_FOR = 'Make Time For',
  TAKE_TIME = 'Take Time',
  PASS_THE_TIME = 'Pass the Time',
}

export interface Scenario {
  id: string;
  text: string;
  correctIdiom: IdiomType;
}

export interface SuperheroProfile {
  idiom: IdiomType;
  heroName: string;
  powerDescription: string;
  color: string;
  icon: string;
}

export type GameState = 'start' | 'playing' | 'summary';

export interface GameStats {
  correct: number;
  total: number;
  streak: number;
}