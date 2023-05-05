let second = document.querySelector(".secondHand");
let minute = document.querySelector(".minuteHand");
let hour = document.querySelector(".hourHand");

function clock() {
  let time = new Date();
  let secondRtio = time.getSeconds() / 60,
    minuteRatio = (secondRtio + time.getMinutes()) / 60,
    hourRatio = (minuteRatio + time.getHours()) / 12;

  rotation(second, secondRtio);
  rotation(minute, minuteRatio);
  rotation(hour, hourRatio);
}
function rotation(hand, rotationRatio) {
  hand.style.setProperty("--rotate", rotationRatio * 360);
}
clock();
setInterval(clock, 1000);
