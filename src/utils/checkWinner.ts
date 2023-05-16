import { ActionTypes, OptionActionKind } from '../reducers/scoreReducerTypes';

/* Monkfish beats Seaweed
Seaweed beats Fishing net
Fishing net beats Monkfish */

export const checkWinner = (
  dispatch: React.Dispatch<ActionTypes>,
  playerSeaItem: string,
  computerSeaItem: string
) => {
  if (playerSeaItem === 'monkfish' && computerSeaItem === 'monkfish') {
    dispatch({ type: OptionActionKind.DRAW, payload: 'It is a draw!' });
  } else if (playerSeaItem === 'monkfish' && computerSeaItem === 'fishingnet') {
    dispatch({
      type: OptionActionKind.COMPUTER_WINS,
      payload: 'Computer wins! The fishing net beats Monkfish! 😣',
    });
  } else if (playerSeaItem === 'monkfish' && computerSeaItem === 'seaweed') {
    dispatch({
      type: OptionActionKind.PLAYER_WINS,
      payload: 'You win! Monkfish beats seaweed! 😆',
    });
  }
};
