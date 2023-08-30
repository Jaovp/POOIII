import Item  from "./interface/Item";

export class Game implements Item{

    start(): void {
        this.getDescription();
            console.log("Play!!");
        }
    

    getDescription(): void {
        console.log("Game iniciando")
    }

}