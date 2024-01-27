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

/*
$('.menuicon').click(function(e) {
    e.preventDefault();
    if($('navprincipal').hasClass('viewMenu'))
    {
        $('navprincipal').removeClass('viewMenu');
    }else{
        $('navprincipal').addClass('viewMenu');
    }
});
*/

const icono = document.querySelector(".icono"); // Primero seleccionamos el elemento del icono
// asignamos un evento de click al icono
icono.addEventListener("click", function(evento){
    evento.preventDefault(); // eliminamos el evento por default
    // comprobamos si tiene 1 clase únicamente
    // en caso de que sea solo 1 significa que el menú no está desplegado
    const nav = document.querySelector(".navprincipal");
    if(nav.classList.length == 2){ 

        nav.classList.remove("viewMenu");
    }else{
        nav.classList.add("viewMenu");
    }
});