import { describe, expect, it } from "vitest";
import { CreateAppointment } from "./create-appointment";
import { Appointment } from "../entities/appointment";
import { getFutureDate } from "../utils/get-future-date";


describe('Create Appointment', () => {
  it('should be able to create an appointment', () => {
    const startsAt = getFutureDate('2022-10-10');
    const endsAt = getFutureDate('2022-10-11');

    const createAppointment = new CreateAppointment();

    expect(createAppointment.execute({
      customer: 'Rodrigo',
      startsAt,
      endsAt
    })).resolves.toBeInstanceOf(Appointment);
  })
})