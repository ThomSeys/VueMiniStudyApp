import axios from "axios";

class Menu {
  constructor(model) {
    this._api = "https://jsonplaceholder.typicode.com/";
    this._call = this._api + "users/";
    this.url = model ? "comment/" + model.id : null;
    this.title = model ? model.username : "Menu item";
  }

  all() {
    return axios
      .get(this._call)
      .then(response => Promise.resolve(response.data.map(this._wrap)))
      .catch(error => Promise.reject(error));
  }

  // update() {
  //   const data = this
  //   return axios.patch(this._call + data.id, data)
  //     .then(response => Promise.resolve(this._wrap(response.data)))
  //     .catch(error => Promise.reject(error))
  // }

  _wrap(model) {
    return new Menu(model);
  }
}

export default new Menu();
