<template>

<header class="header">

    <div class="container navbar">

        <div class="logo">

            <img src="/images/logo.png" alt="AGROMAR" class="logo">

        </div>

        <nav>

            <RouterLink to="/">Inicio</RouterLink>

            <RouterLink to="/productos">Productos</RouterLink>

            <RouterLink to="/categorias">Categorías</RouterLink>

            <RouterLink to="/nosotros">Nosotros</RouterLink>

            <RouterLink to="/contacto">Contacto</RouterLink>

        </nav>

        <div class="actions">

            <div class="search">

                <input
                    type="text"
                    placeholder="Buscar productos..."
                >

                <button>

                    <i class="fa-solid fa-search"></i>

                </button>

            </div>

            <button class="icon">

                <i class="fa-solid fa-cart-shopping"></i>

            </button>

            <button class="icon">

                <i class="fa-solid fa-user"></i>

            </button>

        </div>

    </div>

</header>

</template>

<script setup>

</script>

<style scoped>

@import "../assets/css/navbar.css";

</style>