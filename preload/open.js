const { contextBridge, ipcRenderer } = require('electron')

const closeWinow = ()=>{
  ipcRenderer.invoke('on-close-event')
}

contextBridge.exposeInMainWorld('myApi', {
  closeWinow
})