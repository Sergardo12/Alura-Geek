import { conexionAPI } from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]");

function crearCard(nombre, precio, imagen){
    const tarjeta = document.createElement("li");
    tarjeta.className = "imagen_item";
    tarjeta.innerHTML = `
                        <li class="imagen_item">
                            <div class="lista-productos-item">
                                <img class = "imagen-pokemon" src="${imagen}"  alt="">
                                <h3>${nombre}</h3>
                                <p>s./${precio}</p>
                                <button class="btnEliminar">Eliminar</button>
                            </div>
                        </li>`;
    const eliminar = tarjeta.querySelector(".btnEliminar");
    eliminar.addEventListener("click", ()=> {
        conexionAPI.eliminarProducto(id).then(()=>{
            tarjeta.remove();
        })
    })
    return tarjeta;
}

async function listarPokemons (){
    const listaAPI = await conexionAPI.listarImagenes(); // en esta parte, antes era const listAPI = await conexionAPI.listarPokemons()

    listaAPI.forEach(tarjeta=>lista.appendChild(crearCard(tarjeta.nombre, tarjeta.precio, tarjeta.imagen)))
}
listarPokemons()