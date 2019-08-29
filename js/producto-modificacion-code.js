$(document).on("ready", function() {
  $("#NombreProducto").focus();
  $("#btnGuardar").click(clickenviar);
  function clickenviar() {
    var Idelemento = document.getElementById("main").lastChild.childNodes[0].id;

    $("#main").animate({ scrollTop: scroll() }, "300");
  }
  function scroll() {
    var lista = document.getElementById("main");
    var suma = 0;
    for (var i = 0; i < lista.getElementsByTagName("div").length; i++) {
      suma +=
        $("." + lista.getElementsByTagName("li")[i].tagName).height() + 10;
    }
    return suma;
  }
  function EnterTexto(evento) {
    if (evento.keyCode == 13) {
      clickenviar();
      evento.preventDefault();
    }
  }
});
