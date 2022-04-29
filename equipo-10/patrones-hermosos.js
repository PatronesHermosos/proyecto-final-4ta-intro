

function Mostrar(){
    document.getElementById("img").style.display = "block";
}
function Ocultar(){
    Document.getElementById("img").style.display = "none";
}
function Mostrar_Ocultar(){
    document.getElementById("img").style.display:"block";
    var img = document.getElementById("img");
if(img.style.display == "none"){
    Mostrar();
    document.getElementById("boton").value ="Mostrar";
}
else{
    Ocultar();
    document.getElementById("boton").value ="Ocultar";
  }
}
