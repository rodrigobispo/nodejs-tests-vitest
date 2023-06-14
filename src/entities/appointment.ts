export class Appointment {
  constructor(
    private readonly _customer: string,
    private readonly _startsAt: Date,
    private readonly _endsAt: Date,
  ) {}

  public get customer() : string {
    return this._customer;
  }

  public get startsAt(): Date {
    return this._startsAt;
  }
  
  public get endsAt(): Date {
    return this._endsAt;
  }

}