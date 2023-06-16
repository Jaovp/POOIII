import IAircraft from "../../vehicles/aerial/interface/IAircraft";
import ILandVehicle from "../../vehicles/land/interfaces/ILandVehicles";

export default interface ITransportFactory{
    createTransportVehicle(): ILandVehicle;
    createTransportAircraft(): IAircraft;
}