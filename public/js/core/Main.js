var canvas, ctx

window.onload = function () {
  canvas = document.getElementById('canvas')
  ctx = canvas.getContext('2d')
  startGame()
}

function startGame() {
  var fps = 30
  setInterval(update, 1000 / fps)
}

function update() {
  draw()
}

function draw() {
  colorRect(0,0, canvas.width,canvas.height, 'black')
  colorText(20,20, "Jo", 'white')

}
