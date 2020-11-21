import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import HelloWorld from "../src/components/HelloWorld.vue";
import DetailWorld from "../src/components/DetailWorld.vue";

const routes = [
  { path: "/", component: HelloWorld },
  { path: "/detail", component: DetailWorld },
];

const router = new VueRouter({
  routes,
});

export default router;
