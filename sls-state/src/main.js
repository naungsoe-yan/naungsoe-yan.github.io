import Vue from 'vue';
import VuePlyr from 'vue-plyr';
import App from './App.vue';
import 'carbon-components/css/carbon-components.css';
import CarbonComponentsVue from '@carbon/vue/src/index';

Vue.config.productionTip = false
Vue.use(CarbonComponentsVue);
Vue.use(VuePlyr, {
  plyr: {
    fullscreen: { enabled: false }
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app')
