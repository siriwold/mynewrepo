var result = "";// Definerer en result-variabel

function Send() {
    document.getElementById("answer").innerHTML = "Du trykket send";
};



function US(value) { /* US(value) => value er da første parameter, altså første variabelen vi sender med når vi kaller på denne funksjonen. vi kaller på den med enten 'yes' eller 'no', som da vil si at variabelen value tilsvarer dataen som sendes med når vi trykker på knappen. */
    var USresult = "";
    if(value == 'yes') {
    result = "Du har en underliggende sykdom";
    } else {
    result = "Du har ikke en underliggende sykdom";
    }
    document.getElementById("answer").innerHTML = result;
};/* vi har allerede funnet ut hvilken som er riktig respons, basert på if-blokken over, og sender derfor med verdien av resultat-variabelen som den ble etter å ha blitt endret basert på verdien vi sendte med påkallingen av funksjonen (Aka US('yes') eller US('no')) */



function HP(value) {
    var HPresult = "";
    if(value == 'yes') {
    result = "Du er helsepersonell";
    } else {
    result = "Du er ikke helsepersonell";
    }
    document.getElementById("answer").innerHTML = result;
};



function Alder() {
    document.getElementById("answer").innerHTML = "Du er " + document.getElementById("alder").value + " år" /* Man får tallet man skriver i boksen som value */
};