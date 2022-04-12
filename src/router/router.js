import { createWebHistory, createRouter } from "vue-router";

import MainPage from "./../views/MainPage.vue"
import QuestionPage from "./../views/QuestionPage.vue"

const routes = [
    {
        path: "/",
        name : "main",
        component: MainPage,
    },
    {
        path: "/question",
        name : "question",
        component: QuestionPage,
    },
    {
        path: "/word",
        name : "word",
        component: MainPage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;