
var selection_keys = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var scaling_keys = ["X", "Y", "Z"];
var rotation_keys = ["W", "S", "E", "Q", "D", "A"];
var movement_keys = [37, 38, 39, 40, 188, 190];

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
		selected_object_id = parseInt(keyString)-1;

	else if(scaling_keys.indexOf(keyString) !== -1)
		scale(keyString, event);

	else if (rotation_keys.indexOf(keyString) !== -1)
		rotate(keyString);

	else if (movement_keys.indexOf(event.keyCode) !== -1)
		translate(event);

}
