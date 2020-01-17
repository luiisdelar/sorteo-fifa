window.onload=function(){
	iniciar();
}

function iniciar(){
    $('.titulo').append(
        $('<h1>',{
            'text': 'Número de parciales:',
            'data-aos': 'fade-left'
        }));
}