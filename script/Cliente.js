import { Pessoa } from "./Pessoa.js";

export class Cliente extends Pessoa{

    #cnh;
    #veiculo = [];

    constructor(nome,cnh){
        super(nome);
        this.#cnh = cnh;
    }

    get cnh(){
        return this.#cnh;
    }
    get veiculo(){
        return this.#veiculo;
    }

}