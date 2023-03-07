<template>
  <div>
    <ul class="nav justify-content-between">
      <ul class="nav justify-content-between">
        <li class="nav-item">
          <RouterLink to="/" class="nav-link active">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/about" class="nav-link">About</RouterLink>
        </li>
      </ul>

      <li class="nav-item">
        <a class="nav-link disabled" href="#">LOGO</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About us</a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style scoped></style>
