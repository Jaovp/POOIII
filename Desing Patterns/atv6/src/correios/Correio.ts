import ICorreio from "./ICorreio";

 export default class Correio implements ICorreio{

     sendCorreios(): void {
        console.log("Enviando correspondencia dos Correios");
     }
     receiveCorreios(): void {
        console.log("Recebendo correspondencia dos Correios");
     }
}