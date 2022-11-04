export const pop = document.querySelector('.respopup');

const resPopup1 = ({ show }) => {
  const reservationBg = document.createElement('div');
  reservationBg.classList.add('reservation-bg');
  pop.appendChild(reservationBg);

  const reservationContainer = document.createElement('section');
  reservationContainer.classList.add('reservation-container');
  reservationBg.appendChild(reservationContainer);

  const reservationImg = document.createElement('img');
  reservationImg.classList.add('reservation-img');
  reservationImg.setAttribute('src', show.image);
  reservationImg.setAttribute('alt', 'image movie');
  reservationImg.setAttribute('width', '370');
  reservationImg.setAttribute('height', '570');
  reservationContainer.appendChild(reservationImg);

  if (show.image === null) {
    const imgRes = 'https://img.freepik.com/premium-vector/cinema-movie-background-popcorn-filmstrip-clapboard-tickets-movie-time-background_41737-248.jpg?w=2000';
    reservationImg.setAttribute('src', imgRes);
  } else {
    const imgRes = show.image.original;
    reservationImg.setAttribute('src', imgRes);
  }

  const reservationInfo = document.createElement('div');
  reservationInfo.classList.add('reservation-info');
  reservationContainer.appendChild(reservationInfo);

  const resTitleContainer = document.createElement('div');
  resTitleContainer.classList.add('reservation-title-wrap');
  reservationInfo.appendChild(resTitleContainer);

  const resTitle = document.createElement('h2');
  resTitle.classList.add('tittle-res');
  resTitle.innerHTML = show.name;
  if (show.name === null) {
    resTitle.innerHTML = 'Lorem ipsum';
  }
  resTitleContainer.appendChild(resTitle);

  const closeImg = document.createElement('img');
  closeImg.classList.add('close-popup', 'close-reservation');
  closeImg.setAttribute('src', './img/icon-close-white.svg');
  closeImg.setAttribute('alt', 'close icon');
  closeImg.setAttribute('width', '20');
  closeImg.setAttribute('height', '20');
  resTitleContainer.appendChild(closeImg);

  const restSummary = document.createElement('p');
  restSummary.classList.add('rest-summary');
  restSummary.innerHTML = show.summary;
  if (show.summary === null) {
    restSummary.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident explicabo voluptate aliquid, amet facilis omnis molestias unde? Laboriosam velit nisi illum voluptate dolores quaerat rem, sunt minima, deleniti non inventore.';
  }
  reservationInfo.appendChild(restSummary);

  const resMoreInfo = document.createElement('div');
  resMoreInfo.classList.add('reser-moreInfo');
  reservationInfo.appendChild(resMoreInfo);

  const premieredReser = document.createElement('p');
  premieredReser.classList.add('premiered', 'text-moreinfo');
  premieredReser.innerHTML = `Premiered: ${show.premiered}`;
  if (show.premiered === null) {
    premieredReser.innerHTML = 'Premiered: Coming soon';
  }
  resMoreInfo.appendChild(premieredReser);

  const genresReser = document.createElement('p');
  genresReser.classList.add('genres', 'text-moreinfo');
  genresReser.innerHTML = `Genres: ${show.genres}`;
  if (show.genres === null) {
    genresReser.innerHTML = 'Genres: Coming soon';
  }
  resMoreInfo.appendChild(genresReser);

  const languageReser = document.createElement('p');
  languageReser.classList.add('language', 'text-moreinfo');
  languageReser.innerHTML = `Language: ${show.language}`;
  if (show.language === null) {
    languageReser.innerHTML = 'Language: Coming soon';
  }
  resMoreInfo.appendChild(languageReser);

  const ratingReser = document.createElement('p');
  ratingReser.classList.add('rating', 'text-moreinfo');
  ratingReser.innerHTML = `Rating: ${show.rating.average}`;
  if (show.rating.average === null) {
    ratingReser.innerHTML = 'Rating: Coming soon';
  }
  resMoreInfo.appendChild(ratingReser);

  const displayReservation = document.createElement('div');
  displayReservation.classList.add('display-reservation');
  reservationInfo.appendChild(displayReservation);

  const titleReserWrap = document.createElement('div');
  titleReserWrap.classList.add('title-reser-wrap');
  displayReservation.appendChild(titleReserWrap);

  const titleReservation = document.createElement('h3');
  titleReservation.classList.add('title-reservetion');
  titleReservation.innerHTML = 'Reservations';
  titleReserWrap.appendChild(titleReservation);

  const counterReservationWrap = document.createElement('div');
  counterReservationWrap.classList.add('counter-reservations-wrap');
  titleReserWrap.appendChild(counterReservationWrap);

  const showReservsWrap = document.createElement('div');
  showReservsWrap.classList.add('show-reservation-wrap');
  displayReservation.appendChild(showReservsWrap);

  const addReserWrap = document.createElement('div');
  addReserWrap.classList.add('Add-reserv-wrap');
  reservationInfo.appendChild(addReserWrap);

  const addReserv = document.createElement('div');
  addReserv.classList.add('Add-reserv');
  addReserWrap.appendChild(addReserv);

  const addReservTitle = document.createElement('h3');
  addReservTitle.classList.add('add-reserv-title');
  addReservTitle.innerHTML = 'Add a comment';
  addReserv.appendChild(addReservTitle);

  const formReserv = document.createElement('form');
  formReserv.classList.add('form-reserv');
  formReserv.setAttribute('action', '#');
  formReserv.setAttribute('method', 'get');
  formReserv.setAttribute('height', '20');
  addReserv.appendChild(formReserv);

  const inputName = document.createElement('input');
  inputName.classList.add('form-input-name');
  inputName.setAttribute('type', 'text');
  inputName.setAttribute('name', 'user');
  inputName.setAttribute('placeholder', 'Your name');
  inputName.setAttribute('aria-label', 'user');
  inputName.setAttribute('minlength', '2');
  inputName.setAttribute('maxlength', '20');
  inputName.setAttribute('required', 'required');
  formReserv.appendChild(inputName);

  const inputDateStart = document.createElement('input');
  inputDateStart.classList.add('form-input-start');
  inputDateStart.setAttribute('type', 'date');
  inputDateStart.setAttribute('name', 'startDate');
  inputDateStart.setAttribute('placeholder', 'Start date');
  inputDateStart.setAttribute('aria-label', 'start date');
  inputDateStart.setAttribute('required', 'required');
  formReserv.appendChild(inputDateStart);

  const inputDateEnd = document.createElement('input');
  inputDateEnd.classList.add('form-input-end');
  inputDateEnd.setAttribute('type', 'date');
  inputDateEnd.setAttribute('name', 'endDate');
  inputDateEnd.setAttribute('placeholder', 'End date');
  inputDateEnd.setAttribute('aria-label', 'end name');
  inputDateEnd.setAttribute('required', 'required');
  formReserv.appendChild(inputDateEnd);

  const reserveBtn = document.createElement('button');
  reserveBtn.classList.add('reserve-btn');
  reserveBtn.setAttribute('type', 'submit');
  reserveBtn.innerText = 'Reserve';
  formReserv.appendChild(reserveBtn);
};

export default resPopup1;