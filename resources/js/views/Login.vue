<template>
    <div class="auth-page">
        <div class="container page">
            <div class="row">
                <div class="col-md-6 offset-md-3 col-xs-12">
                    <h1 class="text-center">Sing In</h1>
                    <p class="text-center">
                        <router-link :to="{ name: 'register' }" class="text-decoration-none m-color">Need an account?</router-link>
                    </p>
                    <McvValidationErrors
                        v-if="validationErrors"
                        :validation-errors="validationErrors">
                    </McvValidationErrors>
                    <form @submit.prevent="onSubmit">
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
                        <button class="btn btn-lg btn-d float-end"
                                :disabled="isSubmitting">Sing In</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import McvValidationErrors from "../components/ValidationErrors";
import {actionTypes} from "../store/modules/auth";

export default {
    name: "McvLogin",
    components: {
        McvValidationErrors
    },

    data(){
        return {
            email: '',
            password: '',
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
            this.$store.dispatch(actionTypes.login, {
                email: this.email,
                password: this.password,
            }).then(user => {
                this.$router.push({ name: 'globalFeed' })
                console.log('success login', user)
            })
        }
    }
}
</script>

<style scoped>
    .form-group {
        margin-bottom: 1rem;
    }

    .m-color{
        color: #7f4ecd;
     }

    .btn-d{
        background: #7f4ecd;
        color: white;
    }
</style>
