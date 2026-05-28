const express = require('express');
const cors = require('cors');
const app = express();

// Le decimos a Express que permita peticiones de cuialquier Frontend
app.use(cors());

// NUESTRA BASE DE DATOS FALTANTE (Un simple Arreglo de Objetos)
const misPersonajes = [
{
    id: 1,
    nombre: "Jerome Cable",
    rol: "Spartan",
    imagen: "https://i.pinimg.com/1200x/79/87/c7/7987c7e8b1755e177f186dcec74d5bda.jpg",
    numero: "092"
},
{
    id: 2,
    nombre: "Alice Treske",
    rol: "Spartan",
    imagen: "https://i.pinimg.com/1200x/76/2f/50/762f5065c8f089b7e18edf8879e544d5.jpg",
    numero: "130"
},
{
    id: 3,
    nombre: "Douglas Rutland",
    rol: "Spartan",
    imagen: "https://i.pinimg.com/1200x/6e/8a/1b/6e8a1b6f0b6db608b8cd333d8c8dab9c.jpg",
    numero: "042" 
},
];

// LA RUTA DE NUESTRA API
app.get('/api/personajes', function(req, res){
    //En lugar de enviar HTML, enviamos los ingredientes crudos (JSON)
    res.json(misPersonajes);
});

//ENCENDEMOS EL SERVIDOR
app.listen(3000, function(){
    console.log("🟢 API funcionando en http://localhost:3000/api/personajes");
});