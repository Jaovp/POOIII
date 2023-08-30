import IDatabaseAccess from "../strategies/IDataBaseAcess";


export default class DataManager {
    private _databaseStrategy: IDatabaseAccess;

    constructor(databaseStrategy: IDatabaseAccess) {
        this._databaseStrategy = databaseStrategy;
    }

    setStrategy(strategy: IDatabaseAccess): void {
        this._databaseStrategy = strategy;
    }
    
      getData(): void {
        this._databaseStrategy.connect();
        this._databaseStrategy.query();
        this._databaseStrategy.disconnect();
        console.log('DataManager: Dados obtidos com sucesso!');
    }
}