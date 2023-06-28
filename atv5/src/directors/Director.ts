import IBuilder from "../builders/IBuilder";
import Bread from "../components/Bread";
import Salad from "../components/Salad";
import SanduicheType from "../components/SanduicheType";
import Sauce from "../components/Sauce";
import { Protein } from "../components/protein";
import Sanduiche from "../products/Sanduiche";

export default class Director {

    constructor(private builder: IBuilder){}

    constructorXsalada(){
        this.builder.setSanduicheType(SanduicheType.XSALADA);
        this.builder.setBread(Bread.ITALIANO);
        this.builder.setProtein(Protein.BOVINA);
        this.builder.setSalad(Salad.ALFACE);
        this.builder.setSalad(Salad.TOMATE);
        this.builder.addSauce(new Sauce ("Maionese"));
        this.builder.addSauce(new Sauce ("Katchup"));
        this.builder.addSauce(new Sauce ("Mostarda e Mel"));
        this.builder.addSauce(new Sauce ("Barbecue"));
    }

    constructorHotDog(){
        this.builder.setSanduicheType(SanduicheType.HOTDOG);
        this.builder.setBread(Bread.TRESQUEIJOS);
        this.builder.setSalad(Salad.CEBOLA);
        this.builder.setSalad(Salad.MILHO);
        this.builder.addSauce(new Sauce ("Maionese"));
        this.builder.addSauce(new Sauce ("Katchup"));
    }
}