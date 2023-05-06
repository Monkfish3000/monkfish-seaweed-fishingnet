import { describe, vi, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import SeaItem from './SeaItem';
import { GiPlantRoots } from 'react-icons/gi';

describe('Sea Item', () => {
  it('should render the sea item component with the right props', () => {
    render(
      <SeaItem
        name="seaweed"
        icon={<GiPlantRoots data-testid="seaweed" />}
        seaItemChoiceIndex={2}
      />
    );

    const seaitem = screen.getByText(/seaweed/i);
    const icon = screen.getByTestId('seaweed');

    expect(seaitem).toBeInTheDocument();
    expect(icon).toBeVisible();
  });
});
