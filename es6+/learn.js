//object destructor
const player={
    name:"PV Sindhu",
    sport:"Badminton",
    address:{
        city:"Banglore"
    }
};
console.log(player.name,player.address.city);
const {name,sport,address:{city}}=player;
console.log(`${name} who plays ${sport} lives in ${city}`);

//array destructor
let [firstName,middleName,lastName]=["Mahendra","Singh","Dhoni"];
console.log(middleName);
firstName="Amrendra";
console.log(firstName);

//object literal
function addressMaker(city,state)
{
    const newAddress={city,state};
    console.log(newAddress);
}
addressMaker("Ujjain","Madhya Pradesh");

//For of loop
let a="Sita Ram";
for(const char of a)
{
    console.log(char);
}

//spread operator and includes() function
let items=["Hairbrush","Toothpaste","Towel"];
let personalItems=["Comb",...items,"Mirror"];
items.push("Napkin");
console.log(items);
console.log(items.includes("Towel"));
console.log(personalItems);

let game={
    ...player,
    medals:"Gold, Silver"
};
console.log(game);

//rest operator
function add(num){
    console.log(arguments);
}
add(2,5,9,12);
function add1(...num){
    console.log(num);
}
add1(1,4,7,9);

//arrow functions & default parameters
const menu=(food,mealTime,verb="eat")=>{
    return `I'm going to ${verb} ${food} in ${mealTime}`;
}
console.log(menu("Dal Bati","lunch"));

//parStart and padEnd functions
let voice="Lata Mangeshkar";
console.log(voice.padStart(20,'@'));
console.log(voice.padEnd(30,'r'));

//trailing commas
function addition(a1,){
    const ex={
    itemName:"TV",
    };
    console.log(ex);
}
addition(9);

//mutate an array declared with const
const s = [5, 7, 2];
function editInPlace() {
  "use strict";

  //s = [2, 5, 7];
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;

}
editInPlace();
console.log(s);

//Prevent object mutation
function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    
    Object.freeze(MATH_CONSTANTS);
  
    try {
      MATH_CONSTANTS.PI = 99;
    } catch( ex ) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  
  const PI = freezeObj();
  console.log(PI);

//Higher Order Arrow Functions
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
  const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
  return squaredIntegers;
};
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

const LOCAL_FORECAST = {
    today: { min: 72, max: 83 },
    tomorrow: { min: 73.3, max: 84.6 }
  };
  
  function getMaxOfTmrw(forecast) {
    "use strict";
  
    const { tomorrow : { max : maxOfTomorrow }} = forecast; 
  
    return maxOfTomorrow;
  }
  console.log(getMaxOfTmrw(LOCAL_FORECAST)); 

const [z, x, , y] = [1, 2, 3, 4, 5, 6];
console.log(z, x, y);

let k = 8, p = 6;
(() => {
  "use strict";
  [k, p] = [p, k]
})();
console.log(k); 
console.log(p);

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {

  const [ , , ...arr] = list; 

  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); 
console.log(source);

function makeClass() {
    class Vegetable {
      constructor(name){
        this.name = name;
      }
    }
    return Vegetable;
  }
  const Vegetable = makeClass();
  const carrot = new Vegetable('carrot');
  console.log(carrot.name); 