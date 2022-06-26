//IIFE

(async () => {
//Defino la promise
const obtenerProductos = new Promise((accept, reject) => {
    console.log("Hola promise");
    const aceptor = Math.random();
    if (aceptor > 0.5){
        accept({value: "Listado de productos"})
    }
    reject({mesage:`No te devuelvo nada`})
})

//Bloque try-catch
try {
    const response = await obtenerProductos;
    console.log(response)
} catch (error) {
    console.log("Hubo un error")
    console.log(error)
    
}
})()



