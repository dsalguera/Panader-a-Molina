var indiceSelecionado = -1;
let lista_productos = document.querySelectorAll("#list-products>div");
let campo = document.getElementById("txtcantidad");
var modalCantidad = document.getElementById("modal-cantidad");
var modalPrecio = document.getElementById("modal-precio");
var btnAgregar = document.getElementById("btn-agregar");

asignar_productos();

btnAgregar.addEventListener("mousedown", function(event) {
    if (campo.value == 0 || campo.value.length == 0) {
        alert("Ingrese la cantidad");
        event.preventDefault();
    }

});

function nombreClick() {
    var nombreP = this.parentNode.getElementsByTagName("h4")[0];
    var encabezado = document.getElementById("resP");
    campo.value = "";
    encabezado.innerHTML = "Producto: " + nombreP.textContent.toLowerCase();
    indiceSelecionado = indexSelect(this);
    let productoUnidades = lista_productos[indiceSelecionado].getElementsByClassName("unidades")[0];
    let productosPrecio = lista_productos[indiceSelecionado].getElementsByClassName("precio")[0];
    modalCantidad.textContent = productoUnidades.textContent;
    modalPrecio.textContent = productosPrecio.textContent;
    document.getElementById("muestraVal").innerHTML = "Cantidad: " + 0 + "<br>Total Producto: C$" + (0);
}

function indexSelect(object) {
    for (let i = 0; i < lista_productos.length; i++) {
        if (lista_productos[i] == object.parentNode) {
            return i;
        }
    }
}

function asignar_productos() {
    for (let i = 0; i < lista_productos.length; i++) {
        lista_productos[i].id = "Nproducto-" + i;
        let btn = lista_productos[i].getElementsByTagName("button")[0];
        let unidades = lista_productos[i].getElementsByClassName("unidades")[0];
        let precio = lista_productos[i].getElementsByClassName("precio")[0];
        precio.textContent = Math.floor(Math.random() * 10) + 20;
        unidades.textContent = Math.floor(Math.random() * 8) + 12;
        btn.addEventListener("click", nombreClick);
        btn.dataset.toggle = "modal";
        btn.dataset.target = "#myModal";
    }
}

function myFunction() {
    let cantidad = parseInt(campo.value);
    let precio = parseInt(document.getElementById("modal-precio").textContent);
    if (isNaN(cantidad)) {
        document.getElementById("muestraVal").innerHTML = "Cantidad: " + 0 + "<br>Total Producto: C$" + (0);
    } else {
        document.getElementById("muestraVal").innerHTML = "Cantidad: " + cantidad + "<br>Total Producto: C$" + (precio * cantidad);
    }
}