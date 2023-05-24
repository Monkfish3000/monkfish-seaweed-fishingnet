import { render, screen } from '@testing-library/react';
import { useEffect, useReducer } from 'react';
import { describe, it, expect, vi } from 'vitest';
import scoreReducer from './scoreReducer';
import { initialState } from '../context/initialContextValues';
import { OptionActionKind, ActionTypes } from './scoreReducerTypes';

vi.mock('../context/initialContextValues', () => {
  return {
    initialState: {
      playerSeaItem: 2,
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
    },
  };
});

interface Iprops {
  myaction: ActionTypes;
}

const TestingComponent = (props: Iprops) => {
  const [state, dispatch] = useReducer(scoreReducer, initialState);

  useEffect(() => {
    dispatch(props.myaction);
  }, []);

  return (
    <>
      <p>winner: {state.results.winner}</p>
      <p>message: {state.results.message}</p>
      <p>playerseaitem: {state.playerSeaItem}</p>
      <p>computerseaitem: {state.computerSeaItem}</p>
    </>
  );
};

describe('scoreReducer', () => {
  it('should update the score reducer with the correct player sea item', () => {
    render(
      <TestingComponent
        myaction={{ type: OptionActionKind.UPDATE_PLAYER_CHOICE, payload: 0 }}
      />
    );

    expect(screen.getByText(/playerseaitem: 0/)).toBeInTheDocument();
  });

  it('should update the score reducer with the correct computer sea item', () => {
    render(
      <TestingComponent
        myaction={{ type: OptionActionKind.UPDATE_COMPUTER_CHOICE, payload: 1 }}
      />
    );

    expect(screen.getByText(/computerseaitem: 1/)).toBeInTheDocument();
  });

  it('should update the scoreReducer with the Player wins', () => {
    render(
      <TestingComponent
        myaction={{
          type: OptionActionKind.PLAYER_WINS,
          payload: 'You win! Monkfish eats the seaweed! 😆',
        }}
      />
    );

    expect(screen.getByText(/winner: Player/i));
    expect(
      screen.getByText(/message: You win! Monkfish eats the seaweed! 😆/i)
    );
  });

  it('should update the scoreReducer with the Computer wins', () => {
    render(
      <TestingComponent
        myaction={{
          type: OptionActionKind.COMPUTER_WINS,
          payload: 'Computer wins! The fishing net catches Monkfish! 😣',
        }}
      />
    );

    expect(screen.getByText(/winner: Computer/i));
    expect(
      screen.getByText(
        /message: Computer wins! The fishing net catches Monkfish! 😣/i
      )
    );
  });

  it('should update the scoreReducer if there is a draw', () => {
    render(
      <TestingComponent
        myaction={{
          type: OptionActionKind.DRAW,
          payload: "It's a draw!",
        }}
      />
    );

    expect(screen.getByText(/winner: Nobody/i));
    expect(screen.getByText(/message: It's a draw!/i));
  });

  it('should update the scoreReducer with the default case', () => {
    render(
      <TestingComponent
        myaction={{
          type: OptionActionKind.FAKE,
          payload: "It's a draw!",
        }}
      />
    );

    expect(screen.getByText(/winner: Error/i));
    expect(screen.getByText(/Something went wrong!/i));
  });
});
