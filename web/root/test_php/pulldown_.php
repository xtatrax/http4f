<head>
    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv="Cache-Control" content="no-cache">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="Expires" content="0">
</head>

<body>
    <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="GET">
        <select name="log_name">
            <option value="acsses_log">acsses_log</option>
            <option value="acsses_my_log">acsses_my_log</option>
            <option value="error_log">error_log</option>
            <option value="ssl_acsses_log">ssl_acsses_log</option>
            <option value="ssl_error_log">ssl_error_log</option>
            <option value="ssl_request_log">ssl_request_log</option>
        </select>
        <input type="submit" value="送信" />
    </form>

    <?php
        $timestamp = time() ;
        $filename = "C:/00_dev/env/Apache24/logs/access_" . date( "Y-m-d" , $timestamp ) . ".log";
        while(true) :
            $lines = file($filename);
        ?>
        <ul>
            <?php foreach ($lines as $line) : ?>
    
            <!-- 配列の要素を1行ずつ<li>タグに埋め込む -->
            <li><?php echo $line; ?></li>

            <?php endforeach; ?>
        </ul>
        <?php sleep(5); ?>
    <?php endwhile; ?>



    <!-- サンプルコード -->
    <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="GET">
        名前:<input type="text" name="yourname" value="" /><br/>
        <input type="submit" value="送信" />
    </form>
    <?php
        //$_GET['yourname']が存在していれば
        if(isset($_GET['yourname']) && $_GET['yourname'] != ''){
            echo '<strong>$_GET[\'yourname\']が送信されました。値は[ '.$_GET['yourname'].' ]です。'."</strong><br/>\n";
            ?>
            <?php
        }else{
            echo '<strong>$_GET[\'yourname\']はまだ送信されていません。'."</strong><br/>\n";
        }
    ?>
</body>