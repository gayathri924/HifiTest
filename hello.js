(function () {
    var clicked = false;
    this.clickDownOnEntity = function (entityID, mouseEvent) {
        if (clicked){
          print("Hello");
                clicked = false;
        }
    };
})
