window.onload = () => {
  const audio = document.getElementById("audio-file");
  const play = document.getElementById("play-button");
  const pause = document.getElementById("pause-button");

  function displayControls() {
    play.style.display = "block";
  }

  if (audio.paused) {
    displayControls();
  } else {
    audio.addEventListener("canplay", () => {
      displayControls();
    });
  }

  play.addEventListener("click", () => {
    audio.play();
    play.style.display = "none";
    pause.style.display = "block";
  });

  pause.addEventListener("click", () => {
    audio.pause();
    pause.style.display = "none";
    play.style.display = "block";
  });
};