document.body.innerHTML = '<section id="listSect">'
+ '<div class="movieWrap" style="background-image: url(&quot;https://static.tvmaze.com/uploads/images/medium_portrait/405/1013952.jpg&quot;); background-size: cover; background-repeat: no-repeat;">'
  + '<p class="movieTitle">Ms. Marvel</p>'
  + '<div class="bttnsWrap">'
    + '<button class="movieBttn commentBttn">Comments</button>'
    + '<button class="movieBttn resBttn">Reserve</button>'
    + '<button class="movieBttn likeBttn">Likes: 3</button>'
  + '</div>'
+ '</div>'
+ '<div class="movieWrap" style="background-image: url(&quot;https://static.tvmaze.com/uploads/images/medium_portrait/405/1013952.jpg&quot;); background-size: cover; background-repeat: no-repeat;">'
  + '<p class="movieTitle">Ms. Marvel</p>'
  + '<div class="bttnsWrap">'
    + '<button class="movieBttn commentBttn">Comments</button>'
    + '<button class="movieBttn resBttn">Reserve</button>'
    + '<button class="movieBttn likeBttn">Likes: 3</button>'
  + '</div>'
+ '</div>'
+ '<div class="movieWrap" style="background-image: url(&quot;https://static.tvmaze.com/uploads/images/medium_portrait/405/1013952.jpg&quot;); background-size: cover; background-repeat: no-repeat;">'
  + '<p class="movieTitle">Ms. Marvel</p>'
  + '<div class="bttnsWrap">'
    + '<button class="movieBttn commentBttn">Comments</button>'
    + '<button class="movieBttn resBttn">Reserve</button>'
    + '<button class="movieBttn likeBttn">Likes: 3</button>'
  + '</div>'
+ '</div>'
+ '<div class="movieWrap" style="background-image: url(&quot;https://static.tvmaze.com/uploads/images/medium_portrait/405/1013952.jpg&quot;); background-size: cover; background-repeat: no-repeat;">'
  + '<p class="movieTitle">Ms. Marvel</p>'
  + '<div class="bttnsWrap">'
    + '<button class="movieBttn commentBttn">Comments</button>'
    + '<button class="movieBttn resBttn">Reserve</button>'
    + '<button class="movieBttn likeBttn">Likes: 3</button>'
  + '</div>'
+ '</div>'
+ '<div class="movieWrap" style="background-image: url(&quot;https://static.tvmaze.com/uploads/images/medium_portrait/405/1013952.jpg&quot;); background-size: cover; background-repeat: no-repeat;">'
  + '<p class="movieTitle">Ms. Marvel</p>'
  + '<div class="bttnsWrap">'
    + '<button class="movieBttn commentBttn">Comments</button>'
    + '<button class="movieBttn resBttn">Reserve</button>'
    + '<button class="movieBttn likeBttn">Likes: 3</button>'
  + '</div>'
+ '</div>'
+ '<div class="movieWrap" style="background-image: url(&quot;https://static.tvmaze.com/uploads/images/medium_portrait/405/1013952.jpg&quot;); background-size: cover; background-repeat: no-repeat;">'
  + '<p class="movieTitle">Ms. Marvel</p>'
  + '<div class="bttnsWrap">'
    + '<button class="movieBttn commentBttn">Comments</button>'
    + '<button class="movieBttn resBttn">Reserve</button>'
    + '<button class="movieBttn likeBttn">Likes: 3</button>'
  + '</div>'
+ '</div>'
+ '<div class="movieWrap" style="background-image: url(&quot;https://static.tvmaze.com/uploads/images/medium_portrait/405/1013952.jpg&quot;); background-size: cover; background-repeat: no-repeat;">'
  + '<p class="movieTitle">Ms. Marvel</p>'
  + '<div class="bttnsWrap">'
    + '<button class="movieBttn commentBttn">Comments</button>'
    + '<button class="movieBttn resBttn">Reserve</button>'
    + '<button class="movieBttn likeBttn">Likes: 3</button>'
  + '</div>'
+ '</div>'
+ '<div class="movieWrap" style="background-image: url(&quot;https://static.tvmaze.com/uploads/images/medium_portrait/405/1013952.jpg&quot;); background-size: cover; background-repeat: no-repeat;">'
  + '<p class="movieTitle">Ms. Marvel</p>'
  + '<div class="bttnsWrap">'
    + '<button class="movieBttn commentBttn">Comments</button>'
    + '<button class="movieBttn resBttn">Reserve</button>'
    + '<button class="movieBttn likeBttn">Likes: 3</button>'
  + '</div>'
+ '</div>'
+ '<div class="movieWrap" style="background-image: url(&quot;https://static.tvmaze.com/uploads/images/medium_portrait/405/1013952.jpg&quot;); background-size: cover; background-repeat: no-repeat;">'
  + '<p class="movieTitle">Ms. Marvel</p>'
  + '<div class="bttnsWrap">'
    + '<button class="movieBttn commentBttn">Comments</button>'
    + '<button class="movieBttn resBttn">Reserve</button>'
    + '<button class="movieBttn likeBttn">Likes: 3</button>'
  + '</div>'
+ '</div>'
+ '<div class="movieWrap" style="background-image: url(&quot;https://static.tvmaze.com/uploads/images/medium_portrait/405/1013952.jpg&quot;); background-size: cover; background-repeat: no-repeat;">'
  + '<p class="movieTitle">Ms. Marvel</p>'
  + '<div class="bttnsWrap">'
    + '<button class="movieBttn commentBttn">Comments</button>'
    + '<button class="movieBttn resBttn">Reserve</button>'
    + '<button class="movieBttn likeBttn">Likes: 3</button>'
  + '</div>'
+ '</div>'
+ '</section>';

test('allItemsCounter', () => {
  const moviesNodeList = document.querySelectorAll('.movieWrap');
  const listLength = moviesNodeList.length.toString();
  expect(listLength).toBe('10');
});
