import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector("[data-formulario]");
function generarID() {
    return Math.random().toString(36).substr(2, 9); // Ejemplo sencillo, no es perfecto para producción
}

async function crearImagen(evento){

    evento.preventDefault();

    const nombre= document.querySelector("[data-nombre]").value;
    const precio= document.querySelector("[data-precio]").value;
    const imagen= document.querySelector("[data-imagen]").value;
    const id = generarID();
    
    

    await conexionAPI.enviarImagen(nombre, precio, imagen, id);

    
}

formulario.addEventListener("submit", evento => crearImagen(evento));