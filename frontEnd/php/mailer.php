<?php


      require_once('/usr/share/php/libphp-phpmailer/class.phpmailer.php');
      $mail = new PHPMailer(); // defaults to using php "mail()"
      $mail->AddReplyTo($_POST['fullName']);
      $mail->SetFrom($_POST['email']);
      $mail->AddAddress("sikhovski@icloud.com");
      $mail->Subject    = "Work: " . 'Message from - '. $_POST['fullName'];
      $mail->MsgHTML($_POST['comment']);

      if(!$mail->Send()) {
      echo "Mailer Error: " . $mail->ErrorInfo;
      } else {
      echo "Message sent!";
      }
      header('location: /#/');

?>