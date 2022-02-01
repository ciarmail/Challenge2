var listaPalabras = ['ALURA', 'DOCUMENTO',
    'ORACLE', 'TRABAJO',
    'JUEGO', 'DESAFIO',
    'JAVASCRIPT', 'CURSO',
    'RETO', 'COLOR'];

var palabraSecreta;
function escojerPalabra() {
    var a = Math.round(  Math.random() * listaPalabras.length);
    //resto 1 cuando a == listaPalabras.length que no existe
    a = listaPalabras.length == a ? (a - 1):a;
    palabraSecreta = listaPalabras[a];
    console.log("Palabra: "+palabraSecreta);
    return palabraSecreta;
}

var inpPalabra = document.querySelector("#input-nueva-palabra");
function agregarPalabra() {
    var palabra = inpPalabra.value.toUpperCase().trim();
    //validar palabra
    if (listaPalabras.indexOf(palabra) >= 0 ) {
        alert("Palabra ya ingresada.");
        return;
    }
    listaPalabras.push(palabra);
    console.log(listaPalabras);
}

function iniciarJ() {
    palabraSecreta = escojerPalabra();
    dGuiones(palabraSecreta);
    dTablero();
    window.addEventListener( "keydown", capturaLetra);

}


function capturaLetra(evento) {
    var codigo = evento.keyCode;
    var letra = evento.key.toUpperCase();
    console.log(evento);    
    console.log(evento.key);
    var acentos = ['Á','É','Í','Ó','Ú']
    if (codigo > 64 && codigo < 91) {
        if (acentos.indexOf(letra) < 0) {
            dLetrai(letra);
        }
    }
}

var btnIniciar = document.querySelector("#iniciar-juego");
btnIniciar.onclick = iniciarJ;

var btnAgregar = document.querySelector("#nueva-palabra");
btnAgregar.onclick = agregarPalabra;
