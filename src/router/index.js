import { createRouter, createWebHistory } from "vue-router";

import Dashboard from "../pages/Dashboard.vue";
import Schedule from "../pages/Schedule.vue";
import Trainers from "../pages/Trainers.vue";
import Groups from "../pages/Groups.vue";

const routes = [
  { path: "/", component: Dashboard },
  { path: "/schedule", component: Schedule },
  { path: "/trainers", component: Trainers },
  { path: "/groups", component: Groups },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

export default router;
