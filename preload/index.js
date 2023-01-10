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

const getFileList = async()=>{
  const fileList = await ipcRenderer.invoke('on-getFiles-event')
  return fileList
}
contextBridge.exposeInMainWorld('myApi', {
  sendUrl,
  alert,
  openWindow,
  getFileList
})