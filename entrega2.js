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
