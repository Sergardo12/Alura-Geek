async function listarImagenes(){
    try{
        const conexion = await fetch("http://localhost:3000/pokemons");

        const conexionConvertida = await conexion.json();
        console.log(conexionConvertida)
        return conexionConvertida;

    } catch (error){
        console.log(error)
    }
    
}

async function enviarImagen(nombre, precio, imagen){
    try{
        const conexion = await fetch("http://localhost:3000/pokemons", {
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
async function eliminarPokemon() {
    try{
        const eliminado = await fetch(`http://localhost:3000/pokemons/${id}`, {
            method: 'DELETE'
        });
      
        await eliminado.json();
    } catch(error){
        console.log(error)
    }
    }
    


export const conexionAPI = { listarImagenes, enviarImagen, eliminarPokemon };