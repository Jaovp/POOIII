import IConsole from "./IConsole";

export default class Xbox implements IConsole {

    constructor(){
        this.configureGame();
        console.log("Xbox pronto!");
    }

    configureGame(): void {
        this.authToken();
        console.log("Configurando jogo para Xbox 🟩");
    }

    authToken(): void {
        console.log("Autenticando usuário no Xbox");
    }

}