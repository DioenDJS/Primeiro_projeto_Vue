<template>
    <main>
        <p class="text-top">Videos novos toda <strong>quinta</strong> às <strong>19hs</strong> </p>
        <a href="#" ><img src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/subscribe.svg
" alt="inscreva-se" id="subscribe"></a>
        <p class="text-button">youtube.com/canal </p>

    </main>
</template>

<script>
export default {
    name:'Home'
}
</script>
<style scoped>
    main{
        background-color: var(--color-background-home);
        justify-content: center;
        align-items: center;
    }

    .text-top{
        color: var(--color-text-light);
        font-size: 18px;
    }
    #subscribe{
        width: 190px;
        margin: 20px 0;
    }
    .text-button{
        color: var(--color-text-light);
        font-size: 16px
    }
</style>