var btnEnviarComentario = document.getElementById('enviarCom');
var root = document.getElementById("rootList");

btnEnviarComentario.addEventListener("click", function() {

    var lista = document.createElement("li");
    var att = document.createAttribute("class");
    att.value = "tarj list-group-item d-flex justify-content-between align-items-center tarjetas m-3";
    lista.setAttributeNode(att);

    // seguimos con la imagen
    var imagen = document.createElement("img");
    imagen.src = "\images\\XD\\profile.jpg";
    var classImg = document.createAttribute("class");
    classImg.value = "circuloP";
    imagen.setAttributeNode(classImg);

    // seguimos con el div 1
    var div = document.createElement("div");
    var classDiv = document.createAttribute("class");
    classDiv.value = "card ml-3";
    div.setAttributeNode(classDiv);

    // dentro de este div se meten los 3 siguientes
    //#1

    var div2 = document.createElement("div");
    var classDiv2 = document.createAttribute("class");
    classDiv2.value = "card-body";
    div2.setAttributeNode(classDiv2);
    div2.textContent = "" + document.getElementById("txtcomentario").value + "";
    //#2
    var div3 = document.createElement("div");
    var classDiv3 = document.createAttribute("class");
    classDiv3.value = "alert alert-warning text-center ml-2 mr-2 mt-1";
    var classDiv3role = document.createAttribute("role");
    classDiv3role = "alert";
    div3.setAttributeNode(classDiv3);
    div3.textContent = "Comentario pendiente";
    this.parentNode.parentNode.appendChild(div3);

    //#3
    var button = document.createElement("button");
    var classbutton = document.createAttribute("class");
    classbutton.value = "btnElim btn btn-danger ml-2 mr-2 mb-3 mt-n2";
    button.setAttributeNode(classbutton);
    button.textContent = "Eliminar este comentario";
    ////////////////////////////////////////////////////////////////////

    /* 
      Esta lista no se toca
    */
    // se agrega la lista de ultimo //
    root.appendChild(lista);
    lista.appendChild(imagen);
    lista.appendChild(div);
    div.appendChild(div2);
    div.appendChild(div3);
    div.appendChild(button);
    //document.body.appendChild(lista);

    button.addEventListener("click",Eliminarli);

    document.getElementById("txtcomentario").value = "";
});


var btnEliminar = document.getElementsByClassName("btnElim");
for (var i = 0; btnEliminar.length; i++) {
    btnEliminar[i].addEventListener("click",Eliminarli);
}
  
function Eliminarli(){
    this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
}