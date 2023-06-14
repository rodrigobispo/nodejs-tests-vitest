import { expect, test } from 'vitest'
import { Appointment } from './appointment'
import { getFutureDate } from '../utils/get-future-date';

test('create an appointment', () => {
  const startsAt = getFutureDate('2022-10-10');
  const endsAt = getFutureDate('2022-10-11');

  const appointment = new Appointment(
    'Rodrigo',
    startsAt,
    endsAt
  );

  expect(appointment).toBeInstanceOf(Appointment);
  expect(appointment.customer).toEqual('Rodrigo');
})


test('cannot create an appointment with end date before start date', () => {
  const startsAt = getFutureDate('2022-10-10');
  const endsAt = getFutureDate('2022-10-09');

  expect(() => {
    return new Appointment('Rodrigo', startsAt, endsAt);
  }).toThrow();
})


test('cannot create an appointment with start date before now', () => {
  const startsAt = new Date();
  const endsAt = new Date();

  startsAt.setDate(startsAt.getDate() - 1);

  expect(() => {
    return new Appointment('Rodrigo', startsAt, endsAt);
  }).toThrow();
})

