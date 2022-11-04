/* eslint-disable linebreak-style */
/* eslint-disable camelcase */

import displayReservation from './displayres.js';
import reservationCounter from './resCounter.js';

export const getReservations = async (id) => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Ti2zNOtDb0yQaQ0kotzz/reservations?item_id=${id}`;
  const response = await fetch(url);
  const jsonData = await response.json();
  if (jsonData.length) {
    displayReservation(jsonData);
    reservationCounter(jsonData);
  }
};

export const postReservations = async (item_id, username, date_start, date_end) => {
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Ti2zNOtDb0yQaQ0kotzz/reservations', {
    method: 'POST',
    body: JSON.stringify({
      item_id,
      username,
      date_start,
      date_end,
    }),
    headers: {
      'content-type': 'application/json',
    },
  });
  getReservations(item_id);
  reservationCounter(item_id);
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