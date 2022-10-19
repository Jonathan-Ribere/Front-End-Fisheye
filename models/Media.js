class Media {
  constructor(data) {
    this._date = data.date;
    this._id = data.id;
    this._likes = data.likes;
    this._photographerId = data.photographerId;
    this._title = data.title;
    this._media_img = data.image;
    this._media_video = data.video;
  }

  get date() {
    return this_date;
  }
  get id() {
    return this_id;
  }
  get photographerId() {
    return this_photographerIds;
  }
  get title() {
    return this_title;
  }

  get media() {
    return this._media_img ? this._media_img : this._media_video;
  }
}
