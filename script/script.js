import { BancoDeDados } from './BancoDeDados.js';
import { Cliente } from './Cliente.js';


const clientesCadastrados = document.getElementById("clientesCadastrados");





const form = document.getElementById("formulario").addEventListener("submit", (e) => {
    e.preventDefault();

    //cliente
    const nome = document.getElementById("nome").value;
    const cnh = document.getElementById("cnh").value;
    const possuiCarro = document.getElementById("veiculo").value;






    if (!nome || isNaN(cnh)) {
        alert("preencha todos os Campos");

    } else if (possuiCarro === "sim") {


        localStorage.setItem("temp", JSON.stringify({
            nome: nome,
            cnh: cnh,
        }))
        window.location.href = "cadastro-veiculo.html?id=1000"



    } else {

        const cliente = new Cliente(nome, cnh);

        BancoDeDados.salvar(cliente);




        document.getElementById("nome").value = "";
        document.getElementById("cnh").value = "";

    }
});


window.addEventListener("load", () => {

    for (let i = 0; i < localStorage.length; i++) {
        let client = JSON.parse(localStorage.getItem(i));

        if (client.nome) {
            let mostrar = document.createElement("p");
            mostrar.innerHTML = `Nome: ${client.nome} <button class="clientesEdit"><a href="cadastro-veiculo.html?id=${i}">Editar</a></button>`;
            clientesCadastrados.appendChild(mostrar);
        }


    }

})



