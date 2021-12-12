

// seccion retiro en bucky
$('#enviar2').click((e) => {
    e.preventDefault()


    const nombre = $('#nombre2').val()
    const apellido = $('#apellido2').val()
   
    console.log(nombre2)

    if (nombre.length < 1 || apellido.length < 1) {
        
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'verifique los campos marcados en rojos'
        })
    } else {
        Swal.fire({
            icon: 'success',
            title: '¡Enviado correctamente!',
            confirmButtonText: 'Genial!'
        })
    }




})

$('#nombre2').on('input', () => {
    const value = $('#nombre2').val()

    if (value.length < 1) {
        $('#nombre2').addClass('invalido')
        $('#nombre2').removeClass('valido')
    } else {
        $('#nombre2').addClass('valido')
        $('#nombre2').removeClass('invalido')
    }
})
 
$('#apellido2').on('input', () => {
    const value1 = $('#apellido2').val()

    if (value1.length < 1) {
        $('#apellido2').addClass('invalido')
        $('#apellido2').removeClass('valido')
    } else {
        $('#apellido2').addClass('valido')
        $('#apellido2').removeClass('invalido')
    }
})

$('#domicilio').on('input', () => {
    const value2 = $('#domicilio').val()

    if (value2.length < 1) {
        $('#domicilio').addClass('invalido')
        $('#domicilio').removeClass('valido')
    } else {
        $('#domicilio').addClass('valido')
        $('#domicilio').removeClass('invalido')
    }
})


