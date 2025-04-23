import { BancoDeDados } from './BancoDeDados.js';
import { Cliente } from './Cliente.js';
import { Veiculo } from './veiculo.js';



//cadastro veiculo;

const formveiculo = document.getElementById("formveiculo").addEventListener("submit", (e) => {
    e.preventDefault();


    //veiculo
    const placa = document.getElementById("placa").value;
    const modelo = document.getElementById("modelo").value;
    const cor = document.getElementById("cor").value;

    
    const idpage = new URLSearchParams(window.location.search);
    const idDAPage = parseInt(idpage.get('id'));


    if (idDAPage === 1000) {

        const temp = JSON.parse(localStorage.getItem("temp")) || [];
        let idClient = BancoDeDados.pegarid();


        let veiculo = new Veiculo(placa, modelo, cor, idClient);
        let cliente = new Cliente(temp.nome, temp.cnh);



        BancoDeDados.salvar(idClient, cliente);
        BancoDeDados.salvarVeisulo(veiculo);
        localStorage.removeItem("temp");
        window.location.href = "CadastrarCliente.html";
    }else{
        let veiculo = new Veiculo(placa, modelo, cor, idDAPage);
        BancoDeDados.salvarVeisulo(veiculo);
        window.location.href = "CadastrarCliente.html";

    }
    



});



