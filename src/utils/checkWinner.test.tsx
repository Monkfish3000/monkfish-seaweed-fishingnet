import { useEffect, useReducer } from 'react';
import scoreReducer from '../reducers/scoreReducer';
import { initialState } from '../context/initialContextValues';
import { describe, vi } from 'vitest';
import { checkWinner } from './checkWinner';
import { render, screen } from '@testing-library/react';

vi.mock('../context/initialContextValues', () => {
  return {
    initialState: {
      playerSeaItem: 2,
      computerSeaItem: 5,
      runTimer: false,
      score: {
        playerScore: 2,
        computerScore: 1,
      },
      results: {
        winner: 'Player',
        message: 'abc',
      },
    },
  };
});

interface Iprops {
  playerHand: string;
  computerHand: string;
}

const TestingComponent = (props: Iprops) => {
  const [state, dispatch] = useReducer(scoreReducer, initialState);

  useEffect(() => {
    checkWinner(dispatch, props.playerHand, props.computerHand);
  }, []);

  return (
    <>
      <p>playerscore: {state.score.playerScore}</p>
      <p>computerscore: {state.score.computerScore}</p>
      <p>winner: {state.results.winner}</p>
      <p>message: {state.results.message}</p>
    </>
  );
};

describe('checkwinner', () => {
  it('should update reduced with the Player wins - Monkfish eats seaweed', () => {
    render(<TestingComponent playerHand="monkfish" computerHand="seaweed" />);

    expect(
      screen.getByText(/You win! Monkfish eats the seaweed! 😆/)
    ).toBeInTheDocument();
  });
});
