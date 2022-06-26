const promesa = new Promise ((accept, reject) => {
    console.log("Hola promise");
    const aceptor = Math.random();
    if (aceptor > 0,5){
        accept({value: "se acepta la promesa"})
    }
    reject({value:"sE RECHAZA"})
})
promesa.then(
    result => console.log(`Se resolvio bien ${result.value}`),
    error => console.log(`se resolvio mal ${error.value}`)
)

//Otra forma
/*promesa.then(result => console.log(result))
.catch(error => console.log(error)) */