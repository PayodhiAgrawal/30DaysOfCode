let p={
fisrtName:"Sant",
lastName:"Kalidas",
address: {
    city: "Ujjain",
    state: "Madhya Pradesh"
},
age: 50,
traits: ["Writer","Scholar"]
};
console.log(p);
p.age=51;
console.log(p.age);
console.log(p.address.city);
console.log(p.traits[0]);
console.log(Object.keys(p));
console.log(Object.values(p));
console.log(p.hasOwnProperty("lastName"));
console.log(p.hasOwnProperty("DOB"));
