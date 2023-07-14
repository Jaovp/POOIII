import Database from "../server/DataBase";
import Middleware from "./Middlware";

export default class CheckUserMiddleware extends Middleware{

    public check(email: string, password: string) {

        if(email.indexOf("@") === -1){
            console.log("Formato de Email Inválido!");
            return false;
        }

        const verificarEmail = (Database.filter(item => item.email === email));

        if(!verificarEmail.length){
            console.log("Email Não Cadastrado!");
            return false;
        }

        const verificarPassword = (Database.filter(item => item.password === password));
        
        if(!verificarPassword.length){
            console.log("Senha Incorreta!");
            return false;
        }

        return this.checkNext(email, password);
    }

}