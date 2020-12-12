import {formatDate} from '../utils/format-date.js';

export class CommitCard {
  constructor(committerName, committerEmail, commitDate, commitMessage, authorAvatar){
    this.commitCard = document.createElement("div");
    this.commitDate = commitDate;
    this.authorAvatar = authorAvatar;
    this.committerName = committerName;
    this.committerEmail = committerEmail;
    this.commitMessage = commitMessage;
  }
  createCommitCard() {
    const markup = `
    <p class="commit-card__date"></p>
    <div class="commit-card__header">
      <img class="commit-card__userpic">
      <div class="commit-card__person">
        <h3 class="commit-card__usename"></h3>
        <p class="commit-card__email"></p>
      </div>
    </div>
    <p class="commit-card__text"></p>`;
    this.commitCard.insertAdjacentHTML('afterbegin', markup);
    this.commitCard.querySelector('.commit-card__date').textContent = formatDate(this.commitDate);
    this.commitCard.querySelector('.commit-card__userpic').setAttribute('src', `${this.authorAvatar}`);
    this.commitCard.querySelector('.commit-card__usename').textContent = this.committerName;
    this.commitCard.querySelector('.commit-card__email').textContent = this.committerEmail;
    this.commitCard.querySelector('.commit-card__text').textContent = this.commitMessage;
    this.commitCard.classList.add("swiper-slide");
    this.commitCard.classList.add("commit-card");
    return this.commitCard;
  }
}
