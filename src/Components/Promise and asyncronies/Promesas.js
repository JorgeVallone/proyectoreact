// Declaracion de la promesa
const promesa = new Promise ((accept , reject) => {
    console.log("Hola en promise");
    reject({value: "Se rechazan"})
})
promesa.then(
    result => console.log(`Se resolvio bien ${result.value}`),
    error => console.log(`Hubo un error; ${error.value}`)
)

//Otra forma
/*promesa.then (result => console.log(result))
.catch(error => console.log(error))*/