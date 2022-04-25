<template>
<div class="page">
    <div class="page-content">

        <div class="title">
            <div class="question">{{ hiraganaData.hiragana }}</div>
            <div class="pronunciation">
                {{ hiraganaData["pronunciation-en"] }}, {{ hiraganaData["pronunciation-ko"] }}
            </div>
        </div>

        <div class="button-wrap">
            <div class="prev-next-wrap">
                <button @click="prevClick" class="prev none-fill" :class="{'enabled-none' : idx == 0}">이전</button>
                <button @click="nextClick" class="next">다음</button>
            </div>

            <div class="option-wrap">
                <button>히라가나 숨기기</button>
                <button>음 숨기기</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import * as util from "./../util/util.js"
import wordData from "./../data/wordData.js"

export default {
    name : "QuestionPage",
    data(){return{
        idx : 0,
        wordData : util.shuffle(wordData),
        hiraganaData : {},
    }},
    methods : {
        setHiragana(){
            this.hiraganaData = this.wordData[this.idx]
        },
        prevClick(){
            if(this.idx != 0) 
                this.idx--
        },
        nextClick(){
            if(this.idx == this.hiraganaData.length - 1) this.idx = 0
            this.idx++
        }
    },
    watch : {
        idx(){
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

button.none-fill {
    color : var(--flat-black);
    border: solid 2px var(--main-color1);

    background-color: #fff;
}
</style>