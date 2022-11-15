<template>
<div class="page">
    <Header/>
    <div class="page-content">
        <div class="title" :class="{'isAnswer' : isAnswer}">
          <h2>
              <span>다음에 히라가나에 맞는</span>
              <span class="bold">음을 선택해주세요.</span>
          </h2>

          <span class="question">{{ questionMode == 0 ? wordList[0].jp : wordList[0].ko }}</span>
        </div>

        <div class="options-wrap">
            <div
                v-for="i, n in optionList" :key="n"
                @click="()=>{checkAnswer(i.id, n)}"
                class="option"
                :class="{'wrong-answer' : state[n] == 1, 'answer' : state[n] == 2}">
                {{ questionMode == 0 ? optionList[n].ko : optionList[n].jp }}
                <template v-if="state[n] == 1">({{ questionMode == 0 ? optionList[n].jp : optionList[n].ko }})</template>
            </div>

            <button class="mode-change-btn only-border" v-if="questionMode == 0" @click="questionMode = 1"><bold>히라가나를</bold> 보고 뜻을 고르기</button>
            <button class="mode-change-btn only-border" v-else @click="questionMode =  0"><bold>뜻을</bold> 보고 히라가나를 고르기</button>
        </div>
    </div>
</div>
</template>

<script>
import * as util from "./../util/util.js"
import wordData from "./../data/wordData"

import Header from "@/components/Header";

let wordList = util.shuffle(wordData)
let optionList = util.shuffle(wordList.slice(0, 5))

export default {
    name : "QuestionPage",
    data(){return{
        wordList,
        optionList,

        answerId : -1,
        state : [0, 0, 0, 0, 0],
        isAnswer : false,

        questionMode : this.$route.params.mode
    }},
    components : {
        Header,
    },
    methods : {
      setQuestion(){
        this.wordList = util.shuffle(this.wordList)
        this.optionList = util.shuffle(this.wordList.slice(0, 5))
        this.answerId = wordList[0].id
        this.isAnswer = false
        this.state = [0, 0, 0, 0, 0]
      },
      checkAnswer(id, idx){

        if(this.isAnswer) return

        if(id == this.answerId) {
          this.isAnswer = true
          this.state[idx] = 2

          setTimeout(()=>{
            this.setQuestion()
          }, 1000)
        }
        else {
          this.state[idx] = 1
        }
      }
    },
    mounted() {
        if(this.questionMode == undefined) this.questionMode = 0
        this.setQuestion()
    }
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

  transition: 200ms;
}

.title.isAnswer {
  color : var(--main-color2);
}

h2 {
    font-size: 40px;
    font-weight: 500;

    display: flex;
    flex-direction: column;
    align-items: center;
}

.question {
  color: red;
    font-size: 100px;
    font-weight: bold;
}

.options-wrap {
    width : 100%;

    margin-top : 61px;

    display: flex;
    flex-direction: column;
    gap : 48px;
}

.options-wrap > .option {
    color : var(--flat-black);

    text-align: center;
    font-size: 40px;
    font-weight: bold;

    padding: 12px 0;

    border: solid 1px var(--gray5);
    border-radius: 20px;
    background-color: #fff;

    position: relative;

    transition: 150ms;

    cursor: pointer;
}

.options-wrap > .option:hover {
    color : #fff;
    background-color: var(--main-color1);
    border : 1px solid var(--main-color1);
}

.options-wrap > .option:active {
    opacity: 0.7;
    transform: scale(0.985);
}

.options-wrap > .option.wrong-answer {
  background-color: var(--flat-red);
  color : white;
  border : 1px solid var(--flat-red);
}

.options-wrap > .option.answer {
    background-color: var(--main-color2);
    color : white;
    border : 1px solid var(--main-color2);
}

.mode-change-btn {
    color: var(--main-color1);
    font-size: 24px;
}

.mode-change-btn:hover {
    color: white;
    background-color: var(--main-color1);

    transition: 200ms;
}

@media (max-width: 900px) {
  h2 {
    font-size: 24px;
  }

  .question {
    font-size: 60px;
  }

  .options-wrap {
    gap : 24px;
  }

  .options-wrap > .option {
      font-size: 32px;
  }
}

</style>