<template>
    <header>
        <h1>{{title}}</h1>
    </header>
</template>

<script>
    export default {
        // eslint-disable-next-line
        name: 'Header',
        props: {
            title: String,
        }
    }
</script>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}
</style>
