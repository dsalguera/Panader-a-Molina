var indiceSelecionado = -1;
let lista_productos = document.querySelectorAll("#list-products>div");
let campo = document.getElementById("txtcantidad");
var btnAgregar = document.getElementById("btn-agregar");

var btn_ordenar=document.getElementsByClassName("btnOrdenar");
for(var i=0;i<btn_ordenar.length;i++){
    btn_ordenar[i].addEventListener("click",function(){
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