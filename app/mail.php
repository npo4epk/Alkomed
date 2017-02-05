<?php

$recepient = "nekit-1989@mail.ru";
$sitename = "grandmedica@gmail.by";

$name = trim($_POST["name"]);
$tel = trim($_POST["tel"]);

$message = "

Hello!
Review:

Name: $name;
tel : $tel;

";

$pagetitle = "You have a new negative review at \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $email");