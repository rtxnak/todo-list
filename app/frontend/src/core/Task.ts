export default class Task {
  private _id: string;
  private _description: string
  private _status: string;
  private _date: string;

  constructor(description: string, status: string, date: string, id: string = null) {
    this._description = description;
    this._status = status;
    this._date = date;
    this._id = id;
  }

  get id() {
    return this._id
  }

  get description() {
    return this._description
  }

  set description(newValue: string) {
    this._description = newValue;
  }

  get status() {
    return this._status
  }

  set status(newValue: string) {
    this._status = newValue;
  }

  get date() {
    return this._date
  }
}