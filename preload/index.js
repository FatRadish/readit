const { contextBridge, ipcRenderer } = require('electron')

const sendUrl = async (url) => {
  const request = await ipcRenderer.invoke('on-url-event', url)
  return request
}

contextBridge.exposeInMainWorld('myApi', {
  sendUrl
})