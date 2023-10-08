var numVotosCandidato1 = 0;
var numVotosCandidato2 = 0;
var numVotosCandidato3 = 0;
var numVotosBranco = 0;
var numVotosNulo = 0;

var liberaInicio = 0;
var confirmacaoReset = 0;

var tempo = 1000;


function inicializacao(){
    if(liberaInicio == 0 && confirmacaoReset == 0){
    document.getElementById('tela').innerHTML =  "Por favor, digite o  numero do seu candidato <br><br><br>";
    document.getElementById('tela').innerHTML +=  "Para votar no candidato x, digite o numero 1 <br><br>";
    document.getElementById('tela').innerHTML +=  "Para votar no candidato y, digite o numero 2 <br><br>";
    document.getElementById('tela').innerHTML +=  "Para votar no candidato z, digite o numero 3 <br><br>";
    liberaInicio = 1;
    }
}

function votocandidato1(){
    if(liberaInicio == 1){
    numVotosCandidato1 += 1;
    console.log("votos no candidato 1: " + numVotosCandidato1)
    document.getElementById('tela').innerHTML =  "Você votou no candidato 1";
    setTimeout(inicializacao, tempo);
    liberaInicio = 0;
    }
}

function votocandidato2(){
    if(liberaInicio == 1){
    numVotosCandidato2 += 1;
    console.log("votos no candidato 2: " + numVotosCandidato2)
    document.getElementById('tela').innerHTML =  "Você votou no candidato 2";
    setTimeout(inicializacao, tempo);
    liberaInicio = 0;
    }
}

function votocandidato3(){
    if(liberaInicio == 1){
    numVotosCandidato3 += 1;
    console.log("votos no candidato 3: " + numVotosCandidato3)
    document.getElementById('tela').innerHTML =  "Você votou no candidato 3";
    setTimeout(inicializacao, tempo);
    liberaInicio = 0;
    }
}

function votoembranco(){
    if(liberaInicio == 1){
    numVotosBranco += 1;
    console.log("votos em branco: " + numVotosBranco)
    document.getElementById('tela').innerHTML =  "Você votou em branco";
    setTimeout(inicializacao, tempo);
    liberaInicio = 0;
    }
}

function votonulo(){
    if(liberaInicio == 1){
    numVotosNulo += 1;
    console.log("votos nulos: " + numVotosNulo)
    document.getElementById('tela').innerHTML =  "Você votou nulo";
    setTimeout(inicializacao, tempo);
    liberaInicio = 0;
    }
}

function contagemvotos(){

    let numVotosTotal = numVotosCandidato1 + numVotosCandidato2 + numVotosCandidato3 + numVotosBranco + numVotosNulo;

    let porcenCandidato1 = (numVotosCandidato1 * 100) / numVotosTotal;
    let porcenCandidato2 = (numVotosCandidato2 * 100) / numVotosTotal;
    let porcenCandidato3 = (numVotosCandidato3 * 100) / numVotosTotal;
    let porcenBrancos = (numVotosBranco * 100) / numVotosTotal;
    let porcenNulos = (numVotosNulo * 100) / numVotosTotal;

    document.getElementById('tela').innerHTML =  "Resultado da votação: <br><br>";
    document.getElementById('tela').innerHTML +=  "Quantidade de votos do candidato 1: " + numVotosCandidato1 + " Porcentagem de votos: " + Math.trunc(porcenCandidato1 * 100) / 100 + " %"+ "<br>";
    document.getElementById('tela').innerHTML +=  "Quantidade de votos do candidato 2: " + numVotosCandidato2 + " Porcentagem de votos: " + Math.trunc(porcenCandidato2 * 100) / 100 + " %"+ "<br>";
    document.getElementById('tela').innerHTML +=  "Quantidade de votos do candidato 3: " + numVotosCandidato3 + " Porcentagem de votos: " + Math.trunc(porcenCandidato3 * 100) / 100 + " %"+ "<br>";
    document.getElementById('tela').innerHTML +=  "Quantidade de votos em branco: " + numVotosBranco + " Porcentagem de votos: " + Math.trunc(porcenBrancos * 100) / 100  + " %"+ "<br>";
    document.getElementById('tela').innerHTML +=  "Quantidade de votos nulos: " + numVotosNulo + " Porcentagem de votos: " + Math.trunc(porcenNulos * 100) / 100 + " %"+ "<br><br>";


    if(numVotosCandidato1 > numVotosCandidato2){
        if(numVotosCandidato1 > numVotosCandidato3){
        document.getElementById('tela').innerHTML +=  "Candidadto 1 é o vencedor com: " + (numVotosCandidato1 + numVotosBranco) + " votos <br>";
        } else if (numVotosCandidato3 > numVotosCandidato2){
        document.getElementById('tela').innerHTML +=  "Candidadto 3 é o vencedor com: " + (numVotosCandidato3 + numVotosBranco) + " votos <br>";
        } else {
        document.getElementById('tela').innerHTML +=  "Candidadto 2 é o vencedor com: " + (numVotosCandidato2 + numVotosBranco) + " votos <br>";
        }
    }else if(numVotosCandidato2 > numVotosCandidato3){
        document.getElementById('tela').innerHTML +=  "Candidadto 2 é o vencedor com: " + (numVotosCandidato2 + numVotosBranco) + " votos <br>"; 
        } else {
        document.getElementById('tela').innerHTML +=  "Candidadto 3 é o vencedor com: " + (numVotosCandidato3 + numVotosBranco) + " votos ";   
        }
    
    document.getElementById('tela').innerHTML +=  "<br><br><br> Pressione reset para zerar a votação.";
}

function encerravotacao(){
    confirmacaoReset = 1;
    contagemvotos();
}

function reset(){

    numVotosCandidato1 = 0;
    numVotosCandidato2 = 0;
    numVotosCandidato3 = 0;
    numVotosBranco = 0;
    numVotosNulo = 0;

    document.getElementById('tela').innerHTML =  "Pressione iniciar para iniciar uma nova votação.";

    liberaInicio = 0;
    confirmacaoReset = 0;
}