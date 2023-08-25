//Variable que mantiene el estado visible del carrito
var carritoVisible = false;


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

let prodCards = document.getElementById('cards');

function cargarProductos(productosGrales){
    productosGrales.innerHTML="";
 /* ahora se cargan las cartas */
for (const producto of productos) {
    prodCards.innerHTML += `
    <div class="card col-sm-2 contenedor-items">
       <img src=${producto.imagen} class="card-img-top" alt="card imagen">
       <div class="card-body">
         <h5 class="card-title titulo">${producto.descripcion}</h5>
        <p class="card-text precio"> $ ${producto.precio}</p>
        <button id=${producto.id} class="btn btn-primary compra">Comprar</button>
    </div>
    </div>
    `;
}
}
cargarProductos(productos);

if (document.readyState =='loading'){
    document.addEventListener('DOMContentLoaded, ready')
} else{
    ready();
}

function ready(){
    //Agregremos funcionalidad a los botones eliminar del carrito
var botonesEliminarItem = document.getElementsByClassName('btn-eliminar');
for(var i=0; i<botonesEliminarItem.length; i++){
    var button = botonesEliminarItem[i];
    button.addEventListener('click',eliminarItemCarrito);
}
/* agregar funcionalidad al boton de sumar */
var botonesSumarCantidad = document.getElementsByClassName('sumar-cantidad');
for(var i=0; i<botonesSumarCantidad.length; i++){
    var button = botonesSumarCantidad[i];
    button.addEventListener('click',sumarCantidad);
}
/* agregar funcionalidad al boton de restar cantidad */
var botonesRestarCantidad = document.getElementsByClassName('restar-cantidad');
for(var i=0; i<botonesRestarCantidad.length; i++){
    var button = botonesRestarCantidad[i];
    button.addEventListener('click',restarCantidad);
}
/* funcionalidad de botones de agregar al carrito */
var botonesAgregarAlCarrito = document.getElementsByClassName('compra');
for(var i=0; i<botonesAgregarAlCarrito.length; i++){
    var button = botonesAgregarAlCarrito[i];
    button.addEventListener('click',agregarAlCarritoClicked);
}

/* funcionalidad del boton pagar */
document.getElementsByClassName('btn-pagar')[0].addEventListener('click', pagarClicked);

}

/* elimino items seleccionados del carrito */
function eliminarItemCarrito(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    /* se actualiza el total cuando elimina el item */
    actualizarTotalCarrito();

    /* funcion para ver si hay elementos en el carrito una vez que elimina el item, si no hay nada que ocualte el carro*/
    ocultarCarrito();
}

/* actualiza el total del carrito  */
function actualizarTotalCarrito();{
     /* seleccion del contenedor del carrito */
     var carritoContenedor = document.getElementsByClassName('carrito')[0];
     var carritoItems = carritoContenedor.getElementsByClassName('carrito-item');
     var total = 0;

     /* recorro cada elemento del carrito para actualizar total */
     for (var i=0; i<carritoItems.length; i++){
        var item = carritoItems [i];
        var precioElemento = item.getElementsByClassName('carrito-item-precio')[0];
        console.log(precioElemento);
        /* quitamos el simbolo de pesos y los milesimos  */
        var precio = parseFloat(precioElemento.innerText.replace('$','').replace('.', ''));
        console.log(precio);
        var cantidadItem = item.getElementsByClassName('carrito-item-cantidad')[0];
        var cantidad = cantidadItem.value;
        console.log(cantidad);
        total = total + (precio * cantidad);
    }
    total =Math.round(total*100)/100;
    document.getElementsByClassName('carrito-precio-total')[0].innerText = '$' + total.toLocaleString("es") + ',00';
}
function ocultarCarrito(){
    var carritoItems = document.getElementsByClassName('carrito-items')[0];
    if (carritoItems.childElementCount==0){
        var carrito = document.getElementsByClassName('carrito')[0];
        carrito.Style.marginRight = '-100%';
        carrito.Style.opacity = '0';
        carritoVisible = false;

        /* maximizar el contenedor de elementos */
        var items = document.getElementById('cards')[0];
        items.style.width = '100%'

    }
}

/* aumento de a uno la cantidad del elemento seleccionado */
function sumarCantidad(event){
    var buttonClicked = event.target;
    var selector = buttonClicked.parentElement;
    var cantidadActual = selector.getElementsByClassName('carrito-item-cantidad')[0].value;
    console.log(cantidadActual);
    cantidadActual++;
    selector.getElementsByClassName('carrito-item-cantidad')[0].value = cantidadActual;
    /* actualizo total */
    actualizarTotalCarrito();
}

function restarCantidad(event){
    var buttonClicked = event.target;
    var selector = buttonClicked.parentElement;
    var cantidadActual = selector.getElementsByClassName('carrito-item-cantidad')[0].value;
    console.log(cantidadActual);
    cantidadActual--;
    /* debo ver que no sea menor que uno */
    if(cantidadActual>=1){
        selector.getElementsByClassName('carrito-item-cantidad')[0].value = cantidadActual;
        /* actualizo total */
        actualizarTotalCarrito();
    }
}
function agregarAlCarritoClicked(event){
    var button = event.target;
    var item = button.parentElement;
    var titulo = document.getElementsByClassName('titulo')[0].innerText;
    console.log(titulo);
    var precio = document.getElementsByClassName('precio')[0].innerText;
    var imagenSrc = document.getElementsByClassName('card-img-top');
    console.log(imagenSrc);

    /* funcion para agregar al carrito mandando por parametro los valores*/
    agregarItemAlCarrito(titulo, precio, imagenSrc);

    /* al agregar por primera vez un item tiene que aparecer el carrito */
    hacerVisibleCarrito();
}

function agregarItemAlCarrito(titulo, precio, imagenSrc){
    var item = document.createElement('div');
    item.classList.add = 'item';
    var itemsCarrito = document.getElementsByClassName('carrito-items')[0];

    /* hay que verificar que el item que ingresa no se encuentre ya en el carrito */
    var  nombresItemsCarrito = itemsCarrito.getElementsByClassName('carrito-item-titulo');
    for(var i=0; i<nombresItemsCarrito.length; i++){
        if(nombresItemsCarrito[i],innerText==titulo){
            alert("El item ya se encuentra en el carrito");
            return;
        }
    }

    var itemCarritoContenido = `
    <div class="carrito-item">
    <img src="${imagenSrc}" width="80px" alt="">
    <div class="carrito-item-detalles">
        <span class="carrito-item-titulo">${titulo}</span>
        <div class="selector-cantidad">
            <i class="fa-solid fa-minus restar-cantidad"></i>
            <input type="text" value="1" class="carrito-item-cantidad" disabled>
            <i class="fa-solid fa-plus sumar-cantidad"></i>
        </div>
        <span class="carrito-item-precio">${precio}</span>
    </div>
    <span class="btn-eliminar">
        <i class="fa-solid fa-trash"></i>
    </span>
    </div>
    `

    item.innerHTML = itemCarritoContenido;
    itemsCarrito.append(item);

    /* funcionalidad para eliminar nuevo item */
    item.getElementsByClassName('btn-eliminar')[0].addEventListener('click', eliminarItemCarrito);

    /* funcionalidad de sumar del nuevo item */
    var botonSumarCantidad = item.getElementsByClassName('sumar-cantidad')[0];
    botonSumarCantidad.addEventListener('click', sumarCantidad);

    /* funcionalidad de restar del nuevo item */
    var botonRestarCantidad = item.getElementsByClassName('restar-cantidad')[0];
    botonRestarCantidad.addEventListener('click', restarCantidad);
}

function pagarClicked(event){
    alert("Gracias por tu compra");
    /* Se vacia el carrito luego de pagar */
    var carritoItems = document.getElementsByClassName('carrito-items')[0];
    while(carritoItems.hasChildNodes()){
        carritoItems.removeChild(carritoItems.firstChild);
    }
    actualizarTotalCarrito();
    /* como ya no hay nada en el carrito lo ocultamos */
    ocultarCarrito();
}

function hacerVisibleCarrito(){
    carritoVisible = true;
    var carrito = document.getElementsByClassName('carrito')[0];
    carrito.style.marginRight = '0';
    carrito.style.opacity = '1';

    var items = document.getElementsByClassName('contenedor-items')[0];
    items.style.width = '60%';
}