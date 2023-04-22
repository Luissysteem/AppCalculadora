console.log('recibiendo valores')

function sumar(){
    const forma = document.getElementById('Formulario')
    let operandoA = forma['uno'];
    let operandoB  = forma['dos'];

    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);

    if(isNaN(resultado))
        resultado = 'Por favor ingresar, valores numericos'
        
    document.getElementById('mostrar').innerHTML = `El resultado es: ${resultado}`
}