<template>
  <div class="feed-toggle">
    <ul class="nav nav-pills outline-active">
      <li class="nav-item" v-if="isLoggedIn">
        <router-link
            :to="{ name: 'yourFeed'}"
            class="nav-link"
            :class="{ active: routeName === 'yourFeed'}"
        >
          YourFeed
        </router-link>
      </li>

      <li class="nav-item">
        <router-link
            :to="{ name: 'globalFeed' }"
            class="nav-link"
            :class="{ active: routeName === 'globalFeed' }"
        >
          GlobalFeed
        </router-link>
      </li>

      <li class="nav-item" v-if="tagName">
        <router-link
            :to="{ name: 'globalFeed'}"
            class="nav-link"
            :class="{ active: routeName === 'tag'}"
        >
          <i class="ion-pound"></i>
          {{ tagName }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {gettersType} from "../store/modules/auth";

export default {
  name: "MvcFeedToggle",
  props: {
    tagName: {
      required: false,
      type: String
    }
  },

  computed:{
    ...mapGetters({
      isLoggedIn: gettersType.isLoggedIn
    }),
    routeName (){
      return this.$route.name
    }
  }
}
</script>

<style scoped>
.nav-pills.outline-active .nav-link {
  border-radius: 0px;
  border: none;
  border-bottom: 2px solid transparent;
  background: transparent;
  color: #aaa; }
.nav-pills.outline-active .nav-link:hover {
  color: #555; }
.nav-pills.outline-active .nav-link.active {
  background: #fff !important;
  border-bottom: 2px solid #5CB85C !important;
  color: #5CB85C !important; }

.nav-pills::after {
  content: "";
  display: table;
  clear: both; }

.nav-pills .nav-item {
  float: left; }
.nav-pills .nav-item + .nav-item {
  margin-left: 0.2rem; }

.nav-pills .nav-link {
  display: block;
  padding: 0.5em 1em;
  border-radius: 0.25rem; }

.nav-pills .nav-link.active, .nav-pills .nav-link.active:focus, .nav-pills .nav-link.active:hover,
.nav-pills .nav-item.open .nav-link,
.nav-pills .nav-item.open .nav-link:focus,
.nav-pills .nav-item.open .nav-link:hover {
  color: #fff;
  cursor: default;
  background-color: #5CB85C; }

</style>