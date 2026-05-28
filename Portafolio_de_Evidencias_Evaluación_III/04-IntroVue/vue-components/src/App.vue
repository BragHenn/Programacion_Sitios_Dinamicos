<script setup>
import TarjetaArtistica from './components/TarjetaArtistica.vue';
</script>

<template>
  <main class="contenedor-principal">

    <h1>Mi portafolio Modular</h1>

    <div class="galeria">
      <TarjetaArtistica />
      <TarjetaArtistica />
      <TarjetaArtistica />
      <TarjetaArtistica />
    </div>

  </main>
</template>

<style scoped>
.contenedor-principal{
  background-color: #1a1a1a;
  min-height: 100vh;
  padding: 40px;
  color: white;
  text-align: center;
  font-family: sans-serif;
}

.galeria{
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 50px;
  flex-wrap: wrap;
}
</style>

