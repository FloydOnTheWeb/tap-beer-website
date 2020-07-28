import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

// const routes = [
//   {
//     path: "/",
//     name: "Home",
//     meta: { breadcrumb: "Home" },
//     component: Home,
//     children: [
//       {
//         path: "drinks/",
//         name: "Drinks",
//         meta: { breadcrumb: "Drinks" },
//         component: () =>
//           import(/* webpackChunkName: "drinks" */ "../views/Drinks.vue"),
//         children: [
//           {
//             path: ":id/",
//             name: "Drink",
//             meta: { breadcrumb: "Drink" },
//             component: () =>
//               import(
//                 /* webpackChunkName: "drink" */ "../views/DrinkDetails.vue"
//               )
//           }
//         ]
//       },
//       {
//         path: "about/",
//         name: "About",
//         meta: { breadcrumb: "About" },
//         component: () =>
//           import(/* webpackChunkName: "about" */ "../views/About.vue")
//       },
//       {
//         path: "contact/",
//         name: "Contact",
//         meta: { breadcrumb: "Contact" },
//         component: () =>
//           import(/* webpackChunkName: "contact" */ "../views/Contact.vue")
//       }
//     ]
//   }
// ];

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
        meta: { breadcrumb: "Drinks" },
        component: () =>
          import(/* webpackChunkName: "drinks" */ "../views/Drinks.vue"),
              },
              {
            path: "/drinks/:id",
            name: "Drink",
            meta: { breadcrumb: "Drink" },
            component: () =>
              import(
                /* webpackChunkName: "drink" */ "../views/DrinkDetails.vue"
              )

      },
      {
        path: "/about",
        name: "About",
        meta: { breadcrumb: "About" },
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/About.vue")
      },
      {
        path: "/contact",
        name: "Contact",
        meta: { breadcrumb: "Contact" },
        component: () =>
          import(/* webpackChunkName: "contact" */ "../views/Contact.vue")

  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
