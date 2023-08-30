import IDrink from "../../foods/drinks/interface/IDrink";
import IFood from "../../foods/snacks/interface/IFood";


export default interface IDeliveryFactory {
    createDeliveryFood(): IFood;
    creteDeliveryDrink(): IDrink;
}