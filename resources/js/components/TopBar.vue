<template>
    <div class="container">
        <nav class="navbar navbar-expand-sm navbar-light">
            <div class="container-fluid">
                  <router-link :to="{ name: 'globalFeed' }" class="navbar-brand">
                    MediumCLone
                  </router-link>
                <button @click.prevent="collapseList" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse justify-content-end" :class="{ show: showDropDown }" id="navbarNavAltMarkup">
                    <div class="navbar-nav" >
                        <router-link :to="{ name: 'globalFeed' }" class="nav-link" active-class="active">
                            Home
                        </router-link>
                        <template v-if="isLoggedIn">
                            <router-link :to="{ name: 'article.store' }" class="nav-link" exact active-class="active">
                                New Article
                            </router-link>
                            <router-link :to="{ name: 'user.settings' }" class="nav-link" exact active-class="active">
                                Settings
                            </router-link>
                            <router-link :to="{ name: 'user.settings', params: {user: currentUser.user.name} }" class="nav-link">
                                <img class="user-pic user-photo" :src="currentUser.user.avatar_image" alt="">
                                &nbsp; {{ currentUser.user.name }}
                            </router-link>
                        </template>
                        <template v-if="isAnonymous">
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
import {gettersType} from "../store/modules/auth";
import {mapGetters} from 'vuex'

export default {
    name: "McvTopBar",

    data(){
        return {
            showDropDown: false
        }
    },

    computed: {
        ...mapGetters({
            currentUser: gettersType.currentUser,
            isLoggedIn: gettersType.isLoggedIn,
            isAnonymous: gettersType.isAnonymous
        }),
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
