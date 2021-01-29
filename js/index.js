var nome = "André";
var cargo = "Desenvolvedor";

var nomeHtml = document.getElementById("nome-html");
var cargoHtml =document.getElementById("cargo-html");
var text1 = document.getElementById("text-1");
var text2 = document.getElementById("text-2");

function colocarNomeNoHtml(nome){
nomeHtml.innerHTML = nome;
}

function colocarCargo(cargo){
cargoHtml.innerHTML = cargo;
}

function logarNome() {
    console.log(nome);
}

function clickProjetos() {
    console.log ("Clicou no Botão Projetos");
    text2.style.display = "block";
    text1.style.display = "none";
}

function clickSobre() {
    console.log ("Clicou no Botão Sobre");
    text1.style.display = "block";
    text2.style.display = "none";
}

colocarNomeNoHtml(nome);
colocarCargo(cargo);
