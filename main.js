/* Ejercicio Nº1
Escribe una función que sume que calcule la suma de dígitos de un número entero es decir la suma de todos sus dígitos.
Ejemplo: suma de dígitos (192) debería devolver 12 (1+9+2)
*/

function sumar(num){
    let v = num.toString().split("");
    
    let numeros = v.map(n=>+n);
    
    let r = 0;
    for(let i=0;i<numeros.length;i++){
        r += numeros[i];
    }
    return r;
}

console.log(sumar(123));

/* Ejercicio Nº2
Escriba una función que tome un string con una suma y devuelva su resultado como un número.
Deben sumarse dos números naturales(numeros enteros). La tarea de suma es una cadena de la forma '102 + 17'.
*/

console.log("Ejercicio 2")
function sumarString(string){
    let numeros = string.split("+").map(n=>+n);
    let r = 0;
    for(let i=0;i<numeros.length;i++){
        r += numeros[i];
    }
    return r;
}

console.log(sumarString("102 + 17"));

/* Ejercicio Nº3
Escribir una función que genere un numero random y pregunte por prompt "Adivina un numero del 1 al 10"
hasta que acierte y muestre "Adivinaste el numero"*/

console.log("Ejercicio 3");

function adivina(){
    let num = Math.random()*10;
    num = Math.round(num);
    num = Math.floor(num+1);
    
    let x = prompt("Adivine el numero del 1 al 10");

    while(x != num){
        if(x != num){
            x = prompt("Segui participando...");
        }
    }

    prompt("Adivinaste!")
}

adivina();