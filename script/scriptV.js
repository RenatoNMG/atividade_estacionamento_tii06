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

    const idpage = window.location.search.substring(0);

   
    if (idpage) {

        const temp = JSON.parse(localStorage.getItem("temp")) || [];

        let veiculo = new Veiculo(placa, modelo, cor);
        let cliente = new Cliente(temp.nome, temp.cnh, veiculo);

        BancoDeDados.salvar(cliente);
        localStorage.removeItem("temp");


    }



});



