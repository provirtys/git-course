//get right distance from window border on element with class name = "hint"
function getDistance(elem) {
  let offset = elem.getBoundingClientRect()
  return offset.right - window.innerWidth
}

//write function to get random number from 10 to 100
function getRandomNumber() {
  return Math.floor(Math.random() * 90 + 10)
}