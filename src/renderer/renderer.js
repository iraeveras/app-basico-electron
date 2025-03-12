const { ipcRenderer } = require('electron');

ipcRenderer.send('mensagem-do-renderer', 'Olá, main process!');
ipcRenderer.on('resposta-do-main', (event, message) => {
    console.log(message);
});