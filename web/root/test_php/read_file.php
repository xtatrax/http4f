<!-- js
$.ajax({
type: “POST”,
url: “sample.php”,
cache: false,
data: filepath=test”,
success: function(html){
samplefunc(html);
}
});
-->
<?php
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
    
    echo json_encode($lines);
?>