const  displayValorAnt = document.getElementById('valor-ant');
const  displayValorAct = document.getElementById('valor-act');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador')
const display = new Display(displayValorAct,displayValorAnt);

botonesNumeros.forEach(boton =>{
    boton.addEventListener('click', ()=> display.agregarNumero(boton.innerHTML));});

botonesOperadores.forEach(boton =>{
    boton.addEventListener('click', ()=> display.computar(boton.value));});