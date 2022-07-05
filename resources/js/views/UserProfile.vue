<template>
    <div
        v-if="userProfile"
        class="profile-page"
    >
        <div class="user-info">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-10 offset-md-1">
                        <img class="user-img" :src="userProfile.user.avatar_image" alt="">
                        <h4>{{ userProfile.user.name }}</h4>
                        <p>About User</p>
                        <div>
                            <router-link
                                v-if="isCurrentUserProfile"
                                :to="{ 'name': 'user.settings' }"
                                class="btn btn-sm btn-outline-secondary action-btn"
                            >Edit Profile Settings</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-md-10 offset-md-1">
                    <div class="article-toggle">
                        <ul class="nav nav-pills outline-active">
<!--                            <li class="nav-item">-->
<!--                                <router-link-->
<!--                                    class="nav-link"-->
<!--                                    :class="{active: routeName === 'user.profile' }"-->
<!--                                    :to="{ 'name': 'user.profile', params: { 'userId': userProfile.user.id }}">-->
<!--                                    My Post-->
<!--                                </router-link>-->
<!--                            </li>-->
<!--                            <li class="nav-item">-->
<!--                                <router-link-->
<!--                                    class="nav-link"-->
<!--                                                                    :class="{active: routeName === 'user.favorites' }"-->
<!--                                    :to="{ 'name': 'user.favorites', params: { 'userId': userProfile.user.id }}">-->
<!--                                    Favorites Post-->
<!--                                </router-link>-->
<!--                            </li>-->
                        </ul>
                    </div>
                    <mcv-feed :api-url="apiUrl"></mcv-feed>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
import McvFeed from "../components/Feed";
import {actionTypes as userProfileActionTypes} from "../store/modules/userProfile";
import {gettersType as authGetterTypes} from "../store/modules/auth";

export default {
    name: "McvUserProfile",
    components: {McvFeed},
    computed: {
        ...mapState({
            isLoading: state => state.userProfile.isLoading,
            error: state => state.userProfile.error,
            userProfile: state => state.userProfile.data,
        }),
        ...mapGetters({
           currentUser: authGetterTypes.currentUser
        }),
        isCurrentUserProfile(){
            if(!this.currentUser || !this.userProfile ){
                return false
            }
            return this.currentUser.id === this.userProfile.id
        },
        apiUrl(){
            const isFavorites = this.$route.path.includes('favorites')
            return isFavorites ?
                `/post?favorites=${this.userProfileId}` :
                `/post/author=${this.userProfileId}`
        },
        userProfileId(){
            return this.$route.params.userId
        },
        routeName(){
            return this.$route.name
        }
    },

    watch: {
        userProfileId(){
            this.getUserProfile
        }
    },

    mounted() {
        this.getUserProfile()
    },

    methods: {
        getUserProfile(){
            console.log('------')
            this.$store.dispatch(userProfileActionTypes.getUserProfile, {
                userId: this.userProfileId
            })
        }
    }
}
</script>

<style scoped>
.profile-page .user-info {
    text-align: center;
    background: #f3f3f3;
    padding: 2rem 0 1rem 0; }
.profile-page .user-info .user-img {
    width: 100px;
    height: 100px;
    border-radius: 100px;
    margin-bottom: 1rem; }
.profile-page .user-info h4 {
    font-weight: 700; }
.profile-page .user-info p {
    margin: 0 auto 0.5rem auto;
    color: #aaa;
    max-width: 450px;
    font-weight: 300; }
.profile-page .user-info .action-btn {
    float: right;
    color: #999;
    border: 1px solid #999; }

.profile-page .articles-toggle {
    margin: 1.5rem 0 -1px 0; }
</style>
