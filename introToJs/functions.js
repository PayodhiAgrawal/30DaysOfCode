function subtract(p,q)
{
    return p-q;
}
console.log(subtract(10,5));

function getUserCredentials(firstName,lastName,email)
{
return `${firstName} ${lastName} | ${email}`;
}
console.log(getUserCredentials("Ratan","Tata","tatacorp@hotmail.com"));
const products=[
    {quantity:1,price:10},
    {quantity:3,price:5},
    {quantity:2,price:20}
];
function priceTotal(products)
{
    let total=0;
    for(const product of products) total+=product.price*product.quantity;
    return total;
}
console.log("Total is "+priceTotal(products));
