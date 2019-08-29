var vision=document.getElementById("text-vision");
var mision=document.getElementById("text-mision");
var objetivos=document.getElementById("text-objetivos");
var btnSave=document.getElementById("btn-save");
vision.addEventListener("keypress",function(event){
    if(event.keyCode>=48 && event.keyCode<=57){
        event.preventDefault();
    }
});
mision.addEventListener("keypress",function(event){
    if(event.keyCode>=48 && event.keyCode<=57){
        event.preventDefault();
    }
});
objetivos.addEventListener("keypress",function(event){
    if(event.keyCode>=48 && event.keyCode<=57){
        event.preventDefault();
    }
});

btnSave.addEventListener("mousedown",function(event){
    var auxvision,auxmision,auxobjetivos;
    auxvision=remplazar(vision.value);
    auxmision=remplazar(mision.value);
    auxobjetivos=remplazar(objetivos.value);   
   if(auxvision.length<15 || auxmision.length<15 || auxobjetivos.length==15  ){
    alert("No es posible guardar la informacion revise los campos, pueden estar vacios o muy cortos");
    event.preventDefault();
    }else{
        $("#myModal-save").modal('show');
    }

});

function remplazar(cadena){
    var cad=cadena;
    for(var i=0;i<cadena.length;i++){
        cad=cad.replace(" ","");
        cad=cad.replace("\n","");
    }
    return cad;
}

