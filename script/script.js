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

        return;

    } else {

        const cliente = new Cliente(nome, cnh);
        let id = BancoDeDados.pegarid();

        BancoDeDados.salvar(id, cliente);

        document.getElementById("nome").value = "";
        document.getElementById("cnh").value = "";

    }
});



// Mostrar os clientes na tela
function renderizarClientes() {
    
    clientesCadastrados.innerHTML = '';

    for (let i = 0; i < localStorage.length; i++) {
        let client = JSON.parse(localStorage.getItem(i));

        if (client && client.nome) {
            let mostrar = document.createElement("p");
            mostrar.innerHTML = `Nome: ${client.nome} 
                <button class="clientesEdit">
                    <a href="cadastro-veiculo.html?id=${i}">Adicionar Veiculo</a>
                </button> 
                <button class="clientesExcluir" data-index="${i}">Excluir</button>`;
            clientesCadastrados.appendChild(mostrar);
        }
    }

    
    const botoesExcluir = document.querySelectorAll(".clientesExcluir");

    botoesExcluir.forEach((botao) => {
        botao.addEventListener("click", (event) => {
            const index = event.target.getAttribute('data-index');
            excluirCliente(index); 
        });
    });
}

window.addEventListener("load", () => {
    renderizarClientes();
});


function excluirCliente(i) {
    localStorage.removeItem(i);
    renderizarClientes(); 
}


