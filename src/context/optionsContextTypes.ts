import { ActionTypes } from '../reducers/scoreReducerTypes';

export enum SeaItemOption {
  monkfish = 'monkfish',
  seaweed = 'seaweed',
  fishingnet = 'fishingnet',
}

export interface IOptions {
  name: SeaItemOption;
  icon: JSX.Element;
}

export interface IoptionsContext {
  options: IOptions[];
  state: IInitialState;
  dispatch: React.Dispatch<ActionTypes>;
}

export interface Props {
  children: React.ReactNode;
}

interface IScore {
  playerScore: number;
  computerScore: number;
}

interface IResults {
  winner: string;
  message: string;
}

export interface IInitialState {
  playerSeaItem: number;
  computerSeaItem: number;
  runTimer: boolean;
  score: IScore;
  results: IResults;
}
