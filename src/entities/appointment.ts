export class Appointment {
  constructor(
    private readonly _customer: string,
    private readonly _startsAt: Date,
    private readonly _endsAt: Date,
  ) {
    if (this.endsAt <= this.startsAt) {
      throw new Error('Invalid end date.');
    }
    
    if (this.startsAt < new Date()) {
      throw new Error('Invalid start date.');
    }
  }

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