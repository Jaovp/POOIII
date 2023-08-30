import IAircraft from "./interface/IAircraft";


export default class Helicopter implements IAircraft{
    startRoute(): void {
        this.checkWind();
        this.getCargo();
        console.log("Helicóptero: iniciando decolagem...")
    }

    getCargo(): void {
        console.log("Helicóptero: passageiros embarcos!");
    }

    checkWind(): void {
        console.log("Helicóptero: ventos a 25km, sudoeste, ok!");
    }
}