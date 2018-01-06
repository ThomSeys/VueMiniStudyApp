import axios from "axios";

class User {
  constructor(model) {
    this._api = "https://jsonplaceholder.typicode.com/";
    this._call = this._api + "users/";

    this.userId = model ? model.id : null;
    this.id = model ? model.id : null;
    this.title = model ? model.username : "Dashboard block";
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

  fresh() {
    return new User();
  }

  _wrap(model) {
    return new User(model);
  }
}

export default new User();
