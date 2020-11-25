





/* Ventana Incisiar sesion y registro*/

$("#uno").click(function () { 
   
    $("#inicio-sesion").css({
        "display":"block"
    })
    
});

$("#dos").click(function () { 
   
    $("#registrarse").css({
        "display":"block"
    })
    
});




/* cancelar o cerrar ventana */
$("#salir").click(function () { 
    
    $("#inicio-sesion").css({"display":"none"})
    
});
$("#salir2").click(function () { 
    $("#registrarse").css({"display":"none"})
    
    
});