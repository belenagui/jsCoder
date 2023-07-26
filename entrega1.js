/*  Pago con tarjeta*/
function precioFinal(){
    let precio= prompt("ingrese precio del producto");
}

let tarjetaCredito= prompt("1-santander visa, 2-santander American Express, 3-Visa Banco Nación, 4-otra, 5-Para Finalizar");


while(tarjetaCredito=!'0'){
    switch(tarjetaCredito){
    case '1':
        alert("Tenés 3 cuotas sin interes");
        function precioCuota={precioFinal()/3};
        break;
    case '2':
        alert("Tenés 6 cuotas sin interes");
        let precioCuota=precioFinal()/6
        break;
    case '3':
        alert("Tenés 3 cuotas sin interes");
        precioCuota=precioFinal()/3
        break;
    case '4':
        alert("Las cuotas tiene un 10% de recargo");
        precioCuota=precioFinal()*1.1
        break;
}
let tarjetaCredito= prompt("1-santander visa, 2-santander American Express, 3-Visa Banco Nación, 4-otra, 5-Para Finalizar");
}

/* Promos de la semana */
let diaDeLaSemana= prompt('ingrese un día de Lunes a Domingo');
let precioPromo=0;

if((diaDeLaSemana == "Lunes") || (diaDeLaSemana=="Miercoles"))
{
    alert('Tenes un descuento pagando en efectivo de 15%');
    precioPromo=precioFinal-precioFinal*0.15
}
else if((diaDeLaSemana == "Sabado") || (diaDeLaSemana == "Domingo")){
    alert('Tenes un descuento pagando en efectivo de 10%');
    precioPromo=precioFinal-precioFinal*0.1
}
else{
    alert('No hay promoción disponible por el momento');
}

