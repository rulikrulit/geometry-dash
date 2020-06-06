(() => {
  let startButton = document.getElementById('start-button');
  let inGame = document.getElementById('in-game');
  let beforeGame = document.getElementById('before-game');
  let music = document.getElementById('music');

  startButton.addEventListener('click', () => {
    inGame.style.display = 'block';
    beforeGame.style.display = 'none';
    music.play();
  });
})();
