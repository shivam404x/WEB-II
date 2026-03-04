const button = document.getElementById("roastBtn");
const result = document.getElementById("result");
const nameInput = document.getElementById("name");
const copyBtn = document.getElementById("copyBtn");

const roasts = [
"{name}, tumhare jokes itne slow hain ki Internet Explorer bhi fast lage.",
"{name}, tumhara brain airplane mode me chal raha hai kya?",
"{name}, agar stupidity Olympic sport hoti to tum gold medal laate.",
"{name}, tum Google ho kya? Kyunki tum sabko confuse kar dete ho.",
"{name}, tumhari logic dekh ke calculator bhi resign kar de."
];

button.addEventListener("click", generateRoast);

function generateRoast(){

const name = nameInput.value || "Bro";

const random = Math.floor(Math.random() * roasts.length);

const roast = roasts[random].replace("{name}", name);

typeText(roast);

}

function typeText(text){

result.innerHTML = "";

let i = 0;

const interval = setInterval(()=>{

result.innerHTML += text.charAt(i);

i++;

if(i >= text.length){
clearInterval(interval);
}

},40);

}

copyBtn.addEventListener("click", ()=>{

navigator.clipboard.writeText(result.innerText);

alert("Roast copied 😈");

});

