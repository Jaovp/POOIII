import ITransportadora from "./ITransportadora";

export default class Transportadora implements ITransportadora{
    send(): void {
        console.log("Enviando correspondencia para transportadora");
    }
    receive(): void {
        console.log("Recebendo correspondencia da transportadora");
    }

}