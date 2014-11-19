
function scale(keyString, event, object) {

	var factor = 0.9;
	if (event.shiftKey)
		factor = 1.1;

	switch (keyString) {
		case "X": mat4.scale(object.sclMatrix, [factor, 1, 1]);
			break;
		case "Y": mat4.scale(object.sclMatrix, [1, factor, 1]);
			break;
		case "Z": mat4.scale(object.sclMatrix, [1, 1, factor]);
			break;
	}

}

// mat4.rotate(mat, angle, axis)
// mat = mat * rotationmatrix_for(angle, axis)

// mat4.rotate(mat_out, mat_in, angle, axis)
// mat_out = mat_in * rotationmatrix_for(angle, axis)


function rotate(keyString, object) {

	switch (keyString) {
			case "W": mat4.rotate(object.posRotMatrix, degToRad(10), [1, 0, 0]); // x clockwise
				break;
			case "S": mat4.rotate(object.posRotMatrix, degToRad(-10), [1, 0, 0]);
				break;
			case "E": mat4.rotate(object.posRotMatrix, degToRad(10), [0, 1, 0]); // y clockwise
				break;
			case "Q": mat4.rotate(object.posRotMatrix, degToRad(-10), [0, 1, 0]);
				break;
			case "D": mat4.rotate(object.posRotMatrix, degToRad(10), [0, 0, 1]);
				break;
			case "A": mat4.rotate(object.posRotMatrix, degToRad(-10), [0, 0, 1]);
				break;
		}
}

function translate(event, object) { // move shape using arrow keys

        switch (event.keyCode) {
        	case 37: mat4.translate(object.posRotMatrix, [-0.1, 0, 0]); // left
                break;
            case 38: mat4.translate(object.posRotMatrix, [0, 0.1, 0]); // up
                break;
            case 39: mat4.translate(object.posRotMatrix, [0.1, 0, 0]); // right
                break;
            case 40: mat4.translate(object.posRotMatrix, [0, -0.1, 0]); // down
                break;
            case 188: mat4.translate(object.posRotMatrix, [0, 0, 0.1]); // , forth
                break;
            case 190: mat4.translate(object.posRotMatrix, [0, 0, -0.1]); // . back
                break;
        
    };


}