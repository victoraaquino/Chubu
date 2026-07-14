const { app, BrowserWindow, Menu, ipcMain, BrowserView } = require('electron');
const path = require('node:path');

const appIcon = path.join(__dirname, 'resources', 'icon.png');

function createWindow() {
  const window = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 800,
    minHeight: 600,
    frame: false,
    title: 'Chubu 🌸',
    icon: appIcon,
    backgroundColor: '#070707',
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  const view = new BrowserView({
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  const titlebarHeight = 33;
  const updateViewBounds = () => {
    const { width, height } = window.getBounds();
    view.setBounds({
      x: 0,
      y: titlebarHeight,
      width,
      height: Math.max(0, height - titlebarHeight),
    });
  };

  window.setBrowserView(view);
  updateViewBounds();
  window.on('resize', updateViewBounds);
  window.loadFile(path.join(__dirname, 'app', 'index.html'));
  view.webContents.loadURL('https://music.youtube.com/');
}

app.whenReady().then(() => {
  Menu.setApplicationMenu(null);
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

ipcMain.handle('window-control', (event, action) => {
  const window = BrowserWindow.fromWebContents(event.sender);
  if (!window) return;

  switch (action) {
    case 'minimize':
      window.minimize();
      break;
    case 'maximize':
      if (window.isMaximized()) {
        window.unmaximize();
      } else {
        window.maximize();
      }
      break;
    case 'close':
      window.close();
      break;
  }
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
