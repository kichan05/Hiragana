<template>
<div class="page">
    <Header/>
    <div class="page-content">
        <h1 @click="easterEgg">覚える</h1>
        <h2><span class="fun">{{ funText.slice(0, funIndex) }}</span> 일본어<br>암기를 합시다.</h2>
        <h3>원하는 암기를 선택해주세요</h3>

        <nav class="button-wrap">
            <button
                @click="$router.push({name : 'question', params : {'mode' : 0}})">
                <span>히라가나를 보고</span>
                <span class="bold">음을 맞추기</span>
            </button> 
            <button
                @click="$router.push({name : 'question', params : {'mode' : 1}})">
                <span>음를 보고</span>
                <span class="bold">히라가나를 맞추기</span>
            </button>
            <button
                @click="$router.push({name : 'word'})">
                <span>히라가나를</span>
                <span class="bold">하나씩 넘겨 보기</span>
            </button>
        </nav>
    </div>
</div>
</template>

<script>
import Header from "@/components/Header";
export default {
    name : "MainPage",
    data(){return{
        funText : "즐거고 재밌는",
        funIndex : -1, //this.funText.length,
        easterEggCount : 0,
    }},
    components : {
        Header,
    },
    methods : {
        easterEgg(){
            this.easterEggCount++

            if(this.easterEggCount % 10 === 0)
                alert("대한 독립 만세")
        }
    },
    mounted() {
        this.funIndex = this.funText.length
        setTimeout(()=>{
            setInterval(()=> {
                if(this.funIndex === 0) return

                this.funIndex--;
            }, 150)
        }, 700)
    }
}
</script>

<style scoped>

.page {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.page-content {
    max-width: 1000px;

    display: flex;
    flex-direction: column;
    align-items: center;
}

h1 {
    font-weight: 900;
    font-size: 100px;
    line-height: 154px;

    text-align: center;

    background: linear-gradient(94deg, rgba(0,189,249,1) 0%, rgba(92,15,255,1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;

  margin: 152px auto 0;

  display: inline-block;
}

h2 { 
    font-weight: 800;
    font-size: 50px;

    text-align: center;
}

.fun {
    text-decoration: 10px;
    font-weight: 500;
    color: var(--gray5);
}

h3 {
    font-size: 36px;
    font-weight: normal;
    text-align: center;
    color: #838383;

    margin-top: 38px;

    animation-name : comment-animation;
    animation-duration: 2000ms;
    animation-iteration-count: infinite;
}

.button-wrap {
    width: 100%;

    margin-top : 126px;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(210px, auto));
    gap : 40px;
}

.button-wrap > button {
    font-size: 28px;
    font-weight: 500;

    padding: 20px 44px;
    border-radius: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    cursor: pointer;
}

.button-wrap > button:hover {
    /* background-color: #2a51ff; */
    background-color: var(--main-color1);
}

.button-wrap > button:active {
    opacity: 0.7;
    transform: scale(0.985);
}

.button-wrap > button * {
    color: #fff;
}

@keyframes comment-animation {
    0%, 100% {
        /*transform: scale(1);*/
        transform: translateY(0);
    }
    50% {
        /*transform: scale(1.05);*/
        transform: translateY(20px);
    }
}

</style> 