$(document).on("ready",function(){
    $("#mensaje-de-texto").focus();
    $('#btnenviar').click(clickenviar);
    $('#mensaje-de-texto').keypress(EnterTexto);
    
     function clickenviar (){
         var Idelemento=document.getElementById("lista-mensaje").lastChild.childNodes[0].id;
        
            $('#lista-scroll').animate({scrollTop: scroll() },'300');
         
    }
    function scroll(){
    var lista= document.getElementById("lista-mensaje");
    var suma=0;
    for (var i = 0; i < lista.getElementsByTagName("li").length; i++) {
        suma+=$("#"+lista.getElementsByTagName("li")[i].id).height()+10;
    }
   
    return suma;
    }
   

    function EnterTexto(evento){
    if (evento.keyCode==13) {
    clickenviar();
     evento.preventDefault();
    }
     }
    
    });
    