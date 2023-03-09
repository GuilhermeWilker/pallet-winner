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
    <section class="d-flex flex-column">
      <!-- Hero Image -->
      <div class="img_box m-auto pt-5 animate_up_down row-1">
        <img src="/images/hero/hero_image.png" alt="Pallet de madeira" />
      </div>

      <!-- Título -->
      <h2 class="text-center font-weight-bold pt-2 col-7 m-auto">
        Pallets resistentes e renováveis! a solução ideal para sua logística
      </h2>

      <!-- Parágrafo -->
      <p class="text-center w-50 font-weight-normal m-auto py-4 col-8">
        Oferecemos uma ampla variedade de pallets para atender suas demandas com
        agilidade e inovação. Nossos produtos proporcionam a tranquilidade de
        uma escolha sustentável sem comprometer a qualidade e resistência
        necessárias para sua operação.
      </p>

      <Button to="/produto" nome="Faça seu pedido" class="m-auto" />
    </section>
  </main>

  <!-- Card Container -->
  <article class="d-flex flex-column my-4" id="produtos">
    <p class="m-auto text-center py-3 p_card">
      Nossos pallets são sustentáveis, resistentes e duráveis, proporcionando
      transporte
      <br />
      seguro e eficiente de cargas. Fáceis de manusear e montar, tornando o
      processo
      <br />
      logístico mais eficiente e ágil.
    </p>

    <!-- Card Container -->
    <CardItems :cards="cards" class="m-auto py-2" />
  </article>

  <!-- Seção About -->
  <section class="section d-flex py-3 m-auto">
    <!-- Container de Textos -->
    <div class="text_container m-auto col-5">
      <h1 class="py-5">
        Fundada em 1986, orgulhosamente oferecendo soluções ágeis e inovadoras
        no mercado de pallets!
      </h1>

      <div class="col-8">
        <p class="text-right">
          Sempre prezando pelo meio ambiente e sustentabilidade. Nossos pallets
          são feitos com materiais renováveis e duráveis, garantindo a qualidade
          e resistência necessárias para sua operação.
        </p>
        <br />
        <p class="text-right pb-4">
          Atendemos as principais empresas do mercado, entregando pallets que
          combinam eficiência logística com responsabilidade ambiental.
        </p>

        <Button to="/about" nome="Saiba Mais" class="ml-auto button_about" />
      </div>
    </div>

    <!-- Imagem Container -->
    <div class="image_container">
      <img src="/images/pallet_lote.png" alt="Lote de paletes" />
    </div>
  </section>
</template>

<style scoped>
.home {
  background-color: #f5f5f5;
  height: 100%;
  width: 100%;

  padding: 180px 100px 60px;
  margin: 0 auto;
}

.section {
  background-color: #20284c;
  padding-left: 430px;
}

.image_container {
  position: relative;
  top: 140px;
  right: 330px;
}

.section h1,
.section h2,
.section h3,
.section p {
  color: #fff;
}

@media (max-width: 1440px) {
  .image_container {
    position: relative;

    right: 70px;
  }

  .section {
    padding-left: 0;
  }

  .text_container {
    padding-left: 180px;
  }
  .text_container h1 {
    width: 700px;
  }

  .text_container p {
    width: 341px;
  }
}

@media (max-width: 1024px) {
  /* HERO */
  .home h2 {
    font-size: 30px;
  }

  .home .col-8 {
    min-width: 700px;
  }

  /* Last Section*/
  .image_container {
    position: relative;

    left: 0px;
  }

  .image_container img {
    width: 550px;
  }

  .section {
    padding-left: 0;
  }

  .text_container {
    padding-left: 75px;
  }
  .text_container h1 {
    font-size: 30px;
    width: 700px;
  }

  .text_container p {
    width: 341px;
  }

  .button_about {
    margin-left: 90px !important;
  }
}

@media (max-width: 768px) {
  /* HERO */
  .d-flex {
    align-items: center;
    justify-content: center;
  }

  .home h2 {
    font-size: 30px;
    min-width: 500px;
  }

  .home .col-8 {
    min-width: 700px;
    margin-left: -70px !important;
  }

  /* Last Section*/

  .image_container {
    top: 55px;
    left: 120px;
  }
  .image_container img {
    width: 540px;
  }

  .section {
    padding-left: 0;
    overflow-x: hidden;
  }

  .text_container {
    padding-left: 75px;
  }
  .text_container h1 {
    margin-left: -10px !important;
    font-size: 30px;
    width: 700px;
  }

  .text_container p {
    width: 341px;
    margin-left: -10px !important;
  }

  .button_about {
    margin-right: 0px;
  }
}

@media (max-width: 425px) {
  /* HERO */
  .img_box img {
    width: 280px;
  }
  .d-flex {
    align-items: center;
    justify-content: center;
  }

  .home h2 {
    font-size: 27px;
    min-width: 400px;
    margin-left: -90px !important;
  }

  .home .col-8 {
    min-width: 381px;
    margin-left: -80px !important;
    text-align: justify !important;
  }
  /* Card container */
  .p_card {
    text-align: justify !important;
    width: 353px !important;
  }

  /* Last Section*/

  .image_container {
    display: none;
  }

  .section {
    padding-left: 0;
    overflow-x: hidden;
  }

  .text_container {
    padding-left: 0px;
  }
  .text_container h1 {
    margin-left: -100px !important;
    font-size: 27px;
    width: 400px;
  }

  .text_container p {
    width: 341px;
    margin-left: -100px !important;

    text-align: justify !important;
  }

  .button_about {
    margin-left: -50px !important;
  }
}
</style>
