

export class BancoDeDados {

    static salvar(cliente) {
        
        localStorage.setItem(BancoDeDados.pegarid(), JSON.stringify({

            nome: cliente.nome,
            cnh: cliente.cnh,
            veiculo: cliente.veiculo,
        }));

    }



    static pegarid() {
        
        let id = localStorage.length;
        return id + 1;
    }



}