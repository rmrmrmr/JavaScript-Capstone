const allItemsCounter = () => {
  const title = document.getElementById('pageTitle');
  const moviesNodeList = document.querySelectorAll('.movieWrap');
  title.innerHTML = `Marvel (${moviesNodeList.length.toString()} movies)`;
};

export default allItemsCounter;