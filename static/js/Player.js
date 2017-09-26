const PLAYER_SPEED = 6.5
const PLAYER_SCALE = 1
const PLAYER_SHOOT_DELAY = 22
const PLAYER_SIZE = 64
const PLAYER_MOVE_DELAY = 25

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
  }

  this.setupInput = function (upKey, downKey, rightKey, leftKey, shootKey) {
    this.goingUpKey = upKey
    this.goingRightKey = rightKey
    this.goingDownKey = downKey
    this.goingLeftKey = leftKey
    this.shootKey = shootKey
  }

  this.getBundingBox = function (face) {
    // 0 Top 1 Bottom 2 Left 3 Right
    //  + (this.img.height * PLAYER_SCALE)  + (this.img.width * PLAYER_SCALE)

    if (face == 0) {
      return [this.nextX+ (this.img.width * PLAYER_SCALE) / 2,this.nextY]

    } else if (face == 1) {
      return [this.nextX + (this.img.width * PLAYER_SCALE) / 2,this.nextY + (this.img.height * PLAYER_SCALE)]

    } else if (face == 2) {
      return [this.nextX,this.nextY + (this.img.height * PLAYER_SCALE)/2]

    } else if (face == 3) {
      return [this.nextX + (this.img.width * PLAYER_SCALE),this.nextY + (this.img.height * PLAYER_SCALE)/2]
    }
  }

  this.move = function () {

    /*
    this.nextX = this.x
    this.nextY = this.y

    if (this.goingUp) {
      this.nextY -= PLAYER_SPEED
      this.dir = 0
    }
    if (this.goingRight) {
      this.nextX += PLAYER_SPEED
      this.dir = 1
    }
    if (this.goingDown) {
      this.nextY += PLAYER_SPEED
      this.dir = 2
    }
    if (this.goingLeft) {
      this.nextX -= PLAYER_SPEED
      this.dir = 3
    }

    this.handleCollision()*/
    if (this.goingUp) {
      if (this.moveTimer == 0) {
        var nextMove = mapHandler.getTileAtPixelCoord(this.x, this.y + 5)
        console.log(this.x+":"+this.y);
        console.log(mapHandler.isTileSoild(nextMove));
        if (!mapHandler.isTileSoild(nextMove)) {
          this.y -= PLAYER_SIZE
          this.moveTimer = PLAYER_MOVE_DELAY

        }
      }
      this.dir = 0
    }
    if (this.goingRight) {
      if (this.moveTimer == 0) {
        var nextMove = mapHandler.getTileAtPixelCoord(this.x+PLAYER_SIZE + 5, this.y)
        if (!mapHandler.isTileSoild(nextMove)) {
          this.x += PLAYER_SIZE
          this.moveTimer = PLAYER_MOVE_DELAY

        }
      }

      this.dir = 1
    }
    if (this.goingDown) {
      if (this.moveTimer == 0) {
        var nextMove = mapHandler.getTileAtPixelCoord(this.x, this.y+PLAYER_SIZE + 5)
        if (!mapHandler.isTileSoild(nextMove)) {
          this.y += PLAYER_SIZE
          this.moveTimer = PLAYER_MOVE_DELAY

        }
      }
      this.dir = 2
    }
    if (this.goingLeft) {
      if (this.moveTimer == 0) {
        var nextMove = mapHandler.getTileAtPixelCoord(this.x + 5, this.y)
        if (!mapHandler.isTileSoild(nextMove)) {
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
      //Faces = 3
      /*
      var hitPoints = []
      for (var i = 0; i < 3; i++) {
        var face = this.getBundingBox(i)
        //console.log(face);

        var walkingIntoTileIndex = mapHandler.getTileAtPixelCoord(face[0],face[1])
        var walkingIntoTileType = MAP_WALL
        if (walkingIntoTileIndex != undefined) {
          walkingIntoTileType = mapGrid[walkingIntoTileIndex]
        }
        if (mapHandler.isTileSoild(walkingIntoTileType)) {
          hitPoints.push(i)
        }
    }
    this.checkIfCollidedWithTile(hitPoints)
    */
  }
  /*
  this.checkIfCollidedWithTile = function (hitPoints) {
    if (!hitPoints.length == 0) {
      for (var i = 0; i < hitPoints.length; i++) {
        switch (hitPoints[i]) {
          case 0:
            this.x = this.nextX
            break;
          case 1:
            this.x = this.nextX
            break;
          case 2:
            this.y = this.nextY
            break;
          case 3:
            this.y = this.nextY
        }
      }
    } else {
      this.x = this.nextX
      this.y = this.nextY
    }
  }*/

  this.draw = function () {
    //drawBitMapCenteredWithScale(this.img, this.x, this.y, PLAYER_SCALE)
    ctx.drawImage(this.img, this.x, this.y)
  }
}
