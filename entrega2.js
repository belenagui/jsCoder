let prodCards = document.getElementById('cards');
for (const producto of productos) {
    prodCards.innerHTML += `
    <div class="card col-sm-2">
       <img src=${producto.imagen} class="card-img-top" alt="card imagen">
       <div class="card-body">
         <h5 class="card-title">${producto.descripcion}</h5>
        <p class="card-text"> Precio $ ${producto.precio}</p>
        <a href="#" class="btn btn-primary">Comprar</a>
    </div>
    </div>
    `;
}

console.table(productos);
/* funcion para filtrar los productos por tipo */
function filtrarPorTipo(tipoProd){
    const filtrado = productos.filter((producto)=>producto.tipo === tipoProd);
    return(filtrado);
}

/* usuario ingresa input */
let tipoUsu = prompt('Ingrese el tipo de suplemento (0-salir)');

while (parseInt(tipoUsu ==! 0)){
    if((tipoUsu=='') || (typeof tipoUsu !== 'string')){
        alert('Completar campo o tipo de dato invalido');
    }
    else{
        const prodsWithFil= filtrarPorTipo(tipoUsu);
        console.table(prodsWithFil);
    }
    let tipoUsu = prompt('Ingrese el tipo de suplemento (0-salir)');
}
