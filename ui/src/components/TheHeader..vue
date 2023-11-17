<script setup>
defineProps({
    rootPath: {
        type: Array,
        default: () => []
    }
})
</script>

<template>
    <div>
        <span v-for="(path, key) in rootPath" :key="key"><router-link :to="{ name: path }">{{ path }}</router-link></span>
    </div>
</template>

<style scoped>
div {
    display: flex;
    flex-direction: row;
    gap: 10px;
    background-color: gainsboro;
    font-style: italic;
}

a {
    text-decoration: none;
    color: darkslategrey;
}
</style>