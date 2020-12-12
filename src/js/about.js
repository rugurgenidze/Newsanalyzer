import "../pages/about.css";
import 'swiper/swiper-bundle.css';

import {GithubApi} from '../js/modules/GithubApi';
import {CommitCard} from '../js/components/CommitCard';
import {CommitCardList} from '../js/components/CommitCardList';
import Swiper, {Navigation, Pagination} from 'swiper';

const swiperContainer = document.querySelector('.swiper-container');
const swiperWrapper = document.querySelector('.swiper-wrapper');
Swiper.use([Navigation, Pagination]);
const githubApi = new GithubApi();
const createCommitCardCallback = (committerName, committerEmail, commitDate, commitMessage, authorAvatar) => new CommitCard(committerName, committerEmail, commitDate, commitMessage, authorAvatar).createCommitCard();

githubApi.getCommits().then(res => {
  const commitCardList = new CommitCardList(res, swiperWrapper, createCommitCardCallback);
  commitCardList.render();
  const swiper = new Swiper(swiperContainer, {
      slidesPerView: 4,
      pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
      },
      loop: true,
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      }
  });
})
  .catch((err) => {
      alert('При загрузке страницы произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте перезагрузить страницу');
      console.log(err);
  });
