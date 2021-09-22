var cart=["Laptop HP i7","Alexa Dot","Airpods","Wallet"];
console.log(cart);
console.log(cart[1]);
console.log(cart[3]);
for(var i=0;i<11;i++){
    console.log(i);
}

for(var i=0;i<4;i++){
    console.log(cart[i]);
}

for(var i=0;i<4;i++){
    console.log(cart[i]);
}

// for(var i=0;i<4;i++){
//     document.write(`<p> The product number ${i+1}: ${cart[i]}</p>`);
// }

let points=1000;
let login=true;

if(points==`1000`){ //two == means same value -> three === means same value AND data type
    console.log("More Than 100 Points!");
}else{
    console.log(`Not enough points :(`);
}

if(login){
    console.log(`Welcome to the system`);
}

function transaction(){
    for(var i=0;i<4;i++){
        document.write(`<p> The product number ${i+1}: ${cart[i]}</p>`);
    }
}

let cash=500;
let card =false;
let total=600;
if(cash>total){
    console.log(`Sucessful Transaction`);
}else if(card){
    console.log(`Sucessful transaction with Credit Card`);
}else{
    console.log(`Insuficient Funds.`);
}

const paymentMethod=`nothing`;
//Kinda like an if statment. Case's are the different if's. Default is like the else part.
switch(paymentMethod){
    case `Cash`:
        transaction();
        break;
    case `Credit`:
        transaction();
        break;
    default:
        document.write(`Incorrect Transaction`);
        break;
}