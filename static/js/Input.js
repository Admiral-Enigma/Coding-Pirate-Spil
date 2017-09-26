const KEY_W = 87
const KEY_A = 65
const KEY_S = 83
const KEY_D = 68
const KEY_Z = 90

var Input = {

  mouseX: 0,
  mouseY: 0,

  initInput: function () {
    canvas.addEventListener('mousemove', Input.updateMousePos)

    document.addEventListener('keydown', Input.keyDown)
    document.addEventListener('keyup', Input.keyUp)

    player.setupInput(KEY_W, KEY_S, KEY_D, KEY_A, KEY_Z)
  },

  updateMousePos: function (evt) {
    var rect = canvas.getBoundingClientRect()
    var root = document.documentElement

    Input.mouseX = evt.clientX - rect.left - root.scrollLeft
    Input.mouseY = evt.clientY - rect.top - root.scrollTop
  },

  playerKeyEvents: function(evt, bool) {
    if (evt.keyCode == player.goingLeftKey) {
      player.goingLeft = bool
    }
    if (evt.keyCode == player.goingUpKey) {
      player.goingUp = bool
    }
    if (evt.keyCode == player.goingRightKey) {
      player.goingRight = bool
    }
    if (evt.keyCode == player.goingDownKey) {
      player.goingDown = bool
    }
  },

  keyDown: function (evt) {
    Input.playerKeyEvents(evt, true)
    if (evt.keyCode == player.shootKey) {
      player.shoot()
      console.log('SHOOT');
    }
  },

  keyUp: function (evt) {
    Input.playerKeyEvents(evt, false)

  }
}
