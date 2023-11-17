<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps({
    modelValue: {
        type: [String, Number],
        default: ''
    },

    type: {
        type: String,
        default: 'text'
    },

    label: {
        type: String,
        default: ''
    }
})
</script>

<template>
    <label>
        <span>{{ label }}</span>
        <input :type="type" />
    </label>
</template>