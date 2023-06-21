import IDrink from "./interface/IDrink";

export default class SoftDrink implements IDrink {
    startDelviry(): void {
        this.getDrink();
        console.log("Refrigerante");
    }

    getDrink(): void {
        console.log("Iniciando pedido de refrigerante...");
    }
}