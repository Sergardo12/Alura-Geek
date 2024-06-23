import { conexionAPI } from "./conexionAPI.js";
// let pokemons = await conexionAPI.listarImagenes();


const lista = document.querySelector("[data-lista]");

function crearCard(nombre, precio, imagen, id){
    const tarjeta = document.createElement("li");
    tarjeta.className = "imagen_item";
    
        tarjeta.innerHTML = `
            <li class="imagen_item">
            <div class="lista-productos-item" data-id=${id}>
            <img class = "imagen-pokemon" src="${imagen}"  alt="imagen">
            <h3>${nombre}</h3>
            <p>s./${precio}</p>
            <button class="btnEliminar">Eliminar</button>
            </div>
            </li>`;
           
   
        return tarjeta;
    }
    


async function listarPokemons (){
    try{
        const listaAPI = await conexionAPI.listarImagenes(); // en esta parte, antes era const listAPI = await conexionAPI.listarPokemons()

    listaAPI.forEach(tarjeta=>lista.appendChild(crearCard(tarjeta.nombre, tarjeta.precio, tarjeta.imagen)))
    }
    catch(error){
        console.log(error)
    }
    
}
listarPokemons()
