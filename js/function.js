//ESTILOS AGRUPADOS
// const estilos = $("h1,h3");

// $(estilos).css("color", "white");
// $(estilos).css("font-size", "300%");
// $(estilos).css("font-family", "'Franklin Gothic Medium', 'Arial Narrow', 'Arial, sans-serif'");


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

//efecto escritura animacion headers
//typed

const typed = new Typed ('.typed',{
  strings: ['Comidas','Bebidas','Minutas','Vinos','Hamburguesas',
  'Ensaladas','Postres','Tostados','Gaseosas'],

  //stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 150, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 100, // Velocidad en milisegundos para borrrar una letra,	
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	
	
	});