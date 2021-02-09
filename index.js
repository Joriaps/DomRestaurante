/**
 * Programación Funcional
 */

// USUARIOS
let usuario = {
    nombre: 'Pepe',
    edad: 41
}

// Pedido Actual
let pedido = []
let precioTotal = 0

/*
// MOSTRAR MENÚ
const mostrarMenu = () => {
    console.log(`COD - PLATO - PRECIO`)
    console.log(`--------------------`)
    CARTA.forEach( plato => {
        console.log(`${plato.cod} - ${plato.nombre} - ${plato.precio}€`)
    } )
}*/

// Enseñar el menú al inicio
//mostrarMenu()

let platoSeleccionado = document.getElementById("cod_introducido")
let botonAdd = document.getElementById('botonAdd')
let botonPagar = document.getElementById('botonPagar')

const calcularPrecio = precio => {
    precioTotal += precio
    console.log(`+${precio}€`)
}

botonAdd.addEventListener('click', () => {
    if(CARTA.find(plato => plato.cod === platoSeleccionado.value.toUpperCase()) !== undefined){
        let plato = CARTA.find(plato => plato.cod === platoSeleccionado.value.toUpperCase())
        pedido.push(plato)
        calcularPrecio(plato.precio)
        alert(`${plato.nombre} añadido a la cesta`)
        platoSeleccionado.value = ''
    } else alert('El valor introducido no es válido')
    
})

botonPagar.addEventListener('click', () => {
        alert(`El precio del pedido son: ${precioTotal} €`)
})

// PEDIDO
/**
for(let i = 0; i < numPlatos; i++){
    const pedidoDelUsuario = elegir => {
        let platoElegido
        console.log(CARTA.find( codigo => elegir.toUpperCase() === codigo.cod))
        platoElegido = CARTA.find( codigo => elegir.toUpperCase() === codigo.cod)
        console.log(platoElegido.precio)
        calcularPrecio(platoElegido) //Calculo el precio de los platos elegidos
        pedidoFinal.push(platoElegido.nombre) //Introduzco en el array los nombres de los platos elegidos
    }
    
    pedidoDelUsuario(platoElegido = prompt('Que plato te gustaria elegir? \n(Introduce su código)'))
    mostrarMenu() //Muestro el menu si tiene que seguir eligiendo
}

alert(`Ha pedido ${pedidoFinal}`)
alert(`El precio final del pedido son: ${precioTotal}€`)*/

