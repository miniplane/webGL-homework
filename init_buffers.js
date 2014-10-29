function Shape() {
	this.positionBuffer = gl.createBuffer();
	this.colorBuffer = gl.createBuffer();
	this.indexBuffer = gl.createBuffer();
	return this;
}

var pyramid;
var cube;
var cylinder;

function init_buffers() {

	pyramid = new Shape();
	cube = new Shape();
	cylinder = new Shape();

    gl.bindBuffer(gl.ARRAY_BUFFER, pyramid.positionBuffer);
    var vertices = [
    	-1.0, -1.0,  1.0,	//  0
    	-1.0, -1.0,  1.0,	//  1
    	-1.0, -1.0,  1.0,	//  2	  
		 
		 1.0, -1.0,  1.0,	//  3
		 1.0, -1.0,  1.0,	//  4
		 1.0, -1.0,  1.0,	//  5

		 1.0, -1.0, -1.0,	//  6
		 1.0, -1.0, -1.0,	//  7
		 1.0, -1.0, -1.0,	//  8

		-1.0, -1.0, -1.0,	//  9
		-1.0, -1.0, -1.0,	// 10
		-1.0, -1.0, -1.0,	// 11

         0.0,  1.0,  0.0,	// 12
         0.0,  1.0,  0.0,	// 13
         0.0,  1.0,  0.0,	// 14
         0.0,  1.0,  0.0,	// 15

    ];

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    pyramid.positionBuffer.itemSize = 3;
    pyramid.positionBuffer.numItems = 5;

    gl.bindBuffer(gl.ARRAY_BUFFER, pyramid.colorBuffer);

    var side0 = [1.0, 1.0, 0.0, 1.0];
    var side1 = [1.0, 0.0, 0.0, 1.0];
    var side2 = [0.0, 0.0, 1.0, 1.0];
    var side3 = [0.0, 1.0, 0.0, 1.0];
    var bottom = [1.0, 0.0, 1.0, 1.0];

    var colors = [
    	bottom,
    	side0,
    	side3,

    	bottom,
    	side1,
    	side0,

    	bottom,
    	side2,
    	side1,

    	bottom,
    	side3,
    	side2,

    	side0,
    	side1,
    	side2,
    	side3
    ];

    var flatcolors = [];
    for (var i in colors) {
    	flatcolors = flatcolors.concat(colors[i]);
    }
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(flatcolors), gl.STATIC_DRAW);
    pyramid.colorBuffer.itemSize = 4;
    pyramid.colorBuffer.numItems = colors.length;


    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, pyramid.indexBuffer);
    var pyramidVertexIndices = [
    	6, 3, 0, 9, 6, 0,
    	12,  1,  5,
    	13,  4,  8,
    	14,  7, 11,
    	15, 10,  2
    ];

    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(pyramidVertexIndices), gl.STATIC_DRAW);
    pyramid.indexBuffer.itemSize = 1;
    pyramid.indexBuffer.numItems = 12+6;




    // cube

	gl.bindBuffer(gl.ARRAY_BUFFER, cube.positionBuffer);
	vertices = [
		// Front face
		-1.0, -1.0, 1.0,
		1.0, -1.0, 1.0,
		1.0, 1.0, 1.0,
		-1.0, 1.0, 1.0,
		// Back face
		-1.0, -1.0, -1.0,
		-1.0, 1.0, -1.0,
		1.0, 1.0, -1.0,
		1.0, -1.0, -1.0,
		// Top face
		-1.0, 1.0, -1.0,
		-1.0, 1.0, 1.0,
		1.0, 1.0, 1.0,
		1.0, 1.0, -1.0,
		// Bottom face
		-1.0, -1.0, -1.0,
		1.0, -1.0, -1.0,
		1.0, -1.0, 1.0,
		-1.0, -1.0, 1.0,
		// Right face
		1.0, -1.0, -1.0,
		1.0, 1.0, -1.0,
		1.0, 1.0, 1.0,
		1.0, -1.0, 1.0,
		// Left face
		-1.0, -1.0, -1.0,
		-1.0, -1.0, 1.0,
		-1.0, 1.0, 1.0,
		-1.0, 1.0, -1.0,
	];


	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
	cube.positionBuffer.itemSize = 3;
	cube.positionBuffer.numItems = 24;
	gl.bindBuffer(gl.ARRAY_BUFFER, cube.colorBuffer);
	colors = [
		[1.0, 0.0, 0.0, 1.0], // Front face
		[1.0, 1.0, 0.0, 1.0], // Back face
		[0.0, 1.0, 0.0, 1.0], // Top face
		[0.0, 0.0, 1.0, 1.0], // Bottom face
		[1.0, 0.0, 1.0, 1.0], // Right face
		[0.0, 1.0, 1.0, 1.0], // Left face
	];
	var unpackedColors = [];

	for (var i in colors) {
		var color = colors[i];
		for (var j=0; j < 4; j++) {
			unpackedColors = unpackedColors.concat(color);
		}
	}
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(unpackedColors), gl.STATIC_DRAW);
	cube.colorBuffer.itemSize = 4;
	cube.colorBuffer.numItems = 24;
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cube.indexBuffer);

	var cubeVertexIndices = [
		0, 1, 2, 0, 2, 3, // Front face
		4, 5, 6, 4, 6, 7, // Back face
		8, 9, 10, 8, 10, 11, // Top face
		12, 13, 14, 12, 14, 15, // Bottom face
		16, 17, 18, 16, 18, 19, // Right face
		20, 21, 22, 20, 22, 23 // Left face
	]
	gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(cubeVertexIndices), gl.STATIC_DRAW);
	cube.indexBuffer.itemSize = 1;
	cube.indexBuffer.numItems = 36;



// cylinder

	gl.bindBuffer(gl.ARRAY_BUFFER, cylinder.positionBuffer);
	
	vertices = [];

	var upperring = [];
	var lowerring = [];

	var n = 24;
	for (var i = 0; i<n; i++) {
		upperring.push(Math.sin((i/n)*2*Math.PI)); // x
		upperring.push(Math.cos((i/n)*2*Math.PI)); // y
		upperring.push(1.0); // height / 2

		lowerring.push(Math.sin((i/n)*2*Math.PI)); // x
		lowerring.push(Math.cos((i/n)*2*Math.PI)); // y
		lowerring.push(-1.0); // height / 2
	}

	vertices = vertices.concat(upperring);
	vertices = vertices.concat(upperring);
	vertices = vertices.concat(lowerring);
	vertices = vertices.concat(lowerring);


	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
	cylinder.positionBuffer.itemSize = 3;
	cylinder.positionBuffer.numItems = n*4;
	gl.bindBuffer(gl.ARRAY_BUFFER, cylinder.colorBuffer);
	colors = [
		[1.0, 0.0, 0.0, 1.0], // top
		[0.0, 1.0, 0.0, 1.0], // side
		[0.0, 0.0, 1.0, 1.0], // bottom
	];

	var unpackedColors = [];
	for (var i = 0; i<n; i++) { unpackedColors = unpackedColors.concat(colors[0]); }
	for (var i = 0; i<n; i++) { unpackedColors = unpackedColors.concat(colors[1]); }
	for (var i = 0; i<n; i++) { unpackedColors = unpackedColors.concat(colors[1]); }
	for (var i = 0; i<n; i++) { unpackedColors = unpackedColors.concat(colors[2]); }


	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(unpackedColors), gl.STATIC_DRAW);
	cylinder.colorBuffer.itemSize = 4;
	cylinder.colorBuffer.numItems = n*4;
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cylinder.indexBuffer);


	var cylinderVertexIndices = [];

	for (var i = 1; i < n-1; i++) {
		var j = i+n;
		var k = j+n;
		var l = k+n;
		cylinderVertexIndices = cylinderVertexIndices.concat([0, i+1, i]);
		cylinderVertexIndices = cylinderVertexIndices.concat([l, l+1, n*3]);
	}

	for (var i = 0; i < n; i++) {
		var j = i+n;
		var k = j+n;
		var l = k+n;
		cylinderVertexIndices = cylinderVertexIndices.concat([j, n+(i+1)%n, k]);
		cylinderVertexIndices = cylinderVertexIndices.concat([k, n+(i+1)%n, 2*n+(i+1)%n]);
	}

	gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(cylinderVertexIndices), gl.STATIC_DRAW);
	cylinder.indexBuffer.itemSize = 1;
	cylinder.indexBuffer.numItems = cylinderVertexIndices.length;
}