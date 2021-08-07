import { createApp } from 'vue'
import App from './App.vue'
import router from "./router.js"
import store from "./store/index.js"

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faPenSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBars)
library.add(faEye)
library.add(faEdit)
library.add(faTrashAlt)
library.add(faPenSquare)



const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router);
app.use(store);
app.mount('#app');


