import IFood from "./interface/IFood";


export default class Hamburguer implements IFood {
    startDelivery(): void {
        this.getFood();
        console.log("Hambúrguer");
    }

    getFood(): void {
        console.log("Iniciando pedido de hambúrguer...");
    }
}