import { describe, expect, it } from 'vitest';
import { filterRegistrationsByName } from './App.jsx';

describe('filterRegistrationsByName', () => {
  const registrations = [
    { observationId: '1', data: { name: 'Bright Minds Club' } },
    { observationId: '2', data: { name: 'Green Valley Learning' } },
    { observationId: '3', data: { name: 'Science Circle' } },
  ];

  it('returns all rows when the search is empty', () => {
    expect(filterRegistrationsByName(registrations, '   ')).toEqual(registrations);
  });

  it('matches names case-insensitively and trims the search text', () => {
    expect(filterRegistrationsByName(registrations, '  bright  ')).toEqual([
      { observationId: '1', data: { name: 'Bright Minds Club' } },
    ]);
    expect(filterRegistrationsByName(registrations, 'green')).toEqual([
      { observationId: '2', data: { name: 'Green Valley Learning' } },
    ]);
  });

  it('returns no matches when nothing fits', () => {
    expect(filterRegistrationsByName(registrations, 'zebra')).toEqual([]);
  });
});
