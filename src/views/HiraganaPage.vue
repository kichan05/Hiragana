<template>
<div class="page">
    <Header/>

    <div class="page-content">

        <div class="title">

            <div class="question">{{ isHideHiragana ? '???' : hiraganaData.hiragana }}</div>
            <div class="pronunciation">
              {{ isHideMean ? '???' : hiraganaData['pronunciation-ko'] }}, {{ isHideWell ? '???' : hiraganaData['pronunciation-en'] }}
            </div>
        </div>

        <div class="button-wrap">
            <div class="prev-next-wrap">
                <button @click="prevClick" class="prev only-border" :class="{'enabled-none' : idx === 0, 'none-dragging' : idx == 0}">이전</button>
                <button @click="nextClick" class="next">다음</button>
            </div>

            <div class="option-wrap">
                <button
                    @click="()=>{isHideHiragana = !isHideHiragana}" :class="{'only-border' : isHideHiragana}">히라가나 숨기기</button>
              <button
                  @click="()=>{isHideMean = !isHideMean}" :class="{'only-border' : isHideMean}">한국어 발음 숨기기</button>
                <button
                    @click="()=>{isHideWell = !isHideWell}" :class="{'only-border' : isHideWell}">영어 발음 숨기기</button>
            </div>
        </div>
    </div>
  <Footer/>
</div>
</template>

<script>
import * as util from "./../util/util.js"

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hiragana from "@/data/hiragana";
export default {
    name: "QuestionPage",
    data() {
        return {
            idx: 0,
            hiraganaDataList: util.shuffle(Hiragana),
            hiraganaData: {},
            isHideHiragana : false,
            isHideWell : false,
            isHideMean : false,
        }
    },
    components: {
        Header,
        Footer,
    },
    methods: {
        setHiragana() {
            this.hiraganaData = this.hiraganaDataList[this.idx % this.hiraganaDataList.length]
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
    font-size: 200px;
    font-weight: bold;
}

.pronunciation {
    color : var(--gray6);

    font-size: 40px;
    font-weight: bold;
    text-align: center;
}

.button-wrap {
    width : 100%;

    margin-top : 188px;

    display: flex;
    flex-direction: column;
    gap : 95px;
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
    gap : 20px;
}

button {
    font-size: 28px;
    font-weight: 600;
}

@media (max-width: 900px) {
    .question {
        font-size: 100px;
    }
}
</style>