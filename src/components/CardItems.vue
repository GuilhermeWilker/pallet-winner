<template>
  <div class="card-container d-flex">
    <!-- Definindo o Card -->
    <div
      class="card mx-3 my-5"
      v-for="card in cards"
      :key="card.titulo"
      style="width: 365px"
    >
      <!-- Card-body-->

      <div class="card-body">
        <!-- Título do Card -->
        <h5 class="card-title d-flex">
          <strong>{{ card.titulo }}</strong>
          <img :src="card.img" alt="ECO Pallet" />
        </h5>

        <!-- Descrição do Card -->
        <p class="card-text">
          {{ card.descricao }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "CardContainer",
  props: {
    cards: {
      type: Array,
      required: true,
    },
    setup(props) {
      const cards = ref(props.cards);

      return {
        cards,
      };
    },
  },
});
</script>

<style scoped>
.card {
  background-color: #f5f5f5;
}
.card:hover {
  position: relative;
  bottom: 50px;

  cursor: pointer;
}
.card-title {
  gap: 30%;
}

@media (max-width: 1024px) {
  .card-container {
    flex-wrap: wrap;
    justify-content: center;

    height: 100%;
    width: 100%;
  }

  .card {
    height: 180px;
  }
}
</style>
