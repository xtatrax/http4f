<?php
//JavaScriptから呼び出されるクラス
class Test{
	//JavaScriptから呼び出して良いクラスか確認のため記述する
	static $JS_ENABLE;	
	//不正な呼び出しを防ぐために、「JS_」を付ける
	public static function JS_add($a,$b){
		return $a+$b;
	}
}