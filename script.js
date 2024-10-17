document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Envia os dados para o PHP usando fetch
    fetch('feedback.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&message=${encodeURIComponent(message)}`
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('response-message').innerText = data;
        document.getElementById('feedback-form').reset(); // Limpa o formulário
    })
    .catch(error => {
        document.getElementById('response-message').innerText = 'Ocorreu um erro. Tente novamente.';
    });
});
