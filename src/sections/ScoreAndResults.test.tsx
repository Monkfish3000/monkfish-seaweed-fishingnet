import { render, screen, fireEvent, act } from '@testing-library/react';
import { describe, vi, it } from 'vitest';
import { OptionsProvider } from '../context/optionsContext';
import ScoreAndResults from './ScoreAndResults';
import ChooseAndPlay from './ChooseAndPlay';
import { generateComputerSeaItem } from '../utils/randomNumber';

vi.mock('../utils/randomNumber', () => ({
  generateComputerSeaItem: () => 0,
}));

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

  it('should display correct winner message on the page ', () => {
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
});
