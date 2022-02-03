var listaPalabras = ['ALURA', 'DOCUMENTO', 'RUTA',
    'ORACLE', 'TRABAJO', 'FLOR',
    'JUEGO', 'DESAFIO', 'DIOS',
    'JAVASCRIPT', 'CURSO', 'CAMBIO',
    'RETO', 'COLOR', 'AMARILLO', 'ECUADOR', 'FUTURO'];
var letrasIngresadas =[];
var palabraIngresada;
var paso = 0;
var inpPalabra = document.querySelector("#input-nueva-palabra");


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

//valido que la palabra ingresada  no tenga acentos
//y no esté en la lista de palabras ya ingresadas
function validarPalabra(palabra) {
    var exito  = true;
    var palabra = palabra.toUpperCase();
    //var acentos = ['Á','É','Í','Ó','Ú'];
    for (let i = 0; i < palabra.length; i++) {
        var codigo = palabra[i].charCodeAt(0);
        //console.log('Codigo: '+ codigo);
        if( !(codigo > 64 && codigo < 91) || palabra.trim().length == 0) {
            alert("Texto vacío o con caracteres no permitidos!!");
            exito = false;
            break;
        }
    }
    return exito;
}


function agregarPalabra() {
    var palabra = inpPalabra.value.toUpperCase().trim();
    //validar palabra
    if (listaPalabras.indexOf(palabra) >= 0 ) {
        alert("Palabra ya ingresada.");
        return;
    }
    if (validarPalabra(palabra)) {
        listaPalabras.push(palabra);
        console.log(listaPalabras);
    }
}

function iniciarJ() {
    console.log("iniciarJ");
    paso = 0;
    letrasIngresadas =[];
    palabraSecreta = escojerPalabra();
    window.addEventListener( "keydown", capturaLetra);
    dTablero(palabraSecreta);

}



//valido que la letra esté en mayúsculas y no tenga acentos
//y no esté en la lista de letras erroneas ya ingresadas
function validarLetra(letra, codigo) {
    letra = letra.toUpperCase();
    //console.log('Letra: '+ letra + ' Codigo: '+codigo);
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
    console.log("capturaLetra");
    var letra = evento.key.toUpperCase();
    if (validarLetra(letra, evento.keyCode) && paso < 10) {
        if(coincideLetra(letra)){ 
            dLetrac(letra);
            //console.log(palabraIngresada.join(''));
            if (palabraSecreta == palabraIngresada.join('')) {
                paso = 11;
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
