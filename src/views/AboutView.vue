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
    <div class="text_container m-auto">
      <h1 class="py-5">
        Somos uma empresa inovadora <br />
        que investe em novas tecnologias para trazer <br />
        os melhores produtos aos nossos clientes.
      </h1>

      <div class="col-6">
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

    <div class="m-auto col-8 pl-5">
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

    <div class="text_container d-flex">
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
</style>
