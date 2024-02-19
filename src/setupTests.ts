import matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';

if (matchers) {
  expect.extend(matchers);
}
