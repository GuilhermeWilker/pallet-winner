<script setup>
import Button from "../components/Button.vue";
import CardItems from "../components/CardItems.vue";

const cards = [
  {
    titulo: "Eco Pallet",
    img: "/images/card/eco_pallet.png",
    descricao:
      "São duráveis, resistentes , higiênicos, recicláveis e sustentáveis. Além disso, são mais leves, facilitando o manuseio e transporte com vida útil mais longa que os de madeira.",
  },
  {
    titulo: "Pallet tradicional",
    img: "/images/card/tradicional_pallet.png",
    descricao:
      "Uma opção econômica e resistente para o transporte de mercadorias, com maior disponibilidade e flexibilidade para personalização de uso.",
  },
  {
    titulo: "Mini-Pallet",
    img: "/images/card/mini_pallet.png",
    descricao:
      "Ideal para pequenas cargas, fácil manuseio e transporte suportando em até 45kg.",
  },
];
</script>

<template>
  <!-- Hero -->
  <main class="home">
    <section class="d-flex flex-column justify-content-center">
      <!-- Hero Image -->
      <div class="img_box m-auto pt-5 animate_up_down">
        <img src="/images/hero/hero_image.png" alt="Pallet de madeira" />
      </div>

      <!-- Título -->
      <h2 class="text-center font-weight-bold pt-2">
        Pallets resistentes e renováveis! <br />
        a solução ideal para sua logística
      </h2>

      <!-- Parágrafo -->
      <p class="text-center w-50 font-weight-normal m-auto py-4">
        Oferecemos uma ampla variedade de pallets para atender suas demandas com
        <br />
        agilidade e inovação. Nossos produtos proporcionam a tranquilidade de
        uma escolha
        <br />
        sustentável sem comprometer a qualidade e resistência necessárias para
        sua operação.
      </p>

      <Button to="/about" nome="Google" class="m-auto" />
    </section>
  </main>

  <!-- Card Container -->
  <article class="d-flex flex-column my-4">
    <p class="m-auto text-center py-3">
      Nossos pallets são sustentáveis, resistentes e duráveis, proporcionando
      transporte
      <br />
      seguro e eficiente de cargas. Fáceis de manusear e montar, tornando o
      processo
      <br />
      logístico mais eficiente e ágil.
    </p>

    <CardItems :cards="cards" class="m-auto py-2" />
  </article>
</template>

<style scoped>
.home {
  background-color: #f5f5f5;
  height: 100%;
  width: 100%;

  padding: 180px 100px 60px;
  margin: 0 auto;
}
</style>
