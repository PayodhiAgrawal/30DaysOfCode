const heading=document.getElementById("heading");
heading.style.color="white";
heading.style.backgroundColor="black";
console.log(heading,typeof heading);
const l=document.getElementById("list");
console.log(list.textContent);  //returns content
console.log(list.innerHTML);    //returns content with html format
const y=document.querySelector("ul"); //accessing by tag
console.log(y);
const z=document.querySelector("#product");  //accessing by id
console.log(z);
const x=document.querySelector(".skills");   //accessing by class
console.log(x);
const a=document.querySelectorAll("li");  //getting the indexes of all the elements in the list
console.log(a);
//a[0].style.color="orange";
a[0].style.cssText="background-color:black;font-size:22px;color:Orange";
for(let i=1;i<a.length;i++)
{
    a[i].style.backgroundColor="lightblue";
}
const m=document.getElementById("fun");
m.className="changeBGColor";
//m.className="changeFont";
m.className += " changeFont";
console.log(m.classList);
m.classList.add("changeC");
m.classList.remove("changeC");

const hover=document.getElementById("more");
const btn=document.getElementById("btn");
btn.onclick=()=>{
    console.log("Clicked");
}
btn.onmouseover=()=>{
    hover.style.cssText="background-color:blue;color:white";
}
btn.onmouseout=()=>{
    hover.style.cssText="background-color:transparent;color:black";
}

//Attributes
const p=document.querySelector(".para");
console.log(p.getAttribute("id"));
console.log(p.getAttribute("class"));
console.log(p.getAttribute("title"));
p.setAttribute("style","background-color:skyblue");
p.removeAttribute("style");
console.log(p.hasAttribute("style"));
console.log(p.hasAttribute("id"));

//Accessing the parent and children
const yes=document.getElementById("ski");
console.log(yes.parentElement);
console.log(yes.parentNode.parentNode);
console.log(yes.previousSibling);
console.log(yes.nextSibling);
console.log(yes.previousElementSibling);
console.log(yes.nextElementSibling);
console.log(x.children);
console.log(x.firstElementChild);

//Inserting new element in the list
const newElement=document.createElement("li");
const text=document.createTextNode("Python");
newElement.appendChild(text);
x.appendChild(newElement);
x.insertBefore(newElement,x.children[1]);
