var pantalla = document.querySelector("#ahorcado");
var pincel = pantalla.getContext('2d');
pincel.fillStyle = "lightgrey";
pincel.fillRect(0,0,800,600); 


//DIBUJAR LA BASE DE LA ORCA
function dTablero() {

    //Dibujo de la base
    pincel.fillStyle = "lightsalmon";
    pincel.fillRect(50, 550, 75, 35);
    pincel.moveTo(25,590);
    pincel.lineTo(50,550);
    pincel.lineTo(50,590);
    pincel.fill();

    //pincel.beginPath();
    pincel.moveTo(150,590);
    pincel.lineTo(125,550);
    pincel.lineTo(125,590);
    pincel.fill();

}

//inicio : determina el inicio desde donde se escribiran las letras
var inicio = 0;
//ancho: es el ancho de cada cuadro para escribir la letra
var ancho = 40;
var ybase = 525;
//Dibujo de guiones base de cada letra
function dGuiones(palabra) {
    var xcentro = 500;
    var factor = Math.floor(palabra.length / 2);
    inicio = xcentro - (factor * ancho );
    var x = inicio;

     for (let i = 0; i < palabra.length; i++) {
         pincel.fillStyle = "lightgreen";
         pincel.fillRect(x, ybase, ancho, 45);
         x += (ancho + 5 ); 
     }
}


function dLetra(letra) {
    console.log(inicio);
    pincel.font="30pt Verdana";
	pincel.fillStyle = "white";
	pincel.fillText("T", inicio + 5, ybase + 40);
}


dTablero();
dGuiones("PRUEBA");
//dLetra("P");