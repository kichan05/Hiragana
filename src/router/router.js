import { createWebHistory, createRouter } from "vue-router";

const routes = [
//   {
//     path: "/경로",
//     component: import해온 컴포넌트,
//   }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;