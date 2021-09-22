// loops
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);

// for loop
// for(var i=0;i<=5000;i+=100){ //i+=1 the same as i++
//     // console.log(i);
//     document.getElementById(`grid-container`).innerHTML+=`<p class="bordered">Description ${i}`
// }
// console.log(`Continue...`);

var tmp="";
for(var i=0;i<=500;i+=100){ //i+=1 the same as i++
    tmp += `<p class="bordered">Description ${i}</p>`;
    console.log(tmp)
}
document.getElementById(`grid-container`).innerHTML=tmp;
console.log(`Done with Grid forLoop`);

// Fortune
var jobTitle="Software Engineer";
var geoLocation=`Portugal`;
var partnerName=`Tatiana`;
var numberChildren=`Zero Two`;
document.getElementById(`fortune`).innerHTML=`<p>You will be a ${jobTitle} in ${geoLocation}, and married to ${partnerName} with ${numberChildren} kids.</p>`
console.log(`Done with #fortune fill-in-the-blank`);

// User Information
var userName=prompt(`Name?`);
var userEmail=prompt(`Email?`);
var userPassword=prompt(`Password?`);
var userAge=prompt(`Age`);
var userCountry=prompt(`Country?`);
var userSalary=prompt(`Monthly Income?`);
document.getElementById(`MyInfo`).innerHTML=`<p><b>Name:</b>${userName}<br><b>Email:</b>${userEmail}<br><b>Salary:</b>${userSalary * 12}`;
console.log(`
User Information
    Name:${userName}
    Email:${userEmail}
    Salary:${userSalary * 12}
`);
