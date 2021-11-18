$(document).ready(function () {
  // --- our code goes here ---
  $("#tweet-text").keypress(function () {
    //console.log(this.value.length);
    //console.log($(this).parentsUntil(".new-tweet").find(".counter").html());
    let counterTweet = ++(this.value.length);
    //console.log(counterTweet);
    document.getElementsByClassName("counter")[0].value = counterTweet;
    const counterElement = document.getElementById("counter")


    
    
    
    
    if (counterTweet >= 140) {
      //counterElement.color = red;
      $("#counter").addClass("counter-red");
    } else {
      $("#counter").removeClass("counter-red");
    }
  });


  
});
