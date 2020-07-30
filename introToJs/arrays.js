let k=[1,2,5,"Good"];
console.log(k,typeof k);
console.log(k[3]);
console.log(k[5]);
k.push(6,9,11);
console.log(k);
k.pop();
console.log(k);
k.forEach((i)=>
{
console.log(i);
});

const products=["toilet paper","bottled water","sanitizer"];
console.log(products);
products[0]="paper towels";
console.log(products);
products.pop();
console.log(products);
products.push("Bleach");
console.log(products);
