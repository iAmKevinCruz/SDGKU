let band="Metallica",
    song=`Enter Sandman`,
    text;

text=band + " : " + song;
text=text.concat(`,`," it's great!")
console.log(text);
console.log(text.length);
console.log(text.toLowerCase());
console.log(text.toUpperCase());

let activities=`I am learning JavaScript`;
text=activities.split(` `);
console.log(text);
let hobbies=`play videogames, read in the morning, watch tv`;
text=hobbies.split(`,`);
console.log(text);

let email=`kev@gmail.com`;
text=email.includes(`@sdgku.edu`);
console.log(text);