import "../pages/paper.css"
import {Statistics} from '../js/components/Statistics';

const contentTitle = document.querySelector('.container__title');
const valueOfNews = document.querySelector('#for-week');
const valueOfTitle = document.querySelector('#in-title');
const month = document.querySelector('#month');
const days = document.querySelectorAll('.diagram__date');
const columns = document.querySelectorAll('.diagram__line');
const values = document.querySelectorAll('.diagram__percent');

const statistics = new Statistics(contentTitle, valueOfNews, valueOfTitle, month, days, columns, values);

statistics.setTextContent();
statistics.setTitleValue();
statistics.drawColumns();
