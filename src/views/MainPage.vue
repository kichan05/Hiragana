<template>
    <div class="page">
        <Header/>
        <div class="page-content">
            <h1 @click="easterEgg">あんき</h1>
            <h2><span class="fun">{{ funText.slice(0, funIndex) }}</span> 일본어 암기를 합시다.</h2>
            <h3>원하는 암기를 선택해주세요</h3>


            <nav class="button-wrap word">
                <button
                        @click="$router.push({name : 'verb_type'})">
                    <span>동사의</span>
                    <span class="bold">종류 문제 학습</span>
                </button>
            </nav>

            <!--
            <nav class="button-wrap word">
                <button
                    @click="$router.push({name : 'questionWord', params : {'mode' : 0}})">
                    <span>단어를 보고</span>
                    <span class="bold">뜻을 맞추기</span>
                </button>
                <button
                    @click="$router.push({name : 'questionWord', params : {'mode' : 1}})">
                    <span>뜻를 보고</span>
                    <span class="bold">단어를 맞추기</span>
                </button>
                <button
                    @click="$router.push({name : 'word'})">
                    <span>단어를</span>
                    <span class="bold">하나씩 넘겨 보기</span>
                </button>
            </nav>

            <nav class="button-wrap hiragana">
                <button
                    @click="$router.push({name : 'questionHiragana', params : {'mode' : 0}})">
                    <span>히라가나를 보고</span>
                    <span class="bold">음을 맞추기</span>
                </button>
                <button
                    @click="$router.push({name : 'questionHiragana', params : {'mode' : 1}})">
                    <span>음를 보고</span>
                    <span class="bold">히라가나를 맞추기</span>
                </button>
                <button
                    @click="$router.push({name : 'hiragana'})">
                    <span>히라가나를</span>
                    <span class="bold">하나씩 넘겨 보기</span>
                </button>
            </nav>
            -->
        </div>

        <Footer/>
    </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
    name: "MainPage",
    data() {
        return {
            funText: "즐겁고 재밌는",
            funIndex: -1, //this.funText.length,
            easterEggCount: 0,
        }
    },
    components: {
        Header,
        Footer,
    },
    methods: {
        easterEgg() {
            this.easterEggCount++

            if (this.easterEggCount % 10 === 0)
                alert("대한 독립 만세")
        }
    },
    mounted() {
        this.funIndex = this.funText.length
        setTimeout(() => {
            setInterval(() => {
                if (this.funIndex === 0) return

                this.funIndex--;
            }, 150)
        }, 700)
    }
}
</script>

<style scoped>

.page {

}

.page-content {
    max-width: 1000px;

    display: flex;
    flex-direction: column;
    align-items: center;
}

h1 {
    font-weight: 900;
    font-size: 60px;
    line-height: 154px;

    text-align: center;

    background: linear-gradient(94deg, rgba(0, 189, 249, 1) 0%, rgba(92, 15, 255, 1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;

    margin: 100px auto 0;

    display: inline-block;
}

h2 {
    font-weight: 800;
    font-size: 40px;

    text-align: center;
}

.fun {
    text-decoration: 10px;
    font-weight: 500;
    color: var(--gray5);
}

h3 {
    font-size: 25px;
    font-weight: normal;
    text-align: center;
    color: #838383;

    margin-top: 38px;

    /*animation-name : comment-animation;*/
    /*animation-duration: 2000ms;*/
    /*animation-iteration-count: infinite;*/
}

.button-wrap {
    width: 100%;

    margin-top: 60px;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(210px, auto));
    gap: 40px;
}

.button-wrap > button {
    font-size: 20px;
    font-weight: 500;

    /*padding: 12px 20px;*/
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

.button-wrap.hiragana > button {
    border-color: var(--main-color2);
    background-color: var(--main-color2);
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