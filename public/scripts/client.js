/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

/*  Hover Over Little Icons
*/


$(document).ready(function () {
  // --- our code goes here ---
    $("i").hover(function () {
      
      $(this).css("color", "yellow");
    }, function(){
    $(this).css("color", "black");
  });

});

