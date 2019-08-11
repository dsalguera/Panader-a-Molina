var vision=document.getElementById("text-vision");
var mision=document.getElementById("text-mision");
var objetivos=document.getElementById("text-objetivos");
var btnSave=document.getElementById("btn-save");
vision.addEventListener("keypress",function(event){
    if(event.keyCode>=48 && event.keyCode<=57){
        event.preventDefault();
    }
});
vision.addEventListener("keydown",function(){
    vision.innerHTML=vision.nodeValue;
});
mision.addEventListener("keydown",function(){
    vision.innerHTML=vision.nodeValue;
});
objetivos.addEventListener("keydown",function(){
    vision.innerHTML=vision.nodeValue;
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
    auxvision=remplazar(vision.textContent);
    auxmision=remplazar(mision.textContent);
    auxobjetivos=remplazar(objetivos.textContent);   
   if(auxvision.length==0 || auxmision.length==0 || auxobjetivos.length==0  ){
    alert("No es posible guardar la informacion revise los campos.");
    event.preventDefault();
    }

});

function remplazar(cadena){
    var cad=cadena;
    for(var i=0;i<cadena.length;i++){
        cad=cad.replace(" ","");
    }
    return cad;
}

