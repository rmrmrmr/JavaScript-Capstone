import './style.css';
import getMovies from './modules/getMovies.js';
import allItemsCounter from './modules/allItemsCounter.js';

document.addEventListener('DOMContentLoaded', async () => {
  await getMovies();
  allItemsCounter();
});