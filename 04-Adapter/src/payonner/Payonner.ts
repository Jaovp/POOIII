import Token from "../utils/Token";
import IPayonnerPayment from "./IPayonnerPayment";

export default class Payonner implements IPayonnerPayment{
    private token = new Token();

    authToken(): Token {
        return new Token();
    }
    sendPayment(): void {
        this.token = this.authToken();
        console.log("Token: " + this.token.token)
        console.log("Enviando pagamento via Paypal");
    }
    receiveReceive(): void {
        this.token = this.authToken();
        console.log("Token: " + this.token.token)
        console.log("Recebendo pagamento via Paypal");
    }
 
}