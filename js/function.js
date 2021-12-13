

//CONTENEDOR PRODUCTOS

const contenedorProductos = document.querySelector("#Contenedor-productos");

stockCarta.forEach((producto) => {
  const article = document.createElement("article");
  article.classList.add("card", "col-lg-3", "col-md-6", "col-sm-12");
  article.id = `${producto.id}`;

  article.innerHTML = `
    <img src=${producto.img} id='imgP' class="card-img-top" alt="...">
    <div class="card-body">
    <h3 class="card-title">${producto.nombre}</h3>
    <p class="card-text">${producto.tipo}</p>
    <p class="card-text">${producto.detalle}</p>
    <p class="card-text">$ ${producto.precio}.</p>
    <button id='agregcar' onclick="agregarAlCarrito(${producto.id})"> Agregar al carrito </button>
    </div>
    `;

  contenedorProductos.append(article);
});

$(".card-body button").on("mouseover", () => {
  $(".card-body button").toggleClass("buttonCar");
});

// ARRAY CArrito

const contentCarro = document.getElementById("contenedorCarrito");

const contadorCarrito = document.getElementById("contadorCarrito");
const precioTotal = document.getElementById("total");

const botonVaciar = document.getElementById("boton-vaciar");

let carrito = [];
let total = 0;
let totalId = 0;

const agregarAlCarrito = (prodId) => {
  let itemEnCarrito = carrito.find((el) => el.id == prodId);

  if (itemEnCarrito) {
    itemEnCarrito.cantidad += 1;
  } else {
    let { id, tipo, nombre, detalle, precio } = stockCarta.find(
      (el) => el.id == prodId
    );
    carrito.push({
      id: id,
      nombre: nombre,
      tipo: tipo,
      detalle: detalle,
      precio: precio,
      cantidad: 1,
    });
  }
  actualizarCarrito();
  console.log(carrito);



//alert añadido al carrito
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 700,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

Toast.fire({
  icon: 'success',
  title: 'Agregado al carrito'
})
};



//fin alert

const eliminarDelCarrito = (prodId) => {
  const item = carrito.find((prod) => prod.id === prodId);
  const indice = carrito.indexOf(item);

  carrito.splice(indice, 1);

  actualizarCarrito();
  console.log(carrito);
};

const actualizarCarrito = () => {
  contentCarro.innerHTML = "";

  carrito.forEach((prod) => {
    const div = document.createElement("div");
    div.className = "productoEnCarrito";
    div.innerHTML = `
                  <p>${prod.tipo}</p>
                  <p>${prod.nombre}</p>
                  
                  <p>Cantidad: ${prod.cantidad}</p>               
                  <p>Precio: $${prod.precio}</p>   
                  <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"> - </i></button>
              `;

    

    contentCarro.appendChild(div);
  });

  contadorCarrito.innerText = "  " + carrito.length;
  precioTotal.innerText = carrito.reduce(
    (acc, el) => acc + el.precio * el.cantidad,
    0
  );
  
};

botonVaciar.addEventListener("click", () => {
 
  carrito.length = 0;
  actualizarCarrito();
});



//Objetos Promos

const promos = [
  {
    nombre: "COMBO 1",
    precio: 1500,
    id: 1,
    img: "./sources/combos/c1.png",
  },
  {
    nombre: "COMBO 2",
    precio: 2500,
    id: 2,
    img: "./sources/combos/c2.png",
  },
  {
    nombre: "COMBO 3",
    precio: 3500,
    id: 3,
    img: "./sources/combos/c3.png",
  },
  {
    nombre: "COMBO 4",
    precio: 4500,
    id: 4,
    img: "./sources/combos/c4.png",
  },
  {
    nombre: "COMBO 5",
    precio: 4500,
    id: 5,
    img: "./sources/combos/c5.png",
  },
  {
    nombre: "COMBO 6",
    precio: 4500,
    id: 6,
    img: "./sources/combos/c6.png",
  },
];

for (const prod of promos) {
  $("#promos").append(`
      <article class="productCard">
          <h4>${prod.nombre}</h4>
          <img src=${prod.img}>
          <p>Precio: $${prod.precio}</p>
          <small>Código: ${prod.id}</small>
          <button onclick="comprar(${prod.id})" class="boton-combo"><i class="fas fa-trash-alt">COMPRAR COMBO</i></button>
      </article>
  `);
}

const bc = document.getElementById("comprar");

function comprar(bc) {
  Swal.fire({
    title: "GRACIAS POR COMPRAR EN BUCKY ",
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  });
}

//modal

//efecto escritura animacion headers
//typed

const typed = new Typed(".typed", {
  strings: [
    "Comidas",
    "Bebidas",
    "Minutas",
    "Vinos",
    "Hamburguesas",
    "Ensaladas",
    "Postres",
    "Tostados",
    "Gaseosas",
  ],

  //stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
  typeSpeed: 150, // Velocidad en mlisegundos para poner una letra,
  startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
  backSpeed: 100, // Velocidad en milisegundos para borrrar una letra,
  shuffle: false, // Alterar el orden en el que escribe las palabras.
  backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
  loop: true, // Repetir el array de strings
  loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
});

// ========= API MERCADO PAGO =============

const finalizarCompra = async () => {
  const carritoToMP = carrito.map((prod) => {
    return {
      title: prod.nombre,
      description: prod.tipo,
      picture_url: "",
      category_id: prod.id,
      quantity: prod.cantidad,
      currency_id: "ARS",
      unit_price: prod.precio,
    };
  });
  console.log(carritoToMP);

  const resp = await fetch("https://api.mercadopago.com/checkout/preferences", {
    method: "POST",
    headers: {
      //mio
      Authorization:
        "Bearer TEST-6030832828256054-120910-476389e91732696722f1cc5be0955a7e-8145995",
    },
    body: JSON.stringify({
      items: carritoToMP,
      back_urls: {
        success: window.location.origin + "/hola.html",
        failure: window.location.href,
      },
      auto_return: "approved",
    }),
  });
  const data = await resp.json();

  window.location.replace(data.init_point);
};

//entrar con contraseña al checkout

let contraseña = "";

function mostrar() {
  contraseña = prompt("ingrese contraseña de acceso");
  console.log("Contraseña 1987");

  if (contraseña == "1987") {
    window.location.href = "./hola.html";
  } else {
    swal("CONTRASEÑA INCORRECTA \n" + "pista: console.log");
  }

  console.log(contraseña);
}
