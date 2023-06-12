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
  // tests for player winning
  it('should update reduced with the Player wins - Monkfish eats seaweed', () => {
    render(<TestingComponent playerHand="monkfish" computerHand="seaweed" />);

    expect(
      screen.getByText(/You win! Monkfish eats the seaweed! 😆/)
    ).toBeInTheDocument();
    expect(screen.getByText(/playerscore: 3/i)).toBeInTheDocument();
    expect(screen.getByText(/computerscore: 1/i)).toBeInTheDocument();
  });

  it('should update reduced with the Player wins - Seaweed tangles the fishing net', () => {
    render(<TestingComponent playerHand="seaweed" computerHand="fishingnet" />);

    expect(
      screen.getByText(/You win! Seaweed tangles up the fishing net! 😆/)
    ).toBeInTheDocument();
  });
  // tests for computer winning
  it('should update reduced with the Computer wins - Seaweed tangles the fishing net', () => {
    render(
      <TestingComponent playerHand="monkfish" computerHand="fishingnet" />
    );

    expect(
      screen.getByText(/Computer wins! The fishing net catches Monkfish! 😣/)
    ).toBeInTheDocument();
    expect(screen.getByText(/playerscore: 2/i)).toBeInTheDocument();
    expect(screen.getByText(/computerscore: 2/i)).toBeInTheDocument();
  });

  it('should update reduced with the Computer wins - Seaweed tangles the fishing net', () => {
    render(<TestingComponent playerHand="fishingnet" computerHand="seaweed" />);

    expect(
      screen.getByText(/Computer wins! Seaweed tangles up the fishing net! 😣/)
    ).toBeInTheDocument();
    expect(screen.getByText(/playerscore: 2/i)).toBeInTheDocument();
    expect(screen.getByText(/computerscore: 2/i)).toBeInTheDocument();
  });

  // tests for draws
  it('should update reduced with a draw', () => {
    render(<TestingComponent playerHand="monkfish" computerHand="monkfish" />);

    expect(screen.getByText(/It's a draw!/)).toBeInTheDocument();
    expect(screen.getByText(/playerscore: 2/i)).toBeInTheDocument();
    expect(screen.getByText(/computerscore: 1/i)).toBeInTheDocument();
  });

  it('should update reduced with a draw', () => {
    render(<TestingComponent playerHand="seaweed" computerHand="seaweed" />);

    expect(screen.getByText(/It's a draw!/)).toBeInTheDocument();
    expect(screen.getByText(/playerscore: 2/i)).toBeInTheDocument();
    expect(screen.getByText(/computerscore: 1/i)).toBeInTheDocument();
  });

  it('should update reduced with a draw', () => {
    render(
      <TestingComponent playerHand="fishingnet" computerHand="fishingnet" />
    );

    expect(screen.getByText(/It's a draw!/)).toBeInTheDocument();
    expect(screen.getByText(/playerscore: 2/i)).toBeInTheDocument();
    expect(screen.getByText(/computerscore: 1/i)).toBeInTheDocument();
  });
});
