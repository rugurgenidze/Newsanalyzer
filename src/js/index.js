'use strict'
import '../pages/index.css';

import {NewsCard} from './components/NewsCard';
import {NewsCardList} from './components/NewsCardList';
import {NewsApi} from './modules/NewsApi';
import {SearchInput} from './components/SearchInput';
import {DataStorage} from './modules/DataStorage';

const searchResultsContainer = document.querySelector('.search-content__list');
const searchResults = document.querySelector('#search-section');
const searchResultsButton = document.querySelector('#show-else');
const searchForm = document.querySelector('#search-form');
const searchWord = searchForm.querySelector('.search__input');
const searchButton = searchForm.querySelector('#search-button');
const preloader = document.querySelector('#preloader');
const emptyBlock = document.querySelector('#not-found-message');

const newsApi = new NewsApi();
const createCardCallback = (sourceName, cardTitle, publishedAt, cardDescription, urlToImage, url) => new NewsCard(sourceName, cardTitle, publishedAt, cardDescription, urlToImage, url).createNewsCard();
const dataStorage = new DataStorage();

const searchInput = new SearchInput(searchForm, searchWord, searchButton);
const newsCardList = new NewsCardList(searchResultsContainer, createCardCallback, emptyBlock, searchResultsButton);

window.onload = function() {
  if (dataStorage.getCardsFromDataStorage()) {
  searchResults.classList.add('is-open');
  newsCardList.render(dataStorage.getCardsFromDataStorage());
  searchWord.value = localStorage.getItem('keyWord');
  }
}

searchButton.addEventListener('click', function() {
  searchInput.setSearchButtonState();
  searchInput.checkInputValidity();
})
searchInput.setEventListeners();

searchForm.addEventListener('submit', function(event) {
  event.preventDefault();
  dataStorage.clearDataStorage();
  if (searchResults.classList.contains('is-open')) {
      searchResultsContainer.textContent = '';
  }

  preloader.classList.add('is-open');
  searchButton.setAttribute('disabled', true);
  newsApi.getNews(searchWord.value).then(res => {
      searchButton.removeAttribute('disabled');
      preloader.classList.remove('is-open');
      dataStorage.createDataStorage(res.articles, searchWord.value);
      searchResults.classList.add('is-open');
      newsCardList.render(dataStorage.getCardsFromDataStorage());
      if (emptyBlock.classList.contains('is-open')) {
          searchResults.classList.remove('is-open');
      }
  })
  .catch((err) => {
      console.log(err);
      preloader.classList.remove('is-open');
  });
})


