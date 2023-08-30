import IDrink from "../foods/drinks/interface/IDrink";
import IFood from "../foods/snacks/interface/IFood";
import HotDog from "../foods/snacks/HotDog";
import IDeliveryFactory from "c:/Users/victo/Documents/VS/POOIII/Atv4/src/Delivery/interface/IDeliveryFactory";
import Beer from "../foods/drinks/Beer";


export default class IFoodDelivery implements IDeliveryFactory {
    createDeliveryFood(): IFood {
        return new HotDog();
    }
    creteDeliveryDrink(): IDrink {
        return new Beer();
    }
}