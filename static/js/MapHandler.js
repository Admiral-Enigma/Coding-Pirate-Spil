
var ads = [
  1,1,1,1,1,1,1,1,1,1,1,1,
  1,0,0,0,0,0,0,0,0,0,0,1,
  1,0,0,0,0,0,0,0,0,0,0,1,
  1,0,0,0,0,0,0,0,0,0,0,1,
  1,0,0,0,0,0,0,0,0,0,0,1,
  1,0,0,0,0,0,0,0,0,0,0,1,
  1,0,0,0,0,0,0,0,0,0,0,1,
  1,0,0,0,0,0,0,0,0,0,0,1,
  1,1,1,1,1,1,1,1,1,1,1,1,
]
var levelOne = {
  mapGrid: [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
             1, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1,
             1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1,
             1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1,
             1, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1,
             1, 2, 2, 2, 2, 5, 2, 5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1,
             1, 2, 2, 2, 5, 1, 1, 1, 5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1,
             1, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1,
             1, 2, 2, 2, 5, 1, 1, 1, 5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1,
             1, 2, 2, 2, 2, 5, 2, 5, 2, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1,
             1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1,
             1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1,
             1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 1, 2, 2, 2, 2, 2, 1,
             1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1,
             1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1,
             1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1,
             1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1,
             1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1,
             1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 1,
             1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  map_w: 64,
  map_h: 64,
  map_cols: 20,
  map_rows: 20,
  map_tiles: [
    {name: "TEST_FLOOR", id: 2, solid: false},
    {name: "TEST_WALL", id: 1, solid: true},
    {name: "TEST_ENEMY_SPAWN", id: 3, solid: true},
    {name: "TEST_PLAYER_SPAWN", id: 4, solid: false},
    {name: "TEST_BUSH", id: 5, solid: false, transparent: true, floorTile: "TEST_FLOOR"}
  ]

}

var mapGrid = []


//var mapGrid = []
/*const MAP_FLOOR = 2
const MAP_WALL = 1
const MAP_ENEMY_SPAWN = 3
const MAP_PLAYER_SPAWN = 4
//const MAP_PLAYERSTART = 2

const MAP_W = 64
const MAP_H = 64
const MAP_COLS = 20
const MAP_ROWS = 20*/

var mapHandler = {
  currentMap: {},
  /*{
    mapGrid: []
    map_w: 0,
    map_h: 0,
    map_cols: 0,
    map_rows: 0,
    map_tiles: []
  }*/

  setMap: function (mapObject) {
    mapHandler.currentMap = mapObject
  },


  returnTitleTypeAtColRow: function (col, row) {
    if (col >= 0 && col < mapHandler.currentMap.map_cols && row >= 0 && row < mapHandler.currentMap.map_rows) {
      var mapIndexUnderCord = mapHandler.rowColToArrayIndex(col, row)
      return (mapHandler.currentMap.mapGrid[mapIndexUnderCord])
    } else {
      return MAP_WALL
    }
  },

  getTileAtPixelCoord: function (x, y) {
    var pixelMapCol = Math.floor(x / mapHandler.currentMap.map_w)
    var pixelMapRow = Math.floor(y / mapHandler.currentMap.map_h)
    var mapIndex = mapHandler.rowColToArrayIndex(pixelMapCol, pixelMapRow)

    if (pixelMapCol >= 0 && pixelMapCol < mapHandler.currentMap.map_cols && pixelMapRow >= 0 && pixelMapRow < mapHandler.currentMap.map_rows) {
      return mapIndex
    }else {
      return undefined
    }
  },

  rowColToArrayIndex: function (col, row) {
    return col + mapHandler.currentMap.map_cols * row
  },

  isTileIndexSoild: function (tile) {
    tileObject = mapHandler.getTileObjectFromMapData(tile)
    solid = false
    if (tileObject.solid) {
      solid = true
    }

    return solid
  },

  getTileFromMapData: function (tile) {
    tileName = ""
    for (var i = 0; i < mapHandler.currentMap.map_tiles.length; i++) {
      if (mapHandler.currentMap.map_tiles[i].id == tile) {
        tileName = mapHandler.currentMap.map_tiles[i].name
      }
    }

    return tileName
  },

  getTileObjectFromMapData: function (tile) {
    tileName = null
    for (var i = 0; i < mapHandler.currentMap.map_tiles.length; i++) {
      if (mapHandler.currentMap.map_tiles[i].id == tile) {
        tileName = mapHandler.currentMap.map_tiles[i]
      }
    }

    return tileName
  },

  isTileSoild: function (x, y) {
    tile = mapHandler.getTileAtPixelCoord(x, y)
    return mapHandler.isTileIndexSoild(mapHandler.currentMap.mapGrid[tile])//)
  },


  draw: function () {
    var index = 0

    var tileDrawX = 0
    var tileDrawY = 0

    for (var row = 0; row < mapHandler.currentMap.map_rows; row++) {
      for (var col = 0; col < mapHandler.currentMap.map_cols; col++) {
        var tile = mapHandler.getTileObjectFromMapData(mapHandler.currentMap.mapGrid[index])
        var tileImg = AssetLoader.getTile(tile.name)
        if (tile.transparent != undefined && tile.transparent == true) {
          var underTile = AssetLoader.getTile(tile.floorTile)
          ctx.drawImage(underTile, tileDrawX,tileDrawY)
        }
        ctx.drawImage(tileImg, tileDrawX,tileDrawY)
        //colorText(tileDrawX + 32, tileDrawY + 32, row+":"+col+" "+this.isTileSoild(index), "white")
        tileDrawX += mapHandler.currentMap.map_w
        index++
      }
      tileDrawY += mapHandler.currentMap.map_h
      tileDrawX = 0
    }
  }
}
