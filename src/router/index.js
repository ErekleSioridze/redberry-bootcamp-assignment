import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/home.vue";
import CreateFormPage from "../pages/create-form.vue";
import SubmittedForms from "../pages/submitted-forms.vue";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/create-form",
    component: CreateFormPage,
  },
  {
    path: "/submitted-forms",
    component: SubmittedForms,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
