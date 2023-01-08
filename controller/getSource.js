const {ipcMain , BrowserWindow} = require('electron')

const getSource = (url)=>{
  return new Promise ((resolve,reject)=>{

    const win = new BrowserWindow({
      width:1000,
      height:800,
      show:false,
      webPreferences:{
        //只在内存中加载
        offscreen:true
      }
    })
    win.loadURL(url)

    win.webContents.on('did-finish-load',async ()=>{
      const title = win.getTitle()

      //nativeImage
      try {
        const image = await win.webContents.capturePage()
        const screenshot = image.toDataURL()
          
        resolve({
          title,
          screenshot,
          url
        })
      } catch (error) {
        reject(error)
      }
    })

  })
}

ipcMain.handle('on-url-event',async (e,url)=>{
  const request = await getSource(url)
  return request
})
