import Vue from "vue";
import App from "./App.vue";
import Currency from "@/index.js";

Vue.use(Currency);

new Vue({
  render: h => h(App)
}).$mount("#app");
