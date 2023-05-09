import { describe, vi, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { useOptions, OptionsProvider } from './optionsContext';

vi.mock('./initialContextValues', () => {
  return {
    initialState: {
      playerSeaItem: 1,
      computerSeaItem: 2,
      runTimer: false,
      score: {
        playerScore: 0,
        computerScore: 0,
      },
      results: {
        winner: 'Player 1',
        message: '',
      },
    },
  };
});

const TestingComponent = () => {
  const optionsContext = useOptions();
  return (
    <>
      <p>Playerseaitem: {optionsContext.state.playerSeaItem}</p>
      <p>Computerseaitem: {optionsContext.state.computerSeaItem} </p>
      <p>Winner: {optionsContext.state.results.winner}</p>
    </>
  );
};

describe('Options Context', () => {
  it('should render the component with the context initial values', () => {
    render(
      <OptionsProvider>
        <TestingComponent />
      </OptionsProvider>
    );

    expect(screen.getByText(/Playerseaitem: 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Computerseaitem: 2/i)).toBeInTheDocument();
    expect(screen.getByText(/Winner: Player 1/i)).toBeInTheDocument();
  });
});
