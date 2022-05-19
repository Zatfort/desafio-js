let nombreUsuario

while (nombreUsuario != 'daniel') {

    nombreUsuario = prompt('ingrese su usuario:').toLowerCase()

    if (nombreUsuario == 'daniel') {

        let contraseñaUsuario

        while (contraseñaUsuario !== 'contraseña123') {

            contraseñaUsuario = prompt('ingrese su contraseña:')

            if (contraseñaUsuario === 'contraseña123') {
                alert('Bienvenido ' + nombreUsuario)
            } else {
                alert('contraseña Incorrecta')
            }
        }

    } else{
        alert('Nombre de usuario incorrecto')
    }


}