const {app,BrowserWindow} = require('electron')
const path = require('path')
const WinState = require('electron-win-state').default
//获取网站截图
require('./controller/getSource')
//alert
require('./controller/alert')
//打开窗口
require('./controller/openWIndow')
//获取图片路径
require('./controller/getFileList')
//buildMenu
require('./controller/buildMenu')

const createWindow = ()=>{
  const winState = new WinState({
    defaultWidth: 800,
    defaultHeight: 600,
    electronStoreOptions:{
      name:'window-state-main'
    }
  })
  const win = new BrowserWindow({
    ...winState.winOptions,
    webPreferences:{
      preload:path.resolve(__dirname,'./preload/index.js')
    },
    show:false
  })

  winState.manage(win)
  // win.webContents.openDevTools()
  win.loadURL('http://localhost:5173')

  //页面加载完毕在显示窗口
  win.on('ready-to-show',()=>{
    win.show()
  })

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

if (require('electron-squirrel-startup')) app.quit();
