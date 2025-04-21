let listATual = document.querySelectorAll("#cliente option");
let list = document.getElementById("cliente");
let estacionar = document.getElementById("estacionar");
let vagav = document.getElementById("vagav");
let veiculos = document.getElementById("veiculos");


let clienteAtual;

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

estacionar.addEventListener("click", () => {
    let lista = list.value;
    let vagaAtual = vagav.value;

    if (lista === "cliente") {
        alert("Selecione um Cliente");
    } else {

        confirm(`estacionar o veciculo do(a): ${lista} na Vaga: ${vagaAtual}`);
    }

})