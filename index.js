const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const refs = {startBtn: document.querySelector('button[data-action="start"]'),
stopBtn: document.querySelector('button[data-action="stop"]'),
 body: document.querySelector('body'),}


let timerId = null;

  const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
refs.startBtn.addEventListener('click', colorRandom);
function colorRandom() {
refs.startBtn.disabled=true;
  timerId = setInterval(() => {
  refs.body.style.background = colors[randomIntegerFromInterval(0, colors.length-1)]   
    
  }, 1000)
}
refs.stopBtn.addEventListener('click', randomColorStop);
function randomColorStop() {
  clearInterval(timerId);
  refs.startBtn.disabled = false
  
}