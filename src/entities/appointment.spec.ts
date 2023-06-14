import { expect, test } from 'vitest'
import { Appointment } from './appointment'

test('create an appointment', () => {
  const appointment = new Appointment(
    'Rodrigo',
    new Date(),
    new Date()
  );

  expect(appointment).toBeInstanceOf(Appointment);
  expect(appointment.customer).toEqual('Rodrigo');
})

