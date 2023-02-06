<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './PHPMailer/src/Exception.php';
require './PHPMailer/src/PHPMailer.php';
require './PHPMailer/src/SMTP.php';

// if(isset($_POST['send'])){
    $nombre = htmlentities($_POST['nombre']);
    $email = htmlentities($_POST['email']);
    $phone = htmlentities($_POST['phone']);

    
    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'gianfernandez.100@gmail.com';
    // $mail->Username = 'gian.fernandez@tecsup.edu.pe';
    $mail->Password = 'ixirklncoeyrvtjg'; 
    // $mail->Password = 'bqcffeeswulazdvx'; De EDUCATIVO
    $mail->Port = 465;
    $mail->SMTPSecure = 'ssl';
    $mail->CharSet = 'UTF-8';
    $mail->isHTML(true);
    $mail->setFrom($email, $nombre);
    $mail->addAddress('markcarranzafer12@gmail.com');
    // $mail->addCC('ejemplo@gmail.com');
    
    // Asunto
    $mail->Subject = ("Contacto web: $email ($phone)");
    $mail->Body = 'Nombre: '.$nombre. '<br>Email: '.$email. '<br>Phone: '.$phone;
    $mail->send();

//     header('Location: ./presentacion.php');
// }


?>