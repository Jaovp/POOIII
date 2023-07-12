import IConsole from "./Consoles/IConsole";
import Playstation from "./Consoles/Playstation";
import Xbox from "./Consoles/Xbox";
import AdvancedPlay from "./Game/AdvancedPlay";
import Play from "./Game/Play";


function startGame(consoleType: IConsole){
    console.log("Aguarde...");
    const play = new Play(consoleType)
    play.playing();
    play.result();
}

function startAdvancedGame(consoleType: IConsole){
    console.log("Aguarde...");
    const play = new AdvancedPlay(consoleType)
    play.playing();
    play.challenge();
    play.result();
}

startAdvancedGame(new Xbox());
startGame(new Playstation());