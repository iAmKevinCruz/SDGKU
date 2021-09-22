
function calc(){
    console.log(`Calculator`);
    var num1=Number(prompt(`Enter number 1: `));
    var num2=Number(prompt(`Enter number 2: `));
    display(sum(num1,num2),num1,num2,`+`);
    display(sub(num1,num2),num1,num2,`-`);
    display(mult(num1,num2),num1,num2,`*`);
    display(div(num1,num2),num1,num2,`/`);
}

function sum(a,b){
    console.log(`${a} + ${b} = ${Number(a+b)}`);
    return a+b;
}

function sub(a,b){
    console.log(`${a} - ${b} = ${a-b}`);
    return a-b;
}

function mult(a,b){
    console.log(`${a} * ${b} = ${a*b}`);
    return a*b;
}

function div(a,b){
    console.log(`${a} / ${b} = ${a/b}`);
    return a/b;
}

function display(result,a,b,sign){
    document.getElementById(`display`).innerHTML+=`
    <p>${a} ${sign} ${b} = ${result}</p>
    `;
}