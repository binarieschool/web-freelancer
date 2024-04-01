// All h2 tags
const h2Spanish = ["Desarrollo Web, Móvil e IA","Mis Servicios","Sobre mí","Clientes","Contacto"];
const h2English = ["Web, Mobile and AI development","My Services","About me","Customers","Contact"];

const allH2 = document.querySelectorAll("h2");

for (let i = 0; i < allH2.length; i++) {
    allH2[i].onmouseover = function() {
        allH2[i].textContent = h2Spanish[i]
    };
}

for (let y = 0; y < allH2.length; y++) {
    allH2[y].onmouseout = function() {
        allH2[y].textContent = h2English[y]
    };    
}

// All h3 inside service
const h3Spanish = ["Desarrollo Web","Aplicaciones móviles","IA"];
const h3English = ["Web development","Mobil applications","AI"];

const allSeviceH3 = document.querySelectorAll(".service h3");

console.log(allSeviceH3);

for (let i = 0; i < allSeviceH3.length; i++) {
    allSeviceH3[i].onmouseover = function() {
        allSeviceH3[i].textContent = h3Spanish[i]
    };
}

for (let y = 0; y < allSeviceH3.length; y++) {
    allSeviceH3[y].onmouseout = function() {
        allSeviceH3[y].textContent = h3English[y]
    };    
}

// //All p inside service
// const pSpanish = ["Desarrollo Web","Aplicaciones móviles","IA"];
// const pEnglish = ["Web development","Mobil applications","AI"];

// const allSeviceP = document.querySelectorAll(".service p");