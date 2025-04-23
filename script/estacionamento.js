let listATual = document.querySelectorAll("#cliente option");
let estacionamento = document.querySelectorAll("#estacionamento div");
let list = document.getElementById("cliente");
let estacionar = document.getElementById("estacionar");
let vagav = document.getElementById("vagav");
let vagas = document.getElementById("#vagav option");
let veiculos = document.getElementById("veiculos");


let clienteAtual;


// adiciona os clientes ao estacionamento
window.addEventListener("load", () => {

    for (let i = 0; i < localStorage.length; i++) {

        if (localStorage.getItem(i)) {

            let clienteAtual = JSON.parse(localStorage.getItem(i));
            if (clienteAtual.nome) {
                cli = document.createElement("option");
                cli.textContent = clienteAtual.nome;
                list.appendChild(cli);
            }

        }

    }

});


// seleciona o veiculo do cliente

list.addEventListener("change", (event) => {
    let client = event.target.selectedOptions[0].value;
    let clienteid;

    while (veiculos.firstChild) {
        veiculos.removeChild(veiculos.firstChild);
    }

    for (let i = 0; i < localStorage.length; i++) {
        let clienteAtual = JSON.parse(localStorage.getItem(i));
        if (clienteAtual.nome === client) {
            clienteid = i;
        }
    }
    for (let i = 0; i < localStorage.length; i++) {
        let carroAtual = JSON.parse(localStorage.getItem(i));
        if (carroAtual.idClient === clienteid) {
            vei = document.createElement("option");
            vei.textContent = carroAtual.modelo;
            veiculos.appendChild(vei);

        }

    }


});


//Estacionar o veiculo
estacionar.addEventListener("click", () => {
    let lista = list.value;
    let vagaAtual = vagav.value - 1;
    

    if (lista === "cliente") {
        alert("Selecione um Cliente");
    } else {

        conteudoDaVaga = estacionamento[vagaAtual].textContent.trim();
        ocupado = true;
        vagOcupada = 0;



        for (let j = 0; j < estacionamento.length; j++) {
            
            if (estacionamento[j].textContent === `Vaga ocupada ${lista}`) {
                ocupado = false;
                vagOcupada = j;

            }

        }
        if (ocupado  && !conteudoDaVaga.startsWith("Vaga ocupada")) {
            confimar = confirm(`estacionar o veciculo do(a): ${lista} na Vaga: ${vagaAtual + 1}`);

        }

        if (confimar && !conteudoDaVaga.startsWith("Vaga ocupada") &&  veiculos.hasChildNodes()) {

            estacionamento[vagaAtual].style.background = "red";
            estacionamento[vagaAtual].style.color = "white";
            estacionamento[vagaAtual].textContent = `Vaga ocupada ${lista}`;


        } else if (!ocupado) {

            let retirarVeiculo = confirm(`Carro Já Estacionado, Remover o Veiculo do(a) ${lista} do Estacionamento`);
            if (retirarVeiculo) {
                estacionamento[vagOcupada].style.background = "#d4edda";
                estacionamento[vagOcupada].style.color = "black";
                estacionamento[vagOcupada].textContent = `${vagOcupada + 1}`;

            }


        }else if(!veiculos.hasChildNodes()){
            alert(`Esse Cliente não tem Veiculo Cadastrado`);

        } else{
            alert(`a vaga esta ocupada`);
        }

    }

})