var btnEnviarCompra = document.getElementById('enviarCom');
var root = document.getElementById("rootList");

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

    /*// seguimos con la imagen
    var imagen = document.createElement("img");
    imagen.src = "\images\\XD\\profile.jpg";
    var classImg = document.createAttribute("class");
    classImg.value = "rounded-circle circuloP";
    imagen.setAttributeNode(classImg);

    var parrafo = document.createElement("p");
    var atributoParrafo = document.createAttribute("class");
    atributoParrafo.value = "mt-3";
    parrafo.setAttribute('style', 'white-space: pre;');
    parrafo.textContent = "Pedido: 3057 \nDavid Salguera";
    parrafo.setAttributeNode(atributoParrafo);

    var totalP = document.createElement("p");
    var atributoParrafo = document.createAttribute("class");
    atributoParrafo.value = "mt-3";
    parrafo.setAttribute('style', 'white-space: pre;');
    totalP.setAttributeNode(atributoParrafo);
    totalP.textContent = "Total Pedido: 3057.00";*/

    root.appendChild(lista);
    /*lista.appendChild(imagen);
    lista.appendChild(parrafo);
    lista.appendChild*/

    lista.innerHTML = '<img src="images\\XD\\profile.jpg" class="rounded-circle circuloP">' +
        '<p class="mt-3">Pedido: 3057 <br>Jorge Molina</p>' +
        '<p class="mt-3">Total Pedido: <span class="badge badge-primary badge-pill">C$1250.00</span></p>' +
        '<span class="badge badge-warning">Pendiente</span>';

});


var btnEliminar = document.getElementsByClassName("btnElim");

for (var i = 0; btnEliminar.length; i++) {
    btnEliminar[i].addEventListener("click", function() {
        this.parentNode.parentNode.removeChild(this.parentNode);
    });
}