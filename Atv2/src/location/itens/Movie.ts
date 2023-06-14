import Item from "./interface/Item";


export class Movie implements Item{

    start(): void {
        this.getDescription();
        console.log("3...2...1...")
    }
    getDescription(): void {
        console.log("Filme começando...")
    }
}