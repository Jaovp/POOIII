import IBuilder from "../builders/IBuilder";
import Bread from "../components/Bread";
import Salad from "../components/Salad";
import SanduicheType from "../components/SanduicheType";
import Sauce from "../components/Sauce";
import { Protein } from "../components/protein";
import Sanduiche from "../products/Sanduiche";


export default class SanduicheBuilder implements IBuilder{
    
    private _sanduiche = new Sanduiche();

    reset(): void {
        this._sanduiche = new Sanduiche();
    }
    getSanduiche(): Sanduiche {
        const result : Sanduiche = this._sanduiche;
        this.reset();
        return result;
    }
    addSauce(sauce: Sauce) {
        this._sanduiche.addSauce(sauce);
    }
    setSanduicheType(value: SanduicheType) {
        this._sanduiche.SanduicheType = value;
    }
    setBread(bread: Bread) {
        this._sanduiche.bread = bread;
    }
    setProtein(protein: Protein) {
        this._sanduiche.protein = protein;
    }
    setSalad(salad: Salad) {
        this._sanduiche.salad = salad;
    }


}