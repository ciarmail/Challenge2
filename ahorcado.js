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
    console.log(a);
    palabraSecreta = listaPalabras[a];
    console.log(palabraSecreta);
    return palabraSecreta;
}

//escojerPalabra();