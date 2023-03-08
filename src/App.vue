<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
</script>

<template class="app">
  <Navbar />

  <RouterView />
</template>

<style>
.app {
  width: 1230px;
  margin: 0 102px;
}
</style>
