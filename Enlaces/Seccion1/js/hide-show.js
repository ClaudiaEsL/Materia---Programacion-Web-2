//boton categoria hortalizas
$("#btn-hortalizas").click(
    function () {
        //ocultar
        $("#tomates").css("display","none");
        $("#papas").css("display","none");
        $("#lechugas").css("display","none");
        $("#cebollas").css("display","none");

        $("#btn-tomates").css("background-color","rgb(255, 136, 0)");
        $("#btn-papas").css("background-color","rgb(255, 136, 0)");
        $("#btn-lechugas").css("background-color","rgb(255, 136, 0)");
        $("#btn-cebollas").css("background-color","rgb(255, 136, 0)");
        //mostrar
        $("#btn-hortalizas").css("background-color"," rgba(0, 0, 0, 0.548)");
        $("#hortalizas").css("display","flex").slideDown(1000);
        
    }
);
//boton categoria tomatesa
$("#btn-tomates").click(
    function () {
        //ocultar
        $("#hortalizas").css("display","none");
        $("#papas").css("display","none");
        $("#lechugas").css("display","none");
        $("#cebollas").css("display","none");

        $("#btn-hortalizas").css("background-color","rgb(255, 136, 0)");
        $("#btn-papas").css("background-color","rgb(255, 136, 0)");
        $("#btn-lechugas").css("background-color","rgb(255, 136, 0)");
        $("#btn-cebollas").css("background-color","rgb(255, 136, 0)");
        //mostrar
        $("#btn-tomates").css("background-color"," rgba(0, 0, 0, 0.548)");
        $("#tomates").css("display","flex").slideDown(1000);     
    }
);
//boton categoria papas
$("#btn-papas").click(
    function () {
        //ocultar
        $("#hortalizas").css("display","none");
        $("#tomates").css("display","none");
        $("#lechugas").css("display","none");
        $("#cebollas").css("display","none");

        $("#btn-hortalizas").css("background-color","rgb(255, 136, 0)");
        $("#btn-tomates").css("background-color","rgb(255, 136, 0)");
        $("#btn-lechugas").css("background-color","rgb(255, 136, 0)");
        $("#btn-cebollas").css("background-color","rgb(255, 136, 0)");
        //mostrar
        $("#btn-papas").css("background-color"," rgba(0, 0, 0, 0.548)");
        $("#papas").css("display","flex").slideDown(1000);     
    }
);
//boton categoria lechugas
$("#btn-lechugas").click(
    function () {
        //ocultar
        $("#hortalizas").css("display","none");
        $("#tomates").css("display","none");
        $("#papas").css("display","none");
        $("#cebollas").css("display","none");

        $("#btn-hortalizas").css("background-color","rgb(255, 136, 0)");
        $("#btn-tomates").css("background-color","rgb(255, 136, 0)");
        $("#btn-papas").css("background-color","rgb(255, 136, 0)");
        $("#btn-cebollas").css("background-color","rgb(255, 136, 0)");
        //mostrar
        $("#btn-lechugas").css("background-color"," rgba(0, 0, 0, 0.548)");
        $("#lechugas").css("display","flex").slideDown(1000);     
    }
);
//boton categoria cebollas
$("#btn-cebollas").click(
    function () {
        //ocultar
        $("#hortalizas").css("display","none");
        $("#tomates").css("display","none");
        $("#lechugas").css("display","none");
        $("#papas").css("display","none");

        $("#btn-hortalizas").css("background-color","rgb(255, 136, 0)");
        $("#btn-tomates").css("background-color","rgb(255, 136, 0)");
        $("#btn-lechugas").css("background-color","rgb(255, 136, 0)");
        $("#btn-papas").css("background-color","rgb(255, 136, 0)");
        //mostrar
        $("#btn-cebollas").css("background-color"," rgba(0, 0, 0, 0.548)");
        $("#cebollas").css("display","flex").slideDown(1000);     
    }
);

//********************************************************************//
//boton categoria citricos
$("#btn-citricos").click(
    function () {
        //ocultar
        $("#melones").css("display","none");
        $("#frutas-secas").css("display","none");
        $("#platanos").css("display","none");
        $("#manzanas").css("display","none");
        $("#uvas").css("display","none");

        $("#btn-melones").css("background-color","rgb(255, 136, 0)");
        $("#btn-frutas-secas").css("background-color","rgb(255, 136, 0)");
        $("#btn-platanos").css("background-color","rgb(255, 136, 0)");
        $("#btn-manzanas").css("background-color","rgb(255, 136, 0)");
        $("#btn-uvas").css("background-color","rgb(255, 136, 0);");
        //mostrar
        $("#btn-citricos").css("background-color"," rgba(0, 0, 0, 0.548)");
        $("#citricos").css("display","flex").slideDown(1000);
        
    }
);
//boton categoria melones
$("#btn-melones").click(
    function () {
        //ocultar
        $("#citricos").css("display","none");
        $("#frutas-secas").css("display","none");
        $("#platanos").css("display","none");
        $("#manzanas").css("display","none");
        $("#uvas").css("display","none");

        $("#btn-citricos").css("background-color","rgb(255, 136, 0)");
        $("#btn-frutas-secas").css("background-color","rgb(255, 136, 0)");
        $("#btn-platanos").css("background-color","rgb(255, 136, 0)");
        $("#btn-manzanas").css("background-color","rgb(255, 136, 0)");
        $("#btn-uvas").css("background-color","rgb(255, 136, 0)");
        //mostrar
        $("#btn-melones").css("background-color"," rgba(0, 0, 0, 0.548)");
        $("#melones").css("display","flex").slideDown(1000);    
    }
);
//boton categoria frutas-secas
$("#btn-frutas-secas").click(
    function () {
        //ocultar
        $("#melones").css("display","none");
        $("#citricos").css("display","none");
        $("#platanos").css("display","none");
        $("#manzanas").css("display","none");
        $("#uvas").css("display","none");

        $("#btn-melones").css("background-color","rgb(255, 136, 0)");
        $("#btn-citricos").css("background-color","rgb(255, 136, 0)");
        $("#btn-platanos").css("background-color","rgb(255, 136, 0)");
        $("#btn-manzanas").css("background-color","rgb(255, 136, 0)");
        $("#btn-uvas").css("background-color","rgb(255, 136, 0)");
        //mostrar
        $("#btn-frutas-secas").css("background-color"," rgba(0, 0, 0, 0.548)");
        $("#frutas-secas").css("display","flex").slideDown(1000);    
    }
);
//boton categoria platanos
$("#btn-platanos").click(
    function () {
        //ocultar
        $("#melones").css("display","none");
        $("#frutas-secas").css("display","none");
        $("#citricos").css("display","none");
        $("#manzanas").css("display","none");
        $("#uvas").css("display","none");

        $("#btn-melones").css("background-color","rgb(255, 136, 0)");
        $("#btn-frutas-secas").css("background-color","rgb(255, 136, 0)");
        $("#btn-citricos").css("background-color","rgb(255, 136, 0)");
        $("#btn-manzanas").css("background-color","rgb(255, 136, 0)");
        $("#btn-uvas").css("background-color","rgb(255, 136, 0);");
        //mostrar
        $("#btn-platanos").css("background-color"," rgba(0, 0, 0, 0.548)");
        $("#platanos").css("display","flex").slideDown(1000);     
    }
);
//boton categoria manzanas
$("#btn-manzanas").click(
    function () {
        //ocultar
        $("#melones").css("display","none");
        $("#frutas-secas").css("display","none");
        $("#platanos").css("display","none");
        $("#citricos").css("display","none");
        $("#uvas").css("display","none");

        $("#btn-melones").css("background-color","rgb(255, 136, 0)");
        $("#btn-frutas-secas").css("background-color","rgb(255, 136, 0)");
        $("#btn-platanos").css("background-color","rgb(255, 136, 0)");
        $("#btn-citricos").css("background-color","rgb(255, 136, 0)");
        $("#btn-uvas").css("background-color","rgb(255, 136, 0);");
        //mostrar
        $("#btn-manzanas").css("background-color"," rgba(0, 0, 0, 0.548)");
        $("#manzanas").css("display","flex").slideDown(1000);    
    }
);
//boton categoria uvas
$("#btn-uvas").click(
    function () {
        //ocultar
        $("#melones").css("display","none");
        $("#frutas-secas").css("display","none");
        $("#platanos").css("display","none");
        $("#citricos").css("display","none");
        $("#manzanas").css("display","none");

        $("#btn-melones").css("background-color","rgb(255, 136, 0)");
        $("#btn-frutas-secas").css("background-color","rgb(255, 136, 0)");
        $("#btn-platanos").css("background-color","rgb(255, 136, 0)");
        $("#btn-citricos").css("background-color","rgb(255, 136, 0)");
        $("#btn-manzanas").css("background-color","rgb(255, 136, 0)");
        //mostrar
        $("#btn-uvas").css("background-color"," rgba(0, 0, 0, 0.548)");
        $("#uvas").css("display","flex").slideDown(1000);    
    }
);