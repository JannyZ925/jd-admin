import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./../views/content/home/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: '/content/home'
    },
    {
      path: "/content/home",
      name: "content/home",
      component: HomeView,
    },
    {
      path: "/content/dialog",
      name: "content/dialog",
      component: () => import('../views/content/dialog/index.vue'),
    },
    {
      path: "/goods",
      name: "goods",
      component: () => import('../views/goods/index.vue'),
    },
    {
      path: "/order",
      name: "order",
      component: () => import('./../views/order/index.vue'),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/about/index.vue"),
    },
  ],
});

export default router;
