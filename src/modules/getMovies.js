import renderMovies from './renderMovies';

const getMovies = async () => {
  const baseURL = 'https://api.tvmaze.com/search/shows?q=';
  const search = 'kids';
  const res = await fetch(baseURL + search);
  const moviesInfo = await res.json();

  renderMovies(moviesInfo);
};

export default getMovies;