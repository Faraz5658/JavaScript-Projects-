let text = document.querySelector("#text");
let counter = document.querySelector(".counter");
text.addEventListener("input" , ()=>{
    counter.textContent = text.value.length;
})