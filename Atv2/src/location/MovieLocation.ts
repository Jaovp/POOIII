import { Location } from "./Location";
import { Movie } from "./itens/Movie";
import Item from "./itens/interface/Item";

export class MovieLocation extends Location{

    protected createItem(): Item{
        return new Movie();
    }
}