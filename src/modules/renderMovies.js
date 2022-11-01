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
    }
    listSect.append(movieWrap);
    const movieTitle = document.createElement('p');
    movieTitle.classList.add('movieTitle');
    movieTitle.innerHTML = movieName;
    movieWrap.append(movieTitle);
    const likeBttn = document.createElement('button');
    likeBttn.classList.add('movieBttn');
    likeBttn.classList.add('likeBttn');
    likeBttn.innerHTML = 'Likes';
    movieWrap.append(likeBttn);
    const commentBttn = document.createElement('button');
    commentBttn.classList.add('movieBttn');
    commentBttn.classList.add('commentBttn');
    commentBttn.innerHTML = 'Comments';
    movieWrap.append(commentBttn);
    const reserveBttn = document.createElement('button');
    reserveBttn.classList.add('movieBttn');
    reserveBttn.classList.add('resBttn');
    reserveBttn.innerHTML = 'Reserve';
    movieWrap.append(reserveBttn);
  });
};

export default renderMovies;