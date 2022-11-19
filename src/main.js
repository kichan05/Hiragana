import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'
import { analytics } from "@/assets/firebase";
import { logEvent } from "firebase/analytics";

logEvent(analytics, "notification_received")



createApp(App)
    .use(router)
    .mount('#app')
