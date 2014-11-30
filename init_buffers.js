
function Shape() {
	this.positionBuffer = gl.createBuffer();
	this.normalBuffer = gl.createBuffer();
	this.colorBuffer = gl.createBuffer();
	this.indexBuffer = gl.createBuffer();

	this.positionBuffer.itemSize = 3;
	this.normalBuffer.itemSize = 3;
	this.colorBuffer.itemSize = 4;
	this.indexBuffer.itemSize = 1;

	this.elementType = gl.TRIANGLES;

	return this;
}

var coordinate_system;
var pyramid;
var cube;
var cylinder;
var sphere;




function init_pyramid_buffers() {
	
	pyramid = new Shape();

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

    gl.bindBuffer(gl.ARRAY_BUFFER, pyramid.positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    pyramid.positionBuffer.numItems = 5;


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
    gl.bindBuffer(gl.ARRAY_BUFFER, pyramid.colorBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(flatcolors), gl.STATIC_DRAW);
    pyramid.colorBuffer.numItems = colors.length;


    var pyramidVertexIndices = [
    	6, 3, 0, 9, 6, 0,
    	12,  1,  5,
    	13,  4,  8,
    	14,  7, 11,
    	15, 10,  2
    ];

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, pyramid.indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(pyramidVertexIndices), gl.STATIC_DRAW);
    pyramid.indexBuffer.numItems = 12+6;

}




function init_cube_buffers() {
	cube = new Shape();

    gl.bindBuffer(gl.ARRAY_BUFFER, cube.normalBuffer);
    var normals = [
		// Front face
		0.0,  0.0,  1.0,
		0.0,  0.0,  1.0,
		0.0,  0.0,  1.0,
		0.0,  0.0,  1.0,
		// Back face
		0.0,  0.0, -1.0,
		0.0,  0.0, -1.0,
		0.0,  0.0, -1.0,
		0.0,  0.0, -1.0,
		// Top face
		0.0,  1.0,  0.0,
		0.0,  1.0,  0.0,
		0.0,  1.0,  0.0,
		0.0,  1.0,  0.0,
		// Bottom face
		0.0, -1.0,  0.0,
		0.0, -1.0,  0.0,
		0.0, -1.0,  0.0,
		0.0, -1.0,  0.0,
		// Right face
		1.0,  0.0,  0.0,
		1.0,  0.0,  0.0,
		1.0,  0.0,  0.0,
		1.0,  0.0,  0.0,
		// Left face
		-1.0,  0.0,  0.0,
		-1.0,  0.0,  0.0,
		-1.0,  0.0,  0.0,
		-1.0,  0.0,  0.0,
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(normals), gl.STATIC_DRAW);
    cube.normalBuffer.itemSize = 3;
    cube.normalBuffer.numItems = 24;


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


	gl.bindBuffer(gl.ARRAY_BUFFER, cube.positionBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
	cube.positionBuffer.numItems = 24;

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
	gl.bindBuffer(gl.ARRAY_BUFFER, cube.colorBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(unpackedColors), gl.STATIC_DRAW);
	cube.colorBuffer.numItems = 24;

	var cubeVertexIndices = [
		0, 1, 2, 0, 2, 3, // Front face
		4, 5, 6, 4, 6, 7, // Back face
		8, 9, 10, 8, 10, 11, // Top face
		12, 13, 14, 12, 14, 15, // Bottom face
		16, 17, 18, 16, 18, 19, // Right face
		20, 21, 22, 20, 22, 23 // Left face
	]
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cube.indexBuffer);
	gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(cubeVertexIndices), gl.STATIC_DRAW);
	cube.indexBuffer.numItems = 36;

}




function init_cylinder_buffers(n) {
	cylinder = new Shape();

	var vertices = [];
	var normals = [];

	var upperring = [];
	var lowerring = [];

	var normalsUp = [];
	var normalsSide = [];
	var normalsDown = [];

	for (var i = 0; i<n; i++) {
		var angle = (i/n)*2*Math.PI;

		upperring.push(Math.sin(angle)); // x
		upperring.push(Math.cos(angle)); // y
		upperring.push(1.0); // height / 2

		lowerring.push(Math.sin(angle)); // x
		lowerring.push(Math.cos(angle)); // y
		lowerring.push(-1.0); // height / 2

		normalsUp.push(0.0);
		normalsUp.push(0.0);
		normalsUp.push(1.0);

		normalsSide.push(Math.sin(angle));
		normalsSide.push(Math.cos(angle));
		normalsSide.push(0.0);

		normalsDown.push(0.0);
		normalsDown.push(0.0);
		normalsDown.push(-1.0);
	}

	vertices = vertices.concat(upperring);
	vertices = vertices.concat(upperring);
	vertices = vertices.concat(lowerring);
	vertices = vertices.concat(lowerring);

	normals = normals.concat(normalsUp);
	normals = normals.concat(normalsSide);
	normals = normals.concat(normalsSide);
	normals = normals.concat(normalsDown);


	gl.bindBuffer(gl.ARRAY_BUFFER, cylinder.positionBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
	cylinder.positionBuffer.numItems = n*4;

	gl.bindBuffer(gl.ARRAY_BUFFER, cylinder.normalBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
	cylinder.normalBuffer.numItems = n*4;

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
	cylinder.indexBuffer.numItems = cylinderVertexIndices.length;
}


function init_sphere_buffers(n, ring_num) {
	sphere = new Shape();

	var positions = [];
	var unpackedColors = [];
	var sphereVertexIndices = [];

	var vertexIndexForRingAndN = function (j, i) {
		return (i%n)+j*n;
	};

	for (var j = 0; j<ring_num; j++) {
		var r = Math.sin((j/(ring_num-1))*Math.PI);
		var height = Math.cos((j/(ring_num-1))*Math.PI);
		for (var i = 0; i<n; i++) {
			positions.push(r*Math.sin((i/n)*2*Math.PI)); // x
			positions.push(r*Math.cos((i/n)*2*Math.PI)); // y
			height_pos = height;
			positions.push(height);

			if (j < ring_num-1) {

				var aa = vertexIndexForRingAndN(j,   i);
				var ab = vertexIndexForRingAndN(j,   i+1);
				var ba = vertexIndexForRingAndN(j+1, i);
				var bb = vertexIndexForRingAndN(j+1, i+1);

				sphereVertexIndices = sphereVertexIndices.concat([aa, ab, bb]);
				sphereVertexIndices = sphereVertexIndices.concat([aa, bb, ba]);
			}

		}
	}

	var color = [1.0, 1.0, 0.0, 1.0]; // yellow

	for (var j = 0; j<ring_num; j++)
		for (var i = 0; i<n; i++) 
			unpackedColors = unpackedColors.concat(color);

	gl.bindBuffer(gl.ARRAY_BUFFER, sphere.positionBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
	sphere.positionBuffer.numItems = n*ring_num;

	sphere.normalBuffer = sphere.positionBuffer;

	gl.bindBuffer(gl.ARRAY_BUFFER, sphere.colorBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(unpackedColors), gl.STATIC_DRAW);
	sphere.colorBuffer.numItems = n*ring_num;

	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, sphere.indexBuffer);
	gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(sphereVertexIndices), gl.STATIC_DRAW);
	sphere.indexBuffer.numItems = sphereVertexIndices.length;

}




function init_buffers() {

	coordinate_system = new Shape();

	var vertices = [
		1.5, 0.0, 0.0,
		0.0, 1.5, 0.0,
		0.0, 0.0, 1.5,
		0.0, 0.0, 0.0
	];

	var colors = [
		1.0, 0.0, 0.0, 1.0,
		0.0, 1.0, 0.0, 1.0,
		0.0, 0.0, 1.0, 1.0,
		1.0, 1.0, 1.0, 1.0
	];

	var normals = [
		0, 0, 0,
		0, 0, 0,
		0, 0, 0,
		0, 0, 0
	];

	var indices = [
		0, 3,
		1, 3,
		2, 3
	];

	gl.bindBuffer(gl.ARRAY_BUFFER, coordinate_system.positionBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
	coordinate_system.positionBuffer.numItems = vertices.length;

	gl.bindBuffer(gl.ARRAY_BUFFER, coordinate_system.normalBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(normals), gl.STATIC_DRAW);
	coordinate_system.normalBuffer.numItems = normals.length;

	gl.bindBuffer(gl.ARRAY_BUFFER, coordinate_system.colorBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
	coordinate_system.colorBuffer.numItems = colors.length;

	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, coordinate_system.indexBuffer);
	gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);
	coordinate_system.indexBuffer.numItems = indices.length;

	coordinate_system.elementType = gl.LINES;


	init_pyramid_buffers();
    init_cube_buffers();
	init_cylinder_buffers(24);
	init_sphere_buffers(24, 12);
}
