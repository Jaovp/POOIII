import PayonnerAdapter from "./adapters/PayonnerAdapter";
import IPayonnerPayment from "./payonner/IPayonnerPayment";
import Payonner from "./payonner/Payonner";
import IPayPalPayment from "./paypal/IPayPalPayment";
import PayPal from "./paypal/PayPal";

//const paymet: IPayPalPayment = new PayPal();
//paymet.paypalPayment();
//paymet.paypalReceive();

//const paymet2: IPayonnerPayment = new Payonner();
//paymet2.sendPayment();
//paymet2.receiveReceive();

const payment : IPayPalPayment = new PayonnerAdapter(new Payonner());
payment.paypalPayment();
payment.paypalReceive();