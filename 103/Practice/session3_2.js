let result;

result=Math.round(2.5);//3
result=Math.floor(2.99);//2
result=Math.ceil(2.01);//3
result=Math.min(2,10,500,3,65);//2
result=Math.max(2,10,500,3,65);//500
console.log(result);

let data;
data=Number(`20`);
data=Number(`-20.20`);
data=Number(true);
data=Number(null);
data=Number(`Hello`);
console.log(data);

let num1=50,
    num2=`10`,
    num3="three",
    num4=`20.20`;

data=Number(num1);
data=Number(num2);
data=Number(num4);
data=Number(num3);
console.log(data);

let data2=5670926584098712;
data2=String(data2);
console.log(data2.length);