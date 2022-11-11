class Media {
  constructor(data) {
    this._date = data.date;
    this._id = data.id;
    this._likes = data.likes;
    this._photographerId = data.photographerId;
    this._title = data.title;
  }
  get date() {
    return this._date;
  }
  get id() {
    return this._id;
  }
  get photographerId() {
    return this._photographerIds;
  }
  get title() {
    return this._title;
  }
}
