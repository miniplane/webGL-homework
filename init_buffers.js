
	var pyramidVertexPositionBuffer;
	var pyramidVertexColorBuffer;
	var pyramidVertexIndexBuffer;

	var cubeVertexPositionBuffer;
	var cubeVertexColorBuffer;
	var cubeVertexIndexBuffer;

	var cylinderVertexPositionBuffer;
	var cylinderVertexColorBuffer;
	var cylinderVertexIndexBuffer;

	function init_buffers() {

		pyramidVertexPositionBuffer = gl.createBuffer();
	    gl.bindBuffer(gl.ARRAY_BUFFER, pyramidVertexPositionBuffer);
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
	    pyramidVertexPositionBuffer.itemSize = 3;
	    pyramidVertexPositionBuffer.numItems = 5;

		pyramidVertexColorBuffer = gl.createBuffer();
	    gl.bindBuffer(gl.ARRAY_BUFFER, pyramidVertexColorBuffer);

	    var side0 = [1.0, 1.0, 0.0, 1.0];
	    var side1 = [1.0, 0.0, 0.0, 1.0];
	    var side2 = [0.0, 0.0, 1.0, 1.0];
	    var side3 = [0.0, 1.0, 0.0, 1.0];
	    var bottom = [1.0, 1.0, 1.0, 1.0];

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
	    pyramidVertexColorBuffer.itemSize = 4;
	    pyramidVertexColorBuffer.numItems = colors.length;


    	pyramidVertexIndexBuffer = gl.createBuffer();
	    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, pyramidVertexIndexBuffer);
	    var pyramidVertexIndices = [
	    	6, 3, 0, 9, 6, 0,
	    	12,  1,  5,
	    	13,  4,  8,
	    	14,  7, 11,
	    	15, 10,  2
	    ];

	    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(pyramidVertexIndices), gl.STATIC_DRAW);
	    pyramidVertexIndexBuffer.itemSize = 1;
	    pyramidVertexIndexBuffer.numItems = 12+6;




	    // cube

		cubeVertexPositionBuffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexPositionBuffer);
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
		cubeVertexPositionBuffer.itemSize = 3;
		cubeVertexPositionBuffer.numItems = 24;
		cubeVertexColorBuffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexColorBuffer);
		colors = [
			[1.0, 0.0, 0.0, 1.0], // Front face
			[1.0, 1.0, 0.0, 1.0], // Back face
			[0.0, 1.0, 0.0, 1.0], // Top face
			[0.0, 0.5, 0.5, 1.0], // Bottom face
			[1.0, 0.0, 1.0, 1.0], // Right face
			[0.0, 0.0, 1.0, 1.0], // Left face
		];
		var unpackedColors = [];

		for (var i in colors) {
			var color = colors[i];
			for (var j=0; j < 4; j++) {
				unpackedColors = unpackedColors.concat(color);
			}
		}
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(unpackedColors), gl.STATIC_DRAW);
		cubeVertexColorBuffer.itemSize = 4;
		cubeVertexColorBuffer.numItems = 24;
		cubeVertexIndexBuffer = gl.createBuffer();
		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBuffer);

		var cubeVertexIndices = [
			0, 1, 2, 0, 2, 3, // Front face
			4, 5, 6, 4, 6, 7, // Back face
			8, 9, 10, 8, 10, 11, // Top face
			12, 13, 14, 12, 14, 15, // Bottom face
			16, 17, 18, 16, 18, 19, // Right face
			20, 21, 22, 20, 22, 23 // Left face
		]
		gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(cubeVertexIndices), gl.STATIC_DRAW);
		cubeVertexIndexBuffer.itemSize = 1;
		cubeVertexIndexBuffer.numItems = 36;



	// cylinder

		cylinderVertexPositionBuffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, cylinderVertexPositionBuffer);
		vertices = [];

		var n = 24;
		for (var i; i<n; i++) {
			vertices.push(Math.sin((i/n)*2*Math.PI)); // x
			vertices.push(Math.cos((i/n)*2*Math.PI)); // y
			vertices.push(3); // heigh / 2

			vertices.push(Math.sin((i/n)*2*Math.PI)); // x
			vertices.push(Math.cos((i/n)*2*Math.PI)); // y
			vertices.push(3); // heigh / 2
		}
		for (var i; i<n; i++) {
			vertices.push(Math.sin((i/n)*2*Math.PI)); // x
			vertices.push(Math.cos((i/n)*2*Math.PI)); // y
			vertices.push(-3); // heigh / 2
			
			vertices.push(Math.sin((i/n)*2*Math.PI)); // x
			vertices.push(Math.cos((i/n)*2*Math.PI)); // y
			vertices.push(-3); // heigh / 2
		}


		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
		cubeVertexPositionBuffer.itemSize = 3;
		cubeVertexPositionBuffer.numItems = 24;
		cubeVertexColorBuffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexColorBuffer);
		colors = [
			[1.0, 0.0, 0.0, 1.0], // Front face
			[1.0, 1.0, 0.0, 1.0], // Back face
			[0.0, 1.0, 0.0, 1.0], // Top face
			[0.0, 0.5, 0.5, 1.0], // Bottom face
			[1.0, 0.0, 1.0, 1.0], // Right face
			[0.0, 0.0, 1.0, 1.0], // Left face
		];
		var unpackedColors = [];

		for (var i in colors) {
			var color = colors[i];
			for (var j=0; j < 4; j++) {
				unpackedColors = unpackedColors.concat(color);
			}
		}
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(unpackedColors), gl.STATIC_DRAW);
		cubeVertexColorBuffer.itemSize = 4;
		cubeVertexColorBuffer.numItems = 24;
		cubeVertexIndexBuffer = gl.createBuffer();
		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBuffer);

		var cubeVertexIndices = [
			0, 1, 2, 0, 2, 3, // Front face
			4, 5, 6, 4, 6, 7, // Back face
			8, 9, 10, 8, 10, 11, // Top face
			12, 13, 14, 12, 14, 15, // Bottom face
			16, 17, 18, 16, 18, 19, // Right face
			20, 21, 22, 20, 22, 23 // Left face
		]
		gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(cubeVertexIndices), gl.STATIC_DRAW);
		cubeVertexIndexBuffer.itemSize = 1;
		cubeVertexIndexBuffer.numItems = 36;


}