/*Importación de clases*/
import {Cliente} from "./Cliente.js";
import { Director } from "./Empleados/Director.js";
import { Empleado } from "./Empleados/Empleado.js";
import { Gerente } from "./Empleados/Gerente.js";
import { SistemaAutentificacion } from "./SistemaAutentificacion.js";

const cliente = new Cliente("Leonardo","15346541864","1654654");
cliente.asignarClave("111111");
console.log(SistemaAutentificacion.login(cliente,"12345"));
console.log(SistemaAutentificacion.login(cliente,"111111"))

const cliente2 = new Cliente("Maria","1354354","3687684");

const empleado = new Empleado("Diego","04586464",100)
const gerente = new Gerente("Jose", "546461",100)
const director = new Director("Pedro", "41657413542",100)

empleado.asignarClave("12345")
console.log(SistemaAutentificacion.login(empleado,"12345"))