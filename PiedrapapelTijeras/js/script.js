// Author: CabaCrD
$(document).ready(function(){ // INICIAMOS LA APLICACIÓN

    $("#empezar").click(function(e){ //BOTON EMPEZAR

        $("#mina").attr("src"   , "./img/mina/mNeutral.png");
        $("#markus").attr("src" , "./img/markus/markusNeutral.png");

        $('#piedraMina').prop("disabled", false);
        $('#papelMina ').prop("disabled", false);
        $('#tijeraMina').prop("disabled", false);
        
        ComienzoJuego();

    });

});
