// Add JavaScript code here

let playButton = document.getElementById("play-btn");
let video = document.getElementById("vid");

playButton.addEventListener("click", () => {
  if (video.paused || video.ended) {
    video.play();
    playButton.setAttribute("data-state", "hidden");
  } else {
    video.pause();
    playButton.setAttribute("data-state", "visible");
  }
});
