const PLAYER_SCALE = 1
const PLAYER_SHOOT_DELAY = 22
const PLAYER_SIZE = 64
const PLAYER_MOVE_DELAY = 22

function Player() {
  this.x = 192
  this.y = 192
  this.nextX = 0
  this.nextY = 0
  this.velX = 0
  this.velY = 0
  this.shootTimer = 0
  this.moveTimer = 0
  // 0 Top 1 Right 2 Bottom 3 left
  this.dir = 0

  this.img

  this.goingUp = false
  this.goingRight = false
  this.goingDown = false
  this.goingLeft = false

  this.goingUpKey
  this.goingRightKey
  this.goingDownKey
  this.goingLeftKey
  this.shootKey

  this.init = function (img) {
    this.img = img
    for (var row = 0; row < MAP_ROWS; row++) {
      for (var col = 0; col < MAP_COLS; col++) {
        var arrayI = mapHandler.rowColToArrayIndex(row, col)
        if (mapGrid[arrayI] == MAP_PLAYER_SPAWN) {
          mapGrid[arrayI] = MAP_FLOOR
          this.x = col * MAP_W + MAP_W / 2
          this.y = row * MAP_H + MAP_H / 2
          this.dir = 0

        }
      }
    }
  }

  this.setupInput = function (upKey, downKey, rightKey, leftKey, shootKey) {
    this.goingUpKey = upKey
    this.goingRightKey = rightKey
    this.goingDownKey = downKey
    this.goingLeftKey = leftKey
    this.shootKey = shootKey
  }

  this.move = function () {

    if (this.goingUp) {
      if (this.moveTimer == 0) {
        var nextMove = mapHandler.getTileAtPixelCoord(this.x + PLAYER_SIZE / 2, this.y - 20)
        if (!mapHandler.isTileSoild(mapGrid[nextMove])) {
          this.y -= PLAYER_SIZE
          this.moveTimer = PLAYER_MOVE_DELAY

        }
      }
      this.dir = 0
    }
    if (this.goingRight) {
      if (this.moveTimer == 0) {
        var nextMove = mapHandler.getTileAtPixelCoord(this.x+PLAYER_SIZE + 20, this.y + PLAYER_SIZE / 2)
        if (!mapHandler.isTileSoild(mapGrid[nextMove])) {
          this.x += PLAYER_SIZE
          this.moveTimer = PLAYER_MOVE_DELAY

        }
      }

      this.dir = 1
    }
    if (this.goingDown) {
      if (this.moveTimer == 0) {
        var nextMove = mapHandler.getTileAtPixelCoord(this.x + PLAYER_SIZE / 2, this.y+PLAYER_SIZE + 20)
        if (!mapHandler.isTileSoild(mapGrid[nextMove])) {
          this.y += PLAYER_SIZE
          this.moveTimer = PLAYER_MOVE_DELAY

        }
      }
      this.dir = 2
    }
    if (this.goingLeft) {
      if (this.moveTimer == 0) {
        var nextMove = mapHandler.getTileAtPixelCoord(this.x - 20, this.y + PLAYER_SIZE / 2)

        if (!mapHandler.isTileSoild(mapGrid[nextMove])) {
          this.x -= PLAYER_SIZE
          this.moveTimer = PLAYER_MOVE_DELAY
        }
      }
      this.dir = 3
    }
    if (this.moveTimer > 0) {
      this.moveTimer--
    }


    if (this.shootTimer > 0) {
      this.shootTimer--
    }
  }

    this.shoot = function () {
      if (this.shootTimer == 0) {
        switch (this.dir) {
          case 0:
            var angle = Math.radians(-90)
            bulletManager.createBullet(this.x, this.y, 33, angle)
            this.shootTimer = PLAYER_SHOOT_DELAY
            break;
          case 1:
            var angle = Math.radians(0)
            bulletManager.createBullet(this.x, this.y, 33, angle)
            this.shootTimer = PLAYER_SHOOT_DELAY
            break;
          case 2:
            var angle = Math.radians(90)
            bulletManager.createBullet(this.x, this.y, 33, angle)
            this.shootTimer = PLAYER_SHOOT_DELAY
            break;
          case 3:
            var angle = Math.radians(180)
            bulletManager.createBullet(this.x, this.y, 33, angle)
            this.shootTimer = PLAYER_SHOOT_DELAY
            break;
          default:
        }

      }
    }

    this.handleCollision = function () {
      var walkingIntoTileIndex = mapHandler.getTileAtPixelCoord(this.nextX,this.nextY)
      var walkingIntoTileType = MAP_WALL
      if (walkingIntoTileIndex != undefined) {
        walkingIntoTileType = mapGrid[walkingIntoTileIndex]
      }

      switch (walkingIntoTileType) {
        case MAP_FLOOR:
          this.x = this.nextX
          this.y = this.nextY
          break;
      }
    }

  this.draw = function () {
    //drawBitMapCenteredWithScale(this.img, this.x, this.y, PLAYER_SCALE)
    ctx.drawImage(this.img, this.x, this.y)
  }

}
