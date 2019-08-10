(function() {}())
main();
function main(){
    //Variable a usar
 var lista_productos=document.getElementById("lista-productos");   
    for(var i=0;i<lista_productos.children.length;i++){
        lista_productos.children[i].getElementsByClassName("simbolo")[0].addEventListener("click",addToPanel);
        lista_productos.children[i].id="producto-"+(i+1);
        lista_productos.children[i].getElementsByClassName("simbolo")[0].id="producto-"+(i+1)+"-simbolo";
    }
 var lista_carro=document.getElementById("lista-carro");
    for(var i=0;i<lista_carro.children.length-1;i++){
        lista_carro.children[i].getElementsByClassName("simbolo")[0].getElementsByTagName("span")[0].addEventListener("click",deleteOfPanel);
    }
    lista_carro.children[i].getElementsByClassName("simbolo")[0].getElementsByTagName("span")[1].innerHTML=fecha();
}
function deleteOfPanel(){ 
 $("#"+this.parentNode.parentNode.id).hide(400);
 this.parentNode.parentNode.id="producto-eliminado";
 setTimeout(function(){
     var elementos=document.getElementById("producto-eliminado");
     elementos.parentNode.removeChild(elementos);
 },'700');
}
function deleteOfPanel_thread(){   
    this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
}

function addToPanel() {
    //Validar
    var ul=document.getElementById("lista-carro");
    for(var i=0;i<ul.children.length;i++){
        if(ul.children[i].id==this.id+"-carro"){
            alert("Este producto ya se encuentra en la lista.");
            return;
        }
    }
    //Variables a usar
    var li = document.createElement("li"),
        divImagen = document.createElement("div"),
        divInfo = document.createElement("div"),
        divSimbolo = document.createElement("div"),
        spanInfo1 = document.createElement("span"),
        spanInfo2 = document.createElement("span"),
        spanInfo3 = document.createElement("span"),
        spanSimbolo1 = document.createElement("span"),
        spanSimbolo2 = document.createElement("span"),
        input=document.createElement("input");
    
     //Adaptar elementos
     li.id=this.id+"-carro";
     divImagen.className="imagen";
     divInfo.className="info";
     divSimbolo.className="simbolo";
     spanInfo1.appendChild(document.createTextNode(this.parentNode.getElementsByTagName("span")[0].innerHTML));
     spanInfo2.appendChild(document.createTextNode(this.parentNode.getElementsByTagName("span")[1].innerHTML));
     spanInfo3.appendChild(document.createTextNode(this.parentNode.getElementsByTagName("span")[2].innerHTML));
     spanSimbolo1.className="icon-circle-with-cross";
     spanSimbolo1.addEventListener("click",deleteOfPanel);
     input.type="text";
     input.value="1";
     spanSimbolo2.appendChild(document.createTextNode("Cantidad: "));
     spanSimbolo2.appendChild(input);
     divInfo.append(spanInfo1,spanInfo2,spanInfo3);
     divSimbolo.append(spanSimbolo1,spanSimbolo2);
     divImagen.innerHTML=this.parentNode.getElementsByClassName("imagen")[0].innerHTML;
     li.append(divImagen,divInfo,divSimbolo);
     var comentario=ul.children[ul.children.length-1];
     ul.removeChild(comentario);
     ul.appendChild(li);
     ul.appendChild(comentario);
}

function fecha() {
    var momento = new Date(),
    year=momento.getFullYear(),
    month=momento.getMonth(),
    day=momento.getDay(),
    fecha;
   var meses=["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];
    fecha=day+"-"+month+"-"+year;
    return fecha;
}


function Enviar(){
    var lista_carro=document.getElementById("lista-carro");
    var cantidad=lista_carro.children.length-1;
    for(var i=0;i<cantidad;i++){
        lista_carro.removeChild(lista_carro.children[0]);
    }
    lista_carro.children[0].getElementsByClassName("info")[0].getElementsByTagName("span")[1].innerHTML="Usted puede registrar alguna observacion importante del pedido.";
    var nombre=document.getElementById("nombre-cliente"),telefono=document.getElementById("telefono-cliente"),correo=document.getElementById("correo-cliente");
    nombre.value="";
    telefono.value="";
    correo.value="";
}