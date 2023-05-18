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
