<script setup>
import {ref} from 'vue';
import TarjetaArtistica from './TarjetaArtistica.vue';

const listaDeProyectos = ref([
    {
        id: 1,
        nombre: "Identidad visual cerveceria",
        detalle: "Diseño de marca y etiquetas para cerveza artesanal local",
        imagen: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=400&q=80"
    },
    {
        id: 2,
        nombre: "App de ecoturismo",
        detalle: "Diseño de UI/UX para app de senderismo",
        imagen: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=400&q=80"
    },
    {
        id: 3,
        nombre: "Campaña de festival de arte",
        detalle: "Carteles y publicidad en redes para eventos culturales",
        imagen: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=400&q=80"   
    }
]);

</script>


<template>
    <section clas="seccion-portafolio">
        <h2>Mis proyectos destacados</h2>
        <p class="subtitulo">Generado de una base de datos</p>

        <div class="galeria">
            <TarjetaArtistica
            v-for="proyecto in listaDeProyectos"
            :key="proyecto.id"
            :titulo="proyecto.nombre"
            :descripcion="proyecto.detalle"
            :imagen="proyecto.imagen"
            />

        </div>
    </section>
</template>


<style scoped>
.seccion-portafolio{
    background-color: white;
    padding: 50px 20px;
    border-radius: 15px;
    margin: 20px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
}

h2{
    color: #2b2d42;
    font-size: 2rem;
    margin-bottom: 5px;
}

.subtitulo{
    color: #8d99ae;
    margin-bottom: 30px;
}

.galeria{
    display:flex;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
}
</style>
