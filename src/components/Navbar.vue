<template>
  <header>
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
  padding: 0 100px;
  margin: 35px auto;
  width: 100%;
}

.nav-link {
  color: black;
  transition: 0.2s;
}

.nav-link:hover {
  color: #20284c;
}

.logo {
  margin: 0 auto;
}
</style>
