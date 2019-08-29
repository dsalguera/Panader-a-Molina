
var pnombre=document.getElementById("Pnombre");
var snombre=document.getElementById("Snombre");
var papellido=document.getElementById("Papellido");
var Sapellido=document.getElementById("Sapellido");
var CCV=document.getElementById("vccv");
var tarjetita=document.getElementById("tarjeta");
var Nombretarjetita=document.getElementById("Nombretarjeta");

//Función para validar sólo números 
function soloNumeros(e) {
  var keynum = window.event ? window.event.keyCode : e.which;
  if ((keynum == 8) || (keynum == 46) || (keynum == 32))
    return true;
  return /\d/.test(String.fromCharCode(keynum));
}

//Función para validar sólo letras
function soloLetras(e) {
  if (("áéíóúabcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPRSTUVWXYZ ").indexOf(String.fromCharCode(e.keyCode)) === -1) {
    e.preventDefault();
    return false;
  }
}

pnombre.addEventListener("keypress",soloLetras);
snombre.addEventListener("keypress",soloLetras);
papellido.addEventListener("keypress",soloLetras);
Sapellido.addEventListener("keypress",soloLetras);
CCV.addEventListener("keypress",JustNumber);
tarjetita.addEventListener("keypress",JustNumber_space);
Nombretarjetita.addEventListener("keypress",soloLetras);
function validarTarjeta(e) {
  var m = document.getElementById("tarjeta").value;
  var expreg = new RegExp("[{4}\s{4}\s{4}\s{4}]");
  if (expreg.test(m)) {
    document.getElementById("validacionTarjeta").style.borderColor="green";
  } else {
    document.getElementById("validacionTarjeta").style.borderColor="red";
  }
}

function validarCedula(e){
  var c=document.getElementById("vcedula").value;
  var expreg = new RegExp("^[0-9]{3}-[0-9]{6}-[0-9]{4}[A-Z]$");
  if (expreg.test(c)) {
    document.getElementById("vcedula").style.borderColor="green";
  } else {
    document.getElementById("vcedula").style.borderColor="red";
  }
}

function validarCCV(e){
var vccv=document.getElementById("vccv").value;
  var expreg = new RegExp("^[0-9]{3}$");
  if (expreg.test(vccv)) {
    document.getElementById("vccv").style.borderColor="green";
  } else {
    document.getElementById("vccv").style.borderColor="red";
  }
}

function ValidarTelefono(e){
	if(e.keyCode>=47 && e.keyCode<=58){
		
	}else{
		e.preventDefault();	
	}
  var tel=document.getElementById("vtelefono").value;
  var expreg = new RegExp("^[8|7|5|2][0-9]{7}$");
  if (expreg.test(tel)) {
    document.getElementById("vtelefono").style.borderColor="green";
  } else {
    document.getElementById("vtelefono").style.borderColor="red";
  }
}

function validarTel(e){
  var t=document.getElementsByClassName("v1telefono").value;
  var expreg = new RegExp("^[8|7|5|2][0-9]{7}$");
  if (expreg.test(t)) {
    document.getElementById("v1telefono").style.borderColor="green";
  } else {
    document.getElementById("v1telefono").style.borderColor="red";
  }
}


function JustNumber(event){
 if(event.keyCode>=47 && event.keyCode<=58){

 }else{
   event.preventDefault();
 }
}
function JustNumber_space(event){
  if((event.keyCode>=47 && event.keyCode<=58) || event.keyCode==32){
 
  }else{
    event.preventDefault();
  }
 }