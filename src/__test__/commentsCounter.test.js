/** * @jest-environment jsdom */

import commentsCounter from '../modules/commentsCounter.js';

document.body.innerHTML = `
  <div class="counter-comments-wrap">
  </div>
`;

const fakeData = [1, 2, 3, 4, 5];

describe('Test comments counter', () => {
  it('comments counter to be defined', () => {
    expect(commentsCounter(fakeData)).toBeDefined();
  });

  it('Test comments counter value', () => {
    const result = '(5)';
    expect(commentsCounter(fakeData).innerHTML).toEqual(result);
  });

  it('Element not to be empty', () => {
    const item = document.querySelector('.counter-comments-wrap');
    expect(item.innerHTML).not.toBe('');
  });

  it('Element not to be empty', () => {
    const item = document.querySelector('.counter-comments-wrap');
    const span = '<span class="counter-comments">(5)</span>';
    expect(item.innerHTML).toEqual(span);
  });
});