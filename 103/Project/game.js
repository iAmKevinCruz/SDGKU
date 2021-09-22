var energy=80;

function feed(){
    energy=energy+10;
    console.log(energy);
    display();
}
function play(){
    energy=energy-10;
    display();
}
function display(){
    document.getElementById("info").innerHTML=`
    <p><b>Energy:</b> ${energy}</p>
    `
}
display()