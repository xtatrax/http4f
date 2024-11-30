<?php
//JavaScriptから呼び出されるクラス
class ReadFile{
    //JavaScriptから呼び出して良いクラスか確認のため記述する
    static $JS_ENABLE;  
    //不正な呼び出しを防ぐために、「JS_」を付ける
    public static function js_read($filepath){
        // ファイルを変数に格納
        $filename =  $_POST['filepath'];

        $lines=array();

        // fopenでファイルを開く（'r'は読み込みモードで開く）
        $fp = fopen($filename, 'r');
        
        // whileで行末までループ処理
        while (!feof($fp)) {
        
            // fgetsでファイルを読み込み、変数に格納
            $txt = fgets($fp);
            
            // ファイルを読み込んだ変数を出力
            array_push( $lines, $txt);
        
        }
        
        // fcloseでファイルを閉じる
        fclose($fp);
        
        return json_encode($lines);;
    }
}
?>