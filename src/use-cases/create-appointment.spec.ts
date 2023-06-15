import { describe, expect, it } from "vitest";
import { CreateAppointment } from "./create-appointment";
import { Appointment } from "../entities/appointment";
import { getDateWithFutureYear } from "../utils/get-future-date";
import { InMemoryAppointmentsRepository } from "../repositories/in-memory/in-memory-appointments-repository";


describe('Create Appointment', () => {
  it('should be able to create an appointment', () => {
    const startsAt = getDateWithFutureYear('2022-10-10');
    const endsAt = getDateWithFutureYear('2022-10-11');

    const createAppointment = new CreateAppointment(
      new InMemoryAppointmentsRepository()
    );

    expect(createAppointment.execute({
      customer: 'Rodrigo',
      startsAt,
      endsAt
    })).resolves.toBeInstanceOf(Appointment);
  })

  it('should not be able to create an appointment with overlapping dates', async () => {
    const startsAt = getDateWithFutureYear('2022-10-10');
    const endsAt = getDateWithFutureYear('2022-10-15');

    const createAppointment = new CreateAppointment(
      new InMemoryAppointmentsRepository()
    );

    await createAppointment.execute({
      customer: 'Rodrigo',
      startsAt,
      endsAt
    });

    expect(createAppointment.execute({
      customer: 'Rodrigo',
      startsAt: getDateWithFutureYear('2022-02-02'),
      endsAt: getDateWithFutureYear('2022-10-10')
    })).rejects.toBeInstanceOf(Error);

    expect(createAppointment.execute({
      customer: 'Rodrigo',
      startsAt: getDateWithFutureYear('2022-10-14'),
      endsAt: getDateWithFutureYear('2022-10-16')
    })).rejects.toBeInstanceOf(Error);

    expect(createAppointment.execute({
      customer: 'Rodrigo',
      startsAt: getDateWithFutureYear('2022-10-11'),
      endsAt: getDateWithFutureYear('2022-10-13')
    })).rejects.toBeInstanceOf(Error);

    expect(createAppointment.execute({
      customer: 'Rodrigo',
      startsAt: getDateWithFutureYear('2022-10-15'),
      endsAt: getDateWithFutureYear('2022-12-30')
    })).rejects.toBeInstanceOf(Error);
  })

})