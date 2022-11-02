export const resPopUp = document.querySelector('respopup');
const resPopup1 = ({ show }) => {
  const resPopupBg = document.createElement('div');
  resPopupBg.classList.add('respopup');
  resPopupBg.style.backgroundImage = `url(${show.image})`;
  resPopUp.appendChild(resPopupBg);
  const resContainer = document.createElement('section');
  resContainer.classList.add('rescontainer');
  resPopupBg.appendChild(resContainer);
  const respopupImg = document.createElement('img');
  respopupImg.classList.add('respopupImg');
  respopupImg.src = show.image;
  respopupImg.setAttribute('width', '330');
  respopupImg.setAttribute('height', '495');
  resContainer.appendChild(respopupImg);
  if (show.image === null) {
    const image =
'https://img.freepik.com/premium-vector/cinema-movie-background-popcorn-filmstrip-clapboard-tickets-movie-time-background_41737-248.jpg?w=2000';
    resPopUp.setAttribute('src', image);
  } else {
    const image = show.image.original;
    resPopUp.setAttribute('src', image);
  }
  const respopupInfo = document.createElement('div');
  respopupInfo.classList.add('popup-info');
  resContainer.appendChild(respopupInfo);
  const respopupTitleContainer = document.createElement('div');
  respopupTitleContainer.classList.add('popup-title-wrap');
  respopupInfo.appendChild(respopupTitleContainer);
  const respopupTitle = document.createElement('h2');
  respopupTitle.classList.add('tittle-popup');
  respopupTitle.innerHTML = show.name;
  if (show.name === null) {
    respopupTitle.innerHTML = 'Lorem ipsum';
  }
  respopupTitleContainer.appendChild(respopupTitle);
  const resCloseImg = document.createElement('resimg');
  resCloseImg.classList.add('.close-respopup');
  resCloseImg.setAttribute('src', './imgs/close.png');
  resCloseImg.setAttribute('width', '20');
  resCloseImg.setAttribute('height', '20');
  respopupTitleContainer.appendChild(resCloseImg);
  const resOffical = document.createElement('p');
  resOffical.classList.add('res-offical');
  resOffical.innerHTML = show.officialSite;
  respopupInfo.appendChild(resOffical);
};

export default resPopup1;