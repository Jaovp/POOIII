import IDrink from "./interface/IDrink";


export default class Beer implements IDrink {
    startDelviry(): void {
        this.getDrink();
        console.log("Cerveja");
    }

    getDrink(): void {
        console.log("Iniciando pedido de cerveja...");
    }
}