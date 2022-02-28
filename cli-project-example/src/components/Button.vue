<template>
    <button @click="onClick()" @mouseenter="onHover()" :style="{ background: color }" class="btn">{{text}}</button>
</template>

<script>
    export default {
        // eslint-disable-next-line
        name: 'Button',
        props: {
            text: String,
            color: String,
        },
        methods: {
            onClick() {
                console.log("Add Task Clicked");
            },
            onHover()
            {
                console.log("I am hovered over!");
            }
        }
    }
</script>

<style scoped>

</style>