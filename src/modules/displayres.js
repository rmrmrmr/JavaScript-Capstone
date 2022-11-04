/* eslint-disable linebreak-style */
const displayReservation = (reservations) => {
  const reservationContainer = document.querySelector('.show-reservation-wrap');

  reservationContainer.innerHTML = '';

  reservations.forEach((ele) => {
    const showReserv = document.createElement('div');
    showReserv.classList.add('show-reserv');
    reservationContainer.appendChild(showReserv);

    const nameReservWrap = document.createElement('div');
    nameReservWrap.classList.add('name-reserv-wrap');
    showReserv.appendChild(nameReservWrap);

    const iconReserv = document.createElement('img');
    iconReserv.classList.add('icon-like');
    iconReserv.setAttribute('src', './img/reserve.png');
    iconReserv.setAttribute('alt', 'icon like');
    iconReserv.setAttribute('width', '40');
    iconReserv.setAttribute('height', '40');
    nameReservWrap.appendChild(iconReserv);

    const dateReserStart = document.createElement('p');
    dateReserStart.classList.add('user-reserv');
    dateReserStart.innerHTML = `${ele.date_start} - `;
    nameReservWrap.appendChild(dateReserStart);

    const dateReserEnd = document.createElement('p');
    dateReserEnd.classList.add('user-reserv');
    dateReserEnd.innerHTML = `${ele.date_end} - `;
    nameReservWrap.appendChild(dateReserEnd);

    const userReserv = document.createElement('span');
    userReserv.classList.add('user-name-reserv');
    userReserv.innerHTML = `by ${ele.username}`;
    showReserv.appendChild(userReserv);
  });
};

export default displayReservation;