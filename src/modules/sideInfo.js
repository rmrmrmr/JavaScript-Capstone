const renderSide = (title, score, genre, movieImg) => {
  const sideTitle = document.getElementById('sideTitle');
  sideTitle.innerHTML = title;

  const sideScores = document.getElementById('sideScore');
  sideScores.innerHTML = `${Math.trunc(score * 10)}/${10}`;

  const sideGenre = document.getElementById('sideGenre');
  sideGenre.innerHTML = genre;

  document.body.style.backgroundImage = `url(${movieImg})`;
}

export default renderSide;