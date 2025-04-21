

export class BancoDeDados {

    static salvar(id,cliente) {

     
        localStorage.setItem(id, JSON.stringify({
            nome: cliente.nome,
            cnh: cliente.cnh,
        }));

    }
    static salvarVeisulo(veiculo){
        localStorage.setItem(BancoDeDados.pegarid(), JSON.stringify({

           placa: veiculo.placa,
           modelo: veiculo.modelo,
           cor: veiculo.cor,
           idClient: veiculo.idClient

        }));

    }



    static pegarid() {

        let id = 0;
        while (localStorage.getItem(id)) {
            id++
        }
        return id;
    }



}