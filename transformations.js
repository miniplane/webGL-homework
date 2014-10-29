function scale(keyString, event) {

	console.log("keystring: ", keyString);

	if (event.shiftKey)
		switch (keyString) {
			case "X": mat4.scale(scene[selected_object_id].matrix, [1.1, 1, 1]);
				break;
			case "Y": mat4.scale(scene[selected_object_id].matrix, [1, 1.1, 1]);
				break;
			case "Z": mat4.scale(scene[selected_object_id].matrix, [1, 1, 1.1]);
				break;
		}

	else 
		switch (keyString) {
			case "X": mat4.scale(scene[selected_object_id].matrix, [0.9, 1, 1]);
				break;
			case "Y": mat4.scale(scene[selected_object_id].matrix, [1, 0.9, 1]);
				break;
			case "Z": mat4.scale(scene[selected_object_id].matrix, [1, 1, 0.9]);
				break;
		}
}

// mat4.rotate(mat, angle, axis)
// mat = mat * rotationmatrix_for(angle, axis)

// mat4.rotate(mat_out, mat_in, angle, axis)
// mat_out = mat_in * rotationmatrix_for(angle, axis)


function rotate(keyString) {

	console.log("keystring: ", keyString);

	switch (keyString) {
			case "W": mat4.rotate(scene[selected_object_id].matrix, degToRad(10), [1, 0, 0]); // x clockwise
				break;
			case "S": mat4.rotate(scene[selected_object_id].matrix, degToRad(-10), [1, 0, 0]);
				break;
			case "E": mat4.rotate(scene[selected_object_id].matrix, degToRad(10), [0, 1, 0]); // y clockwise
				break;
			case "Q": mat4.rotate(scene[selected_object_id].matrix, degToRad(-10), [0, 1, 0]);
				break;
			case "D": mat4.rotate(scene[selected_object_id].matrix, degToRad(10), [0, 0, 1]);
				break;
			case "A": mat4.rotate(scene[selected_object_id].matrix, degToRad(-10), [0, 0, 1]);
				break;
		}
}

function translate(event) { // move shape using arrow keys

        console.log("asdf");

        switch (event.keyCode) {
        	case 37: mat4.translate(scene[selected_object_id].matrix, [-0.1, 0, 0]); // left
                break;
            case 38: mat4.translate(scene[selected_object_id].matrix, [0, 0.1, 0]); // up
                break;
            case 39: mat4.translate(scene[selected_object_id].matrix, [0.1, 0, 0]); // right
                break;
            case 40: mat4.translate(scene[selected_object_id].matrix, [0, -0.1, 0]); // down
                break;
            case 188: mat4.translate(scene[selected_object_id].matrix, [0, 0, 0.1]); // , forth
                break;
            case 190: mat4.translate(scene[selected_object_id].matrix, [0, 0, -0.1]); // . back
                break;
        
    };


}