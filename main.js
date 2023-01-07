const {app,BrowserWindow} = require('electron')
const path = require('path')
const WinState = require('electron-win-state').default
// import {app , BrowserWindow} from 'electron'

const createWindow = ()=>{
  const winState = new WinState({
    defaultWidth: 800,
    defaultHeight: 600,
  })
  const win = new BrowserWindow({
    ...winState.winOptions,
    webPreferences:{
      preload:path.resolve(__dirname,'./preload/index.js')
    }
  })
  winState.manage(win)
  win.webContents.openDevTools()
  win.loadURL('http://localhost:5173')
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.whenReady().then(()=>{

  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
}) 