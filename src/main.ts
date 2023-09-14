import 'vant/lib/index.css'
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { Tabbar, TabbarItem } from 'vant'

kintone.events.on('mobile.portal.show', (event) => {
  const app = createApp(App)
  app.use(router)
  app.use(Tabbar)
  app.use(TabbarItem)
  app.mount(kintone.mobile.portal.getContentSpaceElement()!)
  return event
})
