import Database from "../server/DataBase";
import PermissionType from "../server/PermissionType";
import Middleware from "./Middlware";

export default class CheckPermissionMiddlware extends Middleware{
    public check(email: string, password: string) {
        const user = Database.filter(item => item.email === email);

        if(user[0].permission === PermissionType.ADMIN){
            console.log("Seja Bem Vindo Administrador!")
        }
        else{
            console.log("Seja Bem Vindo Usuário!");
        }

        return this.checkNext(email, password);
    }

}