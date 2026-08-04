<template>
  <section class="categories">

    <div class="container">

      <div class="section-title">

        <span>Nuestras Categorías</span>

        <h2>Encuentra todo lo que necesitas</h2>

        <p>
          Explora nuestro catálogo organizado por categorías.
        </p>

      </div>

      <div class="categories-grid">

        <div
          class="category-card"
          v-for="category in categories"
          :key="category.id"
        >

          <img
            :src="category.image"
            :alt="category.name"
          >

          <div class="category-info">

            <h3>{{ category.name }}</h3>

            <button>
              Ver productos
            </button>

          </div>

        </div>

      </div>

    </div>

  </section>
</template>

<script setup>
import { ref } from "vue";

const categories = ref([
  {
    id: 1,
    name: "Maquinaria",
    image: "/images/categorias/maquinaria.png",
  },
  {
    id: 2,
    name: "Repuestos",
    image: "/images/categorias/repuestos.png",
  },
  {
    id: 3,
    name: "Motobombas",
    image: "/images/categorias/motobomba.png",
  },
  {
    id: 4,
    name: "Ahoyadores",
    image: "/images/categorias/ahoyador.png",
  },
  {
    id: 5,
    name: "Fumigadoras",
    image: "/images/categorias/fumigadora.png",
  },
  {
    id: 6,
    name: "Lubricantes",
    image: "/images/categorias/lubricantes.png",
  },
]);
</script>

<style scoped>
@import "../assets/css/categories.css";
</style>