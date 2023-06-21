import SoftDrink from "../foods/drinks/SoftDrink";
import IDrink from "../foods/drinks/interface/IDrink";
import Hamburguer from "../foods/snacks/Hamburguer";
import IFood from "../foods/snacks/interface/IFood";
import IDeliveryFactory from "c:/Users/victo/Documents/VS/POOIII/Atv4/src/Delivery/interface/IDeliveryFactory";


export default class AiqfomeDelivry implements IDeliveryFactory {
    createDeliveryFood(): IFood {
        return new Hamburguer();
    }
    creteDeliveryDrink(): IDrink {
        return new SoftDrink();
    }
}