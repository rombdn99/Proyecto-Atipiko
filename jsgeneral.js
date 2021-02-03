// array de los productos de la tienda
var productos=[
	[//camietas: "ruta","nombre", precio, "talla"
		["img/camisetas/camisetas1.jpg","This is what a gamer dad looks like",18.95,["XS","S","M","L","XL","XXL","XXxL"]],
		["img/camisetas/camisetas2.jpeg","Vacuum Tube T-Shirt",8.95,["XS","S","M","L","XL","XXL","XXxL"]],
		["img/camisetas/camisetas3.jpg","Funtie",18.99,["XS","S","M","L","XL","XXL","XXxL"]],
		["img/camisetas/camisetas4.jpg","GIFTS OF HOPE: T-shirt",15.00,["XS","S","M","L","XL","XXL","XXxL"]],
		["img/camisetas/camisetas5.webp","I love New York",10.98,["XS","S","M","L","XL","XXL","XXxL"]],
		["img/camisetas/camisetas6.jpeg","I'm only talking to my dog",22.99,["XS","S","M","L","XL","XXL","XXxL"]],
		["img/camisetas/camisetas7.jpeg","World's best mom",22.99,["XS","S","M","L","XL","XXL","XXxL"]],
		["img/camisetas/camisetas8.jpg","Camiseta de pez",22.99,["XS","S","M","L","XL","XXL","XXxL"]],
		["img/camisetas/camisetas9.jpg","Cool dude",22.99,["XS","S","M","L","XL","XXL","XXxL"]],
		["img/camisetas/camisetas10.jpg","Camiseta Independencia de Israel",22.99,["XS","S","M","L","XL","XXL","XXxL"]],
	],
	[//zapatillas: "ruta","nombre", precio, talla
		["img/zapatillas/zapatillas1.jpeg","Zapatillas 1",65.55,[31,31.5,32,32.5,33,33.5,34,34.5,35,35.5,36,36.5,37,37.5,38,38.5,39,39.5,40,40.5,41,41.5,42,42.5,43,43.5,44,44.5,45,45.5,46,46.5,47,47.5]],
		["img/zapatillas/zapatillas2.jpeg","Zapatillas 2",100.55,[31,31.5,32,32.5,33,33.5,34,34.5,35,35.5,36,36.5,37,37.5,38,38.5,39,39.5,40,40.5,41,41.5,42,42.5,43,43.5,44,44.5,45,45.5,46,46.5,47,47.5]],
		["img/zapatillas/zapatillas3.jpeg","Zapatillas 3",300.20,[31,31.5,32,32.5,33,33.5,34,34.5,35,35.5,36,36.5,37,37.5,38,38.5,39,39.5,40,40.5,41,41.5,42,42.5,43,43.5,44,44.5,45,45.5,46,46.5,47,47.5]],
		["img/zapatillas/zapatillas4.jpeg","Zapatillas 4",605.52,[31,31.5,32,32.5,33,33.5,34,34.5,35,35.5,36,36.5,37,37.5,38,38.5,39,39.5,40,40.5,41,41.5,42,42.5,43,43.5,44,44.5,45,45.5,46,46.5,47,47.5]],
		["img/zapatillas/zapatillas5.jpeg","Zapatillas 5",605.60,[31,31.5,32,32.5,33,33.5,34,34.5,35,35.5,36,36.5,37,37.5,38,38.5,39,39.5,40,40.5,41,41.5,42,42.5,43,43.5,44,44.5,45,45.5,46,46.5,47,47.5]],
		["img/zapatillas/zapatillas6.jpeg","Crocks del chino",605.41,[31,31.5,32,32.5,33,33.5,34,34.5,35,35.5,36,36.5,37,37.5,38,38.5,39,39.5,40,40.5,41,41.5,42,42.5,43,43.5,44,44.5,45,45.5,46,46.5,47,47.5]],
		["img/zapatillas/zapatillas7.jpeg","Zapatillas 7",605.22,[31,31.5,32,32.5,33,33.5,34,34.5,35,35.5,36,36.5,37,37.5,38,38.5,39,39.5,40,40.5,41,41.5,42,42.5,43,43.5,44,44.5,45,45.5,46,46.5,47,47.5]],
		["img/zapatillas/zapatillas8.jpeg","Zapatillas 8",605.32,[31,31.5,32,32.5,33,33.5,34,34.5,35,35.5,36,36.5,37,37.5,38,38.5,39,39.5,40,40.5,41,41.5,42,42.5,43,43.5,44,44.5,45,45.5,46,46.5,47,47.5]],
		["img/zapatillas/zapatillas9.jpeg","Zapatillas 9",605.42,[31,31.5,32,32.5,33,33.5,34,34.5,35,35.5,36,36.5,37,37.5,38,38.5,39,39.5,40,40.5,41,41.5,42,42.5,43,43.5,44,44.5,45,45.5,46,46.5,47,47.5]],
		["img/zapatillas/zapatillas10.jpeg","Zapatillas 10",650.90,[31,31.5,32,32.5,33,33.5,34,34.5,35,35.5,36,36.5,37,37.5,38,38.5,39,39.5,40,40.5,41,41.5,42,42.5,43,43.5,44,44.5,45,45.5,46,46.5,47,47.5]]
	],
	[//regalos: "ruta","nombre", precio
		["img/regalos/regalos1.jpg","Whiski Star Wars",65],
		["img/regalos/regalos2.jpg","Taza Mounstro de las galletas",65],
		["img/regalos/regalos3.jpg","regalos 3",65],
		["img/regalos/regalos4.jpg","Mini dron",65],
		["img/regalos/regalos5.jpg","regalos 5",65],
		["img/regalos/regalos6.jpg","Mandos para jugar",65],
		["img/regalos/regalos7.jpeg","Protector de movil",65],
		["img/regalos/regalos8.jpeg","regalos 8",65],
		["img/regalos/regalos9.jpeg","The Ultrasonic Eyeglass Cleaner",65],
		["img/regalos/regalos10.jpeg","regalos 10",65]
	]
];


/* fucniones generales */

/*  Recibe: 	numero maximo que va a salir (INT)
				numero minimo que puede salir (INT)
	Devuelve: 	Numero generado aleatoriamente (FLOAT)
	Accion: Se genera un numero aleatorio entre el rango indicado en las variables que se reciben
*/
function aleatorio(maximo,minimo){
	return (Math.random()*(maximo+1))+minimo
}

/*
	Recibe: 	Nombre de variable a buscar (STRING)
	Devuelve: 	Resultado de la busqueda (STRING)
	Accion: 	Mira las variables pasadas por url, como si se hiciese un GET, y busca la variable recibida

*/
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

/*
	Recibe: Nada
	Devuelve: Nada
	Accion: Crea el menu de navegacion

*/

function creacionMenu(){
	var navegador=document.body.children[1].firstElementChild;
	
	var index= document.createElement("li");
	var indexenlace=document.createElement("a");
	indexenlace.innerHTML="Inicio";
	index.appendChild(indexenlace);
	indexenlace.href="index.html";

	var regalos= document.createElement("li");
	var regalosenlace=document.createElement("a");
	regalosenlace.innerHTML="Regalos";
	regalos.appendChild(regalosenlace);
	regalosenlace.href="catalogo.html?cat=2";
	
	var camiseta= document.createElement("li");
	var camisetasenlace=document.createElement("a");
	camisetasenlace.innerHTML="Camisetas";
	camiseta.appendChild(camisetasenlace);
	camisetasenlace.href="catalogo.html?cat=0";
	
	var zapatillas= document.createElement("li");
	var zapatillasenlace=document.createElement("a");
	zapatillasenlace.innerHTML="Zapatillas";
	zapatillas.appendChild(zapatillasenlace);
	zapatillasenlace.href="catalogo.html?cat=1";

	navegador.appendChild(index);
	navegador.appendChild(regalos);
	navegador.appendChild(camiseta);
	navegador.appendChild(zapatillas)
}

creacionMenu()