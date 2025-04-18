
export class Pessoa{
    
    #nome;
   


    constructor(nome,nascimento){
        this.#nome = nome;
       
    }

    get nome(){
        return this.#nome;
    }
 
}