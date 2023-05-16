import { ActionTypes, OptionActionKind } from '../reducers/scoreReducerTypes';

export const checkWinner = (
  dispatch: React.Dispatch<ActionTypes>,
  playerSeaItem: string,
  computerSeaItem: string
) => {
  if (playerSeaItem === 'monkfish' && computerSeaItem === 'monkfish') {
    dispatch({ type: OptionActionKind.DRAW, payload: 'It is a draw!' });
  }
};
