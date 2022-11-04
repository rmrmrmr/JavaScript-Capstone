import displayReservation from './displayReservation.js';
import reservationCounter from './reservationsCounter.js';

export const getReservations = async (id) => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Ti2zNOtDb0yQaQ0kotzz/reservations?item_id=${id}`;
  const response = await fetch(url);
  const jsonData = await response.json();
  if (jsonData.length) {
    displayReservation(jsonData);
    reservationCounter(jsonData);
  }
};

export const postReservations = async (itemId, username, dateStart, dateEnd) => {
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Ti2zNOtDb0yQaQ0kotzz/reservations', {
    method: 'POST',
    body: JSON.stringify({
      item_id: itemId,
      username,
      date_start: dateStart,
      date_end: dateEnd,
    }),
    headers: {
      'content-type': 'application/json',
    },
  });
  getReservations(itemId);
  reservationCounter(itemId);
};

export const addReservation = (id) => {
  document.querySelector('.form-reserv').addEventListener('click', () => {
    if (document.querySelector('.form-input-name').value && document.querySelector('.form-input-start').value && document.querySelector('.form-input-end').value) {
      postReservations(id, document.querySelector('.form-input-name').value, document.querySelector('.form-input-start').value, document.querySelector('.form-input-end').value);
      document.querySelector('.form-input-name').value = '';
      document.querySelector('.form-input-start').value = '';
      document.querySelector('.form-input-end').value = '';
    }
  });
};