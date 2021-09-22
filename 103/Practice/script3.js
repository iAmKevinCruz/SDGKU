function hello(user){
    console.log(`Hello there ` + user);
}
hello(`Kevin`);

function sum(arg1,arg2){
    console.log(arg1+arg2);
}
sum(5,9);

var userDB=`admin@gmail.com`;
var passDB=`admin123`;
function login(){

    var userName=prompt(`Enter Username:`);
    var userPass=prompt(`Enter user password:`);

    if(userName==userDB && userPass==passDB){
    document.write(`<p>Welcome to the system ${userName}</p>`);
    }
    else{
        alert(`Wrong username or password. Try again.`);
    }
}
