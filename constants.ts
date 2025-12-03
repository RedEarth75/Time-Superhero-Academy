import { IdiomType, Scenario, SuperheroProfile } from './types';

export const SUPERHEROES: Record<IdiomType, SuperheroProfile> = {
  [IdiomType.SPEND_TIME]: {
    idiom: IdiomType.SPEND_TIME,
    heroName: "Activity Ace",
    powerDescription: "Uses time to do things!",
    color: "bg-blue-400",
    icon: "clock"
  },
  [IdiomType.WASTE_TIME]: {
    idiom: IdiomType.WASTE_TIME,
    heroName: "Dr. Dilly-Dally",
    powerDescription: "Throws time away!",
    color: "bg-red-400",
    icon: "coffee"
  },
  [IdiomType.SAVE_TIME]: {
    idiom: IdiomType.SAVE_TIME,
    heroName: "Turbo Saver",
    powerDescription: "Finds shortcuts to finish fast!",
    color: "bg-green-400",
    icon: "zap"
  },
  [IdiomType.MAKE_TIME_FOR]: {
    idiom: IdiomType.MAKE_TIME_FOR,
    heroName: "The Prioritizer",
    powerDescription: "Creates space for what matters!",
    color: "bg-purple-400",
    icon: "heart"
  },
  [IdiomType.TAKE_TIME]: {
    idiom: IdiomType.TAKE_TIME,
    heroName: "Captain Careful",
    powerDescription: "Slows down to do it right!",
    color: "bg-orange-400",
    icon: "shield"
  },
  [IdiomType.PASS_THE_TIME]: {
    idiom: IdiomType.PASS_THE_TIME,
    heroName: "The Wait-Wizard",
    powerDescription: "Makes waiting fun!",
    color: "bg-yellow-400",
    icon: "music"
  }
};

export const INITIAL_SCENARIOS: Scenario[] = [
  // Spend Time (3)
  { id: 'st1', correctIdiom: IdiomType.SPEND_TIME, text: "You play soccer with your friends for two hours on Saturday." },
  { id: 'st2', correctIdiom: IdiomType.SPEND_TIME, text: "You read a whole book during the rainy afternoon." },
  { id: 'st3', correctIdiom: IdiomType.SPEND_TIME, text: "You practice the piano for thirty minutes every day." },
  
  // Waste Time (3)
  { id: 'wt1', correctIdiom: IdiomType.WASTE_TIME, text: "You stare at the ceiling instead of putting on your shoes." },
  { id: 'wt2', correctIdiom: IdiomType.WASTE_TIME, text: "You play with your food instead of eating breakfast." },
  { id: 'wt3', correctIdiom: IdiomType.WASTE_TIME, text: "You look for your lost pencil for 15 minutes because your desk is messy." },
  
  // Save Time (3)
  { id: 'sat1', correctIdiom: IdiomType.SAVE_TIME, text: "You ride your bike to school so you get there faster than walking." },
  { id: 'sat2', correctIdiom: IdiomType.SAVE_TIME, text: "You pack your bag the night before so you are ready in the morning." },
  { id: 'sat3', correctIdiom: IdiomType.SAVE_TIME, text: "You use a calculator to finish your math homework quickly." },
  
  // Make Time For (3)
  { id: 'mt1', correctIdiom: IdiomType.MAKE_TIME_FOR, text: "Even though you are busy, you visit your grandma on her birthday." },
  { id: 'mt2', correctIdiom: IdiomType.MAKE_TIME_FOR, text: "You finish your chores early so you can play with your puppy." },
  { id: 'mt3', correctIdiom: IdiomType.MAKE_TIME_FOR, text: "You stop watching TV to help your dad wash the car." },
  
  // Take Time (3)
  { id: 'tt1', correctIdiom: IdiomType.TAKE_TIME, text: "You walk slowly on the icy sidewalk so you don't slip." },
  { id: 'tt2', correctIdiom: IdiomType.TAKE_TIME, text: "You write your essay carefully to make sure there are no mistakes." },
  { id: 'tt3', correctIdiom: IdiomType.TAKE_TIME, text: "You eat your dinner slowly to enjoy the taste." },
  
  // Pass the Time (3)
  { id: 'pt1', correctIdiom: IdiomType.PASS_THE_TIME, text: "You play 'I Spy' while waiting in the long line at the grocery store." },
  { id: 'pt2', correctIdiom: IdiomType.PASS_THE_TIME, text: "You listen to music while sitting on the bus ride home." },
  { id: 'pt3', correctIdiom: IdiomType.PASS_THE_TIME, text: "You draw pictures in the dirt with a stick while waiting for the game to start." }
];