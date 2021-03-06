//Helpers
function esPar(numerito){
    return (numerito % 2 === 0);
}

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista/lista.length;
    return promedioLista;
}


//Calculadora de mediana
function medianaSalarios(lista){
    const mitad = parseInt(lista.length/2);
    if(esPar(lista.length)){
        const personitaMitad1 = lista[mitad-1];
        const personitaMitad2 = lista[mitad];
        mediana = calcularMediaAritmetica([personitaMitad1,personitaMitad2]);
        return mediana;
    }else{
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
};


//Mediana General
const salariosCol = colombia.map(
    function(personita){
        return personita.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function(salaryA, salaryB){
        return salaryA-salaryB;
    }
);

const medianaGeneralCol = medianaSalarios(salariosColSorted);

//Mediana del top 10%
const sliceStart = parseInt((salariosColSorted.length)*0.90);
const sliceEnd = salariosColSorted.length;

const salariosColTop10 = salariosColSorted.slice(
    sliceStart, 
    sliceEnd
);

const medianaTop10Col = medianaSalarios(salariosColTop10);


//Cálculo del PIB per cápita
const poblacion = salariosCol.length;
const pib = salariosColSorted.reduce(
    function(a=0,b){
        return a+b;
    }
);

const pibPerCapita = pib/salariosColSorted.length;


console.log({
    medianaGeneralCol,
    medianaTop10Col,
    pibPerCapita,
});