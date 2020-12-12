export const ERROR_MESSAGE = 'Нужно ввести ключевое слово';

export const CARD_NUMBER_TO_SHOW = 3;

export const NOW_DATE = new Date();
export const DAY_AGO_NUMBER = 6;
export const DATE_AGO = new Date(NOW_DATE.getFullYear(), NOW_DATE.getMonth(), NOW_DATE.getDate() - DAY_AGO_NUMBER, NOW_DATE.getHours(), NOW_DATE.getMinutes(), NOW_DATE.getSeconds());

export const FROM_DATE = DATE_AGO.toISOString();
export const TO_DATE = NOW_DATE.toISOString();

export const URL_NEWS_API = 'https://nomoreparties.co/news/v2/everything?';


export const KEY_NEWS_API = 'd5278fa032cd41cca7eeceb19e19940c';
export const PAGE_SIZE = 100;

export const URL_GITHUB = 'https://api.github.com/repos/rugurgenidze/Newsanalyzer/commits';
export const COMMIT_NUMBER_TO_SHOW = 20;
