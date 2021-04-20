/*const saludos = prompt('Hola Mundo');


Opcion1: JavaScript/////////////////////////////////////////////////

const imagen1 = document.getElementById('img1')
const imagen2 = document.getElementById('img2')
const imagen3 = document.getElementById('img3')
const imagen4 = document.getElementById('img4')
const imagen5 = document.getElementById('img5')
const imagen6 = document.getElementById('img6')
const imagen7 = document.getElementById('img7')
const imagen8 = document.getElementById('img8')
const imagen9 = document.getElementById('img9')


function ocultar(){
    imagen1.style.display = "none";
}

function ocultar2(){
    imagen2.style.display = "none";
}

function ocultar3(){
    imagen3.style.display = "none";
}

function ocultar4(){
    imagen4.style.display = "none";
}

function ocultar5(){
    imagen5.style.display = "none";
}

function ocultar6(){
    imagen6.style.display = "none";
}

function ocultar7(){
    imagen7.style.display = "none";
}

function ocultar8(){
    imagen8.style.display = "none";
}

function ocultar9(){
    imagen9.style.display = "none";
}

function mostrar(){
    imagen1.style.display = "inline";
    imagen2.style.display = "inline";
    imagen3.style.display = "inline";
    imagen4.style.display = "inline";
    imagen5.style.display = "inline";
    imagen6.style.display = "inline";
    imagen7.style.display = "inline";
    imagen8.style.display = "inline";
    imagen9.style.display = "inline";
}
*/


//Opcion 2: Jquery//////////////////////////////////////

$(document).ready(function(){
    
/*  const imagen1 = $('#img1');
    const imagen2 = $('#img2');
    const imagen3 = $('#img3');
    const imagen4 = $('#img4');
    const imagen5 = $('#img5');
    const imagen6 = $('#img6');
    const imagen7 = $('#img7');
    const imagen8 = $('#img8');
    const imagen9 = $('#img9');
    const boton = $('#boton');

    $('#img1').click(function(){
        imagen1.addClass('d-none')      
    })

    $('#img2').click(function(){
        imagen2.addClass('d-none')     
    })

    $('#img3').click(function(){
        imagen3.addClass('d-none')
    })

    $('#img4').click(function(){
        imagen4.addClass('d-none')     
    })

    $('#img5').click(function(){
        imagen5.addClass('d-none') 
    })

    $('#img6').click(function(){
        imagen6.addClass('d-none')      
    })

    $('#img7').click(function(){
        imagen7.addClass('d-none')       
    })

    $('#img8').click(function(){
        imagen8.addClass('d-none')       
    })

    $('#img9').click(function(){
        imagen9.addClass('d-none')       
    })

    boton.click(function(){
        imagen1.removeClass('d-none')
        imagen2.removeClass('d-none')
        imagen3.removeClass('d-none')
        imagen4.remo
        veClass('d-none')
        imagen5.removeClass('d-none')
        imagen6.removeClass('d-none')
        imagen7.removeClass('d-none')
        imagen8.removeClass('d-none')
        imagen9.removeClass('d-none')
    })
*/   

//Opcion 3: Jquery//////////////////////////////////////
/*
    $('#img1').click(function(){
        $(this).addClass('d-none')       
    })

    $('#img2').click(function(){
        $(this).addClass('d-none')      
    })

    $('#img3').click(function(){
        $(this).addClass('d-none')       
    })

    $('#img4').click(function(){
        $(this).addClass('d-none')       
    })

    $('#img5').click(function(){
        $(this).addClass('d-none')       
    })

    $('#img6').click(function(){
        $(this).addClass('d-none')       
    })

    $('#img7').click(function(){
        $(this).addClass('d-none')       
    })

    $('#img8').click(function(){
        $(this).addClass('d-none')       
    })

    $('#img9').click(function(){
        $(this).addClass('d-none')       
    })
*/

    $('img').click(function(){
        $(this).addClass('d-none')
    })
    
    $('#boton').click(function(){
        $('img').removeClass('d-none')
    })

    $('#boton2').click(function(){
        $('img').toggleClass('d-none')
    })
})
