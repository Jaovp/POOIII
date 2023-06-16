import ITransportFactory from "../transport/interface/ITransportFactory";
import IAircraft from "../vehicles/aerial/interface/IAircraft";
import ILandVehicle from "../vehicles/land/interfaces/ILandVehicles";

export default class Client{
    private vehicle: ILandVehicle;
    private aircraft: IAircraft;

    constructor(factory: ITransportFactory){
        this.vehicle = factory.createTransportVehicle();
        this.aircraft = factory.createTransportAircraft();
    }

    startRoute() : void{
        this.vehicle.startRoute();
        this.aircraft.startRoute();
    }
}