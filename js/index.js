//Var dos Botões

var text1 = document.getElementById("text-1");
var text2 = document.getElementById("text-2");

//Config Botão Projetos

function clickProjetos() {
    console.log ("Clicou no Botão Projetos");
    text2.style.display = "block";
    text1.style.display = "none";
}

//Config Botão Sobre 

function clickSobre() {
    console.log ("Clicou no Botão Sobre");
    text1.style.display = "block";
    text2.style.display = "none";
}
