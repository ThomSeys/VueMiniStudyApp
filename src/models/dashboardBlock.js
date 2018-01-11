import axios from "axios";

class DashboardBlock {
  constructor(model) {
    this._api = "https://api.cosmicjs.com/v1/e9619d40-f4c6-11e7-95df-4fd6007b93a1/object-type/dashboard-blocks?pretty=true&hide_metafields=true&read_key=avGkZsYKgBMxj0b2AN8Tl4YqZL8dLyW3s5NUz2Lz2r3eKCvyrJ";
    //
    this.url = model ? model.slug : null;
    this.title = model ? model.title : "Menu item";
    this.number = model ? model.metadata.numbers : [];
    this.user = model ? model.metadata.user : null;
  }

  all() {
    return axios
      .get(this._api)
      .then(response => Promise.resolve(response.data.objects.map(this._wrap)))
      .catch(error => Promise.reject(error));
  }
  
  _wrap(model) {
    return new DashboardBlock(model);
  }
}

export default new DashboardBlock();
