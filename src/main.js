import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueApollo from 'vue-apollo'
import { apolloClient } from './services/apollo'
import router from './router'
import './assets/styles/index.css'
import '@mdi/font/css/materialdesignicons.css'
import 'vue-multiselect/dist/vue-multiselect.min.css'
import Multiselect from 'vue-multiselect'

Vue.config.productionTip = false

Vue.component('Multiselect', Multiselect)

Vue.use(VueApollo)

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

new Vue({
  store,
  apolloProvider,
  router,
  render: h => h(App)
}).$mount('#app')
