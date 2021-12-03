

//CONTENEDOR PRODUCTOS

const contenedorProductos = document.querySelector("#Contenedor-productos");

stockCarta.forEach((producto) => {
  const article = document.createElement("article");
  article.classList.add("card", "col-lg-3", "col-md-6", "col-sm-12");
  article.id = `${producto.id}`;

  article.innerHTML = `
    <img src=${producto.img} id='imgP' class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${producto.nombre}</h5>
    <p class="card-text">${producto.tipo}</p>
    <p class="card-text">${producto.detalle}</p>
    <p class="card-text">$ ${producto.precio}.</p>
    <button id='agregcar' onclick="agregarAlCarrito(${producto.id})"> Comprar </button>
    </div>
    `;

  contenedorProductos.append(article);
});

$(".card-body button").on("mouseover", () => {
  $(".card-body button").toggleClass("buttonCar");
});

//
