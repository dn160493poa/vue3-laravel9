<template>
    <div v-if="currentUser" class="settings-page">
        <div class="container page">
            <div class="row">
                <div class="col-md-6 offset-md-3 col-sm-12">
                    <h1 class="text-md-center">Settings</h1>
                    <mcv-validation-errors
                        v-if="validationErrors"
                        :validation-errors="validationErrors">
                    </mcv-validation-errors>
                    <form @submit.prevent="onSubmit">
                        <fieldset class="form-group">
                            <input type="text"
                                   class="form-control form-control-lg"
                                   v-model="form.avatar_image"
                                   placeholder="Avatar URL"
                            >
                        </fieldset>

                        <fieldset class="form-group">
                            <input type="text"
                                   class="form-control form-control-lg"
                                   v-model="form.name"
                                   placeholder="User name"
                            >
                        </fieldset>

                        <fieldset class="form-group">
                            <input type="text"
                                   class="form-control form-control-lg"
                                   v-model="form.email"
                                   placeholder="User email"
                            >
                        </fieldset>

                        <fieldset class="form-group">
                            <input type="password"
                                   class="form-control form-control-lg"
                                   v-model="form.password"
                                   placeholder="Password"
                            >
                        </fieldset>

                        <fieldset class="form-group">
                            <button
                                type="submit"
                                class="btn btn-lg btn-primary float-sm-end"
                                :disabled="isSubmitting"
                            >Update settings
                            </button>
                        </fieldset>
                    </form>
                    <hr>
                    <button
                        class="btn btn-outline-danger"
                        @click="logout"
                    >Logout
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
import {gettersType as authGettersType, actionTypes as authActionTypes} from "../store/modules/auth";
import McvValidationErrors from "../components/ValidationErrors";

export default {
    name: "MvcSettings",
    components: {
        McvValidationErrors
    },

    computed: {
        ...mapState({
            isSubmitting: state => state.settings.isSubmitting,
            validationErrors: state => state.settings.validationErrors,
        }),
        ...mapGetters({
            currentUser: authGettersType.currentUser
        }),
        form() {
            return {
                id: this.currentUser.id,
                name: this.currentUser.name,
                avatar_image: this.currentUser.avatar_image,
                email: this.currentUser.email,
                password: ''
            }
        }
    },

    methods: {
        onSubmit() {
            this.$store.dispatch(authActionTypes.updateCurrentUser, { userData: this.form })
        },
        logout() {
            this.$store.dispatch(authActionTypes.logout)
                .then(() => {
                    this.$router.push({name: 'globalFeed'})
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
