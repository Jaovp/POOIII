import IAircraft from "./interface/IAircraft";

export default class Drone implements IAircraft{
    startRoute(): void {
        this.checkWind();
        this.getCargo();
        console.log("Drone: iniciando decolagem...");
    }

    getCargo(): void {
        console.log("Drone: Encomenda embarcada!");
    }

    checkWind(): void {
        console.log("Drone: ventos a 10km, ok!!");
    }
}