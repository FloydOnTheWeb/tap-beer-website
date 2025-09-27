import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    meta: { breadcrumb: "Home" },
    component: Home,
  },
  {
    path: "/drinks",
    name: "Drinks",
    meta: { breadcrumb: { label: "Drinks", parent: "Home" } },
    component: () =>
      import(/* webpackChunkName: "drinks" */ "../views/Drinks.vue"),
  },
  {
    path: "/drinks/:id",
    name: "Drink",
    meta: { breadcrumb: { label: "Drink", parent: "Drinks" } },
    component: () =>
      import(/* webpackChunkName: "drink" */ "../views/DrinkDetails.vue"),
  },
  {
    path: "/about",
    name: "About",
    meta: { breadcrumb: { label: "About", parent: "Home" } },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    meta: { breadcrumb: { label: "Contact", parent: "Home" } },
    component: () =>
      import(/* webpackChunkName: "contact" */ "../views/Contact.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
