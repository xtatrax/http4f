// 参考/ソース元:
// https://qiita.com/hiranuma/items/a789f2c0cb9f0403fc0f
// https://cartman0.hatenablog.com/entry/2015/07/28/012339
// 以下のコードは、上記のURLにあるコードを参考に、一部改変しています。

window.onload = function(){
(function(){
	var canvas1 = document.getElementById('main_canvas');

	var datas = [20, 50, 70, 100, 130, 200, 250];
	var line_opts = {
	  color: 'red',
	  width: 2
	};
	var dot_opts = {
	  color: 'black',
	  radius: 2
	};
/* 	var text_opts = {
	  color: 'green',
	  font: "12px 'san-serif', 'Arial'",
	  // テキストの行揃え
	  textAlign: 'center',
	  // テキストのベースライン
	  textBaseline: 'top'
	} */

	lineGraph(canvas1, datas, line_opts, dot_opts);

	function lineGraph(canvas_obj, datas, line_opts, dot_opts){
	  var c = canvas_obj.getContext('2d');
	  // line
	  var pos1 = {
		x: 0,
		y: canvas_obj.height
	  };
	  var pos2 = {
		x: 0,
		y: 0
	  };

	  var dataWH = {
		w: canvas_obj.width / datas.length,
		h: canvas_obj.height
	  };
	  for (var i = 0; i < datas.length; i++){
		line(c, datas[i], dataWH, line_opts, dot_opts);
	  }

	  function line(context, data, dataWH, line_opts, dot_opts){
		context.save();
		context.strokeStyle = line_opts.color;
		context.lineWidth = line_opts.width;
		context.beginPath();
		context.moveTo(pos1.x, pos1.y);
		pos2.x += dataWH.w;
		pos2.y = dataWH.h - data;
		context.lineTo(pos2.x, pos2.y);
		context.stroke();
		//pos1更新
		pos1 = pos2;
		context.restore();

		//点
		context.save();
		context.fillStyle = dot_opts.color;
		context.moveTo(pos2.x, pos2.y);
		context.arc(pos2.x, pos2.y, dot_opts.radius, 0, 2 * Math.PI);
		context.fill();
		context.restore();

/* 		//数値
		context.save();
		context.fillStyle = text_opts.color;
		context.font = text_opts.font;
		// テキストの行揃え
		context.textAlign = text_opts.textAlign;
		// テキストのベースライン
		context.textBaseline = text_opts.textBaseline;
		context.fillText(data, pos2.x, pos2.y);
		context.restore();
 */	  }
	}
  })();
}