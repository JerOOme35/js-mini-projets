/* JS *\
\*    */
$clic = document.getElementById("clic"); 
$multiplicacion = document.getElementById("multiplicateur");
$autoclic = document.getElementById("autoclic");
$score = document.getElementById("score");


score = 0; 
nbMultiplicacion = 1; 


function viewScore() {
    $score.innerHTML = "Score : " + score + " Pièces ";
}

function viewNbMultiplicacion() {
    $multiplicacion.innerHTML = "Multipliez x " + nbMultiplicacion + " ( points de la prochaine super Pièce : " + points() + " ) ";
}

function viewAutoclic() {
   $autoclic.innerHTML = "Autoclic de 5 seconds avec un score de : " + aupoints() + " Pièces ";
}

function clic() {
    score = score + nbMultiplicacion;
    viewScore();
}



function points() {
    return 50 * (nbMultiplicacion * nbMultiplicacion);
}

function aupoints() {
    return 200;
}



function obtenerMultiplicacion() {
    if (score >= points()){
        score = score - points(); 
        nbMultiplicacion = nbMultiplicacion +1;
        viewNbMultiplicacion();
        viewScore();
    } else {
        alert("vous n'avez pas suffisamment de points pour avoir une super piece");
    }
}

function obtenerAutoclic() {
    if (score >= aupoints()){
        score = score - aupoints(); 
        timesAutoClic();
        stopTimesAutoClic();
        
    } else {
        alert("vous n'avez pas suffisamment de points pour avoir l'Autoclic");
    }
}



function timesAutoClic() {
    $stop = setInterval($clic.onclick, 1000);
}

function stopTimesAutoClic() {
    setTimeout(stoptim, 5000);
}

function stoptim() {
    clearInterval($stop);
} 



$clic.onclick = clic; 
$multiplicacion.onclick = obtenerMultiplicacion;
$autoclic.onclick = obtenerAutoclic;
viewScore();
viewNbMultiplicacion();
viewAutoclic();





