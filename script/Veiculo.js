
export class veiculo{
    #placa;
    #modelo;
    #cor;
    #idClient
 

    constructor(placa,modelo,cor,idClient){
        this.#placa = placa;
        this.#modelo = modelo;
        this.#cor = cor;
        this.#idClient = idClient;
     
    }

    get placa(){ return this.#placa}

    get modelo(){ return this.#modelo}

    get cor(){return this.#cor}

    get idClient() {return this.#idClient}




}