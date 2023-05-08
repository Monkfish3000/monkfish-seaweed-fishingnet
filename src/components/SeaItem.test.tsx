import { describe, vi, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import SeaItem from './SeaItem';
import { GiPlantRoots } from 'react-icons/gi';
import userEvent from '@testing-library/user-event';
import { OptionsProvider } from '../context/optionsContext';

vi.mock('./SeaItem.module.css', () => {
  return {
    default: {
      choiceBtn: 'choiceBtn',
      activeChoice: 'activeChoice',
    },
  };
});

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

  it('should render the sea item component with the right props', async () => {
    const user = userEvent.setup();

    render(
      <OptionsProvider>
        <SeaItem
          name="seaweed"
          icon={<GiPlantRoots data-testid="seaweed" />}
          seaItemChoiceIndex={2}
        />
      </OptionsProvider>
    );

    const seaitem = screen.getByText(/seaweed/i);

    await user.click(seaitem);

    expect(seaitem).toHaveClass('activeChoice');
  });
});
