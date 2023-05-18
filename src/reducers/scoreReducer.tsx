import { IInitialState } from '../context/optionsContextTypes';
import { ActionTypes, OptionActionKind } from './scoreReducerTypes';

export default function scoreReducer(
  state: IInitialState,
  action: ActionTypes
) {
  const { type, payload } = action;

  switch (type) {
    case OptionActionKind.UPDATE_PLAYER_CHOICE:
      return {
        ...state,
        playerSeaItem: payload,
      };
    case OptionActionKind.UPDATE_COMPUTER_CHOICE:
      return {
        ...state,
        computerSeaItem: payload,
      };
    case OptionActionKind.RUN_TIMER:
      return {
        ...state,
        runTimer: payload,
      };
    case OptionActionKind.DRAW:
      return {
        ...state,
        results: {
          winner: 'Nobody',
          message: payload,
        },
      };
    case OptionActionKind.PLAYER_WINS:
      return {
        ...state,
        score: {
          ...state.score,
          playerScore: state.score.playerScore + 1,
        },
        results: {
          winner: 'Player',
          message: payload,
        },
      };
    case OptionActionKind.COMPUTER_WINS:
      return {
        ...state,
        score: {
          ...state.score,
          computerScore: state.score.computerScore + 1,
        },
        results: {
          winner: 'Computer',
          message: payload,
        },
      };
    default: {
      return {
        ...state,
        results: {
          winner: 'error',
          message: 'Something went wrong! ',
        },
      };
    }
  }
}
