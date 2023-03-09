<script setup>
import Button from "../components/Button.vue";
</script>

<template>
  <!-- Sobre a Empresa -->
  <section class="section d-flex">
    <!-- Container de Textos -->
    <div class="text_container m-auto col-6">
      <h1 class="py-5">
        Fundada em 1986, <br />
        orgulhosamente oferecendo soluções <br />
        ágeis e inovadoras no mercado de pallets!
      </h1>

      <div class="col-8">
        <p class="text-right">
          Sempre prezando pelo meio ambiente e <br />
          sustentabilidade. Nossos pallets são feitos com <br />
          materiais renováveis e duráveis, garantindo a <br />
          qualidade e resistência necessárias para sua <br />
          operação.
        </p>
        <br />
        <p class="text-right pb-4">
          Atendemos as principais empresas do mercado, entregando <br />
          pallets que combinam eficiência logística <br />
          com responsabilidade ambiental.
        </p>
      </div>
    </div>

    <!-- Imagem Container -->
    <div class="image_container">
      <img src="/images/pallet_lote.png" alt="Lote de paletes" />
    </div>
  </section>

  <!-- Sobre a Inovação -->
  <section class="section_padding_left d-flex flex-column text-justify py-5">
    <!-- Container de Textos -->
    <div class="text_container_second_section m-auto">
      <h1 class="py-5 col-7 h_second_section">
        Somos uma empresa inovadora que investe em novas tecnologias para trazer
        os melhores produtos aos nossos clientes.
      </h1>

      <div class="col-6 p_second_section">
        <p>
          Em destaque, nosso <strong>ECO pallet</strong>, feito com plástico
          reciclado de alta resistência, suportando mais peso que os pallets
          convencionais, além de ser totalmente desmontável para facilitar a
          logística reversa e a reciclagem do material.
        </p>

        <p class="">
          Com o ECO pallet, você tem a garantia de estar escolhendo um produto
          sustentável, de alta qualidade e resistência. Venha conhecer nossas
          soluções em pallets e faça a escolha certa para o seu negócio e para o
          planeta.
        </p>
      </div>
    </div>

    <!-- Imagem Container -->
    <div class="image_container_entrega">
      <img src="/images/about/truck.png" alt="Carreta de entrega de pallets" />
    </div>
  </section>

  <!-- Sobre a Entrega -->
  <section class="section_entrega section_padding_left">
    <!-- Container de Textos -->

    <div class="m-auto col-8 pl-5 p_last_section">
      <p class="text-center">
        Com uma logística bem estruturada, a empresa se preocupa em oferecer
        agilidade e <br />
        qualidade em todas as etapas, desde a produção até a entrega dos
        pallets.
      </p>
      <br />
      <p class="text-center">
        Isso permite que as empresas recebam seus produtos no prazo desejado,
        sem <br />
        comprometer sua produção ou operação.
      </p>
    </div>

    <div class="text_container d-flex h_last_container">
      <h1 class="py-5">
        Reconhecida por nossa eficiência na entrega, <br />
        garantindo a chegada dos pallets em tempo <br />
        recorde de 1 hora a 3 horas no máximo.
      </h1>

      <Button to="/" nome="Voltar a Página inicial" class="m-auto" />
    </div>
  </section>
</template>

<style>
.about {
  height: 100%;
  width: 100%;

  margin: 0 auto;
}

.section h1,
.section h2,
.section h3,
.section p {
  color: #fff;
}

.section_entrega h1,
.section_entrega h2,
.section_entrega h3,
.section_entrega p {
  color: #fff;
}

.section {
  background-color: #20284c;
  padding-left: 430px;
  margin-top: 90px;
}

.section_entrega {
  background-color: #20284c;
  margin-top: -355px;
  padding-top: 120px;

  overflow-y: hidden;
}

.image_container_entrega {
  position: relative;
  top: -10px;
  right: 215px;
}

.image_container {
  position: relative;
  top: 140px;
  right: 330px;
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

  .section_padding_left {
    padding-left: 0px !important;
  }
  .col-7 {
    width: 1250px !important;
  }

  .p_second_section p {
    width: 500px !important;
  }

  .image_container_entrega {
    right: 15px;
  }

  .p_last_section p {
    padding-left: 30px;
  }

  .h_last_container h1 {
    width: 800px;
  }
}

@media (max-width: 1366px) {
  .image_container {
    right: 100px;
  }
}

@media (max-width: 1024px) {
  /* Last Section*/
  .image_container {
    position: relative;

    left: -40px;
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

  /* Segunda Section*/
  .section_padding_left {
    padding-left: 0px !important;
  }

  .text_container_second_section {
    padding-left: 75px;
    width: 100%;
  }

  .h_second_section {
    width: 800px !important;
    font-size: 30px;
  }

  .p_second_section p {
    width: 500px !important;
  }

  /* Ultima Section*/
  .image_container_entrega {
    right: 200px;
  }

  .p_last_section p {
    padding-left: 30px;
  }

  .h_last_container h1 {
    width: 590px;
  }
}

@media (max-width: 768px) {
  /* Last Section*/
  .image_container {
    top: 160px;
    left: 45px;
  }
  .image_container img {
    width: 540px;
  }

  .section {
    padding-left: 0;
    overflow: hidden;
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

  /* Segunda Section*/
  .section_padding_left {
    padding-left: 0px !important;
  }

  .text_container_second_section {
    padding-left: 80px;
    width: 100%;
  }

  .h_second_section {
    width: 100% !important;
    font-size: 30px;

    padding: 0;
  }

  .p_second_section p {
    width: 500px !important;
  }

  /* Ultima Section*/
  .image_container_entrega {
    right: 200px;
  }

  .p_last_section p {
    padding-left: 140px;
    text-align: justify !important;
  }

  .h_last_container h1 {
    font-size: 25px;
    width: 500px;
  }
}

@media (max-width: 425px) {
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
    margin-left: -145px !important;
    font-size: 22px;

    text-align: center;
    width: 500px;
  }

  .text_container p {
    width: 341px;
    margin-left: -80px !important;

    text-align: justify !important;
  }
  /* Segunda Section*/
  .section_padding_left {
    padding-left: 0px !important;
  }

  .text_container_second_section {
    padding-left: 80px;
    width: 100%;

    padding-bottom: 320px;
  }

  .h_second_section {
    width: 100% !important;
    font-size: 22px;

    text-align: justify;
    padding: 0;
  }

  .p_second_section p {
    margin-left: -50px;
    width: 340px !important;

    text-align: justify;
  }

  /* Ultima Section*/
  .image_container_entrega {
    display: none;
  }

  .p_last_section p {
    padding-left: 0;
    text-align: justify !important;
    margin-left: -70px;
    width: 340px !important;
  }

  .p_last_section p:last-child {
    padding-bottom: 15px;
  }

  .h_last_container h1 {
    display: none;
  }
}
</style>
