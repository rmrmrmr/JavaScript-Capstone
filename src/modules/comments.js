import displayComments from './displayComments.js';
import commentsCounter from './commentsCounter.js';

export const getComments = async (id) => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Ti2zNOtDb0yQaQ0kotzz/comments?item_id=${id}`;
  const response = await fetch(url);
  const jsonData = await response.json();
  if (jsonData.length) {
    displayComments(jsonData);
    commentsCounter(jsonData);
  }
};

export const postComments = async (itemId, creationDate, username, comment) => {
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Ti2zNOtDb0yQaQ0kotzz/comments', {
    method: 'POST',
    body: JSON.stringify({
      item_id: itemId,
      creation_date: creationDate,
      username,
      comment,
    }),
    headers: {
      'content-type': 'application/json',
    },
  });
  getComments(itemId);
  commentsCounter(itemId);
};

export const addComment = (id) => {
  document.querySelector('.form').addEventListener('click', () => {
    const time = Date.now();
    const today = new Date(time);
    const date = today.toDateString();
    if (document.querySelector('.form-input').value && document.querySelector('.form-textarea').value) {
      postComments(id, date, document.querySelector('.form-input').value, document.querySelector('.form-textarea').value);
      document.querySelector('.form-input').value = '';
      document.querySelector('.form-textarea').value = '';
    }
  });
};