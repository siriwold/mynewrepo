let underliggende = false;
let helsepersonell = false;

let selectedColor = "#7575f9"
let unselectedColor = "#b5b5e5"

function underliggendePå(){
    underliggende = true;
    document.getElementById("Underliggende").style.backgroundColor = selectedColor;
    document.getElementById("Underliggende1").style.backgroundColor = unselectedColor;
}
function underliggendeAv(){
    underliggende = false;
    document.getElementById("Underliggende1").style.backgroundColor = selectedColor;
    document.getElementById("Underliggende").style.backgroundColor = unselectedColor;
}

function helsepersonellPå(){
    helsepersonell = true;
    document.getElementById("helsepersonell").style.backgroundColor = selectedColor;
    document.getElementById("helsepersonell1").style.backgroundColor = unselectedColor;
}
function helsepersonellAv(){
    helsepersonell = false;
    document.getElementById("helsepersonell1").style.backgroundColor = selectedColor;
    document.getElementById("helsepersonell").style.backgroundColor = unselectedColor;
}

function check() {
    let age = document.getElementById("alder").value
    if (helsepersonell) {
        output = "Forventet vaksinering innen: Mai" 
    }
    else if (underliggende) {
        if(age <= 18 && age >= 44) {
            output = "Forventet vaksinering: Midt i Mai "
        }
        else if(age <= 45 && age >= 54) {
            output = "Forventet vaksinering: Tidlig i Mai "
        }
        else if(age <= 55 && age >= 64) {
            output = "Forventet vaksinering: Tidlig i Mai "
        }
    }
    else if(!underliggende) {
        if(age <= 18 && age >= 44) {
            output = "Forventet vaksinering: Tidlig i Juli "
        }
        else if(age <= 45 && age >= 54) {
            output = "Forventet vaksinering: Sent i Juni "
        }
        else if(age <= 55 && age >= 64) {
            output = "Forventet vaksinering: Tidlig i Juni "
        }
        else if(age <= 75 && age >= 84) {
            output = "Forventet vaksinering: Midt i Mars "
        }
        else if(age <=85) {
            output = "Forventet vaksinering: Midt i Februar "
        }
    }
    else {
        output = "error"
    }
    console.log(output)
    document.getElementById("answer").innerHTML = output;
}