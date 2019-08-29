// String formatter

if (!String.prototype.format) {
    String.prototype.format = function() {
      var args = arguments;
      return this.replace(/{(\d+)}/g, function(match, number) {
        return typeof args[number] != 'undefined' ? args[number] : match;
      });
    };
  }
  
  let app = (() => {
    const $svgLine = document.querySelector('svg .line');
    const $svgLineShadow = document.querySelector('svg .line-shadow');
    const sliderThumbSize = 20;
    const sliderHeight = 300;
    const svgViewBoxHeight = 100;
    const svgViewBoxThumbLimit = (sliderThumbSize / 2) * (svgViewBoxHeight / sliderHeight);
    const svgViewBoxGraphMax = svgViewBoxHeight - svgViewBoxThumbLimit;
    const svgViewBoxGraphMin = svgViewBoxThumbLimit;
    let ranges = {
      range1: null,
      range2: null,
      range3: null,
      range4: null,
      range5: null,
      range6: null,
      range7: null
    };
    // Only the y values changes
    let points = {
      begin: {
        x: 10,
        y: 0
      },
      point1: {
        x: 10,
        y: 0
      },
      control1: {
        x: 20,
        y: 10
      },
      control2: {
        x: 20,
        y: 0
      },
      point2: {
        x: 30,
        y: 0
      },
      control3: {
        x: 40,
        y: 0
      },
      point3: {
        x: 50,
        y: 0
      },
      control4: {
        x: 60,
        y: 0
      },
      point4: {
        x: 70,
        y: 0
      },
      control5: {
        x: 80,
        y: 0
      },
      point5: {
        x: 90,
        y: 0
      },
      control6: {
        x: 100,
        y: 0
      },
      point6: {
        x: 110,
        y: 0
      },
      control7: {
        x: 120,
        y: 0
      },
      point7: {
        x: 130,
        y: 0
      },
    };
  
    function mapDataRange(value) {
      // stackoverflow.com/a/929107/5707008
      // return (((OldValue - OldMin) * (NewMax - NewMin)) / (OldMax - OldMin)) + NewMin
      return (((value - 0) * (svgViewBoxGraphMax - svgViewBoxGraphMin)) / (svgViewBoxHeight - 0)) + svgViewBoxGraphMin;
    }
  
    function updateSlider($element) {
      if ($element) {
  
        let rangeIndex = $element.getAttribute('data-slider-index'),
          range = ranges[rangeIndex],
          value = $element.value;
  
        if (range === value) {
          return; // No value change, no need to update then
        }
        // Update state
        ranges[rangeIndex] = value;
  
        let parent = $element.parentElement,
          $thumb = parent.querySelector('.range-slider__thumb'),
          $bar = parent.querySelector('.range-slider__bar'),
          pct = value * ((sliderHeight - sliderThumbSize) / sliderHeight)
  
        $thumb.style.bottom = `${pct}%`;
        $bar.style.height = `calc(${pct}% + ${sliderThumbSize/2}px)`;
        //$thumb.textContent = `${value}%`;
  
        renderSliderGraph();
      }
    }
  
    function updatePoints() {
      // Convert from percentage to coordinate values    
      // Calculate and floor the values
      points.point1.y = svgViewBoxHeight - (svgViewBoxHeight * (ranges.range1) / 100) | 0;
      points.point2.y = svgViewBoxHeight - (svgViewBoxHeight * (ranges.range2) / 100) | 0;
      points.point3.y = svgViewBoxHeight - (svgViewBoxHeight * (ranges.range3) / 100) | 0;
      points.point4.y = svgViewBoxHeight - (svgViewBoxHeight * (ranges.range4) / 100) | 0;
      points.point5.y = svgViewBoxHeight - (svgViewBoxHeight * (ranges.range5) / 100) | 0;
      points.point6.y = svgViewBoxHeight - (svgViewBoxHeight * (ranges.range6) / 100) | 0;
      points.point7.y = svgViewBoxHeight - (svgViewBoxHeight * (ranges.range7) / 100) | 0;
  
      const max = svgViewBoxGraphMax;
      const min = svgViewBoxGraphMin;
  
      points.point1.y = mapDataRange(points.point1.y);
      points.point2.y = mapDataRange(points.point2.y);
      points.point3.y = mapDataRange(points.point3.y);
      points.point4.y = mapDataRange(points.point4.y);
      points.point5.y = mapDataRange(points.point5.y);
      points.point6.y = mapDataRange(points.point6.y);
      points.point7.y = mapDataRange(points.point7.y);
  
      // Update Y for the other points
      points.begin.y = points.point1.y;
      points.control1.y = points.point1.y;
      points.control2.y = points.point2.y;
      points.control3.y = points.point3.y;
      points.control4.y = points.point4.y;
      points.control5.y = points.point5.y;
      points.control6.y = points.point6.y;
      points.control7.y = points.point7.y;
    }
  
    function getInterpolatedLine(type) {
  
      let shadowOffset = 0;
      if (type === 'shadow') {
        shadowOffset = 10; // simple simulation, no fancy shadow algorithm
      }
  
      return 'M {0},{1} L {2},{3} C {4},{5} {6},{7} {8},{9} S {10} {11}, {12} {13} S {14} {15}, {16} {17} S {18} {19}, {20} {21} S {22} {23}, {24} {25} S {26} {27}, {28} {29}'.format(
        // M
        points.begin.x, points.begin.y,
        // L
        points.point1.x, points.point1.y,
        // C
        points.control1.x, points.control1.y,
        points.control2.x, points.control2.y + shadowOffset,
        points.point2.x, points.point2.y + shadowOffset,
        // S
        points.control3.x, points.control3.y,
        points.point3.x, points.point3.y,
        // S
        points.control4.x, points.control4.y + shadowOffset,
        points.point4.x, points.point4.y + shadowOffset,
        // S
        points.control5.x, points.control5.y,
        points.point5.x, points.point5.y,
        // S
        points.control6.x, points.control6.y + shadowOffset,
        points.point6.x, points.point6.y + shadowOffset,
        // S
        points.control7.x, points.control7.y,
        points.point7.x, points.point7.y,
      )
    }
  
    function reset() {
      const inputs = app.inputs;
      inputs.forEach(input => input.value = 50);
      inputs.forEach(input => app.updateSlider(input));
    }
  
    function renderSliderGraph() {
      updatePoints();
      $svgLine.setAttribute('d', getInterpolatedLine());
      $svgLineShadow.setAttribute('d', getInterpolatedLine('shadow'));
    }
  
    function selectPreset(type) {
      // Generate random graph
      const inputs = app.inputs;
      inputs.forEach(input => input.value = Math.random() * 100 | 0);
      inputs.forEach(input => app.updateSlider(input));
    }
  
    return {
      inputs: [].slice.call(document.querySelectorAll('.sliders input')),
      updateSlider,
      reset,
      selectPreset,
    };
  
  })();
  
  (function initAndSetupTheSliders() {
    const inputs = app.inputs;
    let index = 1;
    inputs.forEach(input => input.setAttribute('data-slider-index', 'range' + index++));
    inputs.forEach(input => input.value = 50);
    inputs.forEach(input => app.updateSlider(input));
    // Cross-browser support where value changes instantly as you drag the handle, therefore two event types.
    inputs.forEach(input => input.addEventListener('input', element => app.updateSlider(input)));
    inputs.forEach(input => input.addEventListener('change', element => app.updateSlider(input)));
    app.selectPreset('custom');
  })();

  var maximos_value=[24,34,45,50,33,53,42];
  var maximos_measure=["@","@","lb","ltro","@","@","und"]
  var lista_unidades=document.getElementById("unidades").getElementsByTagName("input");
  var lista_maximo_valores=document.getElementById("maximos_valores").getElementsByTagName("input");
  var lista_input=document.querySelectorAll(".range-slider>input");
  var lista_leyenda_value=document.getElementsByClassName("label-valor");
  var lista_li_value=document.getElementsByClassName("li-valor");
  var lista_faltante=document.getElementById("faltantes").getElementsByTagName("li");
  var lista_valores=document.getElementById("valores").getElementsByTagName("li");
  var lista_agregados=document.getElementById("agregados").getElementsByTagName("input");
  function iniciar(){
    for(var i=0;i<lista_input.length;i++){
      lista_leyenda_value[i].textContent="  "+lista_input[i].value+"%";
      lista_li_value[i].textContent=" ("+parseFloat(lista_input[i].value)*maximos_value[i]/100+maximos_measure[i]+")";
      lista_valores[i].textContent= parseFloat(lista_input[i].value)*maximos_value[i]/100+maximos_measure[i];
      lista_faltante[i].textContent=Math.round(maximos_value[i]-parseFloat(lista_input[i].value)*maximos_value[i]/100,2)+maximos_measure[i];
      lista_unidades[i].value=maximos_measure[i];
      lista_maximo_valores[i].value=maximos_value[i];
      lista_maximo_valores[i].addEventListener("keypress",soloNumeros);
      lista_agregados[i].addEventListener("keypress",soloNumeros);
      lista_unidades[i].addEventListener("keypress",soloLetras);
      lista_input[i].addEventListener("mousemove",function(){
        lista_leyenda_value[index_of_input(this)].textContent="  "+this.value+"%";
        lista_li_value[index_of_input(this)].textContent=" ("+parseFloat(lista_input[index_of_input(this)].value)*maximos_value[index_of_input(this)]/100+maximos_measure[index_of_input(this)]+")";
        lista_valores[index_of_input(this)].textContent= parseFloat(lista_input[index_of_input(this)].value)*maximos_value[index_of_input(this)]/100+maximos_measure[index_of_input(this)];
        lista_faltante[index_of_input(this)].textContent=Math.round(maximos_value[index_of_input(this)]-parseFloat(lista_input[index_of_input(this)].value)*maximos_value[index_of_input(this)]/100,2)+maximos_measure[index_of_input(this)];
      });
      lista_input[i].addEventListener("touchmove",function(){
        lista_leyenda_value[index_of_input(this)].textContent="  "+this.value+"%";
        lista_li_value[index_of_input(this)].textContent=" ("+parseFloat(lista_input[index_of_input(this)].value)*maximos_value[index_of_input(this)]/100+maximos_measure[index_of_input(this)]+")";
        lista_valores[index_of_input(this)].textContent= parseFloat(lista_input[index_of_input(this)].value)*maximos_value[index_of_input(this)]/100+maximos_measure[index_of_input(this)];
        lista_faltante[index_of_input(this)].textContent=Math.round(maximos_value[index_of_input(this)]-parseFloat(lista_input[index_of_input(this)].value)*maximos_value[index_of_input(this)]/100,2)+maximos_measure[index_of_input(this)];
      });
      const inputs = app.inputs;
      inputs.forEach(input => app.updateSlider(input));
     }
  }
  iniciar();
   function index_of_input(input){
      for(var i=0;i<lista_input.length;i++){
        if(input==lista_input[i]){
            return i;
        }
      }
   } 

  function guardar_datos(){
    for(var i=0; i<lista_maximo_valores.length;i++){
      if(isNaN(lista_maximo_valores[i].value) || isNaN(lista_agregados[i].value) ){
        alert("Revise los campos porfavor");
        return;
      } 

      var valor_antiguo=lista_input[i].value/100*maximos_value[i];
      if(parseFloat(lista_agregados[i].value)+ valor_antiguo>parseFloat(lista_maximo_valores[i].value)){
        alert("La cantidad agregada mas el actual no debe exceder el inventario promedio.");
        return ;
      }
    }

    for(var i=0;i<lista_unidades.length;i++){
      var agregar=parseFloat(lista_agregados[i].value); 
      if(isNaN(agregar)){
           agregar=0;
      }
      maximos_measure[i]= lista_unidades[i].value;
      var valor_antiguo=lista_input[i].value/100*maximos_value[i];
      maximos_value[i]=lista_maximo_valores[i].value;
      lista_input[i].value=(valor_antiguo+agregar)/maximos_value[i]*100;
      lista_agregados[i].value="";
    }
    iniciar();
    $("#myModal").modal("show");
  }


  function soloNumeros(e)
  {
    if((e.keyCode>=48 && e.keyCode<=57) || e.keyCode==46){
    }else{
     e.preventDefault();
    }
  }
  function soloLetras(e)
  {
    if((e.keyCode>=48 && e.keyCode<=57) || e.keyCode==46){
      e.preventDefault();
    }
  }

