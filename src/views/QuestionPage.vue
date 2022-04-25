<template>
<div class="page">
    <div class="page-content">
<!--      {{wordList}}-->
<!--      <hr>-->
<!--      {{ optionList }}-->
<!--      <hr>-->
<!--      {{ answerId }}-->
        <div class="header" :class="{'isAnswer' : isAnswer}">
          <h2>
              <span>다음에 히라가나에 맞는</span>
              <span class="bold">음을 선택해주세요.</span>
          </h2>

          <span class="question">{{ wordList[0].jp }}</span>
        </div>

        <div class="options-wrap">
            <div
                v-for="i, n in optionList" :key="n"
                @click="()=>{checkAnswer(i.id, n)}"
                class="option"
                :class="{'wrong-answer' : state[n] == 1, 'answer' : state[n] == 2}">
                {{ i.ko }}
                <span v-if="state[n] == 1"> {{ i.jp }} </span>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import * as util from "./../util/util.js"
import wordData from "./../data/wordData"

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
    }},
    methods : {
      setQuestion(){
        this.wordList = util.shuffle(this.wordList)
        this.optionList = util.shuffle(this.wordList.slice(0, 5))
        this.answerId = wordList[0].id
        this.isAnswer = false
        this.state = [0, 0, 0, 0, 0]
      },
      checkAnswer(id, idx){
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

.header {
  transition: 200ms;
}

.header.isAnswer {
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
    font-size: 200px;
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
    font-size: 64px;
    font-weight: bold;

    border-radius: 20px;
    border: solid 1px #858585;
    background-color: #fff;

    transition: 150ms;

    position: relative;
}

.options-wrap > .option > span {
  font-size: 48px;
  font-weight: 400;

  position: absolute;
  right : 32px;
  top : 50%;
  transform: translateY(-50%);
}

.options-wrap > .option:hover {
    color : #fff;
    background-color: var(--main-color1);
    border : 1px solid var(--main-color1);
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
</style>