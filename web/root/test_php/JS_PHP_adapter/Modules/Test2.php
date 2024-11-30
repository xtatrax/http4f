<?php
//JavaScriptから呼び出されるクラス
class Test2{
	//JavaScriptから呼び出して良いクラスか確認のため記述する
	static $JS_ENABLE;	
	static $DATA = ["たけやり","こんぼう","どうの剣"];
	//不正な呼び出しを防ぐために、「JS_」を付ける
	public static function JS_getValues(){
		return Self::$DATA;
	}
	public static function JS_getValue($index){
		return Self::$DATA[$index];
	}
}