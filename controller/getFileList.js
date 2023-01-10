const {ipcMain} = require('electron') 
const fs = require('fs')
const {readdir} = require('fs/promises')
const path = require('path')

ipcMain.handle('on-getFiles-event',async (e,args)=>{
  // const files =  fs.readdirSync(path.resolve(__dirname,'../public/uploads/'))
  const files = await readdir(path.resolve(__dirname,'../public/uploads/'))
  
  return files
})