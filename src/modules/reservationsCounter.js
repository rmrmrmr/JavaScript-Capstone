const reservationCounter = (reservations) => {
  const reservationCounterWrapper = document.querySelector('.counter-reservations-wrap');

  reservationCounterWrapper.innerHTML = '';

  const counter = reservations.length || 0;

  const counterReservation = document.createElement('span');
  counterReservation.classList.add('counter-comments');
  counterReservation.innerHTML = `(${counter})`;
  reservationCounterWrapper.appendChild(counterReservation);

  return reservationCounter;
};
export default reservationCounter;
