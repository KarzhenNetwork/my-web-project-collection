const toFahr = document.getElementById("toFahr");
const checkbox = document.getElementById("checkbox");
const toCels = document.getElementById("toCels");
const result = document.getElementById("result");
let temp;
function convert(){
    if(toFahr.checked){
        temp = Number(checkbox.value);
        temp = (9 * temp / 5) + 32
        result.textContent = temp.toFixed(1) + ` F`; /// am toFixed() a bo awa bakrdet katek zhmarayak pointe zor haya ja bakayf xot rey pe dadayt chanek pointe habet
    }
    else if(toCels.checked){
        temp = Number(checkbox.value);
        temp = 5 * (temp - 32) / 9;
        result.textContent = temp.toFixed(1) + ` C`;
    }
    else{
        result.textContent = "Please Select a Unit";
    }
}