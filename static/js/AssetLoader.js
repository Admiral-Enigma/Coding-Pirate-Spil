var AssetLoader = {

  tileImages: [],
  imgsToLoad: 0,

  countLoadedImages: function () {
    AssetLoader.imgsToLoad--
    console.log('[DEBUG] Images left to load: '+ AssetLoader.imgsToLoad);
    if (AssetLoader.imgsToLoad == 0) {
      console.log('Starting Game');
      startGame()
    }
  },

  loadImage: function (imgVar, src) {
    imgVar.onload = AssetLoader.countLoadedImages
    imgVar.src = 'assets/'+src
  },

  loadTileImage: function (type, src) {
    AssetLoader.tileImages.push({
      img: document.createElement('img'),
      name: ''+type
    })

    AssetLoader.loadImage(AssetLoader.tileImages[AssetLoader.tileImages.length-1].img, src)
  },

  getTile: function (tileName) {
    var tile = null
    for (var i = 0; i < AssetLoader.tileImages.length; i++) {
      if (AssetLoader.tileImages[i].name == tileName) {
        tile = AssetLoader.tileImages[i].img
      }
    }
    return tile
  },

  loadImages: function (images) {
    AssetLoader.imgsToLoad = images.length

    for (var i = 0; i < AssetLoader.imgsToLoad; i++) {
      if (images[i].variable != undefined) {
        AssetLoader.loadImage(images[i].variable, images[i].src)
      } else {
        AssetLoader.loadTileImage(images[i].tileType, images[i].src)
      }
    }
  }
}
