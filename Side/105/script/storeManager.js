let KEY_USERS=localStorage.getItem(`users`);
function readUsers(){
    let data=localStorage.getItem(`users`);
    if(!KEY_USERS){
        return [];
    }else{
        let list=JSON.parse(data);
        return list;
    }
    console.log(list);
    console.log(list.length);
}

function saveUser(newUser){
    //retrieve local storage Users info
    let data=readUsers();
    //merge with new user
    data.push(newUser);
    console.log(data);
    //push back into local storage
    let val=JSON.stringify(data);
    localStorage.setItem(`users`,val);
}

function clearLocal(){
    localStorage.clear();
}