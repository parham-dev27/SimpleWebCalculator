var firstnum;
var secondnum;
var op;

function addToRes(Char) {
    let res = document.getElementById("res");
    let valueOfRes = res.value;
    res.value += String(Char);

}

function Clear() {
    let res = document.getElementById("res");
    let valueRes = String(res.value);
    res.value = valueRes.slice(0, -1);
}

function plusMinus() {
    let res = document.getElementById("res");
    let valueRes = String(res.value);
    if(valueRes.includes("-")){
        res.value = valueRes.slice(1);
    }
    else {
        res.value = "-"+valueRes;
    }
}

function dot_b() {
    let res = document.getElementById("res");
    let valueRes = String(res.value);
    if(valueRes.includes(".")){
        return false;
    }
    else {
        res.value = valueRes+".";
    }
}

function operator_bs(operator) {
    let res = document.getElementById("res");
    let valueRes = String(res.value);
    op = operator;
    firstnum = valueRes;
    res.value = "";
    if (operator === "/"){
        document.getElementById("x").disabled = true;
        document.getElementById("+").disabled = true;
        document.getElementById("-").disabled = true;
        document.getElementById("/").disabled = true;
    }
    else if (operator === "*"){
        document.getElementById("/").disabled = true;
        document.getElementById("+").disabled = true;
        document.getElementById("-").disabled = true;
        document.getElementById("x").disabled = true;
    }
    else if(operator === "-"){
        document.getElementById("/").disabled = true;
        document.getElementById("+").disabled = true;
        document.getElementById("x").disabled = true;
        document.getElementById("-").disabled = true;
    }
    else if(operator === "+"){
        document.getElementById("/").disabled = true;
        document.getElementById("-").disabled = true;
        document.getElementById("x").disabled = true;
        document.getElementById("+").disabled = true;
    }
}

function equal() {
    let res = document.getElementById("res");
    secondnum = String(res.value);
    if (op === "+"){
        res.value = parseInt(firstnum) + parseInt(secondnum);
    }
    else if(op === "*"){
        res.value = parseInt(firstnum) * parseInt(secondnum);
    }
    else if(op === "-"){
        res.value = parseInt(firstnum) - parseInt(secondnum);
    }
    else if(op === "/"){
        res.value = parseInt(firstnum) / parseInt(secondnum);
    }

}