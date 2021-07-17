import { createRouter, createWebHashHistory } from "vue-router";
import LayoutExample from "../views/LayoutExample.vue";

const routes = [
  {
    path: "/",
    name: "Main Layout",
    component: LayoutExample,
  },
  {
    path: "/products",
    name: "Products Layouts",
    // route level code-splitting
    // this generates a separate chunk (products.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "products" */ "../views/products/ProductLayoutExample.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
