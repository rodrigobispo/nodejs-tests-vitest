import { expect, test } from 'vitest';
import { getDateWithFutureYear } from './get-future-date';

test('increases date with one year', () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();

  expect(getDateWithFutureYear(`${year}-06-15`).getFullYear()).toEqual(currentDate.getFullYear() + 1);
});

