<template>
  <header class="fixed-top">
    <ul class="nav justify-content-between">
      <!-- Navbar container [Produtos, Faça seu pedido] -->
      <ul class="nav justify-content-between">
        <li class="nav-item">
          <RouterLink to="/" class="nav-link">
            <strong>PRODUTOS</strong>
          </RouterLink>
        </li>

        <li class="nav-item">
          <RouterLink to="/" class="nav-link">
            <strong>FAÇA SEU PEDIDO</strong>
          </RouterLink>
        </li>
      </ul>

      <!-- Logo -->
      <li class="nav-item logo">
        <img src="/images/logo.png" alt="Logo-marca Pallet Winner" />
      </li>

      <!-- About us -->
      <li class="nav-item">
        <RouterLink to="/about" class="nav-link">
          <strong>ABOUT US</strong>
        </RouterLink>
      </li>
    </ul>
  </header>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style scoped>
header {
  padding: 20px 100px;
  margin: 0 auto;
  width: 100%;

  z-index: 100;

  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
}

.nav-link {
  color: black;
  transition: 0.2s;
}

.nav-link:hover {
  color: #20284c;
}
</style>
