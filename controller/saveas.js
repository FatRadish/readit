const {Menu,dialog} = require('electron')
const got = require('got')
const path = require('path')
const imageType = require('image-type')
const randomString = require('randomstring')
const fs = require('fs')

const getImage = async(url)=>{

  got.get(url).then(async (response) =>{
    const chunk = Buffer.from(response.rawBody)

    const imgType = imageType(chunk)

    const {filePath , canceled} = await dialog.showSaveDialog({
      title:'图片另存为',
      defaultPath:path.resolve(__dirname,'../public/uploads/' + randomString.generate(10) + '.' + imgType.ext)
    })

    if(!canceled){
      fs.writeFileSync(filePath,chunk)
    }

  }).catch((e)=>{})
}

const saveas = (url)=>{
  if(url){
    const contextMenu = Menu.buildFromTemplate([
      {
        label:'图片另存为',
        click:getImage(url),
        accelerator:'Ctrl+Shift+s'
      }
    ])

    contextMenu.popup()
  }
}

module.exports = saveas