
// var title=document.getElementById(`title`);
// title.style.display=`none`;

// $(`.menu`).hide();
// $(`#title`).show();

var h2=document.createElement(`h2`);
var text=document.createTextNode(`Title 2`);
h2.appendChild(text);
document.body.appendChild(h2);
console.log(h2)

$(`h3`).text(`Title h3`);
$(`.example`).html(`<h5>Example h5</h5>`);