import VehicleBuilder from "./builders/VehicleBuilder";
import Director from "./directors/Director";
import Vehicle from "./products/Vehicle";


const builder : VehicleBuilder = new VehicleBuilder();
const director : Director = new Director(builder);

director.constructorSedanCar();
const sedan : Vehicle = builder.getVehicle();
imprimirDetalhes(sedan);
director.constructorTruck();
const truck : Vehicle = builder.getVehicle();
imprimirDetalhes(truck);


function imprimirDetalhes(vehicle : Vehicle){
    console.log("Construindo Veículo " + vehicle.vehicleType);
    console.log("Potência do Motor: " + vehicle.engine.power);
    console.log("Transmissão: " + vehicle.transmission);
    console.log("Assentos: " + vehicle.seats);
    console.log("Rodas: " + vehicle.wheels.length + " aro: " + vehicle.wheels[0].rim);
    console.log();
}