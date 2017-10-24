var canvas, ctx
var playerTile = document.createElement('img')
var bulletImg = document.createElement('img')

var player = new Player()
var bulletManager = new BulletManager

var assets = [
  {variable: playerTile, src: "placeHolderTile1.png"},
  {variable: bulletImg, src: "bulletImg.png"},
  {tileType: "TEST_FLOOR", src: "Bane.png"},
  {tileType: "TEST_WALL", src: "placeHolderTile1.png"},
  {tileType: "TEST_ENEMY_SPAWN", src: "placeHolderTile3.png"},
  {tileType: "TEST_BUSH", src: "bush.png"}
]

window.onload = function () {
  canvas = document.getElementById('gameCanvas')
  ctx = canvas.getContext('2d')

  ctx.webkitImageSmoothingEnabled = false
  ctx.mozImageSmoothingEnabled = false
  ctx.imageSmoothingEnabled = false


  colorRect(0,0, canvas.width,canvas.height, 'black')
  colorText("Loading...", canvas.width/2,canvas.height/2, 'white')

  AssetLoader.loadImages(assets)



}

function loadLevel(level) {
  mapHandler.setMap(levelOne)
  player.init(playerTile)

}
function startGame() {
  var fps = 30
  loadLevel(levelOne)
  setInterval(update, 1000 / fps)


  Input.initInput()
  bulletManager.init(bulletImg)
}

function update() {
  draw()
  camera.instantFollow(player)

  bulletManager.updateBullets()

  player.move()
}

function draw() {
  colorRect(0,0, canvas.width,canvas.height, 'black')

  ctx.save()
  ctx.translate(-camera.camPanX,-camera.camPanY)
  mapHandler.draw()
  player.draw()
  /*
  colorCircle(player.x + PLAYER_SIZE / 2, player.y - 20, 5, "red")
  colorCircle(player.x+PLAYER_SIZE + 20, player.y + PLAYER_SIZE / 2, 5, "red")
  colorCircle(player.x + PLAYER_SIZE / 2, player.y+PLAYER_SIZE + 20, 5, "red")
  colorCircle(player.x - 20, player.y + PLAYER_SIZE / 2, 5, "red") */
  bulletManager.drawBullets()

  ctx.restore()

  colorText(Input.mouseX,Input.mouseY, Math.floor(Input.mouseX)+":"+Math.floor(Input.mouseY), "yellow")

}
