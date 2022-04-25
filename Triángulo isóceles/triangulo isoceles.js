var lado1;
var lado2;
var base;
function trianguloIsoceles(lado1, lado2, base){
    if(lado1 === lado2 && lado1 != base){
        function alturaTrianguloIsoceles(lado1, base){
            const altura = Math.sqrt(((lado1*lado1)-((base*base)/4)));
            console.log("La altura del triangulo es "+altura)
        }
        alturaTrianguloIsoceles(lado1,base);
    }else{
        console.log("No es un triangulo isoceles");
    }
}
trianguloIsoceles(5,5,4);
