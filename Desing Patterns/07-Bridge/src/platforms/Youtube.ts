import IPlatform from "./IPlatform";

export default class Youtube implements IPlatform{

    constructor(){
        this.configureRMTP();
        console.log("Youtube: Plataforma Configurada.")
    }

    configureRMTP(): void {
        this.authToken();
        console.log("Youtube: Configurando Broadcasting..")
    }
    authToken(): void {
        console.log("");
        console.log("Youtube: Autenticando Token..")
    }

}