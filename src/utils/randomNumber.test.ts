import { describe } from 'vitest';
import { generateComputerSeaItem } from './randomNumber';

describe('randomNumber', () => {
  it('should create a random number', () => {
    const randomNumber = generateComputerSeaItem();

    expect(randomNumber).toBeLessThanOrEqual(2);
    expect(randomNumber).toBeGreaterThanOrEqual(0);
  });
});
