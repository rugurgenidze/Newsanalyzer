export class GithubApi {
    constructor() {}

    getCommits() {
        return fetch(`${URL_GITHUB}`, {
          per_page: `${COMMIT_NUMBER_TO_SHOW}`
        })
        .then(res => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(`Ошибка: ${res.status}`);
        })
    }
}

import {URL_GITHUB} from '../constants/constants.js';
import {COMMIT_NUMBER_TO_SHOW} from '../constants/constants.js';
