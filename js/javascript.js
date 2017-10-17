
	var productos = ["Abonos", "Básico", "Cultivo", "Fumigación", "Jardinera", "Macetas", "Pasto", "Remodelacion","Sistemas de riego"];
	var imgGrandes = ["img/productos/abonos.png", "img/productos/carretilla.jpg", "img/productos/cultivo.jpg", "img/productos/fumigacion.jpg", "img/productos/jardineria.jpg", "img/productos/macetas.jpg", "img/productos/ponerpasto.jpg", "img/productos/remodelacion.jpg", "img/productos/sistemasRiego.jpg"];
	var imgPeque = ["img/productos/abonosm.png", "img/productos/carretillam.jpg", "img/productos/cultivom.jpg", "img/productos/fumigacionm.jpg", "img/productos/jardineriam.jpg", "img/productos/macetasm.jpg", "img/productos/ponerpastom.jpg", "img/productos/remodelacionm.jpg", "img/productos/sistemasRiegom.jpg"];
	var precios = [50, 30, 400, 250, 150, 80, 500, 1200, 2000];
	var stock = [100, 100, 100, 100, 100, 100, 100, 100, 100];
	var precioTransporte = [50, 100, 200, "gratis"];
	var IVA = 0.16;
	var uniUser;

//JAVASCRIPT A EJECUTARSE UNA VEZ CARGADA LA PAGINA:
	window.onload = function(){

		//Se cargan los productos dentro del HTML de forna dinamica
		var DIVS = document.getElementsByName("DIVS");
		for (i in productos){
			DIVS[i].innerHTML = '<a id="imgG'+i+'" href="' +imgGrandes[i]+ '"><img id="imgP'+i+'" class="imagen" src="' +imgPeque[i]+ '"></a><div class="etiquetas"><b><span id="pro'+i+'">' +productos[i]+ '</span>:&nbsp;<span id="pre'+i+'">' +precios[i]+ '</span></b></div><div class="stock">Hay en stock <span id="uni'+i+'">' +stock[i]+ '</span> unidades,<br/><input class="uniBien" type="number" id="uniUser'+i+'" name="uniUser" value="0" size="4" /></div>';
		}
		//Botones que llevaran a cabo la ejecucion de determinadas secuencias de codigo JavaScript:
		document.getElementById("botonTotal").onclick = validaLasUnidades;
	}
	//-------------------COMIENZAN LAS FUNCIONES-------------------
//FUNCION DE VALIDACION DE UNIDADES:
	function validaLasUnidades(elEvento) {
		var todoBien = true;
		uniUser = document.getElementsByName("uniUser");

		for (i in productos){

			if ( uniUser[i].value == "" || uniUser[i].value > stock[i] || uniUser[i].value < 0 ){

				todoBien = false;
				uniUser[i].className = "uniMal";

				//Modifica el css para quitar los formularios:
				document.getElementById("todo").className = "todoNo";
				document.getElementById("menu").className = "menuNo";
				document.getElementById("divZonaCompra").className = "divZonaCompraNo";
				document.getElementById("divTotal").className = "divsNo";
   			document.getElementById("divDatos").className = "divsNo";
   			document.getElementById("divPago").className = "divsNo";

				//Deshabilita el boton de datos personales:
				document.getElementById("botonDatos").disabled = true;
/**/			document.getElementById("botonDatos").disabled = true;
/**/			document.getElementById("botonDatos").disabled = true;

				//Con solo un error se para la validacion de unidades:
				return;
			}
			else{
				todoBien = true;
				uniUser[i].className = "uniBien";
			}
		}

		//Si no ha habido ni un solo error, se ejecuta la siguiente funcion que se encarga de cargar el carro de la compra:
		if (todoBien){
			calculaElTotal();
		}
	}

//FUNCION QUE MUESTRA EL CARRO DE LA COMPRA:
	function calculaElTotal(elEvento) {
		//Añade el encabezado de la tabla
		document.getElementById("tablaTotal").innerHTML = '<tr><td class="pro"><b>Producto</b></td><td class="uni"><b>Unidades</b></td><td class="preUni"><b>Precio Unidad</b></td><td class="preTotal"><b>Precio Total</b></td></tr>';

		//Inicializacion de las variables para esta funcion:
		var carroTotal = 0;
		var numProductos = 0;

		//Muestra el carrito de la compra
		for (i in productos){
			var tablaTotal = document.getElementById("tablaTotal").innerHTML;
			var preTotal = 0;
			//Cuenta el numero de productos para saber cuanto costara el transporte
			if (uniUser[i].value != 0){
				numProductos++;
			}

			if (uniUser[i].value != 0){

				//Modifica el css para hacer hueco a los formularios
				document.getElementById("todo").className = "todoSi";
				document.getElementById("menu").className = "menuSi";
				document.getElementById("divZonaCompra").className = "divZonaCompraSi";
				document.getElementById("divTotal").className = "divsSi";
  			document.getElementById("divDatos").className = "divsNo";
	  		document.getElementById("divPago").className = "divsNo";


				//Calcula el totalUnidades y rellena el carro de la compra
				preTotal = precios[i] * uniUser[i].value;
				carroTotal = carroTotal + preTotal;
				document.getElementById("tablaTotal").innerHTML = tablaTotal + '<tr class="proCarrito"><td>' +productos[i]+ '</td><td>' +uniUser[i].value+ '</td><td>' +precios[i]+ '</td><td id="preTotal' +i+'" name="preTotal">' +preTotal+ '</td></tr>';
			}
		}

		//Se calcula el transporte a pagar segun la cantidad de productos comprados:
		var precioTransporteAPagar;
		if (numProductos <= 2){
			precioTransporteAPagar = precioTransporte[0];
		}
		else if (numProductos <= 3){
			precioTransporteAPagar = precioTransporte[1];
		}
		else if (numProductos <= 4){
			precioTransporteAPagar = precioTransporte[2];
		}
		else if (numProductos >= 5){
			precioTransporteAPagar = precioTransporte[3];
		}

		//Se sacan las cuentas del transporte (si lo hubiese), del iva y el total:
		var totalTransporte = precioTransporteAPagar;
		if(totalTransporte == "gratis"){
			var totalIVA = (carroTotal * IVA);
			var totalAPagar = carroTotal + totalIVA;
		}
		else{
			var totalIVA = ((carroTotal + totalTransporte) * IVA);
			var totalAPagar = carroTotal + totalTransporte + totalIVA;
		}
		//Limitar a 2 los decimales a mostrar del IVA:
		totalIVA=totalIVA*100;
		totalIVA=Math.floor(totalIVA);
		totalIVA=totalIVA/100;
		//Limitar a 2 los decimales a mostrar del TOTAL A PAGAR:
		totalAPagar=totalAPagar*100;
		totalAPagar=Math.floor(totalAPagar);
		totalAPagar=totalAPagar/100;

		//Se añade a la tabla el TOTAL que suma el carrito:
		tablaTotal = document.getElementById("tablaTotal").innerHTML;
		document.getElementById("tablaTotal").innerHTML = tablaTotal + '<tr><td>&nbsp;</td>&nbsp;<td></td><td class="preUni"><b>Transporte: </b></td><td class="preTotal"><b>' +totalTransporte+ '</b></td></tr>' + '<tr><td>&nbsp;</td>&nbsp;<td></td><td class="preUni"><b>IVA ('+(IVA*100)+'%): </b></td><td class="preTotal"><b>' +totalIVA+ '</b></td></tr>' + '<tr><td>&nbsp;</td>&nbsp;<td></td><td class="preUni"><b>Total: </b></td><td class="preTotal" id="totalAPagar"><b>' +totalAPagar+ ' </b></td></tr>';
	}
