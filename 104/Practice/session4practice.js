var inputs=document.getElementsByClassName(`mb-3`);
    link=document.querySelectorAll(`li a`);
console.log(link);
console.log(inputs);

function hideInputs(){
    for(i=0;i<link.length;i++){
        // link[i].style.display=`none`;
        link[i].setAttribute("class","bordered");
    }
    // link.style.display=`none`;
}