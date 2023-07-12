import IConsole from "../Consoles/IConsole";
import IGame from "./IGame";

export default class Play implements IGame{

    constructor(private console: IConsole){}

    playing(): void {
        console.log("Iniciando Game");
    }
    result(): void {
        console.log("START!");
    }

}