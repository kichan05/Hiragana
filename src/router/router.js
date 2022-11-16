import { createWebHistory, createRouter } from "vue-router";

import MainPage from "./../views/MainPage.vue"
import WordPage from "@/views/WordPage";
import QuestionPage from "@/views/QuestionPage";

const routes = [
    {
        path: "/",
        name : "main",
        component: MainPage,
    },
    {
        path: "/word",
        name : "word",
        component: WordPage,
    },
    {
        path: "/question",
        name : "questionWord",
        component: QuestionPage,
    },
    // {
    //     path: "/questionHiragana",
    //     name : "questionHiragana",
    //     component: QuestionHiraganaPage,
    // },
    // {
    //     path: "/hiragana",
    //     name : "hiragana",
    //     component: HiraganaPage,
    // },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;