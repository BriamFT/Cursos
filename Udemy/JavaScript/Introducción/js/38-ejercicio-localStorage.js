'use-strict'

const form = document.querySelector("form");

form.addEventListener('submit', function(e){
    e.preventDefault();
    const title = e.target[0].value;
    
    title==""? alert("Ingresa un valor") : localStorage.setItem(title,title);
});

for (const index in localStorage){
    console.log(localStorage[index]);
}
