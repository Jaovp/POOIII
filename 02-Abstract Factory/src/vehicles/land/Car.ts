import ILandVehicle from "./interfaces/ILandVehicles";

export default class implements ILandVehicle{
    startRoute(): void {
        this.getCargo();
        console.log("Carro: iniciando o Trajeto...");
    }

    getCargo(): void {
        console.log("Carro: Passageiros Embarcados!");
        
    }

}