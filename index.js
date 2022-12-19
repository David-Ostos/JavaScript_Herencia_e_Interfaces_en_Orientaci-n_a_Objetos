/*Importación de clases*/
import {Cliente} from "./Cliente.js";
import { CuentaAhorro } from './CuentaAhorro.js';
import { CuentaCorriente } from './CuentaCorriente.js';
import { Cuenta } from "./Cuenta.js";
import { CuentaNomina } from "./CuentaNomina.js";

const cliente = new Cliente('Leonardo','13804050','123224');
const cliente2 = new Cliente('María','16979808','8989');

const cuentaDeLeonardo = new CuentaCorriente(cliente, '1', '001');
const cuentaDeMaria = new CuentaCorriente(cliente2,'2','002');
const cuentaAhorroLeonardo = new CuentaAhorro(cliente,"9985","001",0);

const cuentaNomina = new CuentaNomina ("nomina","12","44864",0)
cuentaNomina.depositoEnCuenta(150)
console.log(cuentaNomina, cuentaNomina.verSaldo())
cuentaNomina.retirarDeCuenta(50)
console.log(cuentaNomina, cuentaNomina.verSaldo())
/*
const cuentaSimple = new Cuenta( "fulano", "1", "002", 1000);
console.log(cuentaSimple.verSaldo());

cuentaAhorroLeonardo.depositoEnCuenta(200);
cuentaDeLeonardo.depositoEnCuenta(150);
console.log(cuentaDeLeonardo,`En la cuenta corriente de leonardo hay ${cuentaDeLeonardo.verSaldo()}`);
console.log(cuentaAhorroLeonardo,`En la cuenta de ahorro de leonardo hay ${cuentaAhorroLeonardo.verSaldo()}`);

cuentaAhorroLeonardo.retirarDeCuenta(120);
cuentaDeLeonardo.retirarDeCuenta(70);
console.log(cuentaDeLeonardo,`En la cuenta corriente de leonardo hay ${cuentaDeLeonardo.verSaldo()}`);
console.log(cuentaAhorroLeonardo,`En la cuenta de ahorro de leonardo hay ${cuentaAhorroLeonardo.verSaldo()}`);*/