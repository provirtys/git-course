//get right distance from window border on element with class name = "hint"
function getDistance(elem) {
  let offset = elem.getBoundingClientRect()
  return offset.right - window.innerWidth
}

//write function to get random number from 10 to 100
function getRandomNumber() {
  return Math.floor(Math.random() * 90 + 10)
}

//write function that will get random color
function getRandomColor() {
  let letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}