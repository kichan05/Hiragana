<template>
<header>
    <img src="/logo.svg" alt="로고" @click="$router.push({name : 'main'})">
</header>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style scoped>
header {
    width : 100%;
    height : 70px;

    background: rgba( 255, 255, 255, 0.2 );
    backdrop-filter: blur( 5px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    border-bottom: 1px solid var(--gray1);

    padding: 24px 16px;

    display: flex;
    align-items: center;

    position: fixed;
    top : 0px;
    left : 0px;
}

header img {
    width: 100px;

    cursor: pointer;
}
</style>