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
});
