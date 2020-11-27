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
    $("#añadir-caja").css({"display":"none"})
    $("#lista-producto-caja").css({"display":"none"})
    
    
});

$("#tab-2").click(function () { 
    $("#usuario-caja").css({"display":"none"})
    $("#compra-caja").css({"display":"block"})
    $("#editar-caja").css({"display":"none"})
    $("#tarjeta-caja").css({"display":"none"})
    $("#añadir-caja").css({"display":"none"})
    $("#lista-producto-caja").css({"display":"none"})
    
});
$("#tab-3").click(function () { 
    $("#usuario-caja").css({"display":"none"})
    $("#compra-caja").css({"display":"none"})
    $("#editar-caja").css({"display":"block"})
    $("#tarjeta-caja").css({"display":"none"})
    $("#añadir-caja").css({"display":"none"})
    $("#lista-producto-caja").css({"display":"none"})
    
});
$("#tab-4").click(function () { 
    $("#usuario-caja").css({"display":"none"})
    $("#compra-caja").css({"display":"none"})
    $("#editar-caja").css({"display":"none"})
    $("#tarjeta-caja").css({"display":"block"})
    $("#añadir-caja").css({"display":"none"})
    $("#lista-producto-caja").css({"display":"none"})
    
});
$("#tab-5").click(function () { 
    $("#usuario-caja").css({"display":"none"})
    $("#compra-caja").css({"display":"none"})
    $("#editar-caja").css({"display":"none"})
    $("#tarjeta-caja").css({"display":"none"})
    $("#añadir-caja").css({"display":"block"})
    $("#lista-producto-caja").css({"display":"none"})

    
});
$("#tab-6").click(function () { 
    $("#usuario-caja").css({"display":"none"})
    $("#compra-caja").css({"display":"none"})
    $("#editar-caja").css({"display":"none"})
    $("#tarjeta-caja").css({"display":"none"})
    $("#añadir-caja").css({"display":"none"})
    $("#lista-producto-caja").css({"display":"block"})

    
});

//admin

$("#product-tab-1").click(function () { 
    
    document.getElementById("Categoria").innerHTML = "Frutas y verduras";
    $("#frutas").css({"display":"block"})
    $("#Bebidas").css({"display":"none"})
    $("#Carne").css({"display":"none"})
});
$("#product-tab-2").click(function () { 
    
    document.getElementById("Categoria").innerHTML = "Bebidas";
    $("#frutas").css({"display":"none"})
    $("#Bebidas").css({"display":"block"})
    $("#Carne").css({"display":"none"})
});
$("#product-tab-3").click(function () { 
    
    document.getElementById("Categoria").innerHTML = "Carne y Embutidos";
    $("#frutas").css({"display":"none"})
    $("#Bebidas").css({"display":"none"})
    $("#Carne").css({"display":"block"})
    
});




$("#v-1").click(function () { 
    
    document.getElementById("subcategoria").innerHTML = "Hortalizas";
    
});

$("#v-2").click(function () { 
    
    document.getElementById("subcategoria").innerHTML = "Tomates";
    
    
});$("#v-3").click(function () { 
    
    document.getElementById("subcategoria").innerHTML = "Papa";
    
});$("#v-4").click(function () { 
    
    document.getElementById("subcategoria").innerHTML = "Lechuga";
});
$("#v-5").click(function () { 
    
    document.getElementById("subcategoria").innerHTML = "Cebolla";
});




$("#f-1").click(function () { 
    
    document.getElementById("subcategoria").innerHTML = "Citricos";
    
});

$("#f-2").click(function () { 
    
    document.getElementById("subcategoria").innerHTML = "Melones";
    
    
});$("#f-3").click(function () { 
    
    document.getElementById("subcategoria").innerHTML = "Frutas Secas";
    
});$("#f-4").click(function () { 
    
    document.getElementById("subcategoria").innerHTML = "Platanos";
});
$("#f-5").click(function () { 
    
    document.getElementById("subcategoria").innerHTML = "Manzana";
});
$("#f-6").click(function () { 
    
    document.getElementById("subcategoria").innerHTML = "Uva";
});
    


$("#r-1").click(function () { 
    
    document.getElementById("subcategoria").innerHTML = "Coca cola";
    
});

$("#r-2").click(function () { 
    
    document.getElementById("subcategoria").innerHTML = "Jugos del valle";
    
    
});$("#r-3").click(function () { 
    
    document.getElementById("subcategoria").innerHTML = "Jugos tampico";
    
});$("#r-4").click(function () { 
    
    document.getElementById("subcategoria").innerHTML = "Agua vital";
});
$("#r-5").click(function () { 
    
    document.getElementById("subcategoria").innerHTML = "Fanta & Sprite";
});




$("#b-1").click(function () { 
    
    document.getElementById("subcategoria").innerHTML = "Cerveza";
    
});

$("#b-2").click(function () { 
    
    document.getElementById("subcategoria").innerHTML = "SixPack";
    
    
});$("#b-3").click(function () { 
    
    document.getElementById("subcategoria").innerHTML = "Smirnoff";
    
});$("#b-4").click(function () { 
    
    document.getElementById("subcategoria").innerHTML = "Tragos";
});
$("#b-5").click(function () { 
    
    document.getElementById("subcategoria").innerHTML = "Vinos";
});
$("#b-6").click(function () { 
    
    document.getElementById("subcategoria").innerHTML = "Tequila";
});





$("c-1").click(function () { 
    
    document.getElementById("subcategoria").innerHTML = "Lomo";
    
});

$("c-2").click(function () { 
    
    document.getElementById("subcategoria").innerHTML = "Chuletas";
    
    
});$("c-3").click(function () { 
    
    document.getElementById("subcategoria").innerHTML = "Costillar";
    
});$("c-4").click(function () { 
    
    document.getElementById("subcategoria").innerHTML = "Cuadril";
});
$("c-5").click(function () { 
    
    document.getElementById("subcategoria").innerHTML = "Carne Molida";
});




$("#e-1").click(function () { 
    
    document.getElementById("subcategoria").innerHTML = "Chorizo empaquetado";
    
});

$("#e-2").click(function () { 
    
    document.getElementById("subcategoria").innerHTML = "Chorizo p granel";
    
    
});$("#e-3").click(function () { 
    
    document.getElementById("subcategoria").innerHTML = "Salchichas";
    
});$("#e-4").click(function () { 
    
    document.getElementById("subcategoria").innerHTML = "Jamon en barra";
});
$("#e-5").click(function () { 
    
    document.getElementById("subcategoria").innerHTML = "Mortadela empaquetada";
});
    
$("#e-6").click(function () { 
    
    document.getElementById("subcategoria").innerHTML = "Paté de higado";
});

$("#añadir-producto").click(function () { 
    
    location.reload();
    alert("Producto Añadido");
});