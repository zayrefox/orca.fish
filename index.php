<?php

$image = file_get_contents('https://zayrefox.github.io/orca.fish/assets/headshot.jpg');

header('Content-type: image/jpeg;');
header("Content-Length: " . strlen($image));
echo $image;