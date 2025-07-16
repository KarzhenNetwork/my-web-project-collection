
const display = document.getElementById('display');

function appendToDisplay(harNawek){
    display.value += harNawek;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{                                     //// wa dway awa am evala natejakan gshty adayte wa xoy yaksar koy dakatawa. 
        display.value = eval(display.value); //// agardba am --> eval <-- ba jwany ba karbena chunka bo security zor hastyara.
    }
    catch(test){
        display.value = "Error"
    }
}