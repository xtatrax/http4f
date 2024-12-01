<head>
    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv="Cache-Control" content="no-cache">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="Expires" content="0">
</head>

<body>
    <?php
        $timestamp = time() ;
        $filename = "C:/00_dev/env/Apache24/logs/access_" . date( "Y-m-d" , $timestamp ) . ".log";
        $lines = file($filename);
    ?>
    <ul>
        <?php foreach ($lines as $line) : ?>
 
        <!-- 配列の要素を1行ずつ<li>タグに埋め込む -->
        <li><?php echo $line; ?></li>

        <?php endforeach; ?>
    </ul>
</body>