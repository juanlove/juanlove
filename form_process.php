<?php

$name = $_Post ['name'];
$email = $_Post ['email'];
$message = $_Post ['message'];

$to = "juan.love@outlook.com";
$subject = "New Message";

mail ($to, $subject, $message, "From: " . $name);
echo "Your Message has been sent";


?>
