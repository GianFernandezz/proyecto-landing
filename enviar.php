<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './PHPMailer/src/Exception.php';
require './PHPMailer/src/PHPMailer.php';
require './PHPMailer/src/SMTP.php';

if(isset($_POST['send'])){
    $nombre = htmlentities($_POST['nombre']);
    $email = htmlentities($_POST['email']);
    $phone = htmlentities($_POST['phone']);

    // VALIDACION
    

    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'gianfernandez.100@gmail.com';
    $mail->Password = 'ixirklncoeyrvtjg';
    $mail->Port = 465;
    $mail->SMTPSecure = 'ssl';
    $mail->isHTML(true);
    $mail->setFrom($email, $nombre);
    $mail->addAddress('markcarranzafer12@gmail.com');
    // $mail->addCC('walter.moncada.rubio@gmail.com');
    $mail->Subject = ("Contacto web: $email ($phone)");
    $mail->Body = 'Nombre: '.$nombre. '<br>Email: '.$email. '<br>Phone:'.$phone;
    $mail->send();

    header('Location: ./presentacion.php');
}


?>