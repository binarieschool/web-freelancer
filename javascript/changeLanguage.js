// Navigation menu links
const navSpanish = ["Inicio","Mis Servicios","Sobre mí","Clientes","Contacto"];
const navEnglish = ["Home","My Services","About me","Customers","Contact"];

const navItems = document.querySelectorAll("nav a");

for (let i = 0; i < navItems.length; i++) {
    navItems[i].onmouseover = function() {
        navItems[i].textContent = navSpanish[i]
    };
}

for (let y = 0; y <navItems.length; y++) {
    navItems[y].onmouseout = function() {
        navItems[y].textContent = navEnglish[y]
    };    
}

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

// All h3 inside serviceconst allH2 = document.querySelectorAll("h2");
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
const pSpanish = ["Desarrollo de aplicaciones web o sitios web utilizando diferentes tecnologías: HTML, CSS, Javascript, React, Python,...","Construcción de aplicaciones móviles con React Native Framework, para sistemas operativos Android e iOS.","En el proceso de aprendizaje, se utilizan lenguajes de programación Javascript y especialmente Python."];
const pEnglish = ["Development of web applications or websites using different technologies: HTML, CSS, Javascript, React, Python, ...","Construction of mobile applications with the React Native Framework, for Android and iOS operating systems.","In the process of learning, using Javascript programming languages and especially Python."];

const allSeviceP = document.querySelectorAll(".service p");

for (let i = 0; i < allSeviceP.length; i++) {
    allSeviceP[i].onmouseover = function() {
        allSeviceP[i].textContent = pSpanish[i]
    };
}

for (let y = 0; y < allSeviceP.length; y++) {
    allSeviceP[y].onmouseout = function() {
        allSeviceP[y].textContent = pEnglish[y]
    };    
}

// 7 p

const sectionPSpanish = ["Desarrollo de aplicaciones web o sitios web utilizando diferentes tecnologías: HTML, CSS, Javascript, React, Python,...","Construcción de aplicaciones móviles con React Native Framework, para sistemas operativos Android e iOS.","En el proceso de aprendizaje, utilizando lenguajes de programación Javascript y especialmente Python.","Soy programador informático y amante de buscar nuevas ideas que puedan aportar a la sociedad.","Los lenguajes de programación que he visto han sido Java, PHP, Javascript y Python. Aunque ahora estoy más centrado en el desarrollo web y móvil, la idea es seguir creciendo y aplicar todo mi potencial a la IA.","Haciendo un resumen rápido: Me gusta programar y hacer realidad todo lo que pienso.","Nota: Estos clientes no son reales, es para dar una visión más realista del sitio web."];

const sectionPEnglish = ["Development of web applications or websites using different technologies: HTML, CSS, Javascript, React, Python, ...","Construction of mobile applications with the React Native Framework, for Android and iOS operating systems.","In the process of learning, using Javascript programming languages and especially Python","I am a computer programmer and a lover of looking for new ideas that can contribute to society.","The programming languages I have seen have been Java, PHP, Javascript and Python. Although now I am more focused on web and mobile development, the idea is to continue growing and apply my full potential to AI.","Making a quick summary: I like to program and make everything I think come true.","Note: These clients are not real, it is to give a more realistic view of the website."];

const allSectionP = document.querySelectorAll("section p.p-transl");

for (let i = 0; i < allSectionP.length; i++) {
    allSectionP[i].onmouseover = function() {
        allSectionP[i].textContent = sectionPSpanish[i]
        console.log(allSectionP[i]);
    };
}

for (let y = 0; y < allSectionP.length; y++) {
    allSectionP[y].onmouseout = function() {
        allSectionP[y].textContent = sectionPEnglish[y]
    };    
}