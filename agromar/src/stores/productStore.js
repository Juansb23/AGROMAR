import { defineStore } from "pinia";
import { getProducts } from "../services/productService";

export const useProductStore = defineStore("products", {

    state: () => ({
        products: [],
        loading: false
    }),

    actions: {

        async fetchProducts() {

            this.loading = true;

            this.products = await getProducts();

            this.loading = false;

        }

    }

});