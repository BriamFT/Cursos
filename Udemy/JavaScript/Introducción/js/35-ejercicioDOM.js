'use strict'

window.onload = ()=>{
    console.log('DOM cargado');

    const form = document.querySelector('form');
    const box_dashed = document.querySelector('.dashed');

    box_dashed.style.display = 'none';

    form.addEventListener('submit',()=>{
        console.log('Evento submit');
        const inputs = document.querySelectorAll('form > input');

        const name = inputs[0].value.trim(),
            lastname = inputs[1].value.trim(),
            age = parseInt(inputs[2].value);
        
        const name_error = document.querySelector('#error_nombre'),
            lastname_error = document.querySelector('#error_apellidos'),
            age_error = document.querySelector('#error_edad');

        
        if(name == null || name.length == 0){
            alert('El nombre no es valido');
            name_error.style.display = 'block';
            name_error.innerHTML = "El nombre NO es valido";
            return false
        }else
            name_error.style.display = "none";
        
        if(lastname == null || lastname.length == 0){
            alert('Los apellidos no son validos');
            lastname_error.style.display = 'block';
            lastname_error.innerHTML = "Los apellidos NO son validos";
            return false;
        }else
            lastname_error.style.display = "none";
        
        
        if(age == null || age.length <= 0 || isNaN(age)){
            alert('La edad no es valida');
            age_error.style.display = 'block';
            age_error.innerHTML = "La edad NO es valida";
            return false;
        }else
            age_error.style.display = "none";


        box_dashed.style.display = 'block'
        console.log(inputs);
        for (const index of inputs) {
            let parrafo = document.createElement('p');
            parrafo.append(index.id +': '+ index.value);
            box_dashed.append(parrafo);
        }
    });
}