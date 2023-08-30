import TransportadoraAdapter from "./adapters/TransportadoraAdapter";
import Correio from "./correios/Correio";
import ICorreio from "./correios/ICorreio";
import ITransportadora from "./transportadora/ITransportadora";
import Transportadora from "./transportadora/Transportadora";


const correspondencia : ICorreio = new Correio();
correspondencia.sendCorreios();
correspondencia.receiveCorreios();
console.log("--------------------------------------------------");
const correspondencia2 : ITransportadora = new Transportadora();
correspondencia2.send();
correspondencia2.receive();
console.log("--------------------------------------------------");
const correspondencia3 : ICorreio = new TransportadoraAdapter(new Transportadora());
correspondencia3.sendCorreios();
correspondencia3.receiveCorreios();
