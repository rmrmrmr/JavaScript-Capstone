import renderMovies from './renderMovies.js';
import renderSide from './sideInfo.js';

const getMovies = async () => {
  const baseURL = 'https://api.tvmaze.com/search/shows?q=';
  const search = 'marvel';
  const res = await fetch(baseURL + search);
  const moviesInfo = await res.json();
  const title = moviesInfo[0].show.name;
  const cuali = moviesInfo[0].score;
  const genre = moviesInfo[0].show.genres;
  const bodyImg = moviesInfo[0].show.image.original;
  renderSide(title, cuali, genre, bodyImg);
  renderMovies(moviesInfo);
};

export default getMovies;