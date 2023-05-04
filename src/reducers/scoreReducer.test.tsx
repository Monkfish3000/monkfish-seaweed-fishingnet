import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

const TestingComponent = () => {
  return (
    <>
      <p>playerseaitem: 1</p>
    </>
  );
};

describe('scoreReducer', () => {
  it('should update the score reducer with the correct player sea item', () => {
    render(<TestingComponent />);

    expect(screen.getByText(/playerseaitem: 1/)).toBeInTheDocument();
  });
});
