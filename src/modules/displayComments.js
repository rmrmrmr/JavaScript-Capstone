const displayComments = (comments) => {
  const commentsContainer = document.querySelector('.show-comments-wrap');

  commentsContainer.innerHTML = '';

  comments.forEach((ele) => {
    const showComments = document.createElement('div');
    showComments.classList.add('show-comments');
    commentsContainer.appendChild(showComments);

    const nameCommentWrap = document.createElement('div');
    nameCommentWrap.classList.add('name-comment-wrap');
    showComments.appendChild(nameCommentWrap);

    const iconLikeComments = document.createElement('img');
    iconLikeComments.classList.add('icon-like');
    iconLikeComments.setAttribute('src', './img/icon-msn.png');
    iconLikeComments.setAttribute('alt', 'icon like');
    iconLikeComments.setAttribute('width', '20');
    iconLikeComments.setAttribute('height', '20');
    nameCommentWrap.appendChild(iconLikeComments);

    const dateComment = document.createElement('p');
    dateComment.classList.add('user-comment');
    dateComment.innerText = ele.creation_date;
    nameCommentWrap.appendChild(dateComment);

    const nameComment = document.createElement('p');
    nameComment.classList.add('user-name-comment');
    nameComment.innerText = `${ele.username}:`;
    nameCommentWrap.appendChild(nameComment);

    const userComment = document.createElement('span');
    userComment.classList.add('user-comment');
    userComment.innerText = ele.comment;
    showComments.appendChild(userComment);
  });
};

export default displayComments;