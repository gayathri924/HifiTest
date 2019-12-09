(function () {
    var clicked = false;
    this.clickDownOnEntity = function (entityID, mouseEvent) {
        if (clicked){
          print("Hello");
                clicked = false;
        } else {
            Entities.editEntity(entityID, { color: { red: 255, green: 255, blue: 0} });
            clicked = true;
        }
    };
})
