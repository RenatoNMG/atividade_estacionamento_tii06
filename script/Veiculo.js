
export class Veiculo{
    #placa;
    #modelo;
    #cor;
 

    constructor(placa,modelo,cor){
        this.#placa = placa;
        this.#modelo = modelo;
        this.#cor = cor;
     
    }

    get placa(){ this.#placa}

    get modelo(){ this.#modelo}

    get cor(){ this.#cor}




}