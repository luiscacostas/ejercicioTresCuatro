//Declara una función que acepte una palabra como parámetro y la devuelva con todos 
//sus caracteres en mayúsculas y separados por espacios. Ejemplo: Para "Ana" devolverá "A N A".
let palabra = prompt('Por favor, introduce una palabra');

function separarPalabras(palabra){
    let arr = [];
    for(let i = 0; i < palabra.length; i++){
        arr.push(palabra[i].toUpperCase());
        arr.push(" ");
    }
    return console.log(arr.join(''));
}
separarPalabras(palabra);

function separarPalabrasDos(palabra){
    let palabraMayuscula = palabra.toUpperCase();
    let nuevaPalabra = palabraMayuscula.split('').join(' ');
    return console.log(nuevaPalabra);
}
separarPalabrasDos(palabra)

//Declara una función que acepte un nombre como parámetro y devuelva el número de palabras 
//que tiene el nombre. Ejemplo: Para "Antonio Alberto Jesús" devolverá 3.

let nombre = 'Luis Carlos Acosta';

function contarPalabras(){
    if(nombre.length === 0){
        return 0;
    }
    let count = 1;
    for(let i = 0; i < nombre.length; i++){
        if(nombre[i] === ' '){
            count++;
        }
    }
    return console.log(count);
}
contarPalabras(nombre);

//Otra forma de hacerlo seria 

/*let name1 = 'Luis Carlos Acosta';

function contarPalabras(name1){
    let palabras = name1.split(' ');
    return console.log(palabras.length);
}
contarPalabras(name1);
*/