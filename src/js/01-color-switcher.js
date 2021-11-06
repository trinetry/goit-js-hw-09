const refs = {
    startBtn: document.querySelector('button[data-action="start"'),
    stopBtn: document.querySelector('button[data-action="stop"'),
  },


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}