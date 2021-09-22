function login(){
    let email = $(`#email`).val();
        password = $(`#password`).val();
    console.log(email,password);

    let userList = readUsers();
    let found = false;
    for(users in userList){
        let current = userList[users];
        let userEmail = current.email;
        let userPassword = current.password;
        if(userEmail == email && userPassword == password){
            found = true
            window.location = `users.html`;
        }
    }
    if(!found){
        alert(`Wrong credentials! Please try again.`);
    }
}

function init(){
    $(`#btnLogin`).click(login);
}

window.onload=init;