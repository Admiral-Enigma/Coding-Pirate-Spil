//const PLAYER_SCALE = 1
const PLAYER_SHOOT_DELAY = 22
const PLAYER_SIZE = 60
const PLAYER_MOVE_DELAY = 22
const PLAYER_SPEED = 6
const FRICTION = 0
const MAP_PLAYER_SPAWN = 4

function Player() {
  this.x = 192
  this.y = 192

  this.velX = 0
  this.velY = 0

  this.shootTimer = 0
  //this.moveTimer = 0

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
    for (var row = 0; row < mapHandler.currentMap.map_rows; row++) {
      for (var col = 0; col < mapHandler.currentMap.map_cols; col++) {
        var arrayI = mapHandler.rowColToArrayIndex(row, col)
        if (mapHandler.currentMap.mapGrid[arrayI] == MAP_PLAYER_SPAWN) {
          mapHandler.currentMap.mapGrid[arrayI] = 2
          this.x = col * mapHandler.currentMap.map_w + mapHandler.currentMap.map_w / 2
          this.y = row * mapHandler.currentMap.map_h + mapHandler.currentMap.map_h / 2
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
      this.velY = -PLAYER_SPEED
      /*
      if (this.moveTimer == 0) {
        var nextMove = mapHandler.getTileAtPixelCoord(this.x + PLAYER_SIZE / 2, this.y - 20)
        if (!mapHandler.isTileIndexSoild(mapGrid[nextMove])) {
          this.y -= PLAYER_SIZE
          this.moveTimer = PLAYER_MOVE_DELAY

        }
      }*/
      this.dir = 0
    }
    if (this.goingRight) {
      this.velX = PLAYER_SPEED
      /* if (this.moveTimer == 0) {
        var nextMove = mapHandler.getTileAtPixelCoord(this.x+PLAYER_SIZE + 20, this.y + PLAYER_SIZE / 2)
        if (!mapHandler.isTileIndexSoild(mapGrid[nextMove])) {
          this.x += PLAYER_SIZE
          this.moveTimer = PLAYER_MOVE_DELAY

        }
      }*/

      this.dir = 1
    }
    if (this.goingDown) {
      this.velY = PLAYER_SPEED
      /*if (this.moveTimer == 0) {
        var nextMove = mapHandler.getTileAtPixelCoord(this.x + PLAYER_SIZE / 2, this.y+PLAYER_SIZE + 20)
        if (!mapHandler.isTileIndexSoild(mapGrid[nextMove])) {
          this.y += PLAYER_SIZE
          this.moveTimer = PLAYER_MOVE_DELAY

        }
      }*/
      this.dir = 2
    }
    if (this.goingLeft) {
      this.velX = -PLAYER_SPEED
      /*if (this.moveTimer == 0) {
        var nextMove = mapHandler.getTileAtPixelCoord(this.x - 20, this.y + PLAYER_SIZE / 2)

        if (!mapHandler.isTileIndexSoild(mapGrid[nextMove])) {
          this.x -= PLAYER_SIZE
          this.moveTimer = PLAYER_MOVE_DELAY
        }
      }*/
      this.dir = 3
    }

    //COLLISION
    if (this.canMove(this.x + this.velX,this.y)) {
      this.x += this.velX
    }
    if (this.canMove(this.x,this.y + this.velY)) {
      this.y += this.velY
    }
    this.velX *= FRICTION
    this.velY *= FRICTION

    //this.velX = 0
    //this.velY = 0
    if (this.moveTimer > 0) {
      this.moveTimer--
    }


    if (this.shootTimer > 0) {
      this.shootTimer--
    }
  }

  this.canMove = function (x, y) {
    if (mapHandler.isTileSoild(x, y)) return false
    if (mapHandler.isTileSoild(x + PLAYER_SIZE, y)) return false
    if (mapHandler.isTileSoild(x + PLAYER_SIZE, y + PLAYER_SIZE)) return false
    if (mapHandler.isTileSoild(x, y + PLAYER_SIZE)) return false
    return true
  }



  this.shoot = function () {
      if (this.shootTimer == 0) {
        switch (this.dir) {
          case 0:
            var angle = Math.radians(-90)
            bulletManager.createBullet(this.x + PLAYER_SIZE / 2, this.y + PLAYER_SIZE / 2, 33, angle)
            this.shootTimer = PLAYER_SHOOT_DELAY
            break;
          case 1:
            var angle = Math.radians(0)
            bulletManager.createBullet(this.x + PLAYER_SIZE / 2, this.y + PLAYER_SIZE / 2, 33, angle)
            this.shootTimer = PLAYER_SHOOT_DELAY
            break;
          case 2:
            var angle = Math.radians(90)
            bulletManager.createBullet(this.x + PLAYER_SIZE / 2, this.y + PLAYER_SIZE / 2, 33, angle)
            this.shootTimer = PLAYER_SHOOT_DELAY
            break;
          case 3:
            var angle = Math.radians(180)
            bulletManager.createBullet(this.x + PLAYER_SIZE / 2, this.y + PLAYER_SIZE / 2, 33, angle)
            this.shootTimer = PLAYER_SHOOT_DELAY
            break;
          default:
        }

      }
    }

  this.draw = function () {
    //drawBitMapCenteredWithScale(this.img, this.x, this.y, PLAYER_SCALE)
    ctx.drawImage(this.img, this.x, this.y)
  }

}
