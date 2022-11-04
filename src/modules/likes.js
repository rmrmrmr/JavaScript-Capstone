/* eslint-disable linebreak-style */
export const getLikes = async (itemID) => {
  const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Ti2zNOtDb0yQaQ0kotzz/likes/';
  const res = await fetch(baseURL);
  const likesNumberArr = await res.json();
  let likesNum = 0;
  likesNumberArr.forEach((element) => {
    if (element.item_id === itemID) {
      likesNum = element.likes;
    }
  });
  return likesNum.toString();
};

export const postLike = async (itemID) => {
  const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Ti2zNOtDb0yQaQ0kotzz/likes/';
  await fetch(baseURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: itemID,
    }),
  });
};