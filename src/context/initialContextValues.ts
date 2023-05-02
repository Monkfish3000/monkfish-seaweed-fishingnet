import { IInitialState } from './optionsContextTypes';

export const initialState: IInitialState = {
  playerSeaItem: 0,
  computerSeaItem: 0,
  runTimer: false,
  score: {
    playerScore: 0,
    computerScore: 0,
  },
  results: {
    winner: '',
    message: '',
  },
};
