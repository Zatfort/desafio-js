let CompraLibro = true

function carrito(precio, articulo) {
    alert("Usted compro: " + articulo + " a  $ " + precio)
    alert("GRACIAS POR SU COMPRA!! PRESIONE ACEPTAR PARA CONTINUAR")
}

alert("bienvenidos a Paper Factory Sale")
alert("Le mostraremos los productos que tenemos hoy para ofrecerle")


while (CompraLibro) {
    let opcion = Number((prompt("Indique que desea comprar: \n 1 .Libro IT Precio :$2800 \n 2 .Libro mafalda Precio :$5000 \n 3 .Libro recuerdo flasheros Precio:$10000 ")))

    switch (opcion) {
        case 1:
            carrito(2800,"libro IT")
            break;
        case 2:
            carrito(5000,"Libro mafalda")
            break;
        case 3:
            carrito(10000,"Libro recuerdo flasheros" )
            break;
        default:
            alert("Gracias por su visita,hasta la proxima")
            CompraLibro = true
    }
}






































































































































































































// let nombreUsuario

// while (nombreUsuario != 'daniel') {

//     nombreUsuario = prompt('ingrese su usuario:').toLowerCase()

//     if (nombreUsuario == 'daniel') {

//         let contraseñaUsuario

//         while (contraseñaUsuario !== 'contraseña123') {

//             contraseñaUsuario = prompt('ingrese su contraseña:')

//             if (contraseñaUsuario === 'contraseña123') {
//                 alert('Bienvenido ' + nombreUsuario)
//             } else {
//                 alert('contraseña Incorrecta')
//             }
//         }

//     } else{
//         alert('Nombre de usuario incorrecto')
//     }


// }



// // ESTRUCTURA FOR

// for (let i  = 0; i < 10; i++) {
//     console.log("hola")
// }

// switch y while combinado 

/*

let entrada = prompt("Ingresar un nombre ");
//Repetimos hasta que se ingresa "ESC"
while(entrada != "ESC" ){
   switch (entrada) {
       case "ANA":
            alert("HOLA ANA");
            break;
        case "JUAN":
            alert("HOLA JUAN");
            break;
       default:
           alert("¿QUIÉN SOS?")
           break;
   }
   entrada = prompt("Ingresar un nombre");
}

*/

// funciones

// let nombre = prompt("ingresa tu nombre:")
// let apellido = prompt("ingresa tu apellido:")

// function saludo(nombreUsuario, apellidoUsuario) {
//    alert("bienvenido " + nombreUsuario + ", tu apellido es " + apellidoUsuario) 
// }

// saludo(nombre,apellido)


// funciones con return (explicacion 01:05:00 clase programacion con funcioines )

// function sumar(primerNumero,segundoNumero) {
//     return primerNumero + segundoNumero
// }

// let resultadoSuma = sumar(5,10)

// alert(resultadoSuma)