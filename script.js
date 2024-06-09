//get right distance from window border on element with class name = "hint"
function getDistance(elem) {
  let offset = elem.getBoundingClientRect()
  return offset.right - window.innerWidth
}

some text