import IFood from "./interface/IFood";


export default class HotDog implements IFood {
    startDelivery(): void {
        this.getFood();
        console.log("HotDog");
    }
    getFood(): void {
        console.log("Pedido de HotDog iniciado!");
    }
}