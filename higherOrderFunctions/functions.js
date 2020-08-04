const ages=[37,78,67,33,10,30,46,5,22,40];
const combined=ages
.map(age => age*2)
.filter(age => age>=40)
.sort((a,b) => a-b)
.reduce((a,b) => a+b,0);

console.log(combined);
