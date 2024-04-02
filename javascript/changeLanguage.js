function funMouseOver(es, array) {
    for (let i = 0; i < array.length; i++) {
        array[i].onmouseover = function() {
            array[i].textContent = es[i];
        };
    }
}

function funMouseOut(en, array) {
    for (let y = 0; y <array.length; y++) {
        array[y].onmouseout = function() {
            array[y].textContent = en[y];
        };    
    }
}

// Navigation menu links
const navSpanish = ["Inicio","Mis Servicios","Sobre mí","Clientes","Contacto"];
const navEnglish = ["Home","My Services","About me","Customers","Contact"];
const navItems = document.querySelectorAll("nav a");


funMouseOver(navSpanish, navItems);
funMouseOut(navEnglish, navItems);

// All h2 tags

const h2Spanish = ["Desarrollo Web, Móvil e IA","Mis Servicios","Sobre mí","Clientes","Contacto"];
const h2English = ["Web, Mobile and AI development","My Services","About me","Customers","Contact"];
const allH2 = document.querySelectorAll("h2");

funMouseOver(h2Spanish, allH2);
funMouseOut(h2English, allH2);

// All h3

const h3Spanish = ["Desarrollo Web","Aplicaciones móviles","IA"];
const h3English = ["Web development","Mobil applications","AI"];
const allSeviceH3 = document.querySelectorAll(".service h3");

funMouseOver(h3Spanish, allSeviceH3);
funMouseOut(h3English, allSeviceH3);

// //All p inside service

const pSpanish = ["Desarrollo de aplicaciones web o sitios web utilizando diferentes tecnologías: HTML, CSS, Javascript, React, Python,...","Construcción de aplicaciones móviles con React Native Framework, para sistemas operativos Android e iOS.","En el proceso de aprendizaje, se utilizan lenguajes de programación Javascript y especialmente Python."];

const pEnglish = ["Development of web applications or websites using different technologies: HTML, CSS, Javascript, React, Python, ...","Construction of mobile applications with the React Native Framework, for Android and iOS operating systems.","In the process of learning, using Javascript programming languages and especially Python."];

const allSeviceP = document.querySelectorAll(".service p");

funMouseOver(pSpanish, allSeviceP);
funMouseOut(pEnglish, allSeviceP);

// p

const sectionPSpanish = ["Desarrollo de aplicaciones web o sitios web utilizando diferentes tecnologías: HTML, CSS, Javascript, React, Python,...","Construcción de aplicaciones móviles con React Native Framework, para sistemas operativos Android e iOS.","En el proceso de aprendizaje, utilizando lenguajes de programación Javascript y especialmente Python.","Soy programador informático y amante de buscar nuevas ideas que puedan aportar a la sociedad.","Los lenguajes de programación que he visto han sido Java, PHP, Javascript y Python. Aunque ahora estoy más centrado en el desarrollo web y móvil, la idea es seguir creciendo y aplicar todo mi potencial a la IA.","Haciendo un resumen rápido: Me gusta programar y hacer realidad todo lo que pienso.","Nota: Estos clientes no son reales, es para dar una visión más realista del sitio web."];

const sectionPEnglish = ["Development of web applications or websites using different technologies: HTML, CSS, Javascript, React, Python, ...","Construction of mobile applications with the React Native Framework, for Android and iOS operating systems.","In the process of learning, using Javascript programming languages and especially Python","I am a computer programmer and a lover of looking for new ideas that can contribute to society.","The programming languages I have seen have been Java, PHP, Javascript and Python. Although now I am more focused on web and mobile development, the idea is to continue growing and apply my full potential to AI.","Making a quick summary: I like to program and make everything I think come true.","Note: These clients are not real, it is to give a more realistic view of the website."];

const allSectionP = document.querySelectorAll("section p.p-transl");

funMouseOver(sectionPSpanish, allSectionP);
funMouseOut(sectionPEnglish, allSectionP);

// legend

const legendSpanish = ["RELLENA EL FORMULARIO PARA CONTACTAR"];
const legendEnglish = ["FILL IN THE FORM TO CONTACT ME"];
const myLegend = document.querySelector("legend");

myLegend.onmouseover = function() {
    myLegend.textContent = legendSpanish[0]
};

myLegend.onmouseout = function() {
    myLegend.textContent = legendEnglish[0]
};   

// Label

const labelSpanish = ["Nombre","Teléfono","Correo electrónico","Mensaje"];
const labelEnglish = ["Name","Phone.","Email","Message"];
const myLabel = document.querySelectorAll(".form-contact label");

funMouseOver(labelSpanish, myLabel);
funMouseOut(labelEnglish, myLabel);

// Placeholder

const placeholderSpanish = ["ej. Tú nombre","ej. Tú teléfono","ej. Tú correo electrónico","Escribe tu mensaje aquí..."];
const placeholderEnglish = ["e.g. Your name","e.g. 665500000.","e.g. email@gmail.com","Type here..."];

const myPlaceholder = document.querySelectorAll("[placeholder]");

for (let i = 0; i < myPlaceholder.length; i++) {
    myPlaceholder[i].onmouseover = function() {
        myPlaceholder[i].placeholder = placeholderSpanish[i]
    };
}

for (let y = 0; y < myPlaceholder.length; y++) {
    myPlaceholder[y].onmouseout = function() {
        myPlaceholder[y].placeholder = placeholderEnglish[y]
    };    
}