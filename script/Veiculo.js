


export class Veiculo{
    #placa;
    #modelo;
    #cor;
    #tipo;
    #clienteid;

    constructor(placa,modelo,cor,tipo,clienteid){
        this.#placa = placa;
        this.#modelo = modelo;
        this.#cor = cor;
        this.#tipo = tipo;
        this.#clienteid = clienteid;
    }

}