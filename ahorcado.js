var listaPalabras = ['ALURA', 'DOCUMENTO',
    'ORACLE', 'TRABAJO',
    'JUEGO', 'DESAFIO',
    'JAVASCRIPT', 'CURSO',
    'RETO', 'COLOR'];
var letrasIngresadas =[];
var palabraIngresada;
var paso = 0;

var palabraSecreta;
function escojerPalabra() {
    var a = Math.round(  Math.random() * listaPalabras.length);
    //resto 1 cuando a == listaPalabras.length que no existe
    a = listaPalabras.length == a ? (a - 1):a;
    palabraSecreta = listaPalabras[a];
    console.log("Palabra: "+palabraSecreta);
    palabraIngresada = new Array(palabraSecreta.length);
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
    dTablero(palabraSecreta);
    window.addEventListener( "keydown", capturaLetra);

}


//valido que la letra esté en mayúsculas y no tenga acentos
//y no esté en la lista de palabras erroneas ya ingresadas
function validarLetra(letra, codigo) {
    letra = letra.toUpperCase();
    console.log('Letra: '+ letra + ' Codigo: '+codigo);
    var acentos = ['Á','É','Í','Ó','Ú']
    if (codigo > 64 && codigo < 91) {
        if (acentos.indexOf(letra) < 0 ) {
            if (letrasIngresadas.indexOf(letra) < 0) {
                return true;    
            }
            
        }
    }
    return false;
}

//Para saber si la letra ingresada coincide con alguna de la palabraSecreta
function coincideLetra(letra) {
    var coincide = false
    if (palabraSecreta.indexOf(letra) >= 0) {
        coincide = true;
    }
    letrasIngresadas.push(letra);
    return coincide;
}


function capturaLetra(evento) {
    var letra = evento.key.toUpperCase();
    if (validarLetra(letra, evento.keyCode) && paso < 11) {
        if(coincideLetra(letra)){ 
            dLetrac(letra);
            console.log(palabraIngresada.join(''));
            if (palabraSecreta == palabraIngresada.join('')) {
                paso = 12;
                dAhorcado(paso);
            }
        }else{
            dLetrai(letra);
            dAhorcado(++paso);
        }
    }
}



var btnIniciar = document.querySelector("#iniciar-juego");
btnIniciar.onclick = iniciarJ;

var btnAgregar = document.querySelector("#nueva-palabra");
btnAgregar.onclick = agregarPalabra;
