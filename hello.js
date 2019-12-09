var entityScript = (function () {
    // Method is called for only this entity.
    this.clickDownOnEntity = function (entityID, event) {
        print("Entity : Clicked sphere ; " + event.type);
    };
});

var sphereID = Entities.addEntity({
    type: "Sphere",
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0, z: -3 })),
    script: "(" + entityScript + ")",  // Could host the script on a Web server instead.
    lifetime: 300  // Delete after 5 minutes.
});

Entities.clickDownOnEntity.connect(function (entityID, event) {
    // Signal is triggered for all entities.
    if (entityID === sphereID) {
        print("Interface : Clicked sphere ; " + event.type);
    } else {
        print("Interface : Clicked another entity ; " + event.type);
    }
});
