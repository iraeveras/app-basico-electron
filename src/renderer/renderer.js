const { ipcRenderer } = require('electron');

ipcRenderer.send('mensagem-do-renderer', 'Olá, main process!');
ipcRenderer.on('resposta-do-main', (event, message) => {
    console.log(message);
});

const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o comportamento padrão de envio do formulário

    // Coleta os dados inseridos pelo usuário
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Exibe os dados no console (substitua por lógica de autenticação)
    console.log('Usuário:', username);
    console.log('Senha:', password);

    // Aqui você pode implementar a lógica de verificação de credenciais,
    // seja através de uma API ou usando comunicação entre processos (IPC) do Electron.
});