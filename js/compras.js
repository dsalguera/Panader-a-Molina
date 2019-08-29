var btnEnviarCompra = document.getElementById('enviarCom');
var root = document.getElementById("rootList");
var rootGris = document.getElementById("rootGris");

/* Codigo a replicar

<li class="list-group-item d-flex justify-content-between align-items-center tarjetas m-3 border border-primary">
                    <img src="images\XD\profile.jpg" class="rounded-circle circuloP">
                    <p class="mt-3">Pedido: 3056 <br>David Salguera</p>
                    <p class="mt-3">Total Pedido: <span class="badge badge-primary badge-pill">C$750.00</span></p>
                    <span class="badge badge-warning">Pendiente</span>
                    
*/

btnEnviarCompra.addEventListener("click", function() {

    var lista = document.createElement("li"); // Get the first <h1> element in the document
    var att = document.createAttribute("class"); // Create a "class" attribute
    att.value = "list-group-item d-flex justify-content-between align-items-center tarjetas m-3 border border-primary";
    lista.setAttributeNode(att);

    root.appendChild(lista);
    /*lista.appendChild(imagen);
    lista.appendChild(parrafo);
    lista.appendChild*/

    lista.innerHTML = '<img src="images\\XD\\profile.jpg" class="rounded-circle circuloP">' +
        '<p class="mt-3">Pedido: 3057 <br>Jorge Molina</p>' +
        '<p class="mt-3">Total Pedido: <span class="badge badge-primary badge-pill">C$1250.00</span></p>' +
        '<span class="badge badge-warning">Pendiente</span>';
/*
        <ul id="rootGris"  class="list-group fondo-tarjeta position-sticky mt-2 mb-4 ml-1 fondo-gris">
        <li class="listaCompra list-group-item d-flex justify-content-between align-items-center tarjetas rueda m-3 border-primary border">
            <img src="images/productos/pico-pi%C3%B1a.jpg" class="circuloP">
            <p class="mt-3 texto-compras">
            Pico de Piña <br>Unidades: 14 </p>
            <p class="mt-3">Cantidad a llevar: 14<br>Total: <span class="badge badge-primary badge-pill">C$250.00</span></p>
            <button type="button" class="btnElim btn btn-danger">Eliminar</button>
        </li>
        
        <li class="row justify-content-around fondo-boton fondo-azul mb-n3 ml-0 mr-0">
            <button id="enviarCom" type="button" class="btn btn-primary">Agregar Pedido</button>
        </li>
    </ul>
*/
    rootGris.innerHTML = 
    '<ul id="rootGris"  class="list-group fondo-tarjeta position-sticky mt-2 mb-4 ml-1 fondo-gris">'+
    '<li class="listaCompra list-group-item d-flex justify-content-between align-items-center tarjetas rueda m-3 border-primary border">'+
        '<h6>La lista esta vacía, agregue uno o más productos para realizar un pedido.</h6>'+
        
    '</li>'+
    
    '<li class="row justify-content-around fondo-boton fondo-azul mb-n3 ml-0 mr-0">'+
        '<button id="enviarCom" type="button" class="btn btn-primary">Agregar Pedido</button>'+
    '</li>'+
    '</ul>';
    

});


var btnEliminar = document.getElementsByClassName("btnElim");

for (var i = 0; btnEliminar.length; i++) {
    btnEliminar[i].addEventListener("click", function() {
        this.parentNode.parentNode.removeChild(this.parentNode);
    });
}