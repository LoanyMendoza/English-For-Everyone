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


$('.menuicon').click(function(e) {
    e.preventDefault();
    if($('navprincipal').hasClass('viewMenu'))
    {
        $('navprincipal').removeClass('viewMenu');
    }else{
        $('navprincipal').addClass('viewMenu');
    }
});


