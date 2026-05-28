<script setup>
//Declaración de los Props
defineProps(['titulo', 'descripcion', 'imagen']);
</script>

<template>
  <div class="tarjeta">
    <img :src="imagen" alt='Arte'>

    <h2>{{ titulo }}</h2>
    <p>{{ descripcion }}</p>

    <button>Ver detalles</button>
  </div>
</template>

<style scoped>
.tarjeta{
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  max-width: 300px;
  transition: transform 0.3s;
}

.tarjeta:hover{
  transform: translateY(-5px);
}

img{
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 5px;
  margin-bottom: 15px;
}

h2{
  color: #333;
  margin: 0 0 10px 0;
}

p{
  color: #666;
  font-size: 0.9rem;
}

button{
  background-color: red;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  margin-top: 15px;
}
</style>
