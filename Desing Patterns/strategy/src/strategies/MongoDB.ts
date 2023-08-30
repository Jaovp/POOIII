import IDatabaseAccess from "./IDataBaseAcess";

export default class MongoDB implements IDatabaseAccess {
    connect(): void {
        console.log('MongoDB: Conectando ao banco de dados...');
    }
    query(): void {
        console.log('MongoDB: Realizando consulta...');
    }
    disconnect(): void {
        console.log('MongoDB: Desconectando do banco de dados...');
    }
}