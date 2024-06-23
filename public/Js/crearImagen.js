import { conexionAPI } from "./conexionAPI.js";


const formulario = document.querySelector("[data-formulario]");



async function crearImagen(evento){

    // evento.preventDefault();
    const id = document.querySelector("[data-id]")
    const nombre= document.querySelector("[data-nombre]").value;
    const precio= document.querySelector("[data-precio]").value;
    const imagen= document.querySelector("[data-imagen]").value;
    
    
    

    await conexionAPI.enviarImagen(nombre, precio, imagen);
  
    
}

formulario.addEventListener("submit", evento => crearImagen(evento));