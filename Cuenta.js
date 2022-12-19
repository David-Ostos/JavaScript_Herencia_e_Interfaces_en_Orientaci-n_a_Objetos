export class Cuenta{

    #cliente;
    #saldo;
   

    constructor(cliente,numero, agencia,saldo){
        if( this.constructor == Cuenta){// esto se llama metodo en clase "abstractas"
            throw new Error("No se debe instanciar objetos de la clase cuenta") // se utiliza "throw new Error" para decirle a js que no esta permitido el acceso
        }
        this.numero =numero;
        this.agencia = agencia;
        this.#cliente = cliente;
        this.#saldo = saldo;
    }


    set cliente(valor) {
        if (valor instanceof Cliente)
            this.#cliente = valor;
    }

    get cliente() {
        return this.#cliente;
    }


    depositoEnCuenta(valor) {
        if (valor > 0)
            this.#saldo += valor;
        return this.#saldo;
    }

    retirarDeCuenta(valor,comision) {
        // metodo abstracto
        throw new Error("se debe implementar el metodo en su clase corrspondiente")
    }
    _retirarDeCuenta(valor,comision) {
        valor = valor * (1+comision/100);
        if (valor <= this.#saldo) {
            this.#saldo -= valor;
        }
        return this.#saldo;
    }
    verSaldo() {
        return this.#saldo;
    }

    transferirParaCuenta(valor,cuentaDestino) {
        this.retirarDeCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);
    }
    prueba(){
        console.log("metodo padre")
    }
}