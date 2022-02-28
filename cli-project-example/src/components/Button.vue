<template>
    <button :style="{ background: color }" class="btn">{{text}}</button>
</template>

<script>
    export default {
        // eslint-disable-next-line
        name: 'Button',
        props: {
            text: String,
            color: String,
        }
    }
</script>

<style scoped>

</style>