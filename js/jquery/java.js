





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

$("#salir3").click(function () { 
    $("#global").css({"display":"none"})
    
    
});



var conexion = 0;
if(conexion == 1);


$("#comprarr").click(function () { 
    $("#global").css({"display":"block"})
    
});