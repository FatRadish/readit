const { contextBridge, ipcRenderer } = require('electron')

const sendUrl = async (url) => {
  const request = await ipcRenderer.invoke('on-url-event', url)
  return request
}

const alert = (msg)=>{
  ipcRenderer.invoke('on-alert-event',msg)
}

const openWindow = (url)=>{
  ipcRenderer.invoke('on-open-event',url)
}

contextBridge.exposeInMainWorld('myApi', {
  sendUrl,
  alert,
  openWindow
})