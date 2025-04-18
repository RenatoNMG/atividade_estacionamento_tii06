import { BancoDeDados } from './BancoDeDados.js';
import { Cliente } from './Cliente.js';



const form = document.getElementById("formulario").addEventListener("submit", (e) => {
    e.preventDefault();

    //cliente
    const nome = document.getElementById("nome").value;
    const cnh = document.getElementById("cnh").value;
    const possuiCarro = document.getElementById("veiculo").value;

    




    if (!nome || isNaN(cnh)) {
        alert("preencha todos os Campos");

    }else if (possuiCarro === "sim") {
    

        localStorage.setItem("temp",JSON.stringify({
            nome: nome,
            cnh: cnh,
        }))
        window.location.href = "cadastro-veiculo.html?id=1"
        


    } else {

        const cliente = new Cliente(nome, cnh);

        BancoDeDados.salvar(cliente);




        document.getElementById("nome").value = "";
        document.getElementById("cnh").value = "";


    }



})







//cadastro veiculo;

const formveiculo = document.getElementById("formveiculo").addEventListener("submit", (e) => {
    e.preventDefault();


    //veiculo
    const placa = document.getElementById("placa").value;
    const modelo = document.getElementById("modelo").value;
    const cor = document.getElementById("cor").value;

    const idpage = window.location.search.substring(1);


    if(idpage){

        const temp = JSON.parse(localStorage.get("temp"));



        let cliente = new Cliente(temp.nome,temp.cnh,placa,modelo,cor);
        BancoDeDados.salvar(cliente);
        

    }
    alert("okkkkkkkkk")


});
    