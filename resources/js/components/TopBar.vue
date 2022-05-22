<template>

    <!--  <router-link :to="{ name: 'home' }" class="navbar-brand">-->
    <!--    MediumCLone-->
    <!--  </router-link>-->

    <div class="container">
        <nav class="navbar navbar-expand-sm navbar-light">
            <div class="container-fluid">
                  <router-link :to="{ name: 'home' }" class="navbar-brand">
                    MediumCLone
                  </router-link>
                <button @click.prevent="collapseList" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse justify-content-end" :class="{ show: showDropDown }" id="navbarNavAltMarkup">
                    <div class="navbar-nav" >
                        <router-link :to="{ name: 'home' }" class="nav-link" active-class="active">
                            Home
                        </router-link>
                        <template v-if="isLoggedIn">
                            <router-link :to="{ name: 'home' }" class="nav-link" exact active-class="active">
                                New Article
                            </router-link>
                            <router-link :to="{ name: 'home' }" class="nav-link" exact active-class="active">
                                Settings
                            </router-link>
                            <router-link :to="{ name: 'home', params: {slug: currentUser.user} }" class="nav-link" exact active-class="active">
                                <img class="user-pic user-photo" src="https://crmcore.app/uploads/avatars/1/1/photo.jpg" alt="">
                                &nbsp; {{ currentUser.user }}
                            </router-link>
                        </template>
                        <template v-if="!isLoggedIn">
                            <router-link :to="{ name: 'login' }" class="nav-link" exact active-class="active">
                                Sing In
                            </router-link>
                            <router-link :to="{ name: 'register' }" class="nav-link" exact active-class="active">
                                Sing Up
                            </router-link>
                        </template>
                    </div>
                </div>
            </div>
        </nav>
    </div>


</template>

<script>
import {mapState} from 'vuex'

export default {
    name: "McvTopBar",

    data(){
        return {
            showDropDown: false
        }
    },

    computed: {
        ...mapState({
            currentUser: state => state.auth.currentUser,
            isLoggedIn: state => state.auth.isLoggedIn
        })
    },

    methods:{
        collapseList(){
            this.showDropDown = !this.showDropDown
        }
    }
}
</script>

<style scoped>
    .navbar-brand {
        color: #5CB85C !important;
    }

    .nav-link .user-pic {
        height: 26px;
        border-radius: 50px;
        float: left;
        margin-right: 5px; }

</style>