import Director from "./directors/Director";
import SanduicheBuilder from "./builders/SanduicheBuilder";
import Sanduiche from "./products/Sanduiche";

const builder : SanduicheBuilder = new SanduicheBuilder();
const director : Director = new Director(builder);
director.constructorXsalada();
const xsalada : Sanduiche = builder.getSanduiche();
director.constructorHotDog();
const hotDog : Sanduiche = builder.getSanduiche();
imprimirDetalhes(xsalada);
imprimirDetalhes(hotDog);




function imprimirDetalhes(sanduiche : Sanduiche){
    console.log("Tipo de Sanduiche " + sanduiche.SanduicheType);
    console.log("Pão: " + sanduiche.bread);
    console.log("Proteina: " + sanduiche.protein);
    console.log("Salada: " + sanduiche.salad);
    console.log("Molhos: ");
    for (let sauce of sanduiche.sauce) {
        console.log(" " + sauce.name);
    }
}