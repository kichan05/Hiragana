<template>
<div class="page">
    <Header/>

    <div class="page-content">

        <div class="title">
            <div class="question">{{ isHideJp ? '???' : wordData.jp }}</div>
            <div class="pronunciation">
                {{ isHideMean ? '???' : wordData.ko }}
            </div>
        </div>

        <div class="button-wrap">
            <div class="prev-next-wrap">
                <button @click="prevClick" class="prev only-border" :class="{'enabled-none' : idx === 0, 'none-dragging' : idx == 0}">이전</button>
                <button @click="nextClick" class="next">다음</button>
            </div>

            <div class="option-wrap">
                <button
                        @click="()=>{isHideJp = !isHideJp}" :class="{'only-border' : isHideJp}">히라가나 숨기기</button>
                <button
                    @click="()=>{isHideMean = !isHideMean}" :class="{'only-border' : isHideMean}">뜻 숨기기</button>
            </div>
        </div>
    </div>
  <Footer/>
</div>
</template>

<script>
import * as util from "./../util/util.js"
import wordData from "./../data/word_6"

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
    name: "QuestionPage",
    data() {
        return {
            idx: 0,
            wordDataList: util.shuffle(wordData),
            wordData: {},
            isHideJp : false,
            isHideMean : false,
        }
    },
    components: {
        Header,
        Footer,
    },
    methods: {
        setHiragana() {
            this.wordData = this.wordDataList[this.idx % this.wordDataList.length]
        },
        prevClick() {
            if (this.idx !== 0)
                this.idx--
        },
        nextClick() {
            // if (this.idx === this.wordDataList.length - 1) this.idx = -1
            this.idx++
        }
    },
    watch: {
        idx() {
            this.setHiragana()
        }
    },
    mounted() {
        this.setHiragana()
    },
}
</script>

<style scoped>

.page-content {
    padding : 60px 0;

    display: flex;
    flex-direction: column;
    align-items: center;
}

.title {
    text-align: center;
}

.question {
    font-size: 90px;
    font-weight: bold;
}

.pronunciation {
    color : var(--gray6);

    font-size: 32px;
    font-weight: bold;
    text-align: center;
}

.button-wrap {
    width : 100%;

    margin-top : 140px;

    display: flex;
    flex-direction: column;
    gap : 40px;
}

.prev-next-wrap {
    width : 100%;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap : 20px;
}

.option-wrap {
    display: flex;
    flex-direction: column;
    gap : 12px;
}

button {
    font-size: 20px;
    font-weight: 600;

    padding: 12px 0;
}

@media (max-width: 900px) {
    .question {
        font-size: 80px;
    }
}
</style>