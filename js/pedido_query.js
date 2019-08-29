$(document).on("ready",function(){
    $('#btnAgregar').click(clickenviar);
    $('#text-comentario').keypress(EnterTexto);
     function clickenviar (){
         var Idelemento=document.getElementById("lista-productos").parentNode.id; 
            $('#'+Idelemento).animate({scrollTop: scroll() },'300');
            var texto=document.getElementById("text-comentario");
            if(remplazar(texto.value," ","").length==0){
                alert("Porfavor, ingrese algun mensaje");
               return; 
            }
            var comentario=document.getElementById("lista-productos").children;
            comentario=comentario[comentario.length-1].getElementsByTagName("span")[1];
            comentario.innerHTML=texto.value;
            texto.value="";
    }
    function scroll(){
    var lista= document.getElementById("lista-productos");
    var suma=0;
    for (var i = 0; i < lista.getElementsByTagName("li").length; i++) {
        lista.getElementsByTagName("li")[i].getElementsByClassName("medio-productos")[0].id="medio-productos-"+i;
        suma+=$("#"+lista.getElementsByTagName("li")[i].getElementsByClassName("medio-productos")[0].id).height()+40;
    }
    return suma;
    }
    function remplazar(cadena, salida, entrada){
        var dim=cadena.length;
         for(var i=0;i<dim;i++){
         cadena=cadena.replace(salida,entrada);
        }
        return cadena;
       }

     function EnterTexto(evento){
    if (evento.keyCode==13) {
    clickenviar();
     evento.preventDefault();
    }
     }
    });
    