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

  },

  updateMousePos: function (evt) {
    var rect = canvas.getBoundingClientRect()
    var root = document.documentElement

    Input.mouseX = evt.clientX - rect.left - root.scrollLeft
    Input.mouseY = evt.clientY - rect.top - root.scrollTop
  },

  playerKeyEvents: function(evt, bool) {
    console.log(evt.keyCode)
  },

  keyDown: function (evt) {
    Input.playerKeyEvents(evt, true)
    /*if (evt.keyCode == player.shootKey) {
      player.shoot()
      console.log('SHOOT');
    }*/
  },

  keyUp: function (evt) {
    Input.playerKeyEvents(evt, false)

  }
}
