





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
if(conexion == 1)
{
    $("#inicio-sesion").css({"display":"none"})
    
    
}



$("#login").click(function () { 
    $("#inicio-sesion").css({"display":"none"})
    conexion = 1;
    $("#navbarDropdown").css({"display":"none"})
    $("#cuenta").css({"display":"block"})
    
    
});

$("#comprarr").click(function () { 
    $("#global").css({"display":"block"})
    
});


$(".list-group-item li").hover(function () {
       $(".list-group-item").css({"background-color":"blue"});
        
    }, function () {
        $(".list-group-item").css({"background-color":"white"});
    }
);