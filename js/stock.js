

let stockCarta= [
    {id:1, tipo: "Pizza", nombre: "Mozzarella", detalle: "Mozzarella, aceitunas, ajo picado", precio: 900, img: './sources/stock/pmoza.png'},
    {id:2, tipo: "Pizza", nombre: "Margarita", detalle: "Mozzarella de leche de vaca, tomate, aceitunas", precio: 1100, img: './sources/stock/pmargarita.png'},
    {id:3, tipo: "Pizza", nombre: "4-Quesos", detalle: "La mozzarella, la gorgonzola, el parmesano y la ricotta", precio: 900, img: './sources/stock/4quesos.png'},
    {id:4, tipo: "Pizza", nombre: "Calzone", detalle: "Jamon dulce, salame y huevo", precio: 600, img: './sources/stock/pmoza.png'},
    {id:5, tipo: "Empanada", nombre: "Empanada Carne", detalle: "carne picada, cebolla, aceitunas, huevo", precio: 750, img: './sources/stock/ecarne.png'},
    {id:6, tipo: "Empanada", nombre: "Jamon y Queso", detalle: "Jamon y Queso cortados en cubos ", precio: 750, img: './sources/stock/ejyq.png'},
    {id:7, tipo: "Empanada", nombre: "Humita", detalle: "Choclo y salsa blanca", precio: 800, img: './sources/stock/echoclo.png'},
    {id:8, tipo: "Empanada", nombre: "Pollo", detalle: "Pollo cortado en cubos, morron, cebolla, queso mozzarella", precio: 850, img: './sources/stock/epollo.png'},
    {id:9, tipo: "sand", nombre: "Tostados", detalle: "Pan de miga jamon y queso", precio: 700, img: './sources/stock/stostado.png'},
    {id:10, tipo: "Hamburguesa", nombre: "Hambur. completa", detalle: "Lechuga, tomate, huevo, queso en feta", precio: 650, img: './sources/stock/hcompleta.png'},
    {id:11, tipo: "Minutas", nombre: "Papas Fritas", detalle: "Papas baston fritas", precio: 450, img: './sources/stock/minutas.png'},
    {id:12, tipo: "Ensalada", nombre: "Ensalada Cesar", detalle: "pollo cortado en tiras, lechuga , tomate", precio: 600, img: './sources/stock/ecesas.png'},
    {id:21, tipo: "gaseosa", nombre: "Coca-Cola", detalle: "Gaseosa Coca-Cola 500cc", precio: 150, img: './sources/stock/cc1.png'},
    {id:22, tipo: "gaseosa", nombre: "Sprite", detalle: "Gaseosa Lima-Limon 500cc", precio: 150, img: './sources/stock/cc2.png'},
    {id:23, tipo: "gaseosa", nombre: "Paso de los toros", detalle: "Gaseosa Pomelo 500cc", precio: 150, img: './sources/stock/cc3.png'},
    {id:24, tipo: "gaseosa", nombre: "Fanta", detalle: "Gaseosas Naranja 500cc", precio: 600, img: './sources/stock/cc4.png'},
    {id:25, tipo: "cervezas", nombre: "Corona", detalle: "Cerveza Corona 350cc", precio: 350, img: './sources/stock/cc5.png'},
    {id:26, tipo: "cervezas", nombre: "Heineken", detalle: "Cerveza Heineken 700cc ", precio: 350, img: './sources/stock/cc6.png'},
    {id:27, tipo: "cervezas", nombre: "Brahma", detalle: "Cerveza Brahma 700cc", precio: 300, img: './sources/stock/cc7.png'},
    {id:28, tipo: "cervezas", nombre: "Stella Artois", detalle: "Cerveza Stella Artois 700cc", precio: 350, img: './sources/stock/cc8.png'},
    {id:29, tipo: "agua", nombre: "Cristal", detalle: "Agua mineral Cristal 500cc", precio: 250, img: './sources/stock/cc9.png'},
    {id:210, tipo: "agua", nombre: "Cielo", detalle: "Agua mineral Cielo 500cc", precio: 300, img: './sources/stock/cc10.png'},
    {id:211, tipo: "agua-saborizada", nombre: "Levite Manzana", detalle: "Agua saborizada sabor manzana 500cc", precio: 450, img: './sources/stock/cc11.png'},
    {id:212, tipo: "agua-saborizada", nombre: "Levite Cero", detalle: "Agua Saborizada naranja 500cc", precio: 450, img: './sources/stock/cc12.png'},
    {id:31, tipo: "Espumante Blanco", nombre: "Baron B Extra Brut", detalle: "Chandon - 2002", precio: 3900, img: './sources/stock/v1.png'},
    {id:32, tipo: "Espumante Blanco", nombre: "Rosell Boher Brut", detalle: "Cavas Rosell Boher - 2010", precio: 1300, img: './sources/stock/v2.png'},
    {id:33, tipo: "Espumante Blanco", nombre: "Trampeter Extra Brut", detalle: "Rutini Wines - 2013", precio: 1665, img: './sources/stock/v3.png'},
    {id:34, tipo: "Espumante Blanco", nombre: "Saint Felicien Nature", detalle: "Catena Zapata - 1996", precio: 4955, img: './sources/stock/v4.png'},
    {id:35, tipo: "Espumante Blanco", nombre: "Bressia Royale Brut Nature", detalle: "Bressia - 2015", precio: 1530, img: './sources/stock/v5.png'},
    {id:36, tipo: "Blanco", nombre: "Apartado Gran Chardonay", detalle: "Rutinis Wine - 2015 ", precio: 1530, img: './sources/stock/v6.png'},
    {id:37, tipo: "Blanco", nombre: "Adrianna Vineyard White Bones", detalle: "Catenas Zapata - 2012", precio: 2630, img: './sources/stock/v7.png'},
    {id:38, tipo: "Blanco", nombre: "Luca Chardonay ", detalle: "Laura Catena - 2013", precio: 3530, img: './sources/stock/v8.png'},
    {id:39, tipo: "Blanco", nombre: "Premius", detalle: "Salentein - 2014", precio: 1610, img: './sources/stock/v9.png'},
    {id:310, tipo: "Tinto", nombre: "Alta Vista Terreoir", detalle: "Alta Vista - 2012", precio: 1590, img: './sources/stock/v10.png'},
    {id:311, tipo: "Tinto", nombre: "Alto a las Hormigas", detalle: "Alto a las Hormigas - 2015", precio: 890, img: './sources/stock/v11.png'},
    {id:312, tipo: "Tinto", nombre: "Fabre Montmayou", detalle: "Domaine Vistalba - 2006", precio: 5520, img: './sources/stock/v12.png'}
]  



