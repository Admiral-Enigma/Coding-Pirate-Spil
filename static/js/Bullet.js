function Bullet(originX, originY, speed, ang) {
  this.x = originX
  this.y = originY
  this.vel = speed
  this.ang = ang

  this.update = function () {
    this.x += Math.cos(this.ang) * this.vel
    this.y += Math.sin(this.ang) * this.vel
  }
}
