<template>
  <section class="featured">

    <div class="container">

      <div class="section-title">
        <span>Productos destacados</span>

        <h2>Los más vendidos</h2>

        <p>
          Equipos y repuestos con mayor demanda.
        </p>

      </div>


      <div v-if="loading" class="loading"> 
      Cargando productos...

      </div>

      <div v-else class="products">

       <div
  class="product"
  v-for="product in products"
  :key="product.id"
>

    <img
        :src="product.image"
        :alt="product.name"
    >

    <div class="product-info">

        <h3>{{ product.name }}</h3>

        <p class="price">
            $ {{ Number(product.price).toLocaleString("es-CO") }}
        </p>

        <button class="btn-cart">
            Agregar al carrito
        </button>

    </div>
</div>
      </div>

    </div>

  </section>
</template>

<script setup>

import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useProductStore } from "../stores/productStore";

const productStore = useProductStore();

const { products, loading } = storeToRefs(productStore);
import { watch } from "vue";

watch(products, (value) => {
  console.log("Productos cargados:", value);
});

onMounted(async () => {
  await productStore.fetchProducts();

  console.log("Productos cargados:", products.value);
});

</script>

<style scoped>

@import "../assets/css/products.css";

</style>