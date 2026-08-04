import { createApp } from 'vue'

import App from './App.vue'

import { createPinia } from 'pinia'

import router from './router'

import '@fortawesome/fontawesome-free/css/all.min.css'

import 'animate.css'

import './assets/css/global.css'

const app = createApp(App)

app.use(createPinia())

app.use(router)

app.mount('#app')