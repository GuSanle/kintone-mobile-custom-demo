import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/contacts",
      name: "contacts",
      component: () => import("../views/Contacts.vue"),
    },
    {
      path: "/space",
      name: "space",
      component: () => import("../views/Space.vue"),
    },
    {
      path: "/star",
      name: "star",
      component: () => import("../views/Star.vue"),
    },
    {
      path: "/todo",
      name: "todo",
      component: () => import("../views/Todo.vue"),
    },
  ],
});

export default router;
