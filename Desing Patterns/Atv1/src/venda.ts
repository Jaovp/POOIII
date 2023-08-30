import { Cliente } from "./cliente";
import { Produto } from "./produto";

export class Venda{

    private _codigo : number;
    private _data : number;
    private _cliente : Cliente;
    private _produto: Produto[];

    constructor (codgio : number, data : number, cliente : Cliente, produto : Produto[]){
        this._codigo = codgio;
        this._data = data;
        this._cliente = cliente;
        this._produto = produto;
    }

    get codigo() : number{
        return this._codigo;
    }

    set codigo(codigo: number){
        this._codigo = codigo;
    }

    get data() : number{
        return this._data;
    }

    set data(data: number){
        this._data = data;
    }

    get cliente() : Cliente{
        return this._cliente;
    }

    set cliente(cliente: Cliente){
        this._cliente = cliente;
    }

    get produtos(): Produto[] {
        return this._produto;
      }
    
    set produtos(value: Produto[]) {
        this._produto = value;
      }
    
    calcularTotal(): number {
      let total = 0;
      for (const produto of this._produto) {
          total += produto.valor;
      }
      return total;
    }

    toString(): string {
        
        return `Código: ${this.codigo}, Data: ${this.data}, Cliente: [${this.cliente}], Produtos: [${this.produtos}] Total: ${this.calcularTotal()}`;
    }

}