import { render, screen, fireEvent, act } from '@testing-library/react';
import { describe, vi, it } from 'vitest';
import { OptionsProvider } from '../context/optionsContext';
import ScoreAndResults from './ScoreAndResults';
import ChooseAndPlay from './ChooseAndPlay';
import { generateComputerSeaItem } from '../utils/randomNumber';

vi.mock('../utils/randomNumber', () => ({
  generateComputerSeaItem: () => 0,
}));

vi.mock('./ScoreAndResults.module.css', () => {
  return {
    default: {
      winnerAnimation: 'winnerAnimation',
    },
  };
});

describe('Score and results', () => {
  it('should display 2 seconds on the screen after we wait one second after ', () => {
    vi.useFakeTimers();
    render(
      <OptionsProvider>
        <ScoreAndResults />
        <ChooseAndPlay />
      </OptionsProvider>
    );

    const seaItem = screen.getByText(/seaweed/i);
    expect(seaItem).toBeInTheDocument();

    fireEvent.click(seaItem);
    fireEvent.click(screen.getByText('Play'));

    act(() => {
      vi.advanceTimersByTime(1000);
    });

    screen.debug();

    expect(screen.getByTestId('timer')).toHaveTextContent('2');
  });

  it('should display 1 seconds on the screen after we wait two seconds after ', () => {
    vi.useFakeTimers();
    render(
      <OptionsProvider>
        <ScoreAndResults />
        <ChooseAndPlay />
      </OptionsProvider>
    );

    const seaItem = screen.getByText(/seaweed/i);
    expect(seaItem).toBeInTheDocument();

    fireEvent.click(seaItem);
    fireEvent.click(screen.getByText('Play'));

    act(() => {
      vi.advanceTimersByTime(2000);
    });

    screen.debug();

    expect(screen.getByTestId('timer')).toHaveTextContent('1');
  });

  it('should display 2 seconds on the screen after we wait one second after ', () => {
    vi.useFakeTimers();
    render(
      <OptionsProvider>
        <ScoreAndResults />
        <ChooseAndPlay />
      </OptionsProvider>
    );

    const seaItem = screen.getByText(/seaweed/i);
    expect(seaItem).toBeInTheDocument();

    fireEvent.click(seaItem);
    fireEvent.click(screen.getByText('Play'));

    act(() => {
      vi.advanceTimersByTime(1000);
    });

    screen.debug();

    expect(screen.getByTestId('timer')).toHaveTextContent('2');
  });

  it('should display Player winner message on the page', () => {
    vi.useFakeTimers();
    render(
      <OptionsProvider>
        <ScoreAndResults />
        <ChooseAndPlay />
      </OptionsProvider>
    );

    const seaItem = screen.getByText(/fishingnet/i);
    expect(seaItem).toBeInTheDocument();

    fireEvent.click(seaItem);
    fireEvent.click(screen.getByText('Play'));

    act(() => {
      vi.advanceTimersByTime(3000);
    });

    screen.debug();

    expect(screen.getByText(/Player Wins!/i)).toBeInTheDocument();
    expect(
      screen.getByText(/You win! The fishing net catches the Monkfish! 😆/i)
    ).toBeInTheDocument();

    expect(screen.getByText(/Player: 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Computer: 0/i)).toBeInTheDocument();

    expect(screen.getAllByTestId(/monkfish/i)[0]).toBeVisible();
    expect(screen.getAllByTestId(/fishingnet/i)[0]).toBeVisible();

    expect(screen.getAllByTestId(/monkfish/i)).toHaveLength(2);
  });

  it('should display Computer winner message on the page', () => {
    vi.useFakeTimers();
    render(
      <OptionsProvider>
        <ScoreAndResults />
        <ChooseAndPlay />
      </OptionsProvider>
    );

    const seaItem = screen.getByText(/seaweed/i);
    expect(seaItem).toBeInTheDocument();

    fireEvent.click(seaItem);
    fireEvent.click(screen.getByText('Play'));

    act(() => {
      vi.advanceTimersByTime(3000);
    });

    screen.debug();

    expect(screen.getAllByText(/Computer Wins!/i)[0]).toBeInTheDocument();
    expect(
      screen.getByText(/Computer wins! Monkfish eats the seaweed! 😣/i)
    ).toBeInTheDocument();

    expect(screen.getByText(/Player: 0/i)).toBeInTheDocument();
    expect(screen.getByText(/Computer: 1/i)).toBeInTheDocument();

    expect(screen.getAllByTestId(/monkfish/i)[0]).toBeVisible();
    expect(screen.getAllByTestId(/seaweed/i)[0]).toBeVisible();

    expect(screen.getAllByTestId(/monkfish/i)).toHaveLength(2);
  });

  it('should display the draw message on the page', () => {
    vi.useFakeTimers();
    render(
      <OptionsProvider>
        <ScoreAndResults />
        <ChooseAndPlay />
      </OptionsProvider>
    );

    const seaItem = screen.getByText(/monkfish/i);
    expect(seaItem).toBeInTheDocument();

    fireEvent.click(seaItem);
    fireEvent.click(screen.getByText('Play'));

    act(() => {
      vi.advanceTimersByTime(3000);
    });

    screen.debug();

    expect(screen.getByText(/Nobody/i)).toBeInTheDocument();
    expect(screen.getByText(/It's a draw!/i)).toBeInTheDocument();

    expect(screen.getByText(/Player: 0/i)).toBeInTheDocument();
    expect(screen.getByText(/Computer: 0/i)).toBeInTheDocument();

    expect(screen.getAllByTestId(/monkfish/i)[0]).toBeVisible();
    expect(screen.getAllByTestId(/monkfish/i)[0]).toBeVisible();

    expect(screen.getAllByTestId(/monkfish/i)).toHaveLength(3);
  });

  it('should display the player and computer sea item shake when playing game', () => {
    vi.useFakeTimers();

    render(
      <OptionsProvider>
        <ScoreAndResults />
        <ChooseAndPlay />
      </OptionsProvider>
    );

    const playerSeaItemShake = screen.queryByTestId('playerShake');
    const computerSeaItemShake = screen.queryByTestId('computerShake');

    expect(playerSeaItemShake).not.toBeInTheDocument();
    expect(computerSeaItemShake).not.toBeInTheDocument();

    const seaItem = screen.getByText(/monkfish/i);

    fireEvent.click(seaItem);
    fireEvent.click(screen.getByText('Play'));

    act(() => {
      vi.advanceTimersByTime(2000);
    });

    screen.debug();

    expect(screen.queryByTestId('playerShake')).toBeInTheDocument();
    expect(screen.queryByTestId('computerShake')).toBeInTheDocument();
  });

  it('should display the Player winner animation', () => {
    vi.useFakeTimers();

    render(
      <OptionsProvider>
        <ScoreAndResults />
        <ChooseAndPlay />
      </OptionsProvider>
    );

    const seaItem = screen.getByText(/fishingnet/i);

    fireEvent.click(seaItem);
    fireEvent.click(screen.getByText('Play'));

    act(() => {
      vi.advanceTimersByTime(3000);
    });

    expect(screen.getByTestId('playerResult')).toHaveClass('winnerAnimation');

    screen.debug();
  });

  it('should display the Computer winner animation', () => {
    vi.useFakeTimers();

    render(
      <OptionsProvider>
        <ScoreAndResults />
        <ChooseAndPlay />
      </OptionsProvider>
    );

    const seaItem = screen.getByText(/seaweed/i);

    fireEvent.click(seaItem);
    fireEvent.click(screen.getByText('Play'));

    act(() => {
      vi.advanceTimersByTime(3000);
    });

    expect(screen.getByTestId('computerResult')).toHaveClass('winnerAnimation');

    screen.debug();
  });
});
