async function listarImagenes(){
    try{
        const conexion = await fetch("http://localhost:3001/pokemons");

        const conexionConvertida = conexion.json();
        
        return conexionConvertida;
    } catch (error){
        throw new Error(`Error al obtener la lista de imágenes: ${error.message}`);
    }
    
}

async function enviarImagen(nombre, precio, imagen){
    try{
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
    } catch(error){
        throw new Error(`Error al enviar la imagen: ${error.message}`);
    }
    
}
async function eliminarPokemon(id) {
    try{
        const eliminado = await fetch(`http://localhost:3001/pokemons/${id}`, {
            method: 'DELETE'
        });
        // if (eliminado.ok) {
        //     console.log(`Producto con id ${id} eliminado`);
        // } else {
        //     console.error('Error al eliminar el producto');
        // }
    } catch(error){
        throw new Error(`Error en la solicitud DELETE: ${error.message}`);
    }
    }
    


export const conexionAPI = { listarImagenes, enviarImagen, eliminarPokemon };