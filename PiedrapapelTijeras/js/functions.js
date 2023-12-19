//Author: CabaCrD

/****** VARIABÑES QUE USAREMOS ******/ 
let mano="";
let manoIA = parseInt(Math.random() * (3 - 1) + 1);
             
function ComienzoJuego(){

    var intervalo = setInterval(dudando, 100); 

    /*** ACCIONES DEL JUGADOR  ***/

    $("#piedraMina").click(function(e){ //BOTON MINUSCULAS

        $('#piedraMina').prop("disabled", true);
        $('#papelMina ').prop("disabled", true);
        $('#tijeraMina').prop("disabled", true);

        clearInterval(intervalo);

        $("#mina").attr("src","./img/mina/mPiedra.png");
        mano = "piedra";
        jugadaMarkus();

        switch(jugadaMarkus()){

            case "piedra": 

                console.log("empate")
                setTimeout(empate, 2000); 

                break;
        
            case "papel": 

                console.log("perdiste")
                setTimeout(derrota, 2000);

                break;

            case "tijera": 

                console.log("ganaste");
                setTimeout(victoria, 2000);

                break;

        }

    });

    $("#papelMina").click(function(e){ //BOTON MINUSCULAS

        $('#piedraMina').prop("disabled", true);
        $('#papelMina ').prop("disabled", true);
        $('#tijeraMina').prop("disabled", true);

        clearInterval(intervalo);
        $("#mina").attr("src","./img/mina/mPapel.png");
        mano = "papel";
        jugadaMarkus ();

        switch(jugadaMarkus()){

            case "piedra":

                console.log("ganaste");
                setTimeout(victoria, 2000);

                break;

            case "papel":

                console.log("empate Markus: " + jugadaMarkus());
                setTimeout(empate, 2000); 

                break;

            case "tijera":

                console.log("perdiste")
                setTimeout(derrota, 2000);

                break;

        }

    });

    $("#tijeraMina").click(function(e){ //BOTON MINUSCULAS

        $('#piedraMina').prop("disabled", true);
        $('#papelMina ').prop("disabled", true);
        $('#tijeraMina').prop("disabled", true);

        clearInterval(intervalo);
        $("#mina").attr("src","./img/mina/mTijera.png");
        mano = "tijera";
        jugadaMarkus();

        switch(jugadaMarkus()){

            case "piedra":

                setTimeout(derrota, 2000);
                break;
        

            case "papel":

                setTimeout(victoria, 2000);
                break;

            case  "tijera":

                setTimeout(empate, 2000); 
                break;

        } 

    });   
    
}

function dudando(){

    $("#mina").attr("src","./img/mina/mDuda1.png"); 
    $("#markus").attr("src","./img/markus/duda1.png");

}

function victoria(){

    $("#mina").attr("src","./img/mina/mRisa1.png");
    $("#markus").attr("src","./img/markus/triste1.png");

}

function empate(){

    $("#mina").attr("src","./img/mina/mRisa1.png");
    $("#markus").attr("src","./img/markus/alegre1.png");

}

function derrota(){

    $("#mina").attr("src","./img/mina/mEnfado1.png");
    $("#markus").attr("src","./img/markus/alegre1.png");

}
    /*** ACCIONES DE LA IA ***/

function jugadaMarkus (){

    var manoIAString = "";
    
    switch(manoIA){

        case 1: 

            $("#markus").attr("src","./img/markus/markusPiedra.png");
            manoIAString = "piedra"
            return manoIAString;
            break;

        case 2:

            $("#markus").attr("src","./img/markus/markusPapel.png");
            manoIAString = "papel"
            return manoIAString;

            break;

        case 3:

            $("#markus").attr("src","./img/markus/markusTijera.png");
            manoIAString = "tijera"
            return manoIAString;
            break;

    }
}

