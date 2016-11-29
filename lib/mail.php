<?php
if ($_POST['imya'] !=0 or $_POST['email'] != 0){
$to = "forexmisha@mail.ru"; //Почта получателя, через запятую можно указать сколько угодно адресов
$tema = "Позвоните мне!!!"; //Загаловок сообщения
$message = "Имя".$_POST['imya'];
$message .= "Телефон".$_POST['email'];
mail ($to, $tema, $message);
header ('Location: /');
}else{
header ('Location: /');
}
?>
