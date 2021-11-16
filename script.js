let red=document.getElementById("red");
let green=document.getElementById("green");
let blue=document.getElementById("blue");

let small=document.getElementById("small");
let medium=document.getElementById("medium");
let large=document.getElementById("large");

let serif=document.getElementById("font1");
let sanSerif=document.getElementById("font2");
let monospace=document.getElementById("font3");


let para=document.querySelector("#paragraph");

red.addEventListener("click",()=>{para.style.color="red";});
green.addEventListener("click",()=>{para.style.color="green";});
blue.addEventListener("click",()=>{para.style.color="blue";});

small.addEventListener("click",()=>{para.style.fontSize="10px";});
medium.addEventListener("click",()=>{para.style.fontSize="20px";});
large.addEventListener("click",()=>{para.style.fontSize="30px";});

serif.addEventListener("click",()=>{para.style.fontFamily="serif"});
sanSerif.addEventListener("click",()=>{para.style.fontFamily="Arial, san-serif"});
monospace.addEventListener("click",()=>{para.style.fontFamily="monospace"});