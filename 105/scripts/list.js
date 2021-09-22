function displayUsers(users){
    let table=localStorage.getItem(KEY_USERS);
    if(!table){
        $(`#noUserAlert`).show();
        clearBtn.hide();
    }else{
        $(`#fullTbl`).show();
        //travel the array
        for(i=0;i<users.length;i++){
            //get each user
            let user = users[i];
            //display the user
            let syntax =`
                <tr>
                    <th>${i+1}</th>
                    <td>${user.username}</td>
                    <td>${user.firstName}</td>
                    <td>${user.lastName}</td>
                    <td>${user.email}</td>
                    <td>${user.dob}</td>
                    <td>${user.address}</td>
                    <td>${user.payment}</td>
                    <td><input type="color" id="txtColor" value="${user.color}" disabled></td>
                </tr>
            `;
        //append the user to the DOM
        $(`#tblUsers`).append(syntax);
        }
        let numUsers=users.length;
        $(`#tblCaption`).append(`There currently are ${numUsers} registered users.`);
    }
    
}

function out(){
    this.fadeOut(500);
    this.slideUp(500);
}

function init(){
    console.log(`Listing users`);
    var table=$(`#fullTbl`);
        alert=$(`#noUserAlert`);
        clearBtn=$(`#btnClear`);
    table.hide();
    alert.hide();
    var users = readUsers();
    displayUsers(users);
    $(`#btnClear`).on(`click`,function(){
        clearUsers();
        table.fadeOut(500);
        alert.delay(500).fadeIn(500);
        clearBtn.fadeOut(500);
    });
}

window.onload=init;