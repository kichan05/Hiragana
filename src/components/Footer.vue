<template>
    <footer>
        <div class="content">
            <div class="copy-light">
                <span>Developed by <a href="https://www.github.com/kichan05" target="_blank">박희찬(ckstmznf)</a></span>
                <span>Copyright ©Heechan. All rights reserved.</span>
            </div>
            <div class="open-source-wrap">
                <a class="donation" href="https://toss.me/바키찬희찬" target="_blank">개발자 후원 <img class="toss-icon" src="https://kichan05.github.io/assets/toss.svg"> </a>
                <a class="open-source" href="https://www.github.com/ckstmznf/Hiragana" target="_blank">오픈소스 라이선스</a>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>
footer {
    width: 100%;

    padding: 34px 16px;
    margin-top: 42px;

    background: #F3F3F3;
    border-top: 1px solid #C2C2C2;
    box-sizing: border-box;
}

.content {
    width: 100%;
    max-width: 1000px;

    font-size: 20px;
    font-weight: 300;
    line-height: 24px;

    margin: 0 auto;

    display: flex;
    justify-content: space-between;
}

a {
    font-weight: 600;
}

.copy-light {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.open-source-wrap {
    text-align: end;

    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: space-between;
}

.donation .toss-icon {
    width: 15px;
    transition: 500ms;
}

.donation:hover .toss-icon {
    transform: scale(1.23) rotateZ(15deg);
}
</style>