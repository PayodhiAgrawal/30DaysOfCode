//Promises
const userData=new Promise((resolve,reject)=>{

    const error=false;
    if(error)
    {
        reject("500 Level Error");
    }
    else
    {
        resolve({
            name:"Bhagat Singh",
            age:28,
            designation:"Freedom Fighter"
        });
    }
});
userData
.then((data)=>console.log(data))
.catch((error)=>console.log(error));

const buyFlightTicket = () => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            const error = true;
            
            if( error ) {
                reject("Sorry your payment was not successful")
            } else {
                resolve("Thank you, your payment was successful");
            }
        }, 3000)
    })
}
buyFlightTicket()
.then( (success) => console.log(success))
.catch( (error) => console.log(error) );

//async and await
const photos = [];

async function photoUpload() {
    let uploadStatus = new Promise( (resolve, reject) => {
        setTimeout( () => {
            photos.push("Profile Pic");
            resolve("Photo Uploaded")
        }, 3000)
    })
    
    let result =await uploadStatus;
    
    console.log(result);
    console.log(photos.length);
}
photoUpload();

//sets in ES6
const egSet=new Set([1,1,1,3,3,3,3]);
egSet.add(9);
egSet.add(9).add(18);
console.log(egSet.delete(3));
console.log(egSet.has(3));
console.log(egSet);
egSet.clear();
console.log(egSet.size);

