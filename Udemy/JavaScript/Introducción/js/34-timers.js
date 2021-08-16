'use strict'

/* 
window.addEventListener('load',()=>{

}); 
*/

window.onload = ()=> {
    var tiempo = intervalo();

    function intervalo(){
        var encabezado = document.querySelector('h1');
        var tiempo = setInterval(()=>{
            console.log('Set interval ejecutado');
            encabezado.style.fontSize == '50px' ? encabezado.style.fontSize = '30px' : encabezado.style.fontSize = '50px';
        }, 1000);
        return tiempo;
    }

    // Timers
    //Solo se va a ejecutar 1 vez, después de que transcurra el tiempo definido
    var tiempo2 = setTimeout(()=>{
        console.log('Set timeout ejecutado');
    }, 2000);

    const stop = document.querySelector('#stop');
    stop.addEventListener('click',()=>{
        alert('Has parado el intervalo en bucle');
        clearInterval(tiempo);
    });

    const start = document.querySelector('#start');
    start.addEventListener('click',()=>{
        alert('Has iniciado el intervalo en bucle');
        intervalo();
    });
};