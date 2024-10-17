<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    
    // Aqui você pode processar os dados, como enviar por e-mail ou armazenar em um banco de dados
    // Por exemplo, você pode enviar um e-mail (não incluído neste exemplo)

    echo "Obrigado, $name! Sua mensagem foi enviada.";
} else {
    echo "Erro ao enviar a mensagem.";
}
?>
