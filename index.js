const {app, BrowserWindow} = require('electron');

let win = null;

app.on('ready', () => {
    win = new BrowserWindow();
    win.loadURL(`file://${__dirname}/index.html`);

    console.log(`process.type : ${process.type}`);
    console.log(`process.versions : ${JSON.stringify(process.versions)}`);
    console.log(`process.versions.electron : ${process.versions.electron}`);
    console.log(`process.versions.chrome : ${process.versions.chrome}`);
    console.log(`process.versions.node : ${process.versions.node}`);

    console.log(`process.mas : ${process.mas}`);
    console.log(`process.windowsStore : ${process.windowsStore}`);
    console.log(`process.defaultApp : ${process.defaultApp}`);
});