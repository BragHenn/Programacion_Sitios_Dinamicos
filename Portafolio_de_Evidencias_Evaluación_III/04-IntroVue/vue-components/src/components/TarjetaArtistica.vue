<script setup>
</script>

<template>
    <div class="tarjeta">
        <img src="https://picsum.photos/400/200?random=1" alt="Arte">
        <h2>Proyecto Creativo</h2>
        <p>Un diseño modular creado con Vue.js</p>
        <button>Ver detalles</button>
    </div>
</template>

<style scoped>
.tarjeta{
    background-color: white;
    border-radius: 12px;
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.1);
    padding: 20px;
    text-align: center;
    max-width: 300px;
    font-family: "Helvetica", sans-serif;
    transition: transform 0.3s;
}

.tarjeta:hover{
    transform: translateY(-5px);
}

img{
    width: 100%;
    border-radius: 8px;
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
