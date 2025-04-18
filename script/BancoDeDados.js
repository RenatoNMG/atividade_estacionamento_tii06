

export class BancoDeDados {

    static id = 0;

    static salvar(cliente) {
        console.log("TESTE SALVAR");
        localStorage.setItem(BancoDeDados.pegarid(), JSON.stringify({
            nome: cliente.nome,
            cnh: cliente.cnh,
        }));

    }

    static pegarid() {
        
        let id = localStorage.length;
        return id + 1;
    }



}