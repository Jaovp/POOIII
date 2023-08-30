import IPlatform from "./IPlatform";

export default class Facebook implements IPlatform{
    
    constructor(){
        this.configureRMTP();
        console.log("Facebook: Plataforma Configurada.");
    }

    configureRMTP(): void {
        this.authToken();
        console.log("Facebook: Configurando Broadcasting..");
    }
    authToken(): void {
        console.log("");
        console.log("Facebook: Autenticando Token..");
    }

}