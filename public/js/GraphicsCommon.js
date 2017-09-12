
function drawBitmapWithAng(bitmap, x, y, ang) {
  ctx.save()
  ctx.translate(x, y)
  ctx.rotate(ang)
  ctx.drawImage(bitmap, -bitmap.width / 2, -bitmap.height / 2)
  ctx.restore()
}

function drawBitMapCenteredWithScale(bitmap, x, y, scale) {
  ctx.save()
  ctx.translate(x, y)
  ctx.scale(scale, scale)
  ctx.drawImage(bitmap, -bitmap.width / 2, -bitmap.height / 2)
  ctx.restore()
}

function colorRect(x, y, w, h, color) {
  ctx.fillStyle = color
  ctx.fillRect(x, y, w, h)
}

function colorCircle(x, y, r, color) {
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.arc(x, y, r, 0, Math.PI * 2, true)
  ctx.fill()
}

function colorText(x, y, string, color) {
  ctx.fillStyle = color
  ctx.fillText(string, x, y)
}
