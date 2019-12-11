var indiceSelecionado = -1;
let lista_productos = document.querySelectorAll("#list-products>div");
let campo = document.getElementById("txtcantidad");
var btnAgregar = document.getElementById("btn-agregar");

var btn_ordenar=document.getElementsByClassName("btnOrdenar");
for(var i=0;i<btn_ordenar.length;i++){
    btn_ordenar[i].addEventListener("click",function(){
    var nombreP= this.parentNode.parentNode.parentNode.getElementsByTagName("h4")[0]
    var encabezado = document.getElementById("resP");
    campo.value = "";
    encabezado.innerHTML = "Producto: " + nombreP.textContent.toLowerCase();
    document.getElementById("muestraVal").innerHTML = "Cantidad: " + 0 + "<br>Total Producto: C$" + (0);
    $("#myModal").modal("show"); 
    });
   
}
btnAgregar.addEventListener("click", function(event) {
    if (campo.value == 0 || campo.value.length == 0) {
        event.preventDefault();
        alert("Ingrese la cantidad");
       
    }else{
        $("#myModal").modal("hide");
        $("#myModal-success").modal("show");
       
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


function myFunction() {
    let cantidad = parseInt(campo.value);
    let precio = parseInt(document.getElementById("modal-precio").textContent);
    if (isNaN(cantidad)) {
        document.getElementById("muestraVal").innerHTML = "Cantidad: " + 0 + "<br>Total Producto: C$" + (0);
    } else {
        document.getElementById("muestraVal").innerHTML = "Cantidad: " + cantidad + "<br>Total Producto: C$" + (precio * cantidad);
    }
}