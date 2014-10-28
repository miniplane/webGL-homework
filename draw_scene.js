
function draw_scene() {
	gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

	mat4.perspective(45, gl.viewportWidth / gl.viewportHeight, 0.1, 100.0, pMatrix);


	// triangle
	mat4.identity(mvMatrix);

	mat4.translate(mvMatrix, [-3.0, 0.0, -7.0]);

	mvPushMatrix();
	mat4.rotate(mvMatrix, degToRad(rPyramid), [1, 1, 0]);

	draw_object(pyramidVertexPositionBuffer, pyramidVertexColorBuffer, pyramidVertexIndexBuffer);

	mvPopMatrix();



	//square
	mat4.identity(mvMatrix);

	mat4.translate(mvMatrix, [0.0, 0.0, -7.0]);

	mvPushMatrix();
	mat4.rotate(mvMatrix, degToRad(rCube), [1, 1, 1]);

	draw_object(cubeVertexPositionBuffer, cubeVertexColorBuffer, cubeVertexIndexBuffer);

	mvPopMatrix();



	// cylinder
	mat4.identity(mvMatrix);

	mat4.translate(mvMatrix, [3.0, 0.0, -7.0]);

	mvPushMatrix();
	mat4.rotate(mvMatrix, degToRad(rCylinder), [1, 1, 1]);

	draw_object(cylinderVertexPositionBuffer, cylinderVertexColorBuffer, cylinderVertexIndexBuffer);

	mvPopMatrix();

}

function draw_object(vertexPositionBuffer, vertexColorBuffer, vertexIndexBuffer) {
	gl.bindBuffer(gl.ARRAY_BUFFER, vertexPositionBuffer);
	gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, vertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);

	gl.bindBuffer(gl.ARRAY_BUFFER, vertexColorBuffer);
	gl.vertexAttribPointer(shaderProgram.vertexColorAttribute, vertexColorBuffer.itemSize, gl.FLOAT, false, 0, 0);

	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, vertexIndexBuffer);
	setMatrixUniforms();
	gl.drawElements(gl.TRIANGLES, vertexIndexBuffer.numItems, gl.UNSIGNED_SHORT, 0);
}
