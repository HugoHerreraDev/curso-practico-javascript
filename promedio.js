
function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista/lista.length;
    return promedioLista;
}

function calcularMediana(lista){
    const numeritos = lista.length;
    function esPar(numeritos){
        if(numeritos % 2 === 0){
            return true;
        }else{
            return false;
        }
    };
    let mediana;
    lista = lista.sort(function(a,b){return a-b});
    const mitadLista = parseInt(lista.length/2);
    if(esPar(lista.length)){
        const elemento1 = lista[mitadLista-1];
        const elemento2 = lista[mitadLista];
        const promedioElemento1y2 = calcularMediaAritmetica([elemento1,elemento2]);
        mediana = promedioElemento1y2;
    }else{
        mediana = lista[mitadLista];
    };
    return mediana;
};

function calcularModa(lista){
    const listaCount = {};
    lista.map(
        function(elemento){
            if(listaCount[elemento]){
                listaCount[elemento] += 1;
            }else{
                listaCount[elemento] = 1;
            }
        }
    );
    const listaArray = Object.entries(listaCount).sort(
        function(elementoA, elementoB){
            return elementoA[1] - elementoB[1];
        }
    );
    const arrayModa = listaArray[listaArray.length-1];
    const moda = Number(arrayModa[0]);
    return moda;
}

function calcularMediaGeometrica(lista){
    const multiplicacion = lista.reduce(
        function(valorAcumulado=1, nuevoElemento){
            return valorAcumulado*nuevoElemento
        }
    );
    mediaGeometrica = Math.pow(multiplicacion,(1/lista.length));
    return mediaGeometrica;
}


function onClickCalcularPromedio(){
    const inputNumbers = document.getElementById("inputNumerosPromedio");
    const NumbersValue = inputNumbers.value;
    const array = NumbersValue.split(",").map(Number);

    const promedio = calcularMediaAritmetica(array);

    const resultadoPromedio = document.getElementById("resultado-promedio");
    resultadoPromedio.innerText = "Promedio: "+promedio;
}

function onClickCalcularMediana(){
    const inputNumbers = document.getElementById("inputNumerosMediana");
    const NumbersValue = inputNumbers.value;
    const array = NumbersValue.split(",").map(Number);

    const mediana = calcularMediana(array);

    const resultadoMediana = document.getElementById("resultado-mediana");
    resultadoMediana.innerText = "Mediana: "+mediana;
}

function onClickCalcularModa(){
    const inputNumbers = document.getElementById("inputNumerosModa");
    const NumbersValue = inputNumbers.value;
    const array = NumbersValue.split(",").map(Number);

    const moda = calcularModa(array);

    const resultadoModa = document.getElementById("resultado-moda");
    resultadoModa.innerText = "Moda: "+moda;
}

function onClickCalcularMediaGeometrica(){
    const inputNumbers = document.getElementById("inputNumerosMediaGeometrica");
    const NumbersValue = inputNumbers.value;
    const array = NumbersValue.split(",").map(Number);

    const mediaGeometrica = calcularMediaGeometrica(array);

    const resultadoMediaGeometrica = document.getElementById("resultado-media-geometrica");
    resultadoMediaGeometrica.innerText = "Media Geometrica: "+mediaGeometrica;
}