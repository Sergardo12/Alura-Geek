import { conexionAPI } from "./conexionAPI.js";



const lista = document.querySelector("[data-lista]");

function crearCard(nombre, precio, imagen, id){
    const tarjeta = document.createElement("li");
    tarjeta.className = "imagen_item";
    
        tarjeta.innerHTML = `
           
            <div class="lista-productos-item" data-id=${id}>
            <img class = "imagen-pokemon" src="${imagen}"  alt="imagen">
            <h3>${nombre}</h3>
            <p>s./${precio}</p>
            <button class="btnEliminar" >Eliminar</button>
            </div>
            `;
            
           lista.appendChild(tarjeta);

           const eliminar = tarjeta.querySelector(".btnEliminar");

           eliminar.addEventListener("click", async () => {
               try {
                   await conexionAPI.eliminarPokemon(id);
                   console.log(`Pokemon con id ${id} eliminado correctamente`);
                   tarjeta.remove(); 
               } catch (error) {
                   console.error("Error al eliminar el Pokémon:", error);
               }
           });
            
        return tarjeta;
    }
    



async function listarPokemons (){
    try{
        const listaAPI = await conexionAPI.listarImagenes(); 
    listaAPI.forEach(tarjeta=>lista.appendChild(crearCard(tarjeta.nombre, tarjeta.precio, tarjeta.imagen, tarjeta.id)))
    }
    catch(error){
        console.log(error)
    }
    
}


listarPokemons()
