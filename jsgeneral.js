// array de los productos de la tienda
var productos=[
				[//camietas: "ruta","nombre", precio
					["img/camisetas/camisetas1.jpg","Camiseta 1",18.95],
					["img/camisetas/camisetas2.jpeg","Camiseta 2",8.95],
					["img/camisetas/camisetas3.jpg","Camiseta 3",18.99],
					["img/camisetas/camisetas4.jpg","Camiseta 4",15],
					["img/camisetas/camisetas5.webp","Camiseta 5",10.98],
					["img/camisetas/camisetas6.jpeg","Camiseta 6",22.99],
					["img/camisetas/camisetas7.jpeg","Camiseta 7",22.99],
					["img/camisetas/camisetas8.jpg","Camiseta 8",22.99],
					["img/camisetas/camisetas9.jpg","Camiseta 9",22.99],
					["img/camisetas/camisetas10.jpg","Camiseta 10",22.99],
				],
				[//zapatillas: "ruta","nombre", precio
					["img/zapatillas/zapatillas1.jpeg","Zapatillas 1",65],
					["img/zapatillas/zapatillas2.jpeg","Zapatillas 2",65],
					["img/zapatillas/zapatillas3.jpeg","Zapatillas 3",65],
					["img/zapatillas/zapatillas4.jpeg","Zapatillas 4",65],
					["img/zapatillas/zapatillas5.jpeg","Zapatillas 5",65],
					["img/zapatillas/zapatillas6.jpeg","Zapatillas 6",65],
					["img/zapatillas/zapatillas7.jpeg","Zapatillas 7",65],
					["img/zapatillas/zapatillas8.jpeg","Zapatillas 8",65],
					["img/zapatillas/zapatillas9.jpeg","Zapatillas 9",65],
					["img/zapatillas/zapatillas10.jpeg","Zapatillas 10",65]
				],
				[//regalos: "ruta","nombre", precio
					["img/regalos/regalos1.jpg","regalos 1",65],
					["img/regalos/regalos2.jpg","regalos 2",65],
					["img/regalos/regalos3.jpg","regalos 3",65],
					["img/regalos/regalos4.jpg","regalos 4",65],
					["img/regalos/regalos5.jpg","regalos 5",65],
					["img/regalos/regalos6.jpg","regalos 6",65],
					["img/regalos/regalos7.jpeg","regalos 7",65],
					["img/regalos/regalos8.jpeg","regalos 8",65],
					["img/regalos/regalos9.jpeg","regalos 9",65],
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
					Recive: 	Nombre de variable a buscar (STRING)
					Devuelve: 	Resultado de la busqueda (STRING)
					Accion: 	Mira las variables pasadas por url, como si se hiciese un GET, y busca la variable recibida
	
				*/
				function getParameterByName(name) {
				    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
				    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
				    results = regex.exec(location.search);
				    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
				}