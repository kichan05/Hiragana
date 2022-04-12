<template>
<div class="page">
    <div class="page-content">
        <h1>覚える</h1>
        <h2>즐거운 히라가나<br>암기를 합시다.</h2>
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
export default {
    name : "MainPage",
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
}

h1 {
    font-weight: 900;
    font-size: 100px;
    line-height: 154px;

    text-align: center;

    background: linear-gradient(96.52deg, #00BDF9 0%, #5C0FFF 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;

    margin-top : 152px; 
}

h2 { 
    font-weight: 800;
    font-size: 50px;

    text-align: center;
}

h3 {
    font-size: 36px;
    font-weight: normal;
    text-align: center;
    color: #838383;

    margin-top: 38px;
}

.button-wrap {
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
</style> 