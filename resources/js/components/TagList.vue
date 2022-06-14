<template>
  <ul class="tag-list">
    <li v-for="(tag, index) in tags" :key="index" class="tag-default tag-pill tag-outline">
      {{ tag }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "MvcTagList",
  props: {
    tags: {
      required: true,
      type: Array
    }
  }
}
</script>

<style scoped>
ul.tag-list {
  padding-left: 0px !important;
  display: inline-block;
  list-style: none !important;
}

ul.tag-list li {
  display: inline-block !important;
}

.tag-default {
  background-color: #818a91;
}

.tag-default[href]:focus, .tag-default[href]:hover {
  background-color: #687077;
}

.tag-default {
  color: #fff !important;
  font-size: 0.8rem;
  padding-top: 0.1rem;
  padding-bottom: 0.1rem;
  white-space: nowrap;
  margin-right: 3px;
  margin-bottom: 0.2rem;
  display: inline-block;
}

.tag-default:hover {
  text-decoration: none;
}

.tag-default.tag-outline {
  border: 1px solid #ddd;
  color: #aaa !important;
  background: none !important;
}

.tag-pill {
  padding-right: 0.6em;
  padding-left: 0.6em;
  border-radius: 10rem; }

.tag-default.tag-outline {
  border: 1px solid #ddd;
  color: #aaa !important;
  background: none !important; }
</style>
