// Universal Variable


function register(){
    let email = $(`#emailInput`).val();
        password = $(`#passwordInput`).val();
        firstName = $(`#firstNameInput`).val();
        lastName = $(`#lastNameInput`).val();
        age = $(`#ageInput`).val();
        address = $(`#addressInput`).val();
        phone = $(`#phoneInput`).val();
        payment = $(`input:radio[name=payment]:checked`).val();
        color = $(`#colorInput`).val();

    newUser = new User(email,password,firstName,lastName,age,address,phone,payment,color);
    console.log(newUser);
    saveUser(newUser);
    clearInputs();
    // location.reload();
}

function clearInputs(){
    $(`#emailInput`).val(``);
    $(`#passwordInput`).val(``);
    $(`#firstNameInput`).val(``);
    $(`#lastNameInput`).val(``);
    $(`#ageInput`).val(``);
    $(`#addressInput`).val(``);
    $(`#phoneInput`).val(``);
    $(`#colorInput`).val(`#000000`);
}

class User{
    constructor(email,password,firstName,lastName,age,address,phone,payment,color){
        this.email=email;
        this.password=password;
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
        this.address=address;
        this.phone=phone;
        this.payment=payment;
        this.color=color;
    }
}

function init(){
    $(`#submitBtn`).on(`click`,register);
}

window.onload=init;