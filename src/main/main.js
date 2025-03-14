const { app, BrowserWindow, ipcMain } = require('electron');

function createWindow() {
    const win = new BrowserWindow({
        width: 400,
        height: 600,
        webPreferences: {
            nodeIntegration: true, // Permite uso do Node.js no renderer
            contextIsolation: false // Importante para integração com bibliotecas
        }
    });

    win.removeMenu()

    win.loadFile('src/renderer/index.html');

}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});

ipcMain.on('mensagem-do-render', (event, args) => {
    event.reply('resposta-do-main', 'Dados processados com sucesso!');
})