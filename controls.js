function initControls() {
    var rotationKeys = ["W", "S", "E", "Q", "D", "A"];
    var scalingKeys = ["X", "Y", "Z"];
    var modelSelectKeys = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var movementKeys = [37, 38, 39, 40, 188, 190];

    document.addEventListener("keydown", function (event) {

        var keyString = String.fromCharCode(event.keyCode);

        if (rotationKeys.indexOf(keyString) !== -1) {
            renderer.handleRotation(keyString);

        } else if(scalingKeys.indexOf(keyString) !== -1){
            renderer.handleScaling(keyString, event);

        } else if (modelSelectKeys.indexOf(parseInt(keyString)) !== -1) {
            renderer.setActiveModel(parseInt(keyString));

        } else if (movementKeys.indexOf(event.keyCode) !== -1) {
            renderer.handleMovement(event);

        }
            
        
    });
}




    self.handleScaling = function (keyString, event) {

        if (self.activeModelName !== "" && model !== undefined) {
            // Check if SHIFT is pressed

            var model = self.models[self.activeModelName];

            if (event.shiftKey) {
                switch (keyString) {
                    case "X": model.increaseWidth();
                        break;
                    case "Y": model.increaseHeight();
                        break;
                    case "Z": model.increaseDepth();
                        break;
                }

            } else {
                switch (keyString) {
                    case "X": model.decreaseWidth();
                        break;
                    case "Y": model.decreaseHeight();
                        break;
                    case "Z": model.decreaseDepth();
                        break;
                }

            }
