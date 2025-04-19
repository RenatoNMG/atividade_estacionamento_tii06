import { Pessoa } from "./Pessoa.js";

export class Cliente extends Pessoa {

    #cnh;
    #veiculo = [];

    constructor(nome, cnh, veiculo) {
        super(nome);
        this.#cnh = cnh;
        if (veiculo) {
            this.#veiculo = veiculo;

        }

    }

    get cnh() {
        return this.#cnh;
    }
    get veiculo() {
        return this.#veiculo;
    }

}