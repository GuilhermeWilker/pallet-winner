<template>
  <div class="m-auto d-flex justify-content-center">
    <!-- Formulário -->
    <div class="col-3 m-auto form">
      <!-- CPF -->
      <div class="form-group">
        <label for="CPF">CPF:</label>
        <input
          type="text"
          class="form-control"
          id="CPF input"
          aria-describedby="CPF"
          placeholder="xxx.xxx.xxx-xx"
        />
        <small id="CPF" class="form-text text-muted"
          >Nunca vamos compartilhar seu CPF, com ninguém. Por favor digite-o
          acima</small
        >
      </div>

      <!-- EMAIL -->
      <div class="form-group">
        <label for="Email">Email:</label>
        <input
          type="email"
          class="form-control"
          id="Email input"
          aria-describedby="Email"
          placeholder="Joao@email.com"
        />
      </div>

      <!-- TELEFONE -->
      <div class="form-group">
        <label for="Telefone">Telefone:</label>
        <input
          type="tel"
          class="form-control"
          id="Telefone input"
          aria-describedby="Telefone"
          placeholder="(11) 11 1234-5678"
        />
      </div>

      <!-- IMAGEM -->
      <label for="Image">Selecione seu Pallet</label>
      <select class="form-control" id="Image" v-model="selectedProductId">
        <option
          v-for="product in productsStore.products"
          :key="product.name"
          :value="product.id"
        >
          {{ product.name }}
        </option>
      </select>

      <!-- Submit -->
      <button
        class="btn btn-primary my-3 px-5 py-3"
        @click="submit(selectedProductId)"
      >
        Enviar
      </button>
    </div>

    <div class="box_content col-4 mr-auto p-4 d-flex flex-column">
      <!-- Image Container -->
      <div class="mx-auto">
        <img class="img" src="/images/pilha_pallet.png" />
      </div>

      <!-- Container de Textos -->
      <div class="mx-auto col-11">
        <p>
          O seu
          <span class="font-weight-bold h5">Pallet</span>
          preza pelo meio ambiente e sustentabilidade. Já estamos preparando o
          seu pallet para pronta entrega, lembrando que todos eles possuem
          resistência necessárias para sua operação.
        </p>

        <p>
          Basta enviar suas credenciais ao lado, lembrando que atendemos as
          principais empresas do mercado, entregando pallets que combinam <br />
          eficiência logística com responsabilidade ambiental!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { useProductsStore } from "../stores/productStore";
import { useRouter } from "vue-router";
const input = document.querySelectorAll("input");

export default {
  name: "Formulario",
  setup() {
    const productsStore = useProductsStore();
    const router = useRouter();

    let selectedProductId = null;

    function submit(id) {
      router.push({ name: "item", params: { id } });
    }

    return {
      productsStore,
      submit,
    };
  },
};
</script>

<style scoped>
.box_content {
  background-color: #20284c;
  width: 703px;
  height: 538px;

  border-radius: 15px;
}

.box_content p {
  color: #fff;

  font-size: 16px;
}

.img {
  width: 390px;
}

@media (max-width: 1440px) {
  .d-flex {
    gap: 2px;
  }

  .box_content {
    height: 630px;
  }
}

@media (max-width: 1024px) {
  .box_content {
    height: 640px;
  }

  .mx-auto img {
    width: 290px;
  }
}

@media (max-width: 768px) {
  .d-flex {
    flex-direction: column-reverse;
    align-items: center !important;
  }

  .box_content {
    margin: 0 auto;

    width: 400px !important;
  }

  .col-4 {
    min-width: 500px !important;
  }

  .form {
    min-width: 350px;

    margin-top: 55px !important;
  }
}

@media (max-width: 425px) {
  .d-flex {
    flex-direction: column-reverse;
    align-items: center !important;
  }

  .box_content {
    margin: 0 auto;

    width: 400px !important;
  }

  .col-4 {
    min-width: 380px !important;
  }

  .form {
    min-width: 350px;

    margin-top: 55px !important;
  }
}
</style>
