<template>
<div class="page">
    <div class="page-content">
<!--      {{wordList}}-->
<!--      <hr>-->
<!--      {{ optionList }}-->
<!--      <hr>-->
<!--      {{ answerId }}-->

        <h2>
            <span>다음에 히라가나에 맞는</span>
            <span class="bold">음을 선택해주세요.</span>
        </h2>

        <span class="question">{{ wordList[0].jp }}</span>
        
        <div class="options-wrap">
            <button
                v-for="i, n in optionList" :key="n"
                @click="()=>{checkAnswer(i.id, n)}"
                :class="{'wrong-answer' : state[n] == 1}">{{ i.ko }}</button>
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
    }},
    methods : {
      checkAnswer(id, idx){
        if(id == this.answerId) {
          alert("정다입니다.")
        }
        else {
          this.state[idx] = 1
        }
      }
    },
    mounted() {
        this.answerId = wordList[0].id
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

.options-wrap > button {
    color : var(--flat-black);
    
    font-size: 64px;
    font-weight: bold;

    border-radius: 20px;
    border: solid 1px #858585;
    background-color: #fff;

    transition: 150ms;
}

.options-wrap > button:hover {
    color : #fff;
    background-color: var(--main-color1);
}

.options-wrap > button.wrong-answer {
  background-color: var(--flat-red);
  color : white;
}
</style>