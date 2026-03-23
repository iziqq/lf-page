import './assets/base.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import i18n from './i18n'

import App from './App.vue'
import router from './common/router'
import {registerSeat} from "@/common/seat/seat.ts";

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

await registerSeat();

app.mount('#app')
