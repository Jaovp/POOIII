import IDatabaseAccess from "./IDataBaseAcess";


export default class MySQL implements IDatabaseAccess {
    connect(): void {
        console.log('MySQL: Conectando ao banco de dados...');
    }
    query(): void {
        console.log('MySQL: Realizando consulta...');
    }
    disconnect(): void {
        console.log('MySQL: Desconectando do banco de dados...');
    }
}