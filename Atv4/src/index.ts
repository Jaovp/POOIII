import IDeliveryFactory from "./Delivery/interface/IDeliveryFactory";
import Client from "./clients/Client";
import IFoodDelivery from "./delivery/IFoodDelivery";
import Company from "./delivery/consts/Company";


const currentCompany = Company.IFOOD;
let factory! : IDeliveryFactory;

switch (currentCompany) {
    case Company.IFOOD:
        factory = new IFoodDelivery();
    break;
    case Company.AIQFOME:
        factory = new IFoodDelivery();
    break;
    default:
        console.log("Companhia não definida!");
}

const client = new Client(factory)
client.startOrder();