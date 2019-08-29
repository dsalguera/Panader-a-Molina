
main();
function main(){
var lista_pedido=document.getElementById("lista-pedido").children;
    for(var i=0;i<lista_pedido.length;i++){
        lista_pedido[i].addEventListener("click",click_pedido);
    }
}
function click_pedido(){
  
    var lista_pedido_parent=document.getElementById("lista-pedido");
    var lista_producto_parent=document.getElementById("lista-productos");
    var lista_pedido=document.getElementById("lista-pedido").children;
    var indexselect=-1;
    for(var i=0;i<lista_pedido.length;i++){
        if(this==lista_pedido[i]){
            indexselect=i;
        }
        lista_pedido[i].className="row";
    }
    this.className="row li-selected";
    var  lista_producto=document.getElementById("lista-productos").children;
    cant=lista_producto.length;
    for(var i=0;i<cant;i++){
        lista_producto_parent.removeChild(lista_producto[0]);
    }
    var panel_informacion=document.getElementById("panel-informacion");
    panel_informacion.getElementsByTagName("span")[0].innerHTML=this.getElementsByTagName("div")[0].getElementsByTagName("span")[0].innerHTML;
    panel_informacion.getElementsByTagName("span")[1].innerHTML=this.getElementsByTagName("div")[1].getElementsByTagName("span")[0].innerHTML;
    panel_informacion.getElementsByTagName("span")[3].children[1].innerHTML=this.getElementsByTagName("div")[1].getElementsByTagName("span")[3].innerHTML;
    panel_informacion.getElementsByTagName("span")[2].innerHTML=this.getElementsByTagName("div")[1].getElementsByTagName("span")[7].innerHTML;
    document.getElementsByClassName("realizar")[0].getElementsByClassName("medio")[0].getElementsByClassName("estado")[0].getElementsByTagName("span")[1].className=this.getElementsByTagName("div")[0].getElementsByTagName("span")[1].innerHTML.toLowerCase();
    document.getElementsByClassName("realizar")[0].getElementsByClassName("medio")[0].getElementsByClassName("estado")[0].getElementsByTagName("span")[1].textContent=this.getElementsByTagName("div")[0].getElementsByTagName("span")[1].textContent;
    switch(indexselect){
        case 0:
            pedido_num_1();
            break;
        case 1:
            pedido_num_2();
            break;
        case 3:
            pedido_num_3();
        break;
        default:
            pedido_num_4();
        break;
    }
}

function pedido_num_1(){
    var lista_pedido_parent=document.getElementById("lista-pedido");
    var lista_producto_parent=document.getElementById("lista-productos");
    var  lista_producto=document.getElementById("lista-productos").children;
     //crear variable
     var li1=document.createElement("li");
     var top='<div class="medio-productos"> <div><img src="img/Pico de piña.jpg" alt=""></div>',
     middle='<div> <span>Nombre: Paquete de Piña</span> <span>Paquete: 24 unds.</span>   <span>Precio: C$ 20/bolsa.</span> </div>',
     down='<div> <span>Cantidad: 4</span> </div> </div>'; 
     li1.innerHTML=top+middle+down;
     lista_producto_parent.appendChild(li1);
 
     var li2=document.createElement("li");
     var top='<div class="medio-productos"> <div><img src="img/Pan de Hot Dog.jpg" alt=""></div>',
     middle='<div> <span>Nombre: Pan de molde de barra</span> <span>Paquete: 12 unds.</span>   <span>Precio: C$ 20/bolsa.</span> </div>',
     down='<div> <span>Cantidad: 5</span> </div> </div>'; 
     li2.innerHTML=top+middle+down;
     lista_producto_parent.appendChild(li2);
 
     var li3=document.createElement("li");
     var top='<div class="medio-productos"> <div><img src="img/Punto Rojo.jpg" alt=""></div>',
     middle='<div> <span>Nombre: Paquete de Piña</span> <span>Paquete: 12 unds.</span>   <span>Precio: C$ 12/bolsa.</span> </div>',
     down='<div> <span>Cantidad: 2</span> </div> </div>'; 
     li3.innerHTML=top+middle+down;
     lista_producto_parent.appendChild(li3);
 
     var li4=document.createElement("li");
     var top='<div class="medio-productos"> <div><img src="img/Torta de gato.jpg" alt=""></div>',
     middle='<div> <span>Nombre: Torta de gato</span> <span>Paquete: 12 unds.</span>   <span>Precio: C$ 30/bolsa.</span> </div>',
     down='<div> <span>Cantidad: 7</span> </div> </div>'; 
     li4.innerHTML=top+middle+down;
     lista_producto_parent.appendChild(li4);
 
     var li5=document.createElement("li");
     li5.innerHTML='<div class="medio-productos"><div><img src="img/icon-user-comentario.png" alt=""></div><div><span>Comentario:</span><span>El pedido esta dentro de la ruta de entregas</span></div></div>';
     lista_producto_parent.appendChild(li5);
 }
 function pedido_num_2(){
    var lista_pedido_parent=document.getElementById("lista-pedido");
    var lista_producto_parent=document.getElementById("lista-productos");
     var  lista_producto=document.getElementById("lista-productos").children;
      //crear variable
      var li1=document.createElement("li");
      var top='<div class="medio-productos"> <div><img src="img/chispitas.jpg" alt=""></div>',
      middle='<div> <span>Nombre: Chispitas </span> <span>Paquete: 20 unds.</span>   <span>Precio: C$ 25/bolsa.</span> </div>',
      down='<div> <span>Cantidad: 2</span> </div> </div>'; 
      li1.innerHTML=top+middle+down;
      lista_producto_parent.appendChild(li1);
  
      var li2=document.createElement("li");
      var top='<div class="medio-productos"> <div><img src="img/Punto Rojo.jpg" alt=""></div>',
      middle='<div> <span>Nombre: Punto rojo</span> <span>Paquete: 12 unds.</span>   <span>Precio: C$ 12/bolsa.</span> </div>',
      down='<div> <span>Cantidad: 3</span> </div> </div>'; 
      li2.innerHTML=top+middle+down;
      lista_producto_parent.appendChild(li2);
  
      var li4=document.createElement("li");
      var top='<div class="medio-productos"> <div><img src="img/Torta de gato.jpg" alt=""></div>',
      middle='<div> <span>Nombre: Torta de gato</span> <span>Paquete: 12 unds.</span>   <span>Precio: C$ 30/bolsa.</span> </div>',
      down='<div> <span>Cantidad: 1</span> </div> </div>'; 
      li4.innerHTML=top+middle+down;
      lista_producto_parent.appendChild(li4);
  
      var li5=document.createElement("li");
      li5.innerHTML=' <div class="medio-productos"><div><img src="img/icon-user-comentario.png" alt=""></div><div><span>Comentario:</span><span>La señora pide bolsas hermeticas ella paga la diferencia.</span></div></div>';
      lista_producto_parent.appendChild(li5);
  }
 
 
 
  function pedido_num_3(){
    var lista_pedido_parent=document.getElementById("lista-pedido");
    var lista_producto_parent=document.getElementById("lista-productos");
     var  lista_producto=document.getElementById("lista-productos").children;
      //crear variable
      var li1=document.createElement("li");
      var top='<div class="medio-productos"> <div><img src="img/EspecialNav.PNG" alt=""></div>',
      middle='<div> <span>Nombre: Chispitas </span> <span>Paquete: 1 unds.</span>   <span>Precio: C$ 50</span> </div>',
      down='<div> <span>Cantidad: 2</span> </div> </div>'; 
      li1.innerHTML=top+middle+down;
      lista_producto_parent.appendChild(li1);
      var li2=document.createElement("li");
      var top='<div class="medio-productos"> <div><img src="img/Pan de Hot Dog.jpg" alt=""></div>',
      middle='<div> <span>Nombre: Pan de molde de barra</span> <span>Paquete: 12 unds.</span>   <span>Precio: C$ 20/bolsa.</span> </div>',
      down='<div> <span>Cantidad: 1</span> </div> </div>'; 
      li2.innerHTML=top+middle+down;
      lista_producto_parent.appendChild(li2);
  
      var li3=document.createElement("li");
      var top='<div class="medio-productos"> <div><img src="img/Punto Rojo.jpg" alt=""></div>',
      middle='<div> <span>Nombre: Paquete de Piña</span> <span>Paquete: 12 unds.</span>   <span>Precio: C$ 12/bolsa.</span> </div>',
      down='<div> <span>Cantidad: 4</span> </div> </div>'; 
      li3.innerHTML=top+middle+down;
      lista_producto_parent.appendChild(li3);
  
      var li5=document.createElement("li");
      li5.innerHTML=' <div class="medio-productos"><div><img src="img/icon-user-comentario.png" alt=""></div><div><span>Comentario:</span><span>El seño  llega a las 7 a traer el pedido</span></div></div>';
      lista_producto_parent.appendChild(li5);
  }

  function pedido_num_4(){
    var lista_pedido_parent=document.getElementById("lista-pedido");
    var lista_producto_parent=document.getElementById("lista-productos");
    var  lista_producto=document.getElementById("lista-productos").children;
     //crear variable
     var li1=document.createElement("li");
     var top='<div class="medio-productos"> <div><img src="img/Pico de piña.jpg" alt=""></div>',
     middle='<div> <span>Nombre: Paquete de Piña</span> <span>Paquete: 24 unds.</span>   <span>Precio: C$ 20/bolsa.</span> </div>',
     down='<div> <span>Cantidad: 1</span> </div> </div>'; 
     li1.innerHTML=top+middle+down;
     lista_producto_parent.appendChild(li1);
 
     var li4=document.createElement("li");
     var top='<div class="medio-productos"> <div><img src="img/Torta de gato.jpg" alt=""></div>',
     middle='<div> <span>Nombre: Torta de gato</span> <span>Paquete: 12 unds.</span>   <span>Precio: C$ 30/bolsa.</span> </div>',
     down='<div> <span>Cantidad: 1</span> </div> </div>'; 
     li4.innerHTML=top+middle+down;
     lista_producto_parent.appendChild(li4);
 
     var li5=document.createElement("li");
     li5.innerHTML='<div class="medio-productos"><div><img src="img/icon-user-comentario.png" alt=""></div><div><span>Comentario:</span><span>El pedido esta dentro de la ruta de entregas</span></div></div>';
     lista_producto_parent.appendChild(li5);
 }


 function Click_satisfecho(){
    var panel_informacion=document.getElementById("panel-informacion");
    var lista_pedido_parent=document.getElementById("lista-pedido");
    var lista_producto_parent=document.getElementById("lista-productos");
    var  lista_producto=document.getElementById("lista-productos").children;
    for(var i=0;i<lista_pedido_parent.children.length;i++){
        if(panel_informacion.getElementsByTagName("span")[0].innerHTML==lista_pedido_parent.children[i].getElementsByTagName("div")[0].getElementsByTagName("span")[0].innerHTML){
            if(lista_pedido_parent.children[i].getElementsByTagName("div")[0].getElementsByTagName("span")[1].innerHTML=="Pendiente"){
            document.getElementById("medio").getElementsByTagName("div")[0].getElementsByTagName("span")[1].className="satisfecho";
            lista_pedido_parent.children[i].getElementsByTagName("div")[0].getElementsByTagName("span")[1].innerHTML="Satisfecho";
            document.getElementById("medio").getElementsByTagName("div")[0].getElementsByTagName("span")[1].innerHTML="Satisfecho";
            lista_pedido_parent.children[i].getElementsByTagName("img")[0].src="img/icon-pedido-2.png";
            }else{
                alert("El producto ya esta ".concat(lista_pedido_parent.children[i].getElementsByTagName("div")[0].getElementsByTagName("span")[1].innerHTML).concat("no puede cambiarlo."));
            }
        }
    }
 }
 
 function Click_cancelado(){
    var panel_informacion=document.getElementById("panel-informacion");
    var lista_pedido_parent=document.getElementById("lista-pedido");
    var lista_producto_parent=document.getElementById("lista-productos");
    var  lista_producto=document.getElementById("lista-productos").children;
    for(var i=0;i<lista_pedido_parent.children.length;i++){
        if(panel_informacion.getElementsByTagName("span")[0].innerHTML==lista_pedido_parent.children[i].getElementsByTagName("div")[0].getElementsByTagName("span")[0].innerHTML){
            if(lista_pedido_parent.children[i].getElementsByTagName("div")[0].getElementsByTagName("span")[1].innerHTML=="Pendiente"){
            document.getElementById("medio").getElementsByTagName("div")[0].getElementsByTagName("span")[1].className="cancelado";
            lista_pedido_parent.children[i].getElementsByTagName("div")[0].getElementsByTagName("span")[1].innerHTML="Cancelado";
            document.getElementById("medio").getElementsByTagName("div")[0].getElementsByTagName("span")[1].innerHTML="Cancelado";
            lista_pedido_parent.children[i].getElementsByTagName("img")[0].src="img/icon-pedido-3.png";
            }else{
                alert("El producto ya esta ".concat(lista_pedido_parent.children[i].getElementsByTagName("div")[0].getElementsByTagName("span")[1].innerHTML).concat("no puede cambiarlo."));
            }
        }
    }
 }
 function remplazar(cadena, salida, entrada){
    var numero=cadena.length;
   for(var i=0;i<numero;i++){
       cadena=cadena.replace(salida,entrada);
   }
    return cadena;
 }