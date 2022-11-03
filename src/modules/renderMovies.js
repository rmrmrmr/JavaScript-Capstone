import renderSide from './sideInfo.js';
import showPopup, { popUp } from './showPopup.js';
import { getLikes, postLike } from './likes.js';
import { addComment, getComments } from './comments.js';
import resPopup1, { pop } from './createReservation.js';

const renderMovies = (moviesInfo) => {
  const listSect = document.getElementById('listSect');
  moviesInfo.forEach((element) => {
    const movieName = element.show.name;
    const movieImgParent = element.show.image;
    const movieWrap = document.createElement('div');
    movieWrap.classList.add('movieWrap');
    if (movieImgParent === null) {
      const movieImg = 'https://img.freepik.com/premium-vector/cinema-movie-background-popcorn-filmstrip-clapboard-tickets-movie-time-background_41737-248.jpg?w=2000';
      movieWrap.style.backgroundImage = `url(${movieImg})`;
    } else {
      const movieImg = element.show.image.medium;
      movieWrap.style.backgroundImage = `url(${movieImg})`;
      movieWrap.style.backgroundSize = 'cover';
      movieWrap.style.backgroundRepeat = 'no-repeat';
    }
    listSect.append(movieWrap);
    const movieTitle = document.createElement('p');
    movieTitle.classList.add('movieTitle');
    movieTitle.innerHTML = movieName;
    movieWrap.append(movieTitle);
    const bttnsWrap = document.createElement('div');
    bttnsWrap.classList.add('bttnsWrap');
    const commentBttn = document.createElement('button');
    commentBttn.classList.add('movieBttn');
    commentBttn.classList.add('commentBttn');
    commentBttn.innerHTML = 'Comments';
    bttnsWrap.append(commentBttn);
    const reserveBttn = document.createElement('button');
    reserveBttn.classList.add('movieBttn');
    reserveBttn.classList.add('resBttn');
    reserveBttn.innerHTML = 'Reserve';
    bttnsWrap.append(reserveBttn);
    const likeBttn = document.createElement('button');
    likeBttn.classList.add('movieBttn');
    likeBttn.classList.add('likeBttn');
    const loadLikes = async (likeBttn) => {
      const itemID = element.show.id;
      const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Ti2zNOtDb0yQaQ0kotzz/likes/';
      const res = await fetch(baseURL);
      const likesNumberArr = await res.json();
      let likesNum = 0;
      likesNumberArr.forEach((element) => {
        if (element.item_id === itemID) {
          likesNum = element.likes;
        }
      });
      const numberOfLikes = likesNum.toString();
      likeBttn.innerHTML = `Likes: ${numberOfLikes}`;
    };
    loadLikes(likeBttn);
    bttnsWrap.append(likeBttn);
    movieWrap.append(bttnsWrap);

    movieWrap.addEventListener('click', () => {
      const movieName = element.show.name;
      const movieScore = element.score;
      const movieGenre = element.show.genres;
      const movieImgParent = element.show.image;
      if (movieImgParent === null) {
        const movieImg = 'https://img.freepik.com/premium-vector/cinema-movie-background-popcorn-filmstrip-clapboard-tickets-movie-time-background_41737-248.jpg?w=2000';
        movieWrap.style.backgroundImage = `url(${movieImg})`;
        renderSide(movieName, movieScore, movieGenre, movieImg);
      } else {
        const movieImg = element.show.image.original;
        movieWrap.style.backgroundImage = `url(${movieImg})`;
        movieWrap.style.backgroundSize = 'cover';
        movieWrap.style.backgroundRepeat = 'no-repeat';
        renderSide(movieName, movieScore, movieGenre, movieImg);
      }
    });

    commentBttn.addEventListener('click', () => {
      showPopup(element);
      popUp.classList.remove('hide');
      document.querySelector('.close-popup').addEventListener('click', () => {
        popUp.classList.add('hide');
        window.location.reload();
      });
      getComments(element.show.id);
      addComment(element.show.id);
    });

    reserveBttn.addEventListener('click', () => {
      resPopup1(element);
      pop.classList.remove('hide');
      document.querySelector('.close-reservation').addEventListener('click', () => {
        pop.classList.add('hide');
        window.location.reload();
      });
    });

    likeBttn.addEventListener('click', async () => {
      const movieID = element.show.id;
      // const movieID = 'item4';
      await postLike(movieID);
      const num = await getLikes(movieID);
      likeBttn.innerHTML = `Likes:${num}`;
    });
  });
};

export default renderMovies;