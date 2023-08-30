import Token from "../utils/Token";
import IPayPalPayment from "./IPayPalPayment";

export default class PayPalPayment implements IPayPalPayment{
    private token = new Token();

    authToken(): Token {
        return new Token();
    }
    paypalPayment(): void {
        this.token = this.authToken();
        console.log("Token: " + this.token.token)
        console.log("Enviando pagamento via Paypal");
    }
    paypalReceive(): void {
        this.token = this.authToken();
        console.log("Token: " + this.token.token)
        console.log("Recebendo pagamento via Paypal");
    }

}