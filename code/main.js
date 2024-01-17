/* Optional typewriter

let app = document.getElementById('typewriter');

let typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
});

typewriter
.pauseFor(2500)
.typeString('Welcome to my web portfolio, we are glad to have you here')
.pauseFor(200)
.deleteChars(10)
.start();
*/


// Es una locaaaa (baile setsi)
// https://www.tiktok.com/@karkarchezito/video/7137660725006241029?lang=es

// $('.menuicon').click(function(e) {
//     e.preventDefault();
//     if($('navprincipal').hasClass('viewMenu'))
//     {
//         $('navprincipal').removeClass('viewMenu');
//     }else{
//         $('navprincipal').addClass('viewMenu');
//     }
// });


const icono = document.querySelector(".icono"); // Primero seleccionamos el elemento del icono
// asignamos un evento de click al icono
icono.addEventListener("click", function(evento){
    evento.preventDefault(); // eliminamos el evento por default
    // comprobamos si tiene 1 clase únicamente
    // en caso de que sea solo 1 significa que el menú no está desplegado
    
    if(icono.classList.length == 1){ 
        //Como no está desplegado generamos código HTML
        mostrarMenu();
        icono.classList.add("viewMenu");
    }else{
        borrarMenu();
        icono.classList.remove("viewMenu");
    }
});

function borrarMenu(){
    const header = document.querySelector(".header");
    const menu = document.querySelector(".navprincipal");
    header.removeChild(menu);
}

function mostrarMenu(){
    const header = document.querySelector('.header');
    const menu = document.createElement('NAV'); // Creamos el nav principal
    const elemento1 = document.createElement('A'); // creamos los elementos del nav
    const elemento2 = document.createElement('A'); // creamos los elementos del nav
    const elemento3 = document.createElement('A'); // creamos los elementos del nav
    const elemento4 = document.createElement('A'); // creamos los elementos del nav
    
    //agregamos clases a cada elemento
    menu.classList.add("navprincipal")
    elemento1.classList.add("navprincipal__elemento");
    elemento1.classList.add("pagina-actual");
    elemento2.classList.add("navprincipal__elemento");
    elemento3.classList.add("navprincipal__elemento");
    elemento4.classList.add("navprincipal__elemento");

    // agregamos href a cada elemento
    elemento1.href = 'index.html';
    elemento2.href = 'facts.html';
    elemento3.href = 'content.html';
    elemento4.href = 'activities.html';

    // Agregamos el contenido a cada elemento
    elemento1.textContent = "Inicio";
    elemento2.textContent = "Beneficios";
    elemento3.textContent = "Contenidos";
    elemento4.textContent = "Actividades";

    // agregamos el elemento NAV a html en el header
    header.appendChild(menu);
    menu.appendChild(elemento1);
    menu.appendChild(elemento2);
    menu.appendChild(elemento3);
    menu.appendChild(elemento4);

}
