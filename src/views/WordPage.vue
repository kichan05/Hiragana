<template>
<div class="page">
    <div class="page-content">

        <div class="title">
            <div class="question">あ</div>
            <div class="pronunciation">
                a, 아
            </div>
        </div>

        <div class="button-wrap">
            <div class="prev-next-wrap">
                <button class="prev none-fill">이전</button>
                <button class="next">다음</button>
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