let seconds = 0;
let minutes = 0;

let  updateTimer = () => {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  document.getElementById('target').textContent = `${minutes} : ${seconds.toString().padStart(2,"0")}`;;
}

let startTimer = () => {
  timerInterval = setInterval(()=>{
    (updateTimer());
}, 1000)};
