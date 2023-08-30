import { Location } from "./Location";
import { Game } from "./itens/Game";
import Item from "./itens/interface/Item";

export class GameLocation extends Location{

    protected createItem(): Item {
        return new Game();
    }
}