import { createWebHistory, createRouter } from "vue-router";

import MainPage from "./../views/MainPage.vue"
import VerbTypePage from "@/views/VerbTypePage";

const routes = [
    {
        path: "/",
        name : "main",
        component: MainPage,
    },
    {
        path: "/verbType",
        name: "verb_type",
        component: VerbTypePage
    }
    // {
    //     path: "/question",
    //     name : "questionWord",
    //     component: QuestionPage,
    // },
    // {
    //     path: "/questionHiragana",
    //     name : "questionHiragana",
    //     component: QuestionHiraganaPage,
    // },
    // {
    //     path: "/word",
    //     name : "word",
    //     component: WordPage,
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