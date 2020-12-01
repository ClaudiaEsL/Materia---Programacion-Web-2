//Abrir y cerrar carrito
$("#carrito").click(
    function () {
        $("#ventana-carrito").css("display","block");
    }
);
$("#cerrar").click(
    function () {
        $("#ventana-carrito").css("display","none");
    }
);
var totalCarrito;
var  aux = 0;
function total(){
    document.getElementById("total").innerHTML = totalCarrito;
}
/*Añadir productos primera seccion*/
function guardar1(){
    var _Nombre = document.getElementById("Producto1").textContent;
    var _precio = document.getElementById("Producto2").textContent;
    var _control = document.getElementById("exampleFormControlSelect1").value;
    /*Total */
    var total = parseFloat(_precio)* parseFloat(_control);
    aux = parseFloat(total) + parseFloat(aux);
    totalCarrito = aux ;
    /*Mostrar en producto en la pantalla */
    var fila="<tr><td>"+_Nombre+"</td><td>"+_precio +"</td><td>"+_control +"</td></tr>";
    var btn = document.createElement("TR");
   	btn.innerHTML = fila;
    document.getElementById("MiLista").appendChild(btn);
}
/*Añadir productos primera seccion*/
function guardar2(){
    var _Nombre = document.getElementById("Producto3").textContent;
    var _precio = document.getElementById("Producto4").textContent;
    var _control = document.getElementById("exampleFormControlSelect2").value;
    /*Total */
    var total = parseFloat(_precio)* parseFloat(_control);
    aux = parseFloat(total) + parseFloat(aux);
    totalCarrito = aux ;
    /*Mostrar en producto en la pantalla */
    var fila="<tr><td>"+_Nombre+"</td><td>"+_precio +"</td><td>"+_control +"</td></tr>";
    var btn = document.createElement("TR");
   	btn.innerHTML = fila;
    document.getElementById("MiLista").appendChild(btn);
}
/*Añadir productos primera seccion*/
function guardar3(){
    var _Nombre = document.getElementById("Producto5").textContent;
    var _precio = document.getElementById("Producto6").textContent;
    var _control = document.getElementById("exampleFormControlSelect3").value;
    /*Total */
    var total = parseFloat(_precio)* parseFloat(_control);
    aux = parseFloat(total) + parseFloat(aux);
    totalCarrito = aux ;
    /*Mostrar en producto en la pantalla */
    var fila="<tr><td>"+_Nombre+"</td><td>"+_precio +"</td><td>"+_control +"</td></tr>";
    var btn = document.createElement("TR");
   	btn.innerHTML = fila;
    document.getElementById("MiLista").appendChild(btn);
}
/*Añadir productos primera seccion*/
function guardar4(){
    var _Nombre = document.getElementById("Producto7").textContent;
    var _precio = document.getElementById("Producto8").textContent;
    var _control = document.getElementById("exampleFormControlSelect4").value;
    /*Total */
    var total = parseFloat(_precio)* parseFloat(_control);
    aux = parseFloat(total) + parseFloat(aux);
    totalCarrito = aux ;
    /*Mostrar en producto en la pantalla */
    var fila="<tr><td>"+_Nombre+"</td><td>"+_precio +"</td><td>"+_control +"</td></tr>";
    var btn = document.createElement("TR");
   	btn.innerHTML = fila;
    document.getElementById("MiLista").appendChild(btn);
}
/*Añadir productos primera seccion*/
function guardar5(){
    var _Nombre = document.getElementById("Producto9").textContent;
    var _precio = document.getElementById("Producto10").textContent;
    var _control = document.getElementById("exampleFormControlSelect5").value;
    /*Total */
    var total = parseFloat(_precio)* parseFloat(_control);
    aux = parseFloat(total) + parseFloat(aux);
    totalCarrito = aux ;
    /*Mostrar en producto en la pantalla */
    var fila="<tr><td>"+_Nombre+"</td><td>"+_precio +"</td><td>"+_control +"</td></tr>";
    var btn = document.createElement("TR");
   	btn.innerHTML = fila;
    document.getElementById("MiLista").appendChild(btn);
}
/*Añadir productos primera seccion*/
function guardar6(){
    var _Nombre = document.getElementById("Producto11").textContent;
    var _precio = document.getElementById("Producto12").textContent;
    var _control = document.getElementById("exampleFormControlSelect6").value;
    /*Total */
    var total = parseFloat(_precio)* parseFloat(_control);
    aux = parseFloat(total) + parseFloat(aux);
    totalCarrito = aux ;
    /*Mostrar en producto en la pantalla */
    var fila="<tr><td>"+_Nombre+"</td><td>"+_precio +"</td><td>"+_control +"</td></tr>";
    var btn = document.createElement("TR");
   	btn.innerHTML = fila;
    document.getElementById("MiLista").appendChild(btn);
}
/*Añadir productos primera seccion*/
function guardar7(){
    var _Nombre = document.getElementById("Producto13").textContent;
    var _precio = document.getElementById("Producto14").textContent;
    var _control = document.getElementById("exampleFormControlSelect7").value;
    /*Total */
    var total = parseFloat(_precio)* parseFloat(_control);
    aux = parseFloat(total) + parseFloat(aux);
    totalCarrito = aux ;
    /*Mostrar en producto en la pantalla */
    var fila="<tr><td>"+_Nombre+"</td><td>"+_precio +"</td><td>"+_control +"</td></tr>";
    var btn = document.createElement("TR");
   	btn.innerHTML = fila;
    document.getElementById("MiLista").appendChild(btn);
}
/*Añadir productos primera seccion*/
function guardar8(){
    var _Nombre = document.getElementById("Producto15").textContent;
    var _precio = document.getElementById("Producto16").textContent;
    var _control = document.getElementById("exampleFormControlSelect8").value;
    /*Total */
    var total = parseFloat(_precio)* parseFloat(_control);
    aux = parseFloat(total) + parseFloat(aux);
    totalCarrito = aux ;
    /*Mostrar en producto en la pantalla */
    var fila="<tr><td>"+_Nombre+"</td><td>"+_precio +"</td><td>"+_control +"</td></tr>";
    var btn = document.createElement("TR");
   	btn.innerHTML = fila;
    document.getElementById("MiLista").appendChild(btn);
}
/*Añadir productos primera seccion*/
function guardar9(){
    var _Nombre = document.getElementById("Producto17").textContent;
    var _precio = document.getElementById("Producto18").textContent;
    var _control = document.getElementById("exampleFormControlSelect9").value;
    /*Total */
    var total = parseFloat(_precio)* parseFloat(_control);
    aux = parseFloat(total) + parseFloat(aux);
    totalCarrito = aux ;
    /*Mostrar en producto en la pantalla */
    var fila="<tr><td>"+_Nombre+"</td><td>"+_precio +"</td><td>"+_control +"</td></tr>";
    var btn = document.createElement("TR");
   	btn.innerHTML = fila;
    document.getElementById("MiLista").appendChild(btn);
}
/*Añadir productos primera seccion*/
function guardar10(){
    var _Nombre = document.getElementById("Producto19").textContent;
    var _precio = document.getElementById("Producto20").textContent;
    var _control = document.getElementById("exampleFormControlSelect10").value;
    /*Total */
    var total = parseFloat(_precio)* parseFloat(_control);
    aux = parseFloat(total) + parseFloat(aux);
    totalCarrito = aux ;
    /*Mostrar en producto en la pantalla */
    var fila="<tr><td>"+_Nombre+"</td><td>"+_precio +"</td><td>"+_control +"</td></tr>";
    var btn = document.createElement("TR");
   	btn.innerHTML = fila;
    document.getElementById("MiLista").appendChild(btn);
}
/*Añadir productos primera seccion*/
function guardar11(){
    var _Nombre = document.getElementById("Producto21").textContent;
    var _precio = document.getElementById("Producto22").textContent;
    var _control = document.getElementById("exampleFormControlSelect11").value;
    /*Total */
    var total = parseFloat(_precio)* parseFloat(_control);
    aux = parseFloat(total) + parseFloat(aux);
    totalCarrito = aux ;
    /*Mostrar en producto en la pantalla */
    var fila="<tr><td>"+_Nombre+"</td><td>"+_precio +"</td><td>"+_control +"</td></tr>";
    var btn = document.createElement("TR");
   	btn.innerHTML = fila;
    document.getElementById("MiLista").appendChild(btn);
}
/*Añadir productos primera seccion*/
function guardar12(){
    var _Nombre = document.getElementById("Producto23").textContent;
    var _precio = document.getElementById("Producto24").textContent;
    var _control = document.getElementById("exampleFormControlSelect12").value;
    /*Total */
    var total = parseFloat(_precio)* parseFloat(_control);
    aux = parseFloat(total) + parseFloat(aux);
    totalCarrito = aux ;
    /*Mostrar en producto en la pantalla */
    var fila="<tr><td>"+_Nombre+"</td><td>"+_precio +"</td><td>"+_control +"</td></tr>";
    var btn = document.createElement("TR");
   	btn.innerHTML = fila;
    document.getElementById("MiLista").appendChild(btn);
}
/*Añadir productos primera seccion*/
function guardar13(){
    var _Nombre = document.getElementById("Producto25").textContent;
    var _precio = document.getElementById("Producto26").textContent;
    var _control = document.getElementById("exampleFormControlSelect13").value;
    /*Total */
    var total = parseFloat(_precio)* parseFloat(_control);
    aux = parseFloat(total) + parseFloat(aux);
    totalCarrito = aux ;
    /*Mostrar en producto en la pantalla */
    var fila="<tr><td>"+_Nombre+"</td><td>"+_precio +"</td><td>"+_control +"</td></tr>";
    var btn = document.createElement("TR");
   	btn.innerHTML = fila;
    document.getElementById("MiLista").appendChild(btn);
}
/*Añadir productos primera seccion*/
function guardar14(){
    var _Nombre = document.getElementById("Producto27").textContent;
    var _precio = document.getElementById("Producto28").textContent;
    var _control = document.getElementById("exampleFormControlSelect14").value;
    /*Total */
    var total = parseFloat(_precio)* parseFloat(_control);
    aux = parseFloat(total) + parseFloat(aux);
    totalCarrito = aux ;
    /*Mostrar en producto en la pantalla */
    var fila="<tr><td>"+_Nombre+"</td><td>"+_precio +"</td><td>"+_control +"</td></tr>";
    var btn = document.createElement("TR");
   	btn.innerHTML = fila;
    document.getElementById("MiLista").appendChild(btn);
}
/*Añadir productos primera seccion*/
function guardar15(){
    var _Nombre = document.getElementById("Producto29").textContent;
    var _precio = document.getElementById("Producto30").textContent;
    var _control = document.getElementById("exampleFormControlSelect15").value;
    /*Total */
    var total = parseFloat(_precio)* parseFloat(_control);
    aux = parseFloat(total) + parseFloat(aux);
    totalCarrito = aux ;
    /*Mostrar en producto en la pantalla */
    var fila="<tr><td>"+_Nombre+"</td><td>"+_precio +"</td><td>"+_control +"</td></tr>";
    var btn = document.createElement("TR");
   	btn.innerHTML = fila;
    document.getElementById("MiLista").appendChild(btn);
}
/*----------------------------------------------------------------- */
/*Añadir productos segunda seccion*/
function guardar16(){
    var _Nombre = document.getElementById("Producto31").textContent;
    var _precio = document.getElementById("Producto32").textContent;
    var _control = document.getElementById("exampleFormControlSelect16").value;
    /*Total */
    var total = parseFloat(_precio)* parseFloat(_control);
    aux = parseFloat(total) + parseFloat(aux);
    totalCarrito = aux ;
    /*Mostrar en producto en la pantalla */
    var fila="<tr><td>"+_Nombre+"</td><td>"+_precio +"</td><td>"+_control +"</td></tr>";
    var btn = document.createElement("TR");
   	btn.innerHTML = fila;
    document.getElementById("MiLista").appendChild(btn);
}
/*Añadir productos primera seccion*/
function guardar17(){
    var _Nombre = document.getElementById("Producto33").textContent;
    var _precio = document.getElementById("Producto34").textContent;
    var _control = document.getElementById("exampleFormControlSelect17").value;
    /*Total */
    var total = parseFloat(_precio)* parseFloat(_control);
    aux = parseFloat(total) + parseFloat(aux);
    totalCarrito = aux ;
    /*Mostrar en producto en la pantalla */
    var fila="<tr><td>"+_Nombre+"</td><td>"+_precio +"</td><td>"+_control +"</td></tr>";
    var btn = document.createElement("TR");
   	btn.innerHTML = fila;
    document.getElementById("MiLista").appendChild(btn);
}
/*Añadir productos primera seccion*/
function guardar18(){
    var _Nombre = document.getElementById("Producto35").textContent;
    var _precio = document.getElementById("Producto36").textContent;
    var _control = document.getElementById("exampleFormControlSelect18").value;
    /*Total */
    var total = parseFloat(_precio)* parseFloat(_control);
    aux = parseFloat(total) + parseFloat(aux);
    totalCarrito = aux ;
    /*Mostrar en producto en la pantalla */
    var fila="<tr><td>"+_Nombre+"</td><td>"+_precio +"</td><td>"+_control +"</td></tr>";
    var btn = document.createElement("TR");
   	btn.innerHTML = fila;
    document.getElementById("MiLista").appendChild(btn);
}
/*Añadir productos primera seccion*/
function guardar19(){
    var _Nombre = document.getElementById("Producto37").textContent;
    var _precio = document.getElementById("Producto38").textContent;
    var _control = document.getElementById("exampleFormControlSelect19").value;
    /*Total */
    var total = parseFloat(_precio)* parseFloat(_control);
    aux = parseFloat(total) + parseFloat(aux);
    totalCarrito = aux ;
    /*Mostrar en producto en la pantalla */
    var fila="<tr><td>"+_Nombre+"</td><td>"+_precio +"</td><td>"+_control +"</td></tr>";
    var btn = document.createElement("TR");
   	btn.innerHTML = fila;
    document.getElementById("MiLista").appendChild(btn);
}
/*Añadir productos primera seccion*/
function guardar20(){
    var _Nombre = document.getElementById("Producto39").textContent;
    var _precio = document.getElementById("Producto40").textContent;
    var _control = document.getElementById("exampleFormControlSelect20").value;
    /*Total */
    var total = parseFloat(_precio)* parseFloat(_control);
    aux = parseFloat(total) + parseFloat(aux);
    totalCarrito = aux ;
    /*Mostrar en producto en la pantalla */
    var fila="<tr><td>"+_Nombre+"</td><td>"+_precio +"</td><td>"+_control +"</td></tr>";
    var btn = document.createElement("TR");
   	btn.innerHTML = fila;
    document.getElementById("MiLista").appendChild(btn);
}
/*Añadir productos primera seccion*/
function guardar21(){
    var _Nombre = document.getElementById("Producto41").textContent;
    var _precio = document.getElementById("Producto42").textContent;
    var _control = document.getElementById("exampleFormControlSelect21").value;
    /*Total */
    var total = parseFloat(_precio)* parseFloat(_control);
    aux = parseFloat(total) + parseFloat(aux);
    totalCarrito = aux ;
    /*Mostrar en producto en la pantalla */
    var fila="<tr><td>"+_Nombre+"</td><td>"+_precio +"</td><td>"+_control +"</td></tr>";
    var btn = document.createElement("TR");
   	btn.innerHTML = fila;
    document.getElementById("MiLista").appendChild(btn);
}
/*Añadir productos primera seccion*/
function guardar22(){
    var _Nombre = document.getElementById("Producto43").textContent;
    var _precio = document.getElementById("Producto44").textContent;
    var _control = document.getElementById("exampleFormControlSelect22").value;
    /*Total */
    var total = parseFloat(_precio)* parseFloat(_control);
    aux = parseFloat(total) + parseFloat(aux);
    totalCarrito = aux ;
    /*Mostrar en producto en la pantalla */
    var fila="<tr><td>"+_Nombre+"</td><td>"+_precio +"</td><td>"+_control +"</td></tr>";
    var btn = document.createElement("TR");
   	btn.innerHTML = fila;
    document.getElementById("MiLista").appendChild(btn);
}
/*Añadir productos primera seccion*/
function guardar23(){
    var _Nombre = document.getElementById("Producto45").textContent;
    var _precio = document.getElementById("Producto46").textContent;
    var _control = document.getElementById("exampleFormControlSelect23").value;
    /*Total */
    var total = parseFloat(_precio)* parseFloat(_control);
    aux = parseFloat(total) + parseFloat(aux);
    totalCarrito = aux ;
    /*Mostrar en producto en la pantalla */
    var fila="<tr><td>"+_Nombre+"</td><td>"+_precio +"</td><td>"+_control +"</td></tr>";
    var btn = document.createElement("TR");
   	btn.innerHTML = fila;
    document.getElementById("MiLista").appendChild(btn);
}
/*Añadir productos primera seccion*/
function guardar24(){
    var _Nombre = document.getElementById("Producto47").textContent;
    var _precio = document.getElementById("Producto48").textContent;
    var _control = document.getElementById("exampleFormControlSelect24").value;
    /*Total */
    var total = parseFloat(_precio)* parseFloat(_control);
    aux = parseFloat(total) + parseFloat(aux);
    totalCarrito = aux ;
    /*Mostrar en producto en la pantalla */
    var fila="<tr><td>"+_Nombre+"</td><td>"+_precio +"</td><td>"+_control +"</td></tr>";
    var btn = document.createElement("TR");
   	btn.innerHTML = fila;
    document.getElementById("MiLista").appendChild(btn);
}
/*Añadir productos primera seccion*/
function guardar25(){
    var _Nombre = document.getElementById("Producto49").textContent;
    var _precio = document.getElementById("Producto50").textContent;
    var _control = document.getElementById("exampleFormControlSelect25").value;
    /*Total */
    var total = parseFloat(_precio)* parseFloat(_control);
    aux = parseFloat(total) + parseFloat(aux);
    totalCarrito = aux ;
    /*Mostrar en producto en la pantalla */
    var fila="<tr><td>"+_Nombre+"</td><td>"+_precio +"</td><td>"+_control +"</td></tr>";
    var btn = document.createElement("TR");
   	btn.innerHTML = fila;
    document.getElementById("MiLista").appendChild(btn);
}
/*Añadir productos primera seccion*/
function guardar26(){
    var _Nombre = document.getElementById("Producto51").textContent;
    var _precio = document.getElementById("Producto52").textContent;
    var _control = document.getElementById("exampleFormControlSelect26").value;
    /*Total */
    var total = parseFloat(_precio)* parseFloat(_control);
    aux = parseFloat(total) + parseFloat(aux);
    totalCarrito = aux ;
    /*Mostrar en producto en la pantalla */
    var fila="<tr><td>"+_Nombre+"</td><td>"+_precio +"</td><td>"+_control +"</td></tr>";
    var btn = document.createElement("TR");
   	btn.innerHTML = fila;
    document.getElementById("MiLista").appendChild(btn);
}
/*Añadir productos primera seccion*/
function guardar27(){
    var _Nombre = document.getElementById("Producto53").textContent;
    var _precio = document.getElementById("Producto54").textContent;
    var _control = document.getElementById("exampleFormControlSelect27").value;
    /*Total */
    var total = parseFloat(_precio)* parseFloat(_control);
    aux = parseFloat(total) + parseFloat(aux);
    totalCarrito = aux ;
    /*Mostrar en producto en la pantalla */
    var fila="<tr><td>"+_Nombre+"</td><td>"+_precio +"</td><td>"+_control +"</td></tr>";
    var btn = document.createElement("TR");
   	btn.innerHTML = fila;
    document.getElementById("MiLista").appendChild(btn);
}
/*Añadir productos primera seccion*/
function guardar28(){
    var _Nombre = document.getElementById("Producto55").textContent;
    var _precio = document.getElementById("Producto56").textContent;
    var _control = document.getElementById("exampleFormControlSelect28").value;
    /*Total */
    var total = parseFloat(_precio)* parseFloat(_control);
    aux = parseFloat(total) + parseFloat(aux);
    totalCarrito = aux ;
    /*Mostrar en producto en la pantalla */
    var fila="<tr><td>"+_Nombre+"</td><td>"+_precio +"</td><td>"+_control +"</td></tr>";
    var btn = document.createElement("TR");
   	btn.innerHTML = fila;
    document.getElementById("MiLista").appendChild(btn);
}
/*Añadir productos primera seccion*/
function guardar29(){
    var _Nombre = document.getElementById("Producto57").textContent;
    var _precio = document.getElementById("Producto58").textContent;
    var _control = document.getElementById("exampleFormControlSelect29").value;
    /*Total */
    var total = parseFloat(_precio)* parseFloat(_control);
    aux = parseFloat(total) + parseFloat(aux);
    totalCarrito = aux ;
    /*Mostrar en producto en la pantalla */
    var fila="<tr><td>"+_Nombre+"</td><td>"+_precio +"</td><td>"+_control +"</td></tr>";
    var btn = document.createElement("TR");
   	btn.innerHTML = fila;
    document.getElementById("MiLista").appendChild(btn);
}
/*Añadir productos primera seccion*/
function guardar30(){
    var _Nombre = document.getElementById("Producto59").textContent;
    var _precio = document.getElementById("Producto60").textContent;
    var _control = document.getElementById("exampleFormControlSelect30").value;
    /*Total */
    var total = parseFloat(_precio)* parseFloat(_control);
    aux = parseFloat(total) + parseFloat(aux);
    totalCarrito = aux ;
    /*Mostrar en producto en la pantalla */
    var fila="<tr><td>"+_Nombre+"</td><td>"+_precio +"</td><td>"+_control +"</td></tr>";
    var btn = document.createElement("TR");
   	btn.innerHTML = fila;
    document.getElementById("MiLista").appendChild(btn);
}
/*Añadir productos primera seccion*/
function guardar31(){
    var _Nombre = document.getElementById("Producto61").textContent;
    var _precio = document.getElementById("Producto62").textContent;
    var _control = document.getElementById("exampleFormControlSelect31").value;
    /*Total */
    var total = parseFloat(_precio)* parseFloat(_control);
    aux = parseFloat(total) + parseFloat(aux);
    totalCarrito = aux ;
    /*Mostrar en producto en la pantalla */
    var fila="<tr><td>"+_Nombre+"</td><td>"+_precio +"</td><td>"+_control +"</td></tr>";
    var btn = document.createElement("TR");
   	btn.innerHTML = fila;
    document.getElementById("MiLista").appendChild(btn);
}
/*Añadir productos primera seccion*/
function guardar32(){
    var _Nombre = document.getElementById("Producto63").textContent;
    var _precio = document.getElementById("Producto64").textContent;
    var _control = document.getElementById("exampleFormControlSelect32").value;
    /*Total */
    var total = parseFloat(_precio)* parseFloat(_control);
    aux = parseFloat(total) + parseFloat(aux);
    totalCarrito = aux ;
    /*Mostrar en producto en la pantalla */
    var fila="<tr><td>"+_Nombre+"</td><td>"+_precio +"</td><td>"+_control +"</td></tr>";
    var btn = document.createElement("TR");
   	btn.innerHTML = fila;
    document.getElementById("MiLista").appendChild(btn);
}
/*Añadir productos primera seccion*/
function guardar33(){
    var _Nombre = document.getElementById("Producto65").textContent;
    var _precio = document.getElementById("Producto66").textContent;
    var _control = document.getElementById("exampleFormControlSelect33").value;
    /*Total */
    var total = parseFloat(_precio)* parseFloat(_control);
    aux = parseFloat(total) + parseFloat(aux);
    totalCarrito = aux ;
    /*Mostrar en producto en la pantalla */
    var fila="<tr><td>"+_Nombre+"</td><td>"+_precio +"</td><td>"+_control +"</td></tr>";
    var btn = document.createElement("TR");
   	btn.innerHTML = fila;
    document.getElementById("MiLista").appendChild(btn);
}

