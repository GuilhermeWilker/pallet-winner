<template>
  <div class="produto-item">
    <div class="text-center">
      <h1 class="pb-1">Detalhes do produto</h1>
      <p class="text-center pb-5">
        Confirme a sua compra abaixo e <br />
        prossiga para receber sua nota
      </p>

      <!-- Card -->
      <div class="card p-3 m-auto" style="">
        <!-- Header do Card -->
        <h2 class="card-title">{{ product.name }}</h2>
        <img :src="product.img" class="img m-auto" />

        <!-- Corpo do Card -->
        <div class="card-body">
          <!-- Informações do Card -->
          <div class="info_cards">
            <div class="d-flex">
              <h5 class="pr-5">Quantidade:</h5>
              <p class="pl-4 pt-auto">{{ product.qnt }} x</p>
            </div>

            <div class="d-flex">
              <h5 class="pr-4">Material:</h5>
              <p class="pl-5 pt-auto">{{ product.material }}</p>
            </div>

            <div class="d-flex">
              <h5 class="pr-5">Preço:</h5>
              <p class="pl-5 pt-auto">{{ product.price }}</p>
            </div>

            <div class="d-flex">
              <h5 class="pl-3">nº de série:</h5>
              <p class="pl-4 pt-auto">0154651-5516</p>
            </div>
          </div>

          <router-link to="/" class="btn btn-primary p-3 mt-3"
            >Confirmar compra</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
import { useProductsStore } from "../stores/productStore";

export default {
  name: "ProductDetails",
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const productsStore = useProductsStore();
    const product = productsStore.getProductById(props.id);
    return {
      product,
    };
  },
};
</script>

<style scoped>
.produto-item {
  margin-top: 130px;
}

.info_cards {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
}

.card-body {
  border-top: 1px solid #fff;
}
.card h1,
.card h2,
.card h3,
.card h4,
.card h5,
.card p {
  color: #fff;
}

.img {
  width: 450px;
}

.card {
  background-color: #20284c;
  width: 30rem;
}

@media (max-width: 1440px) {
  .card {
    margin-bottom: 40px !important;
  }
}

@media (max-width: 425px) {
  .card {
    width: 380px !important;
  }

  .img {
    width: 340px;
    padding-bottom: 20px;
  }
}
</style>
