'use strict'

//Eventos

window.addEventListener('load',()=>{
    // Eventos del ratón
    function cambiarColor(){
        let color = boton.style.backgroundColor
        if(color == 'green')
            boton.style.backgroundColor = 'red';
        else
            boton.style.backgroundColor = 'green';
        boton.style.padding = '10px';
        boton.style.border = '1px solid #ccc';
    }
    var boton = document.querySelector("#boton");   

    // Click
    boton.addEventListener('click',function(){
        cambiarColor();
        boton.style.color = 'black';
        this.style.border = "10px solid black";
    });

    // Mouse over
    boton.addEventListener('mouseover',()=>{
        boton.style.background = '#ccc';
        this.style.color = 'black'; // Utilizar THIS para obtener la referencia del mismo objeto
    });

    // Mouse out 
    boton.addEventListener('mouseout',()=>{
        boton.style.background = 'black';
        boton.style.color = 'white';
    });

    // Focus
    var input = document.querySelector('#nombre');
    input.addEventListener('focus',()=>{
        console.log('Estas dentro del input [focus]');
    });
    // Blur
    input.addEventListener('blur',()=>{
        console.log('Estas fuera del input [blur]');
    });
    // Keydown 
    input.addEventListener('keydown',(e)=>{
        console.log('Pulsando esta tecla [keydown]: ',String.fromCharCode(e.keyCode));
    });
    // Keypress
    input.addEventListener('keypress',(e)=>{
        console.log('Tecla presionada [keypress]: ',String.fromCharCode(e.keyCode));
    });
    // Keyup
    input.addEventListener('keyup',(e)=>{
        console.log('Tecla soltada [keyup]: ',String.fromCharCode(e.keyCode));
    });
});

