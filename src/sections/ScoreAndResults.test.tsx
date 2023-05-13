import { render, screen } from '@testing-library/react';
import { describe, vi, it } from 'vitest';
import { OptionsProvider } from '../context/optionsContext';
import ScoreAndResults from './ScoreAndResults';
import ChooseAndPlay from './ChooseAndPlay';

describe('Score and results', () => {
  it('should display 2 seconds on the screen after we wait one second after ', () => {
    render(
      <OptionsProvider>
        <ScoreAndResults />
        <ChooseAndPlay />
      </OptionsProvider>
    );

    const seaItem = screen.getByText(/seaweed/i);
    expect(seaItem).toBeInTheDocument();
  });
});
