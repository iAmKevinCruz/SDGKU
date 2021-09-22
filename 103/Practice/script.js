console.log("Test Script");

var userName; //initialization
userName=`Angel`; //declaration/assign
var userAge=28;
var student=true;

console.log(userName);
console.log(userAge);
console.log(student);

// document.write(userName);
// document.write(userAge);
// document.write(student);

type="text/javascript"

document.write(`
    <p><b>Name:</b> ${userName} </p>
    <p><b>Age:</b> ${userAge}</p>
    <p><b>Is ${userName} a Student?:</b> ${student}</p> <br>
    `);

var userName=`Kevin`; //You can ReInitialize with var all you want
userAge=`29 soon`;
student=false;

document.write(`
    <p><b>Name:</b> ${userName} </p>
    <p><b>Age:</b> ${userAge}</p>
    <p><b>Is ${userName} a Student?:</b> ${student}</p> <br>
    `);

let clientName=`Yadiel`;
let clientType=`Premium`;

clientName=`Kenny`;
//let clientType=`Cancelled`; - Cannot reInitialize Let

document.write(`
    <p><b>Name:</b> ${clientName} </p>
    <p><b>Type:</b> ${clientType}</p> <br>
    `);

const taxes=.16;
//taxes=.5 - CANNOT change a constant
console.log(taxes);


//HOMEWORK
document.write(`
    <h1>Session 1 Assignment<h1>
`);

// User 1
var userName1=`Samantha Jimenez`;
var userEmail1=`sam@gmail.com`;
var userPhone1=`123.456.7890`;
var userMembStatus1=`Active`;
document.getElementById("name1").innerHTML=userName1;
document.getElementById("email1").innerHTML=userEmail1;
document.getElementById(`phone1`).innerHTML=userPhone1;
document.getElementById(`status1`).innerHTML=userMembStatus1;

// User 2
var userName2=`Kevin Cruz`;
var userEmail2=`kev@gmail.com`;
var userPhone2=`123.456.7890`;
var userMembStatus2=`Active`;
document.getElementById("name2").innerHTML=userName2;
document.getElementById("email2").innerHTML=userEmail2;
document.getElementById(`phone2`).innerHTML=userPhone2;
document.getElementById(`status2`).innerHTML=userMembStatus2;

// User 3
var userName3=`Lebron James`;
var userEmail3=`leb@gmail.com`;
var userPhone3=`123.456.7890`;
var userMembStatus3=`Trial`;
document.getElementById("name3").innerHTML=userName3;
document.getElementById("email3").innerHTML=userEmail3;
document.getElementById(`phone3`).innerHTML=userPhone3;
document.getElementById(`status3`).innerHTML=userMembStatus3;

// User 4
var userName4=`Martin L King`;
var userEmail4=`mar@gmail.com`;
var userPhone4=`123.456.7890`;
var userMembStatus4=`Active`;
document.getElementById("name4").innerHTML=userName4;
document.getElementById("email4").innerHTML=userEmail4;
document.getElementById(`phone4`).innerHTML=userPhone4;
document.getElementById(`status4`).innerHTML=userMembStatus4;

// User 5
var userName5=`Guillermo Del Toro`;
var userEmail5=`gui@gmail.com`;
var userPhone5=`123.456.7890`;
var userMembStatus5=`CANCELLED`;
document.getElementById("name5").innerHTML=userName5;
document.getElementById("email5").innerHTML=userEmail5;
document.getElementById(`phone5`).innerHTML=userPhone5;
document.getElementById(`status5`).innerHTML=userMembStatus5;