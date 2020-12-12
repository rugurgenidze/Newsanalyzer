
export class SearchInput {
  constructor(form, searchWord, searchButton) {
      this.form = form;
      this.searchInput = searchWord;
      this.searchButton = searchButton;
      this.alertElement = form.querySelector('.alert-message');

      this.setEventListeners = this.setEventListeners.bind(this);
  }


  checkInputValidity() {
      const alertElement = this.form.querySelector('.alert-message')
      this.searchInput.setCustomValidity("");

      if (this.searchInput.validity.valueMissing) {
        alertElement.textContent = "Это обязательное поле";
        return false;
      }
      if (this.searchInput.validity.tooShort || searchInput.validity.tooLong) {
        alertElement.textContent = "Должно быть от 2 до 30 символов";
        return false;
      }

      else {
        alertElement.textContent = ''
        return searchInput.checkValidity()
      }
  }

  setSearchButtonState() {
      if (this.form.checkValidity()) {
          this.searchButton.removeAttribute('disabled');
      } else {
          this.searchButton.setAttribute('disabled', true);
      }
  }

  setEventListeners() {
     this.form.addEventListener('input', () => this.checkInputValidity());
     this.form.addEventListener('input', () => this.setSearchButtonState());
  }
}


