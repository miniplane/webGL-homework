
//var bunny;
var teapot;

function loadScene () {

    //bunny = new Shape();
    teapot = new Shape();

    //loadModel("bunny.json", bunny);
    loadModel("teapot.json", teapot);
}

function loadModel (jsonPath, model) {
    var request = $.getJSON(jsonPath, function () {}); // waits until json is loaded
    request.done(function (data) {

        //init(data, modelName);
        initBuffers(model, data, gl, shaderProgram);

        // self.models[modelName] = m;
        // self.modelsNameMapping.push(modelName);
    });
}


    // self.vPosArray = data.vertices[0].values;
    // self.triIndices = data.connectivity[0].indices;

function initBuffers (shape, data, gl, shaderProgram) {

    var positions = data.vertices[0].values;
    var loaded_indices = data.connectivity[0].indices
    var unpackedColors = [];
    var color = [1.0, 0.0, 0.0, 1.0];
    for (var i = 0; i < positions.length; i++)
        unpackedColors = unpackedColors.concat(color);

    gl.bindBuffer(gl.ARRAY_BUFFER, shape.positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
    shape.positionBuffer.numItems = positions.length;
    shape.positionBuffer.itemSize = 3;

    gl.bindBuffer(gl.ARRAY_BUFFER, shape.colorBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(unpackedColors), gl.STATIC_DRAW);
    shape.colorBuffer.numItems = unpackedColors.length;
    shape.colorBuffer.itemSize = 4;

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, shape.indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(loaded_indices), gl.STATIC_DRAW);
    shape.indexBuffer.numItems = loaded_indices.length;


    // gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, shape.positionBuffer.itemSize, gl.FLOAT, false, 0, 0);
}

