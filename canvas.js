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

    //dibujo lados de base
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

//PINTAR LA O LAS LETRAS CORRECTAS
function dLetra(x, y, letra) {
    pincel.font="30pt Verdana";
	pincel.fillStyle = "white";
	pincel.fillText(letra, x + 5, ybase + 40);
}

function dAhorcado(paso) {
    pincel.fillStyle = "lightsalmon";
    pincel.fillRect(75, 300, 25, 250);

    pincel.fillStyle = "lightsalmon";
    pincel.fillRect(75, 50, 25, 250);

    pincel.fillStyle = "lightsalmon";
    pincel.fillRect(75, 50, 200, 25);

    pincel.fillStyle = "lightsalmon";
    pincel.fillRect(270, 50, 10, 150);

    //cabeza
    pincel.fillStyle = "lightblue";
    pincel.beginPath();
    pincel.arc(275, 240, 40,0,Math.PI * 2);
    pincel.fill();
    pincel.beginPath();
    pincel.fillStyle = "white";
    //ojo izquierdo
    pincel.arc(260, 230, 10, 0, Math.PI * 2);
    //ojo derecho
    pincel.arc(290, 230, 10, 0, Math.PI * 2);
    pincel.fill();
    //boca
    pincel.beginPath();
    pincel.ellipse(275, 260, 15, 15, 0, 0, Math.PI *2);
    pincel.fill();

    //cuerpo
    pincel.beginPath();
    pincel.fillStyle = "blue";
    pincel.fillRect(270, 280, 10, 125);

    //braso derecho
    pincel.moveTo(280,290);
    pincel.lineTo(375,230);
    pincel.lineTo(375,240);
    pincel.lineTo(280,300);
    pincel.fill();

    //braso izquierdo
    pincel.moveTo(275,290);
    pincel.lineTo(185,235);
    pincel.lineTo(185,245);
    pincel.lineTo(275,300);
    pincel.fill();


    //pie derecho
    pincel.moveTo(270,400);
    pincel.lineTo(375,475);
    pincel.lineTo(375,480);
    pincel.lineTo(270,410);
    pincel.fill();

    //pie izquierdo
    pincel.moveTo(270,400);
    pincel.lineTo(175,475);
    pincel.lineTo(175,480);
    pincel.lineTo(270,410);
    pincel.fill();
}

dTablero();
//dGuiones("JAVASCRIPT12");
//dLetra("P");

dAhorcado();
