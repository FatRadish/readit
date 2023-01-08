import { defineStore } from 'pinia'
import store from 'store2'
import _ from 'lodash'

const useWebsiteStore = defineStore('websiteStore', {
  state() {
    return {
      website: <Array<nativeImage>>[]
    }
  },

  actions: {
    add(item: nativeImage) {
      if (_.find(this.website, { url: item.url })) {
        window.myApi.alert("此网站已经被添加")
      } else {
        this.website.unshift(item)
        store('website', this.website)
      }
    },
    init() {
      this.website = store.get('website');
    },
    deleteItem(url: string) {
      this.website = this.website.filter((value) => {
        return value.url !== url
      })
      store('website', this.website)
    }
  },
  getters: {
    find() {
      return (keywords: string) => {
        if (keywords === '') {
          return this.website
        } else {
          const result = _.filter(this.website, (item) => {
            let partten = new RegExp(keywords, 'i');
            return partten.test(item.title)
          })
          return result
        }
      }
    }
  }
})

export default useWebsiteStore