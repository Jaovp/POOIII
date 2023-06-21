import IDeliveryFactory from "../Delivery/interface/IDeliveryFactory";
import IDrink from "../foods/drinks/interface/IDrink";
import IFood from "../foods/snacks/interface/IFood";

export default class Client{
    private food: IFood;
    private drink: IDrink;

    constructor(factory: IDeliveryFactory){
        this.food = factory.createDeliveryFood();
        this.drink = factory.creteDeliveryDrink();
    }

    startOrder(): void{
        this.food.startDelivery();
        this.drink.startDelviry();
    }

}