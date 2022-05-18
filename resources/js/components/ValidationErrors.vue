<template>
    <ul>
        <li v-for="errorMessage in errorMessages" :key="errorMessage" class="text-danger">
            {{ errorMessage }}
        </li>
    </ul>
</template>

<script>
export default {
    name: "McvValidationErrors",
    props: {
        validationErrors: {
            type: Object,
            required: true
        }
    },

    computed:{
        errorMessages(){
            return Object.keys(this.validationErrors).map(name => {
                return this.validationErrors[name].join(', ')
            })
        }
    }
}
</script>

<style scoped>

</style>