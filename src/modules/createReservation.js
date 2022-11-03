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
  reservationImg.setAttribute('width', '330');
  reservationImg.setAttribute('height', '495');
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

  const displayComments = document.createElement('div');
  displayComments.classList.add('display-comments');
  reservationInfo.appendChild(displayComments);

  const titleCommentsWrap = document.createElement('div');
  titleCommentsWrap.classList.add('title-comments-wrap');
  displayComments.appendChild(titleCommentsWrap);

  const titleComments = document.createElement('h3');
  titleComments.classList.add('title-comments');
  titleComments.innerHTML = 'Reservations';
  titleCommentsWrap.appendChild(titleComments);

  const counterComments = document.createElement('span');
  counterComments.classList.add('counter-comments');
  counterComments.innerHTML = '(50)';
  titleCommentsWrap.appendChild(counterComments);

  const showCommentsWrap = document.createElement('div');
  showCommentsWrap.classList.add('show-comments-wrap');
  displayComments.appendChild(showCommentsWrap);

  const showComments = document.createElement('div');
  showComments.classList.add('show-comments');
  showCommentsWrap.appendChild(showComments);

  const nameCommentWrap = document.createElement('div');
  nameCommentWrap.classList.add('name-comment-wrap');
  showComments.appendChild(nameCommentWrap);

  const iconLikeComments = document.createElement('img');
  iconLikeComments.classList.add('icon-like');
  iconLikeComments.setAttribute('src', './img/reserve.png');
  iconLikeComments.setAttribute('alt', 'icon like');
  iconLikeComments.setAttribute('width', '40');
  iconLikeComments.setAttribute('height', '40');
  nameCommentWrap.appendChild(iconLikeComments);

  const dateReserStart = document.createElement('p');
  dateReserStart.classList.add('user-comment');
  dateReserStart.innerHTML = '12/12/2022 - ';
  nameCommentWrap.appendChild(dateReserStart);

  const dateReserEnd = document.createElement('p');
  dateReserEnd.classList.add('user-comment');
  dateReserEnd.innerHTML = '18/12/2022';
  nameCommentWrap.appendChild(dateReserEnd);

  const userComment = document.createElement('span');
  userComment.classList.add('user-comment');
  userComment.innerHTML = 'By Alex';
  showComments.appendChild(userComment);

  const addReserWrap = document.createElement('div');
  addReserWrap.classList.add('Add-comment-wrap');
  reservationInfo.appendChild(addReserWrap);

  const addReserv = document.createElement('div');
  addReserv.classList.add('Add-comment');
  addReserWrap.appendChild(addReserv);

  const addReservTitle = document.createElement('h3');
  addReservTitle.classList.add('add-comment-title');
  addReservTitle.innerHTML = 'Add a comment';
  addReserv.appendChild(addReservTitle);

  const form = document.createElement('form');
  form.classList.add('form');
  form.setAttribute('action', '#');
  form.setAttribute('method', 'get');
  form.setAttribute('height', '20');
  addReserv.appendChild(form);

  const inputName = document.createElement('input');
  inputName.classList.add('form-input');
  inputName.setAttribute('type', 'text');
  inputName.setAttribute('name', 'user');
  inputName.setAttribute('placeholder', 'Your name');
  inputName.setAttribute('aria-label', 'user');
  inputName.setAttribute('minlength', '2');
  inputName.setAttribute('maxlength', '20');
  inputName.setAttribute('required', 'required');
  form.appendChild(inputName);

  const inputDateStart = document.createElement('input');
  inputDateStart.classList.add('form-input');
  inputDateStart.setAttribute('type', 'date');
  inputDateStart.setAttribute('name', 'startDate');
  inputDateStart.setAttribute('value', '2022-11-03');
  inputDateStart.setAttribute('placeholder', 'Start date');
  inputDateStart.setAttribute('aria-label', 'start date');
  inputDateStart.setAttribute('required', 'required');
  form.appendChild(inputDateStart);

  const inputDateEnd = document.createElement('input');
  inputDateEnd.classList.add('form-input');
  inputDateEnd.setAttribute('type', 'date');
  inputDateEnd.setAttribute('name', 'endDate');
  inputDateEnd.setAttribute('value', '2022-11-11');
  inputDateEnd.setAttribute('placeholder', 'End date');
  inputDateEnd.setAttribute('aria-label', 'end name');
  inputDateEnd.setAttribute('required', 'required');
  form.appendChild(inputDateEnd);

  const reserveBtn = document.createElement('button');
  reserveBtn.classList.add('comment-btn');
  reserveBtn.setAttribute('type', 'submit');
  reserveBtn.innerText = 'Reserve';
  form.appendChild(reserveBtn);
};

export default resPopup1;