import Bread from "../components/Bread";
import Salad from "../components/Salad";
import SanduicheType from "../components/SanduicheType";
import Sauce from "../components/Sauce";
import { Protein } from "../components/protein";

export default interface IBuilder{
    reset(): void;
    getSanduiche(): void;
    setSanduicheType(sanduicheType: SanduicheType);
    addSauce(sauce: Sauce);
    setBread(bread: Bread);
    setProtein(protein: Protein);
    setSalad(salad: Salad);

}