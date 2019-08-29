var selecionado = null;
var selec;
var lista_productos = document.getElementsByClassName("listaproductos");
var formula = document.getElementsByClassName("formlista");
var formulario = document.getElementsByClassName("formlista")[0];


cargar();
function cargar() {
  //Variable a usar
  for (var i = 0; i < lista_productos.length; i++) {
    lista_productos[i].addEventListener("click", cargarpag);

  }
}
function modificar() {
  if (selecionado != null) {
    if (NombreProducto.value == "" ||
    Presentacion.value == "" ||
    Precio.value == "" || Presentacion.value == 0 ||  Precio.value == 0) {
      alert("Rellene los campos vacios y la presentación o el precio no pueden ser 0");
      return;
    } else{
      selecionado.getElementsByTagName(
        "p"
      )[0].textContent = document.getElementById("NombreProducto").value;
      selecionado.getElementsByTagName(
        "p"
      )[1].textContent = "Paquete/uds:  " + document.getElementById("Presentacion").value;
      selecionado.getElementsByTagName(
        "p"
      )[2].textContent = "Precio/bolsa:  C$" + document.getElementById("Precio").value;
  
      // selecionado.getElementsByTagName("p")[0].innerHTML =
      //   selecionado.getElementsByTagName("p")[0].innerHTML + "<br><br>";
      // selecionado.getElementsByTagName("p")[1].innerHTML =
      //   selecionado.getElementsByTagName("p")[1].innerHTML + "<br>";
      lista_productos[indice(selecionado)].getElementsByTagName("div")[0].getElementsByTagName("img")[0].src = formula[0].getElementsByTagName("div")[0].getElementsByTagName("img")[0].src;
  
      limpiar();
      limpiarInputFile();
    }
    
  } else {
    alert("Selecionar produto");
  }
}

function indice() {
  for (var i = 0; i < lista_productos.length; i++) {
    if (selecionado == lista_productos[i]) {
      return i;
    }

  }
}

function eliminar() {
  if (selecionado != null) {
    selecionado.parentNode.removeChild(selecionado);
    limpiar();
    limpiarInputFile();
  }
}


function cargarpag() {

  var prec = this.getElementsByTagName("p")[2].textContent;
  var presen = this.getElementsByTagName("p")[1].textContent.substring(14, 16);
  formulario
    .getElementsByTagName("div")[0]
    .getElementsByTagName("img")[0].src = this.getElementsByTagName(
      "div"
    )[0].getElementsByTagName("img")[0].src;

  document.getElementById(
    "NombreProducto"
  ).value = this.getElementsByTagName("p")[0].textContent;

  document.getElementById("Presentacion").value = presen;
  console.log(presen);
  document.getElementById("Precio").value = this.getElementsByTagName(
    "p"
  )[2].textContent.substring(17, prec.length);


  selecionado = this;

  $(this).css('border-color', 'yellow').siblings('').css('border-color', 'gray');

  limpiarInputFile();
}

function Enviar() {
  //Elementos Basicos

  var contendor = document.createElement("div"),
    contendor2 = document.createElement("div");
  imagen = document.createElement("img"),
    parafo = document.createElement("p"),
    parafo2 = document.createElement("p"),
    parafo3 = document.createElement("p"),

    Br1 = document.createElement("br"),
    Br2 = document.createElement("br"),
    Br3 = document.createElement("br");

  var lista = document.getElementById("main"),
    NombreProducto = document.getElementById("NombreProducto"),
    Presentacion = document.getElementById("Presentacion"),
    Precio = document.getElementById("Precio");

  console.log(contendor);
  //Atributos Estructurales
  contendor.className = "listaproductos";
  /*imagen.src = "IMG/chispitas.jpg";******************************************* */
  imagen.src = formulario.getElementsByTagName("div")[0].getElementsByTagName("img")[0].src;

  if (
    NombreProducto.value == "" ||
    Presentacion.value == "" ||
    Precio.value == "" || Presentacion.value == 0 ||  Precio.value == 0) {
    alert("Rellene los campos vacios y la presentación o el precio no pueden ser 0");
    return;
  } else {
    parafo.innerHTML = NombreProducto.value;
    parafo2.innerHTML = "Paquete/uds:  " + Presentacion.value;
    parafo3.innerHTML = "Precio/bolsa:  C$" + Precio.value;

    //Armar el mensaje
    contendor2.appendChild(imagen);
    contendor.appendChild(contendor2);
    contendor.appendChild(parafo);
    contendor.appendChild(parafo2);
    contendor.appendChild(parafo3);
    contendor.classList.add("listaproductos","col-xs-6","col-sm-5")
    lista.appendChild(contendor);
    console.log(contendor);
    cargar();
    limpiar();
    
    limpiarInputFile();
  }

}
// function validacampo(){
//   if (Presentacion.value == 0 || Precio.value == 0) {
//     alert("No puede ingresar una valor nulo");
//     return;
//   }
// }
function limpiar() {
  document.getElementById("NombreProducto").value = "";
  document.getElementById("Presentacion").value = "";
  document.getElementById("Precio").value = "";

  formulario.getElementsByTagName("div")[0].getElementsByTagName("img")[0].src = "";
  formulario.getElementsByTagName("div")[0].getElementsByTagName("img")[0].src = "img/selecionarimg.png";
  limpiarInputFile();
  selecionado = null;
}
window.onload = function () {
  document.getElementById("NombreProducto").onkeydown = chars;
  document.getElementById("Presentacion").onkeydown = chars;
  document.getElementById("Precio").onkeydown = chars;
};
function remplazar(cadena, salida, entrada) {
  var dim = cadena.length;
  for (var i = 0; i < dim; i++) {
    if (
      i + salida.length < dim &&
      cadena.substring(i, i + salida.length) == salida
    ) {
      if (i == 0) {
        cadena = entrada + cadena.substring(i + 1, cadena.length);
      } else if (i == dim - 1) {
        cadena = cadena.substring(0, i - 1) + entrada;
      } else {
        cadena =
          cadena.substring(0, i - 1) +
          entrada +
          cadena.substring(i + 1, cadena.length);
      }
      i = i - 1;
    }
  }
  return cadena;
}
function chars(evento) {
  if (window.event) {
    evento = window.event;
    if (evento.keyCode == 13) {
      Enviar();

      document.getElementById("NombreProducto").value = "";
      document.getElementById("Presentacion").value = "";
      document.getElementById("Precio").value = "";
    }
  }
}
//input file

function readURL() {

  var file = document.getElementById('uploadfile').files[0];
  var reader = new FileReader();
  reader.onload = function (e) {
    var image = document.createElement("img");
    image.src = e.target.result;
    if (image.value === "") {
      alert("vacio");

    } else {
      formulario.getElementsByTagName("div")[0].getElementsByTagName("img")[0].src = image.src;
    }

  }

  reader.readAsDataURL(file);
}
function limpiarInputFile() {
  document.getElementById("uploadfile").value = "";
}
function validaNumericos(event) {
  if (event.charCode >= 48 && event.charCode <= 57) {
    return true;
  }
  return false;
}

/*Validaciones apoyo de manuel*/
var campoNombre=document.getElementById("NombreProducto");


campoNombre.addEventListener("keypress",validarTexto);
function validarTexto(event){

  if((event.keyCode>=65 && event.keyCode<=90) || (event.keyCode>=97 && event.keyCode<=122) || event.keyCode==32 || event.keyCode==164 || event.keyCode==165){
  }else{
    event.preventDefault();
  }
}