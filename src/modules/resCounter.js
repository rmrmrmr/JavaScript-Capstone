/* eslint-disable linebreak-style */

const reservationCounter = (reservations) => {
  const reservationCounterWrapper = document.querySelector('.counter-reservations');
  reservationCounterWrapper.innerHTML = '';
  const counter = reservations.length || 0;

  const reservationNumbers = document.createElement('span');
  reservationNumbers.classList.add('counter-reservations');
  reservationNumbers.innerHTML = `(${counter})`;
  reservationCounterWrapper.appendChild(reservationNumbers);
};

export default reservationCounter;