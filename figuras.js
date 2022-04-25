//Código del cuadrado
console.group("Cuadrados")
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: "+ ladoCuadrado + "cm");

function perimetroCuadrado(lado){
    return lado*4;
}
//console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado){
    return lado*lado;
}
//console.log("El área del cuadrado es: " + areaCuadrada + "cm^2");
console.groupEnd();


//Código del triángulo
console.group("Triángulos")
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;
// console.log(
//     "Los lados del cuadrado miden: "
//     + ladoTriangulo1 
//     + "cm, "
//     + ladoTriangulo2 
//     + "cm y "
//     + baseTriangulo 
//     + "cm"
// );

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
} 
//console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura){
    return (base*altura)/2;
}
//console.log("El área del triángulo es: " + areaTriangulo + "cm^2");
console.groupEnd();


//Código del círculo
console.group("Círculos")
//const radioCirculo = 4;
const PI = Math.PI;
//console.log("El radio del círculo es: "+ radioCirculo + "cm");

function diametroCirculo(radio){
    return radio*2;
}
//console.log("El diámetro del cículo es: " + diametroCirculo + "cm");

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro*PI;
}
//console.log("El perímetro del círculo es: " + perimetroCirculo + "cm");

function areaCirculo(radio){
    return (radio*radio)*PI;
}
//console.log("El área del círculo es: " + areaCirculo + "cm^2");
console.groupEnd();


// Aquí interactuamos con el HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}


function calcularPerimetroTriangulo(){
    const inputLado1Triangulo = document.getElementById("inputLado1Triangulo");
    const lado1 = inputLado1Triangulo.value;
    const inputLado2Triangulo = document.getElementById("inputLado2Triangulo");
    const lado2 = inputLado2Triangulo.value;
    const inputBaseTriangulo = document.getElementById("inputBaseTriangulo");
    const base = inputBaseTriangulo.value;

    const perimetro = perimetroTriangulo(Number(lado1), Number(lado2), Number(base));
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const inputBaseTriangulo = document.getElementById("inputBaseTriangulo");
    const base = inputBaseTriangulo.value;
    const inputAlturaTriangulo = document.getElementById("inputAlturaTriangulo");
    const altura = inputAlturaTriangulo.value;

    const area = areaTriangulo(Number(base), Number(altura));
    alert(area);
}


function calcularPerimetroCirculo(){
    const inputCirculo = document.getElementById("inputCirculo");
    const radio = inputCirculo.value;

    const perimetro = perimetroCirculo(radio);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const inputCirculo = document.getElementById("inputCirculo");
    const radio = inputCirculo.value;

    const area = areaCirculo(radio)
    alert(area);
}