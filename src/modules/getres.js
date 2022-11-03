import { displayReservations } from './displayreservations.js';

export async function getReservations(id) {
  const response = await
  fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Ti2zNOtDb0yQaQ0kotzz/reservations/?item_id=${id}`);
  const api = await response.json();
  if (api.length) {
    displayReservations(api);
  }
}

export async function postReservation(item_id, username, date_start, date_end) {
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Ti2zNOtDb0yQaQ0kotzz/reservations/', {
    method: 'POST',
    body: JSON.stringify({
      item_id,
      username,
      date_start,
      date_end,
    }),
    headers: {
      'Content-type': 'application/json',
    },
  });
  getReservations(item_id);
}

export const createReservations = (id) => {
  document.querySelector('.form').addEventListener('click', () => {
    if (document.querySelector('.form-input-name').value && document.querySelector('.form-input-info').value && document.querySelector('form-input-data').value) {
      postReservation(id, document.querySelector('.form-input-name').value, document.querySelector('.form-input-info').value, document.querySelector('.form-input-data').value);
      document.querySelector('.form-input-name').value = '';
      document.querySelector('.form-input-info').value = '';
      document.querySelector('.form-input-data').value = '';
    }
  });
};