<template>
    <section class="seccion-portafolio">
        <h2>Catalogo en tiempo real</h2>
        <p class="subtitulo">Conectando a la API DummyJSON</p>

        <div v-if="cargando" class="estado-carga">
            <h3>Conectando al servidor</h3>
        </div>

        <div v-else class="galeria">
            <TarjetaArtistica
            v-for="item in listaDeProyecto"
            :key="item.id"
            :titulo="item.title"
            :descripcion="item.descripcion"
            :imagen="item.thumbnail"
            />
        </div>
    </section>

</template>


<script setup>
import {ref} from 'vue';
import TarjetaArtistica from './TarjetaArtistica.vue';

const listaDeProyecto = ref([]);
const cargando = ref(true);

fetch("https://dummyjson.com/products?limit=6")
.then(respuesta => respuesta.json())
.then(datos => {

    listaDeProyecto.value = datos.products;
    cargando.value= false;
})
.catch(error=> {
    console.error("Hubo un error en la Matrix:", error);
    cargando.value = false;
});

</script>


<style scoped>
.seccion-portafolio{
    background-color: white;
    padding: 50px 20px;
    border-radius: 15px;
    margin: 20px;
    text-align: center;
}

.estado-carga{
    padding: 50px;
    color:red;
    animation: latido 5.5s infinite;
}

@keyframes latido {
    0%, 100% {opacity: 1;}
    50% {opacity: 0.5;}
}

galeria{
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
}
</style>