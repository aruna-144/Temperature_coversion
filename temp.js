const textbox = document.getElementById("textbox");
const tofarenheit = document.getElementById("tofarenheit");
const tocelsius = document.getElementById("tocelsius");
const result = document.getElementById("result");
let temp;

function convert(){
    if(tofarenheit.checked){
        result.textContent = `You Selected Farenheit`;
        temp = Number(textbox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "'F";
    }
    else if(tocelsius.checked){
        result.textContent = `You Selected Celsius`;
        temp = Number(textbox.value);
        temp = (temp - 32) * 5 / 9;
        result.textContent = temp.toFixed(1) + "'C";
    }
    else{
        result.textContent = `Select a Unit`;
    }
}