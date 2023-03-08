<template>
  <RouterLink :to="to" class="button">{{ nome }}</RouterLink>
</template>

<script>
import { RouterLink } from "vue-router";
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    to: {
      type: String,
      required: true,
    },
    nome: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    return {
      to: props.to,
      nome: props.nome,
    };
  },
});
</script>

<style scoped>
.button {
  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
  text-decoration: none;

  background-color: #4d5ca0;
  border: 1px solid #f2eacf;
  border-radius: 5px;

  width: 300px;

  height: 75px;
  transition: 0.8s;
}

.button:hover {
  background-color: #20284c;
  color: #fff;
}
</style>
