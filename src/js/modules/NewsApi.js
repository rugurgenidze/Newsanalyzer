import {URL_NEWS_API} from "../constants/constants";
import {FROM_DATE} from "../constants/constants.js";
import {TO_DATE} from "../constants/constants.js";
import {KEY_NEWS_API} from "../constants/constants.js";
import {PAGE_SIZE} from "../constants/constants.js";


export class NewsApi {
  constructor() {}

  getNews(someWord) {
      return fetch(`${URL_NEWS_API}` + `q=${someWord}` + `&from=${FROM_DATE}` + `&to=${TO_DATE}` +
          `&apiKey=${KEY_NEWS_API}` + `&pageSize=${PAGE_SIZE}`)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  }
}
