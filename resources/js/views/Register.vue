<template>
    <div class="auth-page">
        <div class="container page">
            <div class="row">
                <div class="col-md-6 offset-md-3 col-xs-12">
                    <h1 class="text-center">Sing Up</h1>
                    <p class="text-center">
<!--                        <router-link :to="{ name: 'login' }">Need an account?</router-link>-->
                    </p>
                    <McvValidationErrors
                        v-if="validationErrors"
                        :validation-errors="validationErrors">
                    </McvValidationErrors>
                    <form @submit.prevent="onSubmit">
                        <fieldset class="form-group">
                            <input
                                v-model="name"
                                type="text"
                                class="form-control form-control-lg"
                                placeholder="UserName">
                        </fieldset>
                        <fieldset class="form-group">
                            <input
                                v-model="email"
                                type="text"
                                class="form-control form-control-lg"
                                placeholder="Email">
                        </fieldset>
                        <fieldset class="form-group">
                            <input
                                v-model="password"
                                type="password"
                                class="form-control form-control-lg"
                                placeholder="Password">
                        </fieldset>
                        <fieldset class="form-group">
                            <input
                                v-model="password_confirmation"
                                type="password"
                                class="form-control form-control-lg"
                                placeholder="Re-enter password">
                        </fieldset>
                        <button class="btn btn-lg btn-success float-end"
                                :disabled="isSubmitting">Sing Up</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import McvValidationErrors from '../components/ValidationErrors'
export default {
    name: "McvRegister",
    components: {
        McvValidationErrors
    },

    data(){
        return {
            name: '',
            email: '',
            password: '',
            password_confirmation: ''
        }
    },

    computed: {
        isSubmitting(){
            return this.$store.state.auth.isSubmitting
        },
        validationErrors(){
            return this.$store.state.auth.validationErrors
        }
    },

    methods:{
        onSubmit(){
            this.$store.dispatch('register', {
                name: this.name,
                email: this.email,
                password: this.password,
                password_confirmation: this.password_confirmation
            }).then(user => {
                this.$router.push({ name: 'home' })
                console.log('success registration', user)
            })
        }
    }

}
</script>

<style scoped>
    .form-group {
        margin-bottom: 1rem;
    }
</style>