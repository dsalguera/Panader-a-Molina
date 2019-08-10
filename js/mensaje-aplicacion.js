(function() {}())

function Enviar() {
    //Elementos Basicos
    var li = document.createElement("li"),
        divContentMessage = document.createElement("div"),
        divIcon = document.createElement("div"),
        spanIconUser = document.createElement("span"),
        pTitle = document.createElement("p"),
        pCuerpo = document.createElement("p"),
        pInfo = document.createElement("p");
    var lista = document.getElementById("lista-mensaje");
    var IdMensaje = "men-num-" + lista.getElementsByTagName("li").length;
    var IdMensajediv = "mensaje-num-" + lista.getElementsByTagName("li").length;
    //Atributos Estructurales
    li.id = IdMensaje;
    divContentMessage.className = "mensaje mensaje-user";
    divContentMessage.id = IdMensajediv;
    divIcon.className = "icon-us";
    spanIconUser.className = "icon-user";
    pTitle.className = "title";
    pCuerpo.className = "cuerpo";
    pInfo.className = "info-user";
    var texto = document.getElementsByTagName("textarea")[0];
    if (remplazar(texto.value," ","").length==0) {
        alert("El mensaje esta vacio.");
        return;
    }else{
         //Alimentar Informacion
    pTitle.appendChild(document.createTextNode("Manuel de J. Lopez Acevedo"));
    pInfo.appendChild(document.createTextNode(Hora()));
    pCuerpo.appendChild(document.createTextNode(texto.value));
    //Armar el mensaje 
    divIcon.appendChild(spanIconUser);
    divContentMessage.appendChild(divIcon);
    divContentMessage.appendChild(pTitle);
    divContentMessage.appendChild(pCuerpo);
    divContentMessage.appendChild(pInfo);
    li.appendChild(divContentMessage);
    lista.appendChild(li);
    var Idelemento=document.getElementById("lista-mensaje").lastChild.childNodes[0].id;
    $("#"+Idelemento).hide();	
    $("#"+Idelemento).show('500');
    }
   
}

function Hora() {
    var momento = new Date(),
        timehours = momento.getHours(),
        idtime;
    if (timehours > 12) {
        idtime = "PM."
        timehours = timehours - 12;
    } else if (timehours < 12) {
        idtime = "AM.";
    } else {
        idtime = "MM";
    }
    var hora = timehours + ":" + momento.getMinutes() + " " + idtime;
    return hora;
}
window.onload = function() {
    document.getElementById("mensaje-de-texto").onkeydown = chars;
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
function chars(evento) {
    if (window.event) {
        evento = window.event;
        if (evento.keyCode == 13) {
            Enviar();
            document.getElementById("mensaje-de-texto").value = "";
        }
    }
}