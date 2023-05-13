import { render, screen, fireEvent, act } from '@testing-library/react';
import { describe, vi, it } from 'vitest';
import { OptionsProvider } from '../context/optionsContext';
import ScoreAndResults from './ScoreAndResults';
import ChooseAndPlay from './ChooseAndPlay';

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

    expect(screen.getByTestId('timer')).toHaveTextContent('1');
  });
});
