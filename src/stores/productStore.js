import { defineStore } from "pinia";

export const useProductsStore = defineStore("productsStore", {
  state: () => ({
    products: [
      {
        id: 0,
        name: "Eco Pallet",
        qnt: 500,
        price: "7.500 R$",
        img: "/images/produtos/ecoPallet.png",
        material: "Plástico",
      },
      {
        id: 1,
        name: "Pallet Tradicional",
        qnt: 500,
        price: "11.000 R$",
        img: "/images/produtos/tradicionalPallet.png",
        material: "Madeira",
      },
      {
        id: 2,
        name: "Mini Pallet",
        qnt: 500,
        price: "9.000 R$",
        img: "/images/produtos/miniPallet.png",
        material: "Madeira",
      },
    ],
  }),
  getters: {
    getProductById: (state) => (id) => {
      return state.products.find((product) => product.id === parseInt(id));
    },
  },
});
