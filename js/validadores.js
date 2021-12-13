// seccion envio a domicilio

$('#enviar').click((e) => {
    e.preventDefault()


    const nombre = $('#nombre').val()
    const apellido = $('#apellido').val()
    const domicilio = $('#domicilio').val()
    console.log(nombre)

    if (nombre.length < 1 || apellido.length < 1 || domicilio.length < 1 ) {
        
        Swal.fire({
            text: 'verifique los campos marcados en rojos'
        })
    } else {
        Swal.fire({
            text:'Su pedido sera enviado en 30 minutos ¡Gracias por comprar en bucky!',
            confirmButtonText: 'Genial!'
        })
    }
})

$('#nombre').on('input', () => {
    const value = $('#nombre').val()

    if (value.length < 1) {
        $('#nombre').addClass('invalido')
        $('#nombre').removeClass('valido')
    } else {
        $('#nombre').addClass('valido')
        $('#nombre').removeClass('invalido')
    }
})
 
$('#apellido').on('input', () => {
    const value1 = $('#apellido').val()

    if (value1.length < 1) {
        $('#apellido').addClass('invalido')
        $('#apellido').removeClass('valido')
    } else {
        $('#apellido').addClass('valido')
        $('#apellido').removeClass('invalido')
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


// seccion retiro en bucky
$('#enviar2').click((e) => {
    e.preventDefault()


    const nombre = $('#nombre2').val()
    const apellido = $('#apellido2').val()
   
    console.log(nombre2)

    if (nombre.length < 1 || apellido.length < 1) {
        
        Swal.fire({            
            text: 'verifique los campos marcados en rojos', 
        })
    } else {
        Swal.fire({
            
            text: 'Su pedido estara listo en 30 minutos . ¡Gracias por comprar en Bucky!',
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


//seccion envio a mesa

//AJAX



var contenido = document.querySelector('#contenido')
        function mozo() {
            fetch('https://randomuser.me/api/')
            .then(res => res.json())
            .then(data => {
                console.log(data.results['0'])
                contenido.innerHTML = `
                <img src="${data.results['0'].picture.large}" width="100px" class="img-fluid rounded-circle"> 
                <h3> ${data.results['0'].name.last}</h3>
                <p> LLEVARE SU PEDIDO APENAS ESTE LISTO </p>
                <p> ¡GRACIAS POR ELEGIRNOS! </p>
                `
            })
        } 