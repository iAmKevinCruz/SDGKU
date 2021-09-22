console.log(`hello`)
function login(){
    let email=$(`#txtEmail`).val();
    let password=$(`#txtPassword`).val();
    console.log(email,password);
    if(email==`` || password==``){
        alert(`All fields must be filled out!`);
    }else{
        let userList=readUsers();
        let found=false;
        for(i=0;i<userList.length;i++){
            let user=userList[i];
            if(user.email === email && user.password === password){
            console.log(`login success`)
            found = true;
            window.location=`users.html`
            }
        }
        if(!found){
            $(`#wrongLogin`).slideDown(500).delay(2000).slideUp(500);
            console.log(`login failed`);
        }
    }
}

function init(){
    $(`#wrongLogin`).hide();
    $(`#btnLogin`).click(login);
}

window.onload=init;