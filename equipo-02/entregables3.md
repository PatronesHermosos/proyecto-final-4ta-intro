## Etapa 3 del proyecto final

La tercera etapa del proyecto final es ** opcional **. Ya que es la penúltima entrega del proyecto final, esta tercera etapa representa la última oportunidad de recibir retroalimentación desde el equipo de moderadoras, ¡que se aprovechen de esa oportunidad!

- Número del equipo: 02
- Nombre del equipo:Las renovables
- Nombre de todos miembros en el equipo:Laura Falcon, Diana Gomez, Estefanía Galeano, Catherine Herrera
- El título del proyecto:Fracking, sus consecuencias y la energía solar como solución
- ¿Sobre qué les gustaría recibir sugerencias o ayuda de las moderadoras? Recuerdan que esta es la penúltima entrega antes de la entrega final y la presentación final, ¡así que aprovechan la oportunidad de recibir retroalimentación!
Saludos a las moderadoras, soy Estefanía y tengo una duda respecto a mi código, intenté darle movimiento a un bus, va y viene pero en un momento bja en el eje vertical y es algo que quisiera evitar, adjunto el código y un link de mi pantalla grabada para visualizar el movimiento del bus. Espero estén bien y muuchas gracias de antemano por su ayuda.


<div>
    <img 
    src="Maquinita.jpg" 
    style="object-fit:contain;
    width:500px;
    height:500px;
    transform: translate(0px,50px)"
    />

    <img 
    id="bus_1" 
    src="Bus.jpg"
    style="
    z-index:5;
    position: relative;
    width:190px;
    height:190px;
    transform: translate(-180px,-160px)
    "/>
     
</div>

<script>

var unidad_de_tiempo = 200;
var distancia = 30;
var posicion = 0;
var Imagen_2_Bus_1 = document.getElementById("bus_1");

setInterval(function () {

    if (posicion>600 || posicion<0){
      distancia= -1*distancia;
      if (posicion>600){ //Hay un problema aquí :c
        Imagen_2_Bus_1.style.transform="scaleX(-1)";
      }
      if(posicion<0){
        Imagen_2_Bus_1.style.transform="scaleX(1)";
      }
    
    }
    posicion = posicion + distancia; 
    Imagen_2_Bus_1.style.left = posicion + "px";
}, unidad_de_tiempo);

</script>
  
  https://drive.google.com/file/d/1NPvC4Qc1FyfQ3AGgZux4tJu0HuVs7S4h/view?usp=sharing
  
