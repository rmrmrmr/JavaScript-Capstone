const commentsCounter = (comments) => {
  
  const commentsCounterWrap = document.querySelector('.counter-comments-wrap');

  commentsCounterWrap.innerHTML = ''   

  const counter = comments.length || 0;

  const counterComments = document.createElement('span');
  counterComments.classList.add('counter-comments');
  counterComments.innerHTML = `(${counter})`;
  commentsCounterWrap.appendChild(counterComments);
}

export default commentsCounter;