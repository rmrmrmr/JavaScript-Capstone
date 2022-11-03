/* eslint-disable linebreak-style */
export const displayReservations = (reservations) => {
  const reservationsContainer = document.querySelector('.show-comments-wrap');

  reservationsContainer.innerHTML = '';

  reservations.forEach((ele) => {
    const showReservations = document.createElement('div');
    showReservations.classList.add('show-comments');
    reservationsContainer.appendChild(showReservations);

    const nameReservationsWrap = document.createElement('div');
    nameReservationsWrap.classList.add('name-comment-wrap');
    showReservations.appendChild(nameReservationsWrap);

    const iconLikeComments = document.createElement('img');
    iconLikeComments.classList.add('icon-like');
    iconLikeComments.setAttribute('src', './img/reserve.png');
    iconLikeComments.setAttribute('alt', 'icon like');
    iconLikeComments.setAttribute('width', '40');
    iconLikeComments.setAttribute('height', '40');
    nameReservationsWrap.appendChild(iconLikeComments);

    const dateReserStart = document.createElement('p');
    dateReserStart.classList.add('user-comment');
    dateReserStart.innerHTML = `${ele.date_start} - `;

    nameReservationsWrap.appendChild(dateReserStart);

    const dateReserEnd = document.createElement('p');
    dateReserEnd.classList.add('user-comment');
    dateReserEnd.innerHTML = `${ele.date_end}`;
    nameReservationsWrap.appendChild(dateReserEnd);

    const userComment = document.createElement('span');
    userComment.classList.add('user-comment');
    userComment.innerHTML = `by ${ele.username}`;

    nameReservationsWrap.appendChild(userComment);
  });
};
