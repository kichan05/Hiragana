import { createWebHistory, createRouter } from "vue-router";

import MainPage from "./../views/MainPage.vue"
import QuestionPage from "../views/QuestionWordPage.vue"
import WordPage from "./../views/WordPage.vue"
import QuestionHiraganaPage from "./../views/QuestionHiraganePage"
import HiraganaPage from "@/views/HiraganaPage";

const routes = [
    {
        path: "/",
        name : "main",
        component: MainPage,
    },
    {
        path: "/question",
        name : "questionWord",
        component: QuestionPage,
    },
    {
        path: "/questionHiragana",
        name : "questionHiragana",
        component: QuestionHiraganaPage,
    },
    {
        path: "/word",
        name : "word",
        component: WordPage,
    },
    {
        path: "/hiragana",
        name : "hiragana",
        component: HiraganaPage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;