var currentMapGrid = [0,0,0,0,0,0,0,0,
                      0,0,0,0,0,0,0,0,
                      0,1,0,1,1,1,0,0,
                      0,1,0,0,0,0,0,0,
                      0,1,0,0,0,1,0,0,
                      0,0,0,0,0,1,0,0,
                      0,1,1,1,0,1,0,0,
                      0,0,0,0,0,0,0,0]

const MAP_FLOOR = 0
const MAP_WALL = 1

const MAP_W = 64
const MAP_H = 64
const MAP_COLS = 8
const MAP_ROWS = 8

var mapHandler = {
  notOutsideOfGrid: function (col, row) {
    if (col >= 0 && col < MAP_COLS &&
        row >= 0 && row < MAP_ROWS) {
        return true
    } else {
      return false
    }
  },

  returnTileTypeAtColRow: function (col, row) {
    // Not outside of grid
    if (notOutsideOfGrid(col, row)) {
      var mapIndexUnderCord = mapHandler.rowColToArrayIndex(col, row)
      return currentMapGrid[mapIndexUnderCord]
    } else {
      return MAP_WALL
    }
  },

  getTileAtPixelCoord: function (x, y) {
    var pixelMapCol = Math.floor(x / MAP_W)
    var pixelMapRow = Math.floor(y / MAP_H)
    var mapIndex = mapHandler.rowColToArrayIndex(pixelMapCol, pixelMapRow)

    if (notOutsideOfGrid(pixelMapCol, pixelMapRow)) {
      return mapIndex
    } else {
      return undefined
    }
  },

  rowColToArrayIndex: function (col, row) {
    return col + MAP_COLS * row
  },

  isTileSoild: function (tile) {
    return ( tile == MAP_WALL)
  },

  drawMap: function () {
    var index = 0

    var tileX = 0
    var tileY = 0

    for (var row = 0; row < MAP_ROWS; row++) {
      for (var col = 0; col < MAP_COLS; col++) {
        var tile = currentMapGrid[index]
        var tileImg = AssetLoader.tileImages[tile]

        ctx.drawImage(tileImg, tileX, tileY)
        tileX += MAP_W
        index++
      }
      tileY += MAP_H
      tileX = 0
    }
  }
}
