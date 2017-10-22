function BulletManager() {
  this.bulletImage
  this.bullets = []

  this.init = function (img) {
    this.bulletImage = img
  }
  this.createBullet = function (x, y, speed, ang) {
    console.log('I MAKE BULLET');
    var tempBullet = new Bullet(x, y, speed, ang)
    this.bullets.push(tempBullet)
  }
  this.updateBullets = function () {
    for (var i = 0; i < this.bullets.length; i++) {
      this.bullets[i].update()
      var flyingIntoTileIndex = mapHandler.getTileAtPixelCoord(this.bullets[i].x,this.bullets[i].y)
      var flyingIntoTileObject = mapHandler.getTileObjectFromMapData(mapHandler.currentMap.mapGrid[flyingIntoTileIndex])
      if (flyingIntoTileObject.solid) {
        this.bullets.remove(i)
      }
    }
  }

  this.drawBullets = function () {
    for (var i = 0; i < this.bullets.length; i++) {
      drawBitmapWithAng(this.bulletImage, this.bullets[i].x, this.bullets[i].y, this.bullets[i].ang)
    }
  }
}
