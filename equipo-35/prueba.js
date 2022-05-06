/*var palabra = "prueba";

$("#paragraph p").each(function () {
    $(this).html( "<span>" + $(this).html().split(" ").join("</span> <span>") + "</span>" );
});

$("#paragraph span:contains('" + palabra + "')").css("color", "#F00");*/

document.addEventListener("keyup", e=>{

    if (e.target.matches("#buscador")){
  
        if (e.key ==="Escape")e.target.value = ""
  
        document.querySelectorAll(".articulo").forEach(fruta =>{
  
            fruta.textContent.toLowerCase().includes(e.target.value.toLowerCase())
              ?fruta.classList.remove("filtro")
              :fruta.classList.add("filtro")
        })
  
    }
  
  
  })