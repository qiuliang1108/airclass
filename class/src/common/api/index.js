import path from 'path';

import axios from 'axios';

const config = {
  ext: '/api'
};

class Api {

  constructor(opts) {
    this.config = Object.assign(config, opts);
    this.ext = this.config.ext;
  }

  getApi(api = '') {
    //dev
    if ( process.env.NODE_ENV === 'development' ) {
      return path.join(this.ext, api);
    } else if ( process.env.NODE_ENV === 'production' ) {
      return api;
    }
  }

  getClass() {
    return axios.get(this.getApi('/airclass/index/category'));
  }

  getSecondClass(data) {
    return axios.get(this.getApi('/airclass/index/list_tree'), {
      params: {
        p: data.page,
        id: data.id,
        type: data.type
      }
    });
  }

  getArticleList(data) {
    return axios.get(this.getApi('/airclass/index/article_list'), {
      params: {
        p: data.page,
        cid: data.cid
      }
    });
  }
}

const api = new Api();

export default api;
