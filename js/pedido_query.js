$(document).on("ready",function(){
    $('#btnAgregar').click(clickenviar);
    $('#text-comentario').keypress(EnterTexto);
     function clickenviar (){
         var Idelemento=document.getElementById("lista-productos").parentNode.id; 
            $('#'+Idelemento).animate({scrollTop: scroll() },'300');
            var texto=document.getElementById("text-comentario");
            if(remplazar(texto.value," ","").length==0){
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
            if(i+salida.length<dim && cadena.substring(i,i+salida.length)==salida){
                if(i==0){
                    cadena=entrada+cadena.substring(i+1,cadena.length);
                }else if(i==dim-1){
                    cadena=cadena.substring(0,i-1)+entrada;
                }else{
                    cadena=cadena.substring(0,i-1)+entrada+cadena.substring(i+1,cadena.length);
                }
                i=i-1;
            }
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
    