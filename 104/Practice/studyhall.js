var clientele=[
    client={
        userName:`Kevin`,
        number:`000-000-0000`,
        email:`kev@gmail.com`,
        id:001
    },
    client1={
        userName:`Alex`,
        number:`000-000-0001`,
        email:`alex@gmail.com`,
        id:002
    },
    client2={
        userName:`Mike`,
        number:`000-000-0002`,
        email:`mike@gmail.com`,
        id:003
    },
    client3={
        userName:`Josh`,
        number:`000-000-0003`,
        email:`josh@gmail.com`,
        id:004
    }
]
console.log(client1.userName)
console.log(clientele.length)

for(var i=0;i<clientele.length;i++){
    console.log(clientele[i].userName)
    document.getElementById(`list`).innerHTML+=`
    <li>${clientele[i].userName}</li>
    `
}

//forEach lets you use 
clientele.forEach(client => {
    document.getElementById(`list`).innerHTML+=`
    <li>${client.id}</li>
    `
});