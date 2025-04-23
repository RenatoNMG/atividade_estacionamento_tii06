
export class Pessoa{
    
    #nome;
    #cnh;
   


    constructor(nome,cnh){
        this.#nome = nome;
        this.#cnh = cnh;
       
    }

    get nome(){
        return this.#nome;
    }
    get cnh() {
        return this.#cnh;
    }
 
}