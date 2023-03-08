<template>
  <div class="m-auto d-flex justify-content-center">
    <form class="col-2 m-auto">
      <!-- CPF -->
      <div class="form-group">
        <label for="CPF">CPF:</label>
        <input
          type="text"
          class="form-control"
          id="CPF"
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
          id="Email"
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
          id="Telefone"
          aria-describedby="Telefone"
          placeholder="(11) 11 1234-5678"
        />
      </div>

      <!-- IMAGEM -->
      <label for="Image">Selecione seu Pallet</label>
      <select class="form-control" id="Image">
        <option>Selecione uma opçao</option>
        <option>ECO Pallet</option>
        <option>Pallet Tradicional</option>
        <option>Mini Pallet</option>
      </select>

      <!-- Submit -->
      <button type="submit" class="btn btn-primary my-3 px-5 py-3">
        Enviar
      </button>
    </form>

    <div class="box_content col-4 mr-auto p-4 d-flex flex-column">
      <!-- Image Container -->
      <div class="mx-auto">
        <img src="/images/pallet_lote.png" class="img" />
      </div>

      <!-- Container de Textos -->
      <div class="mx-auto col-11">
        <p>
          O seu
          <span class="font-weight-bold h5">Pallet Tradicional</span> preza pelo
          meio ambiente e sustentabilidade. Já estamos preparando o seu pallet
          para pronta entrega, lembrando que todos eles possuem resistência
          necessárias para sua operação.
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

<script setup></script>

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
</style>
