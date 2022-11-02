export const popUp = document.querySelector('.popup');

const showPopup = ({ show }) => {
  const popupBg = document.createElement('div');
  popupBg.classList.add('popup-bg');
  popupBg.style.backgroundImage = `url(${show.image})`;
  popUp.appendChild(popupBg);

  const popupContainer = document.createElement('section');
  popupContainer.classList.add('popup-container');
  popupBg.appendChild(popupContainer);

  const popupImg = document.createElement('img');
  popupImg.classList.add('popup-img');
  popupImg.setAttribute('src', show.image);
  popupImg.setAttribute('alt', 'image movie');
  popupImg.setAttribute('width', '330');
  popupImg.setAttribute('height', '495');
  popupContainer.appendChild(popupImg);

  if (show.image === null) {
    const image = 'https://img.freepik.com/premium-vector/cinema-movie-background-popcorn-filmstrip-clapboard-tickets-movie-time-background_41737-248.jpg?w=2000';
    popupImg.setAttribute('src', image);
  } else {
    const image = show.image.original;
    popupImg.setAttribute('src', image);
  }

  const popupInfo = document.createElement('div');
  popupInfo.classList.add('popup-info');
  popupContainer.appendChild(popupInfo);

  const popupTitleContainer = document.createElement('div');
  popupTitleContainer.classList.add('popup-title-wrap');
  popupInfo.appendChild(popupTitleContainer);

  const popupTitle = document.createElement('h2');
  popupTitle.classList.add('tittle-popup');
  popupTitle.innerHTML = show.name;
  if (show.name === null) {
    popupTitle.innerHTML = 'Lorem ipsum';
  }
  popupTitleContainer.appendChild(popupTitle);

  const closeImg = document.createElement('img');
  closeImg.classList.add('close-popup');
  closeImg.setAttribute('src', './img/icon-close-white.svg');
  closeImg.setAttribute('alt', 'close icon');
  closeImg.setAttribute('width', '20');
  closeImg.setAttribute('height', '20');
  popupTitleContainer.appendChild(closeImg);

  const popupSummary = document.createElement('p');
  popupSummary.classList.add('popup-summary');
  popupSummary.innerHTML = show.summary;
  if (show.summary === null) {
    popupSummary.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident explicabo voluptate aliquid, amet facilis omnis molestias unde? Laboriosam velit nisi illum voluptate dolores quaerat rem, sunt minima, deleniti non inventore.';
  }
  popupInfo.appendChild(popupSummary);

  const popupMoreInfo = document.createElement('div');
  popupMoreInfo.classList.add('popup-moreInfo');
  popupInfo.appendChild(popupMoreInfo);

  const premiered = document.createElement('p');
  premiered.classList.add('premiered', 'text-moreinfo');
  premiered.innerHTML = `Premiered: ${show.premiered}`;
  if (show.premiered === null) {
    premiered.innerHTML = 'Premiered: Coming soon';
  }
  popupMoreInfo.appendChild(premiered);

  const genres = document.createElement('p');
  genres.classList.add('genres', 'text-moreinfo');
  genres.innerHTML = `Genres: ${show.genres}`;
  if (show.genres === null) {
    genres.innerHTML = 'Genres: Coming soon';
  }
  popupMoreInfo.appendChild(genres);

  const language = document.createElement('p');
  language.classList.add('language', 'text-moreinfo');
  language.innerHTML = `Language: ${show.language}`;
  if (show.language === null) {
    language.innerHTML = 'Language: Coming soon';
  }
  popupMoreInfo.appendChild(language);

  const rating = document.createElement('p');
  rating.classList.add('rating', 'text-moreinfo');
  rating.innerHTML = `Rating: ${show.rating.average}`;
  if (show.rating.average === null) {
    rating.innerHTML = 'Rating: Coming soon';
  }
  popupMoreInfo.appendChild(rating);
};

export default showPopup;