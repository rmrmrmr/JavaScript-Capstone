/* eslint-disable linebreak-style */
import reservationCounter from './resCounter.js';

describe('totalReservation', () => {
  document.body.innerHTML = '<div class="counter-reservations"></div>';
  test('should return the number of reservation', () => {
    const reservations = [
      {
        item_id: '1',
        username: 'user1',
        date_start: '2021-10-10',
        date_end: '2021-10-12',
      },
      {
        item_id: '1',
        username: 'user2',
        date_start: '2021-10-10',
        date_end: '2021-10-12',
      },
    ];
    const result = reservationCounter(reservations);
    expect(result).toBe(2);
  });
});