const endPoint = "/tweets";

const createTweetElement = function(tweetData) {   // Creates tweet inside container Template
  const $tweet = $(`<section id="tweets-container">
            <article class="tweet">
            <header class="header">
              <div class="small-icon"><img src="${tweetData.user.avatars}">
                ${$("<p>").text(tweetData.user.name).html()}
              </div>
                <div class="displayName">${tweetData.user.handle}</div>
            </header>
            <p class="middle">
            ${$("<p>").addClass("middle").text(tweetData.content.text).html()}
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
  return $tweet;
};

// .text prevents (Cross-Site Scripting) ******

const renderTweets = function(tweets) {
  for (let tweet of tweets) {     
    const jimmyTweet = createTweetElement(tweet);
    $('#tweets-container').prepend(jimmyTweet);
  }
};

const displayError = (message) => {
  $("form").prepend($("<p>").css({
    "color": "red", "padding": ".1em", "border": "1px solid color red"
  }).addClass("error").text(message));
};

$(document).ready(function() {
  //renderTweets(data)
  $("form").on("submit", function(event) {
    event.preventDefault();
    $(this).find("p").remove().slideDown(2000);
    console.log(event);
     
    if ($(this).find("textarea").val().length < 1) {
      console.log("Less Than 1::");
      const errorMessage = "🚨  Please Type something!  🚨";
      return displayError(errorMessage);
    }
    if ($(this).find("textarea").val().length > 140) {
      console.log("Less Than 1::");
      const errorMessage = "🚨  Maximum 140 Characters!  🚨";
      return displayError(errorMessage);
    }
    
    $.ajax({
      method:"POST",
      url: endPoint,
      type: "application/json",
      data: $(this).serialize(),
      success: function() {
        $("textarea").val("");
        //$("#tweets-container").empty()

        $.get("http://localhost:8080/tweets", (data) => {
          const newTweet = data.slice(-1).pop();
          const newTweetElement = createTweetElement(newTweet);
          $('#tweets-container').prepend(newTweetElement);
        });
      }
    });
  });

  const loadTweet = function() {
    $.ajax({
      method:"GET",
      url: endPoint,
      dataType: "json",
      success: function(data) {
        renderTweets(data);
      }
    });
  };

  loadTweet();

});