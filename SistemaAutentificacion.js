export class SistemaAutentificacion {   
        static login(usuario,clave){
            if("autenticable" in usuario){
            return usuario.autenticable(clave);
            }else{
                return false
            }    
        }
}
    

