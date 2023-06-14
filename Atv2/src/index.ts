import { GameLocation }  from "./location/GameLocation";
import { Location }  from "./location/Location";
import { MovieLocation } from "./location/MovieLocation";


declare var process;
let location : Location;

if(process.argv.includes("CS:GO")){
    location = new GameLocation();
    location.startItem();
}
else 
    if(process.argv.includes("Aranhaverso")){
        location = new MovieLocation();
        location.startItem();
    }
    else{
        console.log("Tipo Inválido");
    }



