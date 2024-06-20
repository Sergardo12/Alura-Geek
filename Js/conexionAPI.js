async function listarImagenes(){
    const conexion = await fetch("http://localhost:3001/pokemons");

    const conexionConvertida = conexion.json();
    
    return conexionConvertida;
}

async function enviarImagen(nombre, precio, imagen){
    const conexion = await fetch("http://localhost:3001/pokemons", {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({
            nombre:nombre,
            precio:`${precio}`,
            imagen:imagen
        })
    });
    const conexionConvertida = conexion.json();
    
    return conexionConvertida;
}
async function eliminarProducto(id) {
    const response = await fetch(`http://localhost:3001/pokemons/${id}`, {
        method: 'DELETE'
    });
    if (response.ok) {
        console.log(`Producto con id ${id} eliminado`);
    } else {
        console.error('Error al eliminar el producto');
    }
}


export const conexionAPI = { listarImagenes, enviarImagen, eliminarProducto };