class Display{
    constructor(displayValorAnt, displayValorAct){
        this.displayValorAct = displayValorAct;
        this.displayValorAnt = displayValorAnt;
        this.calculador = new Calculadora();
        this.tipoOperacion = undefined;
        this.valorAct = '';
        this.valorAnt = '';
        this.signos = {
            sumar:'+',
            restar:'-',
            multiplicar:'*',
            dividir:'/',
        }
    }

    borrar(){
        this.valorAnt = this.valorAnt.toString().slice(0,-1);
        this.imprimirValores();
    }

    borrarTodo(){
        this.valorAct = '';
        this.valorAnt = '';
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }

    computar(tipo){
        this.tipoOperacion !== 'igual' && this.calcular();
        this.tipoOperacion = tipo;
        this.valorAct = this.valorAnt || this.valorAct;
        this.valorAnt = '';
        this.imprimirValores();
    }

    agregarNumero(numero){
        if(numero === '.' && this.valorAnt.includes('.'))return
        this.valorAnt = this.valorAnt.toString() + numero.toString();
        this.imprimirValores();
    }
    imprimirValores() {
        this.displayValorAnt.textContent = this.valorAnt;
        this.displayValorAct.textContent = `${this.valorAct} ${this.signos[this.tipoOperacion] || ''}`;
    }
    calcular(){
        const valorAnt = parseFloat(this.valorAnt); 
        const valorAct = parseFloat(this.valorAct); 

        if(isNaN(valorAct) || isNaN(valorAnt))return;
        this.valorAnt = this.calculador[this.tipoOperacion](valorAnt, valorAct);
    }
}