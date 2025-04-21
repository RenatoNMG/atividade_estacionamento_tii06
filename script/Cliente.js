import { Pessoa } from "./Pessoa.js";

export class Cliente extends Pessoa {

    #cnh;


    constructor(nome, cnh) {
        super(nome);
        this.#cnh = cnh;

    }

    get cnh() {
        return this.#cnh;
    }


}