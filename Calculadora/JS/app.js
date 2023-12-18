function operaciones(){
   
    let operaciones = document.getElementById('operacion').value;
    const numero1 = parseInt (document.getElementById('nro1').value);
    const numero2 = parseInt (document.getElementById('nro2').value);

    if (operaciones === 'suma'){
        resultado = numero1 + numero2
        console.log( resultado);
         
    }
    
    else if (operaciones === 'resta'){
        resultado = numero1 - numero2
        console.log( resultado);
    }
   
    else if (operaciones === 'multi'){
        resultado = numero1 * numero2
        console.log( resultado);
    }
   
    else if (operaciones === 'divi'){
        resultado = numero1 / numero2
        console.log( resultado);
    }
   
    document.getElementById('resultado').innerText = resultado;
    document.getElementById('reset').reset;
}

