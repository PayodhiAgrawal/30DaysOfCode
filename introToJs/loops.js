//if, else if, else
let x=9;
if(x==90 && true==true)
{
    console.log("if");
}
else if(false)
{
    console.log("else if");
}
else
{
    console.log("else");
}

//switch case
let s='P';
switch(s){
    case 'A':
        console.log("okay");
        break;
    case 'B':
        console.log("fine");
        break;
    default:
        console.log("done");
}

//for loop
const cartItems=[
    { quantity: 1, price: 10 },
    { quantity: 3, price: 5 },
    { quantity: 2, price: 20 }
];
let total=0;
/*for(let i=0;i<cartItems.length;i++){            
total+=cartItems[i].price*cartItems[i].quantity;
}*/
for(const cartItem of cartItems) total+=cartItem.quantity*cartItem.price;  //another way of writing for loop
console.log(total);

//do while loop
let totalUpdates=10;
do{
    totalUpdates++;
    console.log(totalUpdates);
}while(totalUpdates<10);
console.log("No longer tracking the user");