numeri = [];
estratti = [];
var i = 0;

function avvio() {
}

function genera() {

    numero = Math.floor((Math.random() * 90) + 1);
    estratti[i] = " "+numero+" ";
    i++;
    while (numeri[numero - 1] == true) {
        numero = Math.floor((Math.random() * 90) + 1);
    }
    numeri[numero - 1] = true;
    document.getElementById("estratto").innerHTML = "Attuale:" + numero;
    document.getElementById("nr" + numero).style.color = ("red");
    //Storico
    i=0;
    while (i < estratti.length) {
        document.getElementById("viewStorico").innerHTML = "Precedenti:" + estratti.toString();
        i++;
    }
    //Controlla quando hai estratto tutti i numeri
    pieno();
}

function ambo() {
    document.getElementById("premio").innerHTML = "SI VA PER LA TERNA";
    var ambop = prompt("Il vincitore dell'ambo");
    if (ambop == "") {ambop=".";} //Se non si inserisace nulla mette il punto
    document.getElementById("1").innerHTML = ambop;
}

function terna() {
    document.getElementById("premio").innerHTML = "SI VA PER LA QUATERNA";
    var ternap = prompt("Il vincitore della terna");
    if (ternap == "") {ternap=".";} //Se non si inserisace nulla mette il punto
    document.getElementById("2").innerHTML = ternap;
}

function quaterna() {
    document.getElementById("premio").innerHTML = "SI VA PER LA CINQUINA";
    var quaternap = prompt("Il vincitore della quaterna");
    if (quaternap == "") {quaternap=".";} //Se non si inserisace nulla mette il punto
    document.getElementById("3").innerHTML = quaternap;
}

function cinquina() {
    document.getElementById("premio").innerHTML = "SI VA PER LA TOMBOLA";
    var cinquinap = prompt("Il vincitore della cinquina");
    if (cinquinap == "") {cinquinap=".";} //Se non si inserisace nulla mette il punto
    document.getElementById("4").innerHTML = cinquinap;
}

function tombola() {
    var persona = prompt("Il nome del vincitore della TOMBOLA: ")
    alert("Complimeti " + persona + "..! Hai vinto la tombola!")
    document.getElementById("premio").innerHTML = "Premere RESET per avviare una nuova partita!";


}

function visualizza() {
    var denaro = document.getElementById("sold").value;
    var denarotombola = denaro / 2;
    var denarocinquina = denarotombola / 2;
    var denaroquaterna = denarocinquina / 2;
    var denaroterna = denaroquaterna / 2;
    var denaroambo = denaroterna / 2;
    //Approssimazione
    denarotombola = Math.floor(denarotombola);
    denarocinquina = Math.floor(denarocinquina);
    denaroquaterna = Math.floor(denaroquaterna);
    denaroterna = Math.floor(denaroterna);
    denaroambo = Math.floor(denaroambo);
    document.getElementById("monete").innerHTML = "I premi sono: Ambo: (" + denaroambo + ") Terna: (" + denaroterna + ") Quaterna: (" + denaroquaterna + ") Cinquina: (" + denarocinquina + ") Tombola: (" + denarotombola + ")";

}

function pieno () {
    if (estratti.length===90) {
        alert("FINE DELLA PARTITA")
        document.getElementById("premio").innerHTML = "Premere RESET per avviare una nuova partita!";
        location.reload();

    }
}




