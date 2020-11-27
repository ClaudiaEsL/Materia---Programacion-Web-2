$("#edit").click(function () { 
    
    $("#content-1").css({"display":"none"})
    $("#content-2").css({"display":"none"})
    $("#content-3").css({"display":"none"})
    $("#content-4").css({"display":"none"})
    $("#content-5").css({"display":"none"})
    $("#content-6").css({"display":"none"})

    $(".form-control").css({"display":"block"})
    $(".form-group").css({"display":"block"})
    
    $("#edit").css({"display":"none"})
    $("#fin").css({"display":"block"})
    $("#cancelar").css({"display":"block"})

    
    
});


$("#cancelar").click(function () { 
    
    location.reload();

    
    
});

$("#fin").click(function () { 
    
  
    
    location.reload();
    alert("CAMBIO REALIZADO");
    
});

$("#añadir-tarjeta-caja").click(function () { 
    $("#añadir-tarjeta").css({"display":"block"})
    
});

$("#fintarjeta").click(function () { 
    $("#añadir-tarjeta").css({"display":"none"})
    
});

// tabs

$("#tab-1").click(function () { 
    $("#usuario-caja").css({"display":"block"})
    $("#compra-caja").css({"display":"none"})
    $("#editar-caja").css({"display":"none"})
    $("#tarjeta-caja").css({"display":"none"})

    
});

$("#tab-2").click(function () { 
    $("#usuario-caja").css({"display":"none"})
    $("#compra-caja").css({"display":"block"})
    $("#editar-caja").css({"display":"none"})
    $("#tarjeta-caja").css({"display":"none"})

    
});
$("#tab-3").click(function () { 
    $("#usuario-caja").css({"display":"none"})
    $("#compra-caja").css({"display":"none"})
    $("#editar-caja").css({"display":"block"})
    $("#tarjeta-caja").css({"display":"none"})

    
});
$("#tab-4").click(function () { 
    $("#usuario-caja").css({"display":"none"})
    $("#compra-caja").css({"display":"none"})
    $("#editar-caja").css({"display":"none"})
    $("#tarjeta-caja").css({"display":"block"})

    
});