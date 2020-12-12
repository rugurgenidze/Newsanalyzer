import {formatDate} from '../utils/format-date';

export class NewsCard {
  constructor (sourceName, cardTitle, publishedAt, cardDescription, urlToImage, url){
    this.card = document.createElement("li");
    this.url = url;
    this.urlToImage = urlToImage;
    this.publishedAt = publishedAt;
    this.cardTitle = cardTitle;
    this.cardDescription = cardDescription;
    this.sourceName = sourceName;


  }
  createNewsCard(){
    const markup = `
    <a class="card__link">
      <img  class="card__picture">
      <div class="card__holder">
        <p class="card__date"></p>
        <div class="card__paragraph">
         <h3 class="card__title"></h3>
         <p class="card__text"></p>
        </div>
        <p class="card__origin"></p>
      </div>
    </a>
    `;
    this.card.insertAdjacentHTML('afterbegin', markup);
    this.card.querySelector('.card__link').setAttribute('href', `${this.url}`);
    this.card.querySelector('.card__link').setAttribute('target', '_blank');
    this.card.querySelector('.card__picture').setAttribute('src', `${this.urlToImage}`);
    this.card.querySelector('.card__date').textContent=formatDate(this.publishedAt);
    this.card.querySelector('.card__title').textContent = this.cardTitle;
    this.card.querySelector('.card__text').textContent = this.cardDescription;
    this.card.querySelector('.card__origin').textContent = this.sourceName;
    this.card.classList.add("card");
    return this.card;

  }
}
