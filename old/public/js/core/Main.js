var canvas, ctx
var placeHolderImg = document.createElement('img')

var coreAssets = [
  {variable: placeHolderImg, src: 'placeHolderTile.png'},
  {tileType: MAP_WALL, src: 'placeHolderTile.png'},
  {tileType: MAP_FLOOR, src: 'gangsterTile88.png'}

]

window.onload = function () {
  canvas = document.getElementById('canvas')
  ctx = canvas.getContext('2d')
  ctx.webkitImageSmoothingEnabled = false
  ctx.mozImageSmoothingEnabled = false
  ctx.imageSmoothingEnabled = false

  AssetLoader.loadImages(coreAssets)
  Input.initInput()


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
  //colorText(Input.mouseX,Input.mouseY, Math.floor(Input.mouseX)+":"+Math.floor(Input.mouseY), "yellow")
  mapHandler.drawMap()
  colorText(20,20, "Jo", 'white')
}
