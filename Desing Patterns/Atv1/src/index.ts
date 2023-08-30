import { Cliente  } from "./cliente"
import { Endereco } from "./endereco"
import { Produto } from "./produto"
import { Telefone } from "./telefone";
import { Venda } from "./venda";

const enderecoCliente1 = new Endereco("Rua Governador", 100, "Guarapuava", "Paraná");
const telefoneCliente1 = new Telefone(42, 9846546, "Celular");
const telefoneCliente1_1 = new Telefone(42, 9846541, "Residencial");
const cliente = new Cliente("João", 98456475451, 17072003, "Masculino", enderecoCliente1, [telefoneCliente1,telefoneCliente1_1]);

const enderecoCliente2 = new Endereco("Rua B", 456, "Guarapuava", "Paraná");
const telefoneCliente2 = new Telefone(42, 48956467, "Residencial");
const cliente2 = new Cliente("Maria", 987654321, 22082002, "Feminino", enderecoCliente2, [telefoneCliente2])

const produto1 = new Produto(1, "Arroz", 10.00);
const produto2 = new Produto(2, "Feijão", 20.00);
const produto3 = new Produto(3, "Batata", 5);
const produto4 = new Produto(4, "Morango", 8);

const produtosVenda = [produto1, produto2];
const produtosVenda2 = [produto1, produto3, produto4];

const venda = new Venda(1, 11062023, cliente, produtosVenda);
const venda2 = new Venda(2, 12062003, cliente2, produtosVenda2)

console.log(venda.toString());
console.log(venda2.toString());