import IConsole from "./IConsole";

export default class Playstation implements IConsole {

    constructor(){
        this.configureGame();
        console.log("Playstation pronto!")
    }

    configureGame(): void {
        this.authToken();
        console.log("Configurando jogo para Playstation 🟦");
    }
    authToken(): void {
        console.log("");
        console.log("Autenticando usuário no Playstation");
    }

}