import { ActionTypes, OptionActionKind } from '../reducers/scoreReducerTypes';

/* Monkfish beats Seaweed
Seaweed beats Fishing net
Fishing net beats Monkfish */

export const checkWinner = (
  dispatch: React.Dispatch<ActionTypes>,
  playerSeaItem: string,
  computerSeaItem: string
) => {
  // ALL POSSIBLE DRAW COMBINATIONS
  if (playerSeaItem === 'monkfish' && computerSeaItem === 'monkfish') {
    dispatch({ type: OptionActionKind.DRAW, payload: 'It is a draw!' });
  } else if (playerSeaItem === 'seaweed' && computerSeaItem === 'seaweed') {
    dispatch({ type: OptionActionKind.DRAW, payload: 'It is a draw!' });
  } else if (
    playerSeaItem === 'fishingnet' &&
    computerSeaItem === 'fishingnet'
  ) {
    dispatch({ type: OptionActionKind.DRAW, payload: 'It is a draw!' });

    // PLAYER CHOOSES MONKFISH
  } else if (playerSeaItem === 'monkfish' && computerSeaItem === 'fishingnet') {
    dispatch({
      type: OptionActionKind.COMPUTER_WINS,
      payload: 'Computer wins! The fishing net beats Monkfish! 😣',
    });
  } else if (playerSeaItem === 'monkfish' && computerSeaItem === 'seaweed') {
    dispatch({
      type: OptionActionKind.PLAYER_WINS,
      payload: 'You win! Monkfish eats the seaweed! 😆',
    });

    // PLAYER CHOOSES SEAWEED
  } else if (playerSeaItem === 'seaweed' && computerSeaItem === 'fishingnet') {
    dispatch({
      type: OptionActionKind.PLAYER_WINS,
      payload: 'You win! Seaweed beats the fishing net! 😆',
    });
  } else if (playerSeaItem === 'seaweed' && computerSeaItem === 'monkfish') {
    dispatch({
      type: OptionActionKind.COMPUTER_WINS,
      payload: 'Computer wins! Monkfish eats the seaweed! 😣',
    });

    // PLAYER CHOOSES FISHING NET
  } else if (playerSeaItem === 'fishingnet' && computerSeaItem === 'monkfish') {
    dispatch({
      type: OptionActionKind.PLAYER_WINS,
      payload: 'You win! The fishing net catches the MonkFish! 😆',
    });
  } else if (playerSeaItem === 'fishingnet' && computerSeaItem === 'seaweed') {
    dispatch({
      type: OptionActionKind.COMPUTER_WINS,
      payload: 'Computer wins! Seaweed tangles the fishing net! 😣',
    });
  }
};
