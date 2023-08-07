/* constructor de objetos con clase  */
class producto{
    constructor(id,imagen,marca,tipo,descripcion,precio){
    this.id=id;
    this.imagen=imagen;
    this.marca=marca;
    this.tipo=tipo;
    this.descripcion=descripcion;
    this.precio=precio;
}
}
const supleNew = new producto('10','./img/rippedEna.webp', 'Ena', 'Quemadores', 'Ripped Ena Sport Quemador De Grasas Descenso De Peso 60 Cap.', '2340');
/* puedo seguir insertando nuevos productos aquí */

/* Lo agrego al array de productos */
productos.push(supleNew);

let botonesCategorias= document.getElementById('btnCategory');

botonesCategorias.forEach(boton => {
    boton.addEventListener("click",(e)=> {
        if(e.currentTarget.id !="todos"){
            const filtrado = productos.filter(producto => producto.tipo.toLowerCase() === e.currentTarget.id);
        }
        else{
            cargarProductos(productos);
        }
    })
});
console.log(filtrado);
let prodCards = document.getElementById('cards');
for (const producto of productos) {
    prodCards.innerHTML += `
    <div class="card col-sm-2">
       <img src=${producto.imagen} class="card-img-top" alt="card imagen">
       <div class="card-body">
         <h5 class="card-title">${producto.descripcion}</h5>
        <p class="card-text"> $ ${producto.precio}</p>
        <a href="#" class="btn btn-primary">Comprar</a>
    </div>
    </div>
    `;
}

console.table(productos);
function filtrarPorTipo(tipoProd) {
    const tipoUsuario = tipoProd.toLowerCase();
    const filtrado = productos.filter(producto => producto.tipo.toLowerCase() === tipoUsuario);
    return filtrado;
}

function mostrarProductosFiltrados(tipoUsu) {
    if (tipoUsu === '' || typeof tipoUsu !== 'string') {
        alert('Completar campo o tipo de dato inválido');
    } else {
        const prodsWithFil = filtrarPorTipo(tipoUsu);
        if (prodsWithFil.length > 0) {
            console.table(prodsWithFil);
        } else {
            alert('No se encontraron productos para el tipo ingresado.');
        }
    }
}

let tipoUsu = prompt('Ingrese el tipo de suplemento (0-salir)');

while (parseInt(tipoUsu) !== 0) {
    mostrarProductosFiltrados(tipoUsu);
    tipoUsu = prompt('Ingrese el tipo de suplemento (0-salir)');
}
