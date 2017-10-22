var camera = {
  camPanX: 0.0,
  camPanY: 0.0,
  moveSpeed: 4,

  camFollow: function (p) {
    var cameraFocusCenterX = camera.camPanX + canvas.width/2;
    var cameraFocusCenterY = camera.camPanY + canvas.height/2;
    var playerDistFromCameraFocusX = Math.abs(p.x-cameraFocusCenterX);
    var playerDistFromCameraFocusY = Math.abs(p.y-cameraFocusCenterY);

    if(playerDistFromCameraFocusX > PLAYER_DIST_FROM_CENTER_BEFORE_CAMERA_PAN_X) {
      if(cameraFocusCenterX < p.x)  {
        camera.camPanX += camera.moveSpeed;
      } else {
        camera.camPanX -= camera.moveSpeed;
      }
    }
    if(playerDistFromCameraFocusY > PLAYER_DIST_FROM_CENTER_BEFORE_CAMERA_PAN_Y) {
      if(cameraFocusCenterY < p.y)  {
        camera.camPanY += camera.moveSpeed;
      } else {
        camera.camPanY -= camera.moveSpeed;
      }
    }
  },

  instantFollow: function (p) {
    camera.camPanX = p.x - canvas.width/2;
    camera.camPanY = p.y - canvas.height/2;

    if(camera.camPanX < 0) {
      camera.camPanX = 0;
    }
    if(camera.camPanY < 0) {
      camera.camPanY = 0;
    }

    var maxPanRight = mapHandler.currentMap.map_cols * mapHandler.currentMap.map_w - canvas.width;
    var maxPanTop = mapHandler.currentMap.map_rows * mapHandler.currentMap.map_h - canvas.height;
    if(camera.camPanX > maxPanRight ) {
      camera.camPanX = maxPanRight;
    }
    if(camera.camPanY > maxPanTop) {
      camera.camPanY = maxPanTop;
    }
  }

}
