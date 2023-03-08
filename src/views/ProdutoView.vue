<template>
  <div class="produto d-flex flex-column">
    <!-- Container de Textos -->
    <article class="mb-5">
      <h1 class="text-center pt-5 mt-5">
        É um prazer imenso <br />
        fechar negócio contigo!
      </h1>

      <p class="text-center pt-3">
        Antes de tudo preencha o formulário abaixo e receba o seu <br />
        super pallet novinho em dentro de 4 dias á 13 dias!
      </p>
    </article>

    <!-- Formulário -->
    <div class="mt-4">
      <Formulario />
    </div>
  </div>
</template>

<script setup>
import Formulario from "../components/Formulario.vue";
</script>

<style scoped>
.produto {
  height: 100%;
  width: 100%;
  padding-top: 90px;

  margin: 0 auto;
}
</style>
