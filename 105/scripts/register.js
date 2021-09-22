console.log(`Users registered`);

function registerUser(){
    let username=$(`#inputUsername`).val();
    let firstName=$(`#inputFirstName`).val();
    let lastName=$(`#inputLastName`).val();
    let email=$(`#inputEmail`).val();
    let password=$(`#inputPassword`).val();
    let dob=$(`#inputDOB`).val();
    let address=$(`#inputAddress`).val();
    let payment=$('input:radio[name=radio]:checked').val();
    let color=$(`#txtColor`).val();
    let user=new User(username,firstName,lastName,email,password,dob,address,payment,color);
    console.log(user);
    saveUser(user); //this fn is on storeManager.js
    alert();
    clearInputs();
}

function alert(){
    $(`#alert`).slideDown(500).delay(2000).slideUp(500);
}

function clearInputs(){
    $(`#inputUsername`).val(``);
    $(`#inputFirstName`).val(``);
    $(`#inputLastName`).val(``);
    $(`#inputEmail`).val(``);
    $(`#inputPassword`).val(``);
    $(`#inputDOB`).val(``);
    $(`#inputAddress`).val(``);
    $(`#txtColor`).val(`#000000`);
}

class User{
    constructor(username,firstName,lastName,email,password,dob,address,payment,color){
        this.username=username;
        this.firstName=firstName;
        this.lastName=lastName;
        this.email=email;
        this.password=password;
        this.dob=dob;
        this.address=address;
        this.payment=payment;
        this.color=color;
    }
}

function init(){
    console.log(`init function`);
    $(`#alert`).hide();
    $(`#btnSave`).click(registerUser);
}
window.onload=init;