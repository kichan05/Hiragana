<template>
<footer>
  <div class="content">
    <div class="copy-light">
      <span>Developed by <a href="https://www.github.com/ckstmznf" target="_blank">박희찬(ckstmznf)</a></span>
      <span>Copyright ©Heechan. All rights reserved.</span>
    </div>
    <div class="open-source">
      <a href="https://www.github.com/ckstmznf/Hiragana" target="_blank">오픈소스 라이선스</a>
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
    width : 100%;

    padding: 34px 16px;
    margin-top: 42px;

    background: #F3F3F3;
    border-top: 1px solid #C2C2C2;
    box-sizing: border-box;
  }
  .content {
    width : 100%;
    max-width: 1000px;

    font-size: 20px;
    font-weight: 400;
    line-height: 24px;

    margin : 0 auto;

    display: flex;
    justify-content: space-between;
  }

  .copy-light {
    display: flex;
    flex-direction: column;
    gap : 8px;
  }
  .open-source {
    display: flex;
    align-items: flex-end;
  }
</style>