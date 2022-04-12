<template>
<div class="page">
    <div class="page-content">
        <h2>
            <span>다음에 히라가나에 맞는</span>
            <span class="bold">음을 선택해주세요.</span>
        </h2>

        <span class="question">あ</span>
        
        <div class="options-wrap">
            <button>a</button>
            <button>a</button>
            <button>a</button>
            <button>a</button>
            <button>a</button>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name : "QuestionPage",
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
</style>