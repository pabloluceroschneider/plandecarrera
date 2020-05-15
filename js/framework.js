let m = document.querySelector(".materia");

let l = document.querySelector(".nivel");


for (let index = 0; index < 8; index++) {
    l.appendChild(m.cloneNode(m))    
}

let c = document.querySelector(".cont");

for (let index = 1; index < 5; index++) {
    let x = l.cloneNode(l);
    x.id = "Nivel "+(index+1)
    c.appendChild(x)    
}