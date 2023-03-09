<template>
  <header class="fixed-top">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#conteudoNavbarSuportado"
        aria-controls="conteudoNavbarSuportado"
        aria-expanded="false"
        aria-label="Alterna navegação"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="conteudoNavbarSuportado">
        <ul class="navbar-nav">
          <!-- Link Faça seu pedido -->
          <li class="nav-item">
            <RouterLink class="nav-link" to="/produto"
              >FAÇA SEU PEDIDO</RouterLink
            >
          </li>

          <!-- Logo do site -->
          <RouterLink class="navbar-brand" to="/">
            <img src="/images/logo.png" alt="Logo-marca Pallet Winner" />
          </RouterLink>

          <!-- Link Sobre nós -->
          <li class="nav-item">
            <RouterLink class="nav-link" to="/about">ABOUT US</RouterLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style scoped>
header {
  padding: 0px;
  margin: 0 auto;
  width: 100%;
}

.nav-link {
  color: black;
  transition: 0.2s;
}

.nav-link:hover {
  color: #20284c;
}

.navbar-nav {
  padding: 0px 150px;
  display: flex;
  align-items: center;

  height: 80px;

  width: 100%;
  gap: 700px;
}

@media (max-width: 1440px) {
  .navbar-nav {
    gap: 400px;
  }
}

@media (max-width: 1024px) {
  .navbar-nav {
    gap: 190px;
  }
}

@media (max-width: 768px) {
  header {
    padding: 0px;
  }

  .navbar-nav {
    padding: 20px 15px;
    gap: 20px;

    height: 250px;
  }

  .navbar-toggler {
    margin: 12px 30px;
    padding: 9px;
  }
}

@media (max-width: 425px) {
  header {
    padding: 0px;
  }
}
</style>
