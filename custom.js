$(document).ready(function() {
  $("#preso").bind("showoff:show", function (event) {
    $("h1").closest(".slide").addClass("main");
  });

  $("#preso").bind("showoff:show", playVideosWithDelay);
  $("#preso").bind("showoff:next", playVideosWithDelay);
  $("#preso").bind("showoff:prev", playVideosWithDelay);

  toggleFooter();
});

function playVideosWithDelay() {
  setTimeout(playVideos, 500);
}

function playVideos() {
  var videos = $(".slide[style*='display: block']").find("video");
  videos.each(function(index, video) {
    video.currentTime = 0;
    video.play();
  });
}


