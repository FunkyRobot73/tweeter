/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {
  // --- our code goes here ---
  //alert("grrrrr!!!!")

  // const tweetData = {
  //   "user": {
  //     "name": "Newton",
  //     "avatars": "https://i.imgur.com/73hZDYK.png",
  //       "handle": "@SirIsaacc"
  //     },
  //   "content": {
  //       "text": "If I have seen further it is by standing on the shoulders of giants!!!"
  //     },
  //   "created_at": 1637198846565
  // }


  const createTweetElement = function(tweetData) {
    const $tweet = $(`<section id="tweets-container">
              <article class="tweet">
              <header class="header">
                <div class="small-icon"><img src="${tweetData.user.avatars}">
                  <p>${tweetData.user.name}</p>
                </div>
                  <div class="displayName">${tweetData.user.handle}</div>
              </header>
              <p class="middle">
              ${tweetData.content.text}
              </p>
              <footer class="footer">
                <div>${timeago.format(tweetData.created_at)}</div>

                <div>
                <i class="fas fa-mask"></i>
                <i class="fas fa-retweet"></i>
                <i class="fas fa-bolt"></i>
                </div>
              </footer>
            </article>
            </section>`);
            return $tweet
  };

  // const $tweet = createTweetElement(tweetData);

  // Test / driver code (temporary)
  //console.log($tweet); // to see what it looks like
   // to add it to the page so we can make sure it's got all the right elements, classes, etc.

// Implement renderTweets function
//


// const data = [
//   {
//     "user": {
//       "name": "Newton",
//       "avatars": "https://i.imgur.com/73hZDYK.png"
//       ,
//       "handle": "@SirIsaac"
//     },
//     "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giant"
//     },
//     "created_at": 1461116232227
//   },
//   {
//     "user": {
//       "name": "Descartes",
//       "avatars": "https://i.imgur.com/nlhLi3I.png",
//       "handle": "@rd" },
//     "content": {
//       "text": "Je pense , donc je suis"
//     },
//     "created_at": 1461113959088
//   }
// ]

// calls createTweetElement for each tweet
// takes return value and appends it to the tweets container
const renderTweets = function(tweets) {
  const tweetsContainer = $('#tweets-container').html("");
  for (let tweet of tweets) { // loops through tweets
    //tweetArray.push(createTweetElement(tweet));
    const jimmyTweet = createTweetElement(tweet);
    tweetsContainer.prepend(jimmyTweet);
  }
}

$("form").on("submit", (event) => {
  event.preventDefault()
  const text = $('form').serialize()

  $.ajax('/tweets', { method: 'POST', data: text })
    .then((data) => {
      // loadTweets function to fetch the tweets
      $('#tweet-text').val('')    })
})

renderTweets(data);

$("i").hover(function () {  // Hover over Icon!
  $(this).css("color", "yellow");
    }, function(){
      $(this).css("color", "black");
  });

// const loadTweets = () => {
//   // make get request to /tweets ("GET")
//   // then on success run renderTweets()
// }

});

