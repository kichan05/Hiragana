<template>
    <div class="page very-type">
        <Header/>
        <div class="page-content">
            <div class="question-wrap">
                <h2 class="title">다음 동사의 종류는? {{ getVerbType(ve) }}</h2>
                <div class="word">{{ ve.jp }}</div>
                <div class="meaning">{{ ve.ko }}</div>
            </div>
            <div class="option-wrap">
                <div class="option-item">1류</div>
                <div class="option-item">2류</div>
                <div class="option-item">3류</div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from "@/components/Header";
import hiragana from "@/data/hiragana";

export default {
    name: "VerbTypePage",
    data() {
        return {
            ve: {
                "jp": "たべる",
                "ko": "먹다",
                "part": 2,
            }
        }
    },
    components: {Header},
    methods: {
        getVerbType(verb) {
            const jp = verb.jp
            if (jp === "する" || jp === "くる")
                return 3

            const last = jp.slice(-1)
            const last2 = jp.slice(-2, -1)

            console.log(last)
            console.log(last2)
            console.log(hiragana[last])

            if (last === "る" && (hiragana[last2].column === "e" || hiragana[last2].column === "i"))
                return 2

            return 1
        }
    }
}
</script>

<style scoped>
.page-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.page-content * {
    text-align: center;
}

.title {
    font-size: 25px;
    font-weight: 400;

    margin-top: 120px;
}

.word {
    font-size: 70px;
    font-weight: 600;

    margin-top: 50px;
}

.meaning {
    font-size: 29px;
    font-weight: 400;
}

.option-wrap {
    margin-bottom: 100px;

    display: flex;
}

.option-item {
    flex: 1;

    font-size: 29px;
    font-weight: 500;

    border: 1px solid #d0d0d0;
    border-radius: 10px;

    padding: 16px 0;
    margin: 16px;

    background-color: #ffffff;

    cursor: pointer;
    transition: background-color 150ms;
}

.option-item:hover {
    color: white;
    background-color: var(--main-color2);
    border-color: var(--main-color2);
}
</style>