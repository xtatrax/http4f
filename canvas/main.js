// 参考/ソース元:
// https://qiita.com/hiranuma/items/a789f2c0cb9f0403fc0f

window.onload = function(){
	const main_canvas = document.getElementById("main_canvas");
	const gl = main_canvas.getContext("webgl");
	main_canvas.width = 800;
	main_canvas.height = 600;
	// WebGLコンテキストが取得できたかどうか調べる
	if (!gl) {
		alert('webgl not supported!');
		return;
	}
	// canvasを初期化する色を設定する
	gl.clearColor(0.0, 0.0, 0.0, 1.0);

	// canvasを初期化する
	gl.clear(gl.COLOR_BUFFER_BIT);

	// ------------ ここから追記 ------------
	// プログラムオブジェクトを作成する
	const program = gl.createProgram();  

	// シェーダのソースを取得する
	const vertexShaderSource = document.getElementById('vertexShader').textContent;
	const fragmentShaderSource = document.getElementById('fragmentShader').textContent;

	// シェーダをコンパイルして、プログラムオブジェクトにシェーダを割り当てる
	const vertexShader = gl.createShader(gl.VERTEX_SHADER);
	gl.shaderSource(vertexShader, vertexShaderSource);
	gl.compileShader(vertexShader);
	gl.attachShader(program, vertexShader);
	const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
	gl.shaderSource(fragmentShader, fragmentShaderSource);
	gl.compileShader(fragmentShader);
	gl.attachShader(program, fragmentShader);

	// シェーダをリンクする
	gl.linkProgram(program);
	// プログラムオブジェクトを有効にする
	gl.useProgram(program);

	// 3つの頂点の座標を定義する
	const triangleVertexPosition = [
		0.0, 0.8, 0.0,
		-0.8, -0.8, 0.0,
		0.8, -0.8, 0.0
	];

	// 頂点バッファを作成する
	const triangleVertexBuffer = gl.createBuffer();
	// 頂点バッファをバインドする
	gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexBuffer);
	// 頂点バッファに頂点データをセットする
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(triangleVertexPosition), gl.STATIC_DRAW);
	
	// Positionのロケーションを取得し、バッファを割り当てる
	const positionLocation = gl.getAttribLocation(program, 'position');
	gl.enableVertexAttribArray(positionLocation);
	gl.vertexAttribPointer(positionLocation, 3, gl.FLOAT, false, 0, 0);

	// 描画する
	gl.drawArrays(gl.LINE_STRIP, 0, 3);
	gl.flush();
	// ------------ ここまで追記 ------------
}