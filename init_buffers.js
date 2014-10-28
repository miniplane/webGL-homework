
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
	    	-1.0, -1.0,  1.0,	// 0
			 1.0, -1.0,  1.0,	// 1
			 1.0, -1.0, -1.0,	// 2
			-1.0, -1.0, -1.0,	// 3
	         0.0,  1.0,  0.0,	// 4
	    ];

	    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
	    pyramidVertexPositionBuffer.itemSize = 3;
	    pyramidVertexPositionBuffer.numItems = 5;

		pyramidVertexColorBuffer = gl.createBuffer();
	    gl.bindBuffer(gl.ARRAY_BUFFER, pyramidVertexColorBuffer);


	    var colors = [
	        // Front face
	        1.0, 0.0, 0.0, 1.0,
	        0.0, 1.0, 0.0, 1.0,
	        0.0, 0.0, 1.0, 1.0,
	        // Right face
	        1.0, 0.0, 0.0, 1.0,
	        0.0, 0.0, 1.0, 1.0,
	        0.0, 1.0, 0.0, 1.0,
	        // Back face
	        1.0, 0.0, 0.0, 1.0,
	        0.0, 1.0, 0.0, 1.0,
	        0.0, 0.0, 1.0, 1.0,
	        // Left face
	        1.0, 0.0, 0.0, 1.0,
	        0.0, 0.0, 1.0, 1.0,
	        0.0, 1.0, 0.0, 1.0,

	        // Right bottom
	        1.0, 0.0, 0.0, 1.0,
	        0.0, 0.0, 1.0, 1.0,
	        0.0, 1.0, 0.0, 1.0,
	        // Left Bottom
	        /*1.0, 0.0, 0.0, 1.0,
	        0.0, 0.0, 1.0, 1.0,
	        0.0, 1.0, 0.0, 1.0,*/
	    ];
	    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
	    pyramidVertexColorBuffer.itemSize = 4;
	    pyramidVertexColorBuffer.numItems = 15;


    	pyramidVertexIndexBuffer = gl.createBuffer();
	    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, pyramidVertexIndexBuffer);
	    var pyramidVertexIndices = [
	    	0, 1, 4,
	    	1, 2, 4,
	    	2, 3, 4,
	    	3, 0, 4,
	    	0, 3, 1, 1, 3, 2,
	    ];

	    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(pyramidVertexIndices), gl.STATIC_DRAW);
	    pyramidVertexIndexBuffer.itemSize = 1;
	    pyramidVertexIndexBuffer.numItems = 12+6;




	    // cube

	    cubeVertexPositionBuffer = gl.createBuffer();
	    gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexPositionBuffer);
	    vertices = [
	       1.0,  1.0,  1.0,
	       1.0,  1.0, -1.0,
	       1.0, -1.0,  1.0,
	       1.0, -1.0, -1.0,

	      -1.0,  1.0,  1.0,
	      -1.0,  1.0, -1.0,
	      -1.0, -1.0,  1.0,
	      -1.0, -1.0, -1.0
	    ];
	    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
	    cubeVertexPositionBuffer.itemSize = 3;
	    cubeVertexPositionBuffer.numItems = 8;


		cubeVertexColorBuffer = gl.createBuffer();
		    gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexColorBuffer);
		    colors = [
		      [1.0, 0.0, 0.0, 1.0],     // Front face
		      [1.0, 1.0, 0.0, 1.0],     // Back face
		      [0.0, 1.0, 0.0, 1.0],     // Top face
		      [1.0, 0.5, 0.5, 1.0],     // Bottom face
		      [1.0, 0.0, 1.0, 1.0],     // Right face
		      [0.0, 0.0, 1.0, 1.0],     // Left face
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
		    cubeVertexColorBuffer.numItems = 8;

		    cubeVertexIndexBuffer = gl.createBuffer();
		    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBuffer);
		    var cubeVertexIndices = [
		    	0, 2, 1, 1, 2, 3,
		    	4, 5, 6, 5, 7, 6,
		    	0, 1, 5, 5, 4, 0,

		    	6, 2, 0, 0, 4, 6,
		    	2, 6, 3, 3, 6, 7, //todo
		    	1, 3, 7, 1, 7, 5, //todo
		    ];

		    /*
				0, 1, 2,      0, 2, 3,    // Front face
				4, 5, 6,      4, 6, 7,    // Back face
				8, 9, 10,     8, 10, 11,  // Top face
				12, 13, 14,   12, 14, 15, // Bottom face
				16, 17, 18,   16, 18, 19, // Right face
				20, 21, 22,   20, 22, 23  // Left face
		    	]*/
		    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(cubeVertexIndices), gl.STATIC_DRAW);
		    cubeVertexIndexBuffer.itemSize = 1;
		    cubeVertexIndexBuffer.numItems = 36;
	}