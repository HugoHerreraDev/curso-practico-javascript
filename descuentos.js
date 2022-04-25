//const precioOriginal = 100;
//const descuento = 15;

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * (porcentajePrecioConDescuento/100));
    return precioConDescuento;
}


const coupons =[
    {
        name: "WELCOME15",
        discount: 15
    },
    {
        name: "WELCOME20",
        discount: 20
    },
    {
        name: "WELCOME30",
        discount: 30
    }
];


function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;
    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;
    const inputCupon = document.getElementById("inputCupon");7
    const cuponValue = inputCupon.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue,discountValue);

    const resultP = document.getElementById("ResultP");


    const isCouponValid = function (coupon) {
        return coupon.name === cuponValue;
    }

    const userCoupon = coupons.find(isCouponValid);

    if(cuponValue){
        if(!userCoupon){
            alert("Cupón no validoo");
        }else if(userCoupon){
            const descuentoCupon = userCoupon.discount;
            const precioConDescuentoMasCupon = calcularPrecioConDescuento(precioConDescuento,descuentoCupon)
    
            resultP.innerText = "El precio con descuento incluido el cupón es: $" + precioConDescuentoMasCupon;
        }
    }else{
        resultP.innerText = "El precio con descuento es: $" + precioConDescuento;
    }    

    /* if(cuponValue){
        switch(cuponValue){
            case "WELCOME15":
                var precioConDescuentoMasCupon = calcularPrecioConDescuento(precioConDescuento,15);
                resultP.innerText = "El precio con descuento incluido el cupón es: $" + precioConDescuentoMasCupon;
                break;
            case "WELCOME20":
                var precioConDescuentoMasCupon = calcularPrecioConDescuento(precioConDescuento,20);
                resultP.innerText = "El precio con descuento incluido el cupón es: $" + precioConDescuentoMasCupon;
                break;
            case "WELCOME30":
                var precioConDescuentoMasCupon = calcularPrecioConDescuento(precioConDescuento,30);
                resultP.innerText = "El precio con descuento incluido el cupón es: $" + precioConDescuentoMasCupon;
                break;
            default:
                resultP.innerText = "Cupon no válido";
        }
    }else{
        resultP.innerText = "El precio con descuento es: $" + precioConDescuento;
    } */
}




