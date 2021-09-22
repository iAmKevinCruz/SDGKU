function displayUsers(){
    let users=readUsers();
    let table=$(`#tblUsers`);

    for(i=0;i<users.length;i++){
        let user=users[i];
        let syntax=`
            <tr>
                <td>${user.email}</td>
                <td>${user.firstName}</td>
                <td>${user.lastName}</td>
                <td>${user.age}</td>
                <td>${user.address}</td>
                <td>${user.phone}</td>
                <td>${user.payment}</td>
                <td>${user.color}</td>
            </tr>
        `;
        table.append(syntax);
    }

    
}

function deleteBtn(){
    $(`#dltBtn`).click(clearLocal());
    location.reload();
}






console.log(readUsers())

function init(){
    $(`#dltBtn`).click(function(){
        clearLocal();
        location.reload();
    });
    displayUsers();
}

window.onload=init;