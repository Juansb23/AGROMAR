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

      <div class="products">

        <div
          class="product"
          v-for="product in products"
          :key="product.id"
        >

          <img :src="product.image">

          <h3>{{ product.name }}</h3>

          <p class="price">

            $ {{ product.price }}

          </p>

          <button>

            Agregar al carrito

          </button>

        </div>

      </div>

    </div>

  </section>
</template>

<script setup>

import { ref } from 'vue'

const products = ref([
  {
    id: 1,
    name: "Motobomba Sukiyama",
    price: "1.250.000",
    image: "/images/productos/motobomba.jpg"
  },
  {
    id: 2,
    name: "Ahoyador",
    price: "980.000",
    image: "/images/productos/ahoyador.jpg"
  },
  {
    id: 3,
    name: "Guadaña",
    price: "1.450.000",
    image: "/images/productos/guadana.jpg"
  },
  {
    id: 4,
    name: "Fumigadora",
    price: "850.000",
    image: "/images/productos/fumigadora.jpg"
  }
])

</script>

<style scoped>

@import "../assets/css/products.css";

</style>