
var selection_keys = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var scaling_keys = ["X", "Y", "Z"];
var rotation_keys = ["W", "S", "E", "Q", "D", "A"];
var movement_keys = [37, 38, 39, 40, 188, 190];
var lighting_mode_keys = ["u", "U", "I", "O", "P"]; // for some reason, "U" is not recognized in my firefox


//'u' (Gouraud/diffuse), 'i' (Gouraud/specular), 'o' (Phong/diffuse), and 'p' (Phong/specular).


//  37 = <
//  38 = ^
//  39 = >
//  40 = v
// 188 = ,
// 190 = .

function keyboard_input() {
	document.addEventListener("keydown", event_handling);

}

function event_handling(event) {
	console.log("key down", event);
	
	var keyString = String.fromCharCode(event.keyCode);

	if (selection_keys.indexOf(parseInt(keyString)) !== -1)
		selected_object_id = parseInt(keyString);

	else if(scaling_keys.indexOf(keyString) !== -1) {
		if (selected_object_id == 0)
			scale(keyString, event, scene[0]);
		else
			scale(keyString, event, scene[0].children[selected_object_id-1]);
	}

	else if (rotation_keys.indexOf(keyString) !== -1) {
		if (selected_object_id == 0)
			rotate(keyString, scene[0]);
		else
			rotate(keyString, scene[0].children[selected_object_id-1]);
	}

	else if (movement_keys.indexOf(event.keyCode) !== -1) {
		if (selected_object_id == 0)
			translate(event, scene[0]);
		else
			translate(event, scene[0].children[selected_object_id-1]);
	}

	else if (lighting_mode_keys.indexOf(keyString)) {
		console.log(keyString);
		if (keyString == "U")
			lighting_mode = 1;
		else if (keyString == "I")
			lighting_mode = 2;
		else if (keyString == "O")
			lighting_mode = 3;
		else if (keyString == "P")
			lighting_mode = 4;
	}

}
