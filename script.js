var liberahash = false;
var liberaverificacaohash = false;

verificaIntegridade()

function votacao(){
    if(liberaverificacaohash == true){
        if(liberahash == true){
            let nomeCandidato1 = "candidato 1";
            let nomeCandidato2 = "candidato 2";
            let nomeCandidato3 = "candidato 3";
            let candidato1 = 0;
            let candidato2 = 0;
            let candidato3 = 0;
            let branco = 0;
            let nulo = 0;
            let voto;
            let liberaVotos;
            let votacao = 1;
            let contagemDosVotos = 0;
            let senhaadm = 9999;
            let senhamesario = 9999;
            let modo;
            let etapasenha = 1;
            const audio = new Audio('confirmacao.mp3');
        
            modo = prompt("Qual o modo desejado?\n 0 para modo configuração \n 1 para modo votação")

            if(modo == "0" || modo == "1"){
                if(modo == "0"){            
                    if(etapasenha == 1){
                        senhaadm = prompt("cadastre uma senha administradora.");
                        senhamesario = prompt("cadastre uma senha para o mesario.");
                        etapasenha = 0;
                    }

                    nomeCandidato1 = prompt("Digite o nome do primeiro candidato")
                    nomeCandidato2 = prompt("Digite o nome do segundo candidato")
                    nomeCandidato3 = prompt("Digite o nome do terceiro candidato")

                    console.log("candidato 1: " + nomeCandidato1);
                    console.log("candidato 2: " + nomeCandidato2);
                    console.log("candidato 3: " + nomeCandidato3);

                    let confirmaDados = confirm("Informações da votação:\n Candidato 1: " + nomeCandidato1 + "\n Candidato 2: " +  nomeCandidato2 + "\n Candidato 3: " +  nomeCandidato3 + "\n Selecione Ok para processeguir \n Selecione cancel para editar")
                    
                    if(confirmaDados){
                        modo = "1";
                    }else{
                    nomeCandidato1 = prompt("Digite o nome do primeiro candidato")
                    nomeCandidato2 = prompt("Digite o nome do segundo candidato")
                    nomeCandidato3 = prompt("Digite o nome do terceiro candidato")

                    confirmaDados = confirm("Informações da votação:\n Candidato 1: " + nomeCandidato1 + "\n Candidato 2: " +  nomeCandidato2 + "\n Candidato 3: " +  nomeCandidato3 + "\n Selecione Ok para processeguir \n Selecione cancel para editar")
                    }
                } 
                
                if(modo == "1"){
                    while(votacao == 1){

                        voto = parseInt(prompt("Digite seu voto"))

                        if(voto == senhaadm || voto == senhamesario){
                            liberaVotos = prompt("Para encerrar a votação, digite S, para voltar a votação, digite N")
                                switch(liberaVotos){                
                                case("S"):
                                    votacao = 0;
                                    contagemDosVotos = 1;
                                    break
                                            
                                default:
                                    votacao = 1;
                                    contagemDosVotos = 0;
                                    break
                                }
                            break
                        }
                
                        switch(voto){
                            case(1):
                                if(confirm(`Deseja confirmar o voto no(a) candidadto(a): ${nomeCandidato1} ?`)){
                                    candidato1++;
                                    audio.play();
                                    console.log("votou")
                                    break
                                }else{
                                    break
                                }
                
                            case(2):
                                if(confirm(`Deseja confirmar o voto no(a) candidadto(a): ${nomeCandidato2} ?`)){
                                    candidato2++;
                                    audio.play();
                                    console.log("votou")
                                    break
                                } else {
                                    break
                                }
                    
                            
                            case(3):
                                if(confirm(`Deseja confirmar o voto no(a) candidadto(a): ${nomeCandidato3} ?`)){
                                    candidato3++;
                                    audio.play();
                                    console.log("votou")
                                    break
                                } else {
                                    break
                                }
                            
                            case(5):
                                if(confirm(`Deseja confirmar o voto no(a) candidadto(a) em branco ?`)){
                                    branco++;
                                    audio.play();
                                    console.log("votou")
                                    break
                                } else {    
                                    break
                                }
                
                            default:
                                let confirmaVotoNulo = confirm("Você tem certeza que deseja votar nulo?");
                                if(confirmaVotoNulo){
                                nulo++;
                                audio.play();
                                console.log("votou nulo")
                                break
                                } else {
                                    break
                                }          
                
                        }
                    
                    }
                            //   continuar organizando codigo daqui      
                    if(contagemDosVotos == 1){
                        let numeroTotalVotos = candidato1 + candidato2 + candidato3 + branco + nulo;
                
                        let porcentagemCandidato1 = Math.round(((candidato1/numeroTotalVotos)*100) * 100) / 100 ;
                        let porcentagemCandidato2 = Math.round(((candidato2/numeroTotalVotos)*100) * 100) / 100 ;
                        let porcentagemCandidato3 = Math.round(((candidato3/numeroTotalVotos)*100) * 100) / 100 ;
                        let porcentagemBranco = Math.round(((branco/numeroTotalVotos)*100)*100) / 100;
                        let porcentagemNulo = Math.round(((nulo/numeroTotalVotos)*100)*100) / 100;
                
                        console.log("O " + nomeCandidato1 + " recebeu " + candidato1 + " votos | Porcentagem de votos: " + porcentagemCandidato1 + "%");
                        console.log("O " + nomeCandidato2 + " recebeu " + candidato2 + " votos | Porcentagem de votos: " + porcentagemCandidato2 + "%");
                        console.log("O " + nomeCandidato3 + " recebeu " + candidato3 + " votos | Porcentagem de votos: " + porcentagemCandidato3 + "%");
                
                        console.log("Recebemos " + branco + " votos em branco | Porcentagem de votos: " + porcentagemBranco  + "%")
                        console.log("Recebemos " + nulo + " votos nulos | Porcentagem de votos: " + porcentagemNulo  + "%")
                
                        if(candidato1 > candidato2 && candidato1 > candidato3){
                            console.log( nomeCandidato1 + " é o vencedor! com " + (porcentagemCandidato1 + porcentagemBranco) + "% dos votos" )
                        } else if(candidato2 > candidato1 && candidato2 > candidato3){
                            console.log(nomeCandidato2 + " é o vencedor! com " + (porcentagemCandidato1 + porcentagemBranco) + "% dos votos")
                        } else if(candidato3 > candidato1 && candidato3 > candidato2){
                            console.log(nomeCandidato3 + " é o vencedor! com " + (porcentagemCandidato1 + porcentagemBranco) + "% dos votos")
                        } else {
                            console.log("Houve empate na votação, será necessaria uma nova eleição.")
                        }
                    }
                }
            
                } else {
            modo = prompt("Modo selecionado é invalido! \n Qual o modo desejado? \n 0 para modo configuração \n 1 para modo votação")
            }
        } 
    }
} 

function verificaIntegridade(){
    fetch('script.js')
        .then(conteudo => conteudo.text())
        .then(conteudo => CryptoJS.SHA256(conteudo).toString())
        .then(hashUrnaAtual => {
            fetch('hashVerificado')
                .then(conteudo => conteudo.text())
                .then(hashVerificado => {
                    console.log(hashUrnaAtual)
                    if(hashUrnaAtual == hashVerificado){
                        liberahash = true; 
                        liberaverificacaohash = true;
                    } else {
                        console.log("Urna adulterada!!!!!!!!")
                        alert("urna adulterada !!!!!!!!!")
                    }     
                })
    });
}








// var numVotosCandidato1 = 0;
// var numVotosCandidato2 = 0;
// var numVotosCandidato3 = 0;
// var numVotosBranco = 0;
// var numVotosNulo = 0;

// var liberaInicio = 0;
// var confirmacaoReset = 0;

// var tempo = 1000;


// function inicializacao(){
//     if(liberaInicio == 0 && confirmacaoReset == 0){
//     document.getElementById('tela').innerHTML =  "Por favor, digite o  numero do seu candidato <br><br><br>";
//     document.getElementById('tela').innerHTML +=  "Para votar no candidato x, digite o numero 1 <br><br>";
//     document.getElementById('tela').innerHTML +=  "Para votar no candidato y, digite o numero 2 <br><br>";
//     document.getElementById('tela').innerHTML +=  "Para votar no candidato z, digite o numero 3 <br><br>";
//     liberaInicio = 1;
//     }
// }

// function votocandidato1(){
//     if(liberaInicio == 1){
//     numVotosCandidato1 += 1;
//     console.log("votos no candidato 1: " + numVotosCandidato1)
//     document.getElementById('tela').innerHTML =  "Você votou no candidato 1";
//     setTimeout(inicializacao, tempo);
//     liberaInicio = 0;
//     }
// }

// function votocandidato2(){
//     if(liberaInicio == 1){
//     numVotosCandidato2 += 1;
//     console.log("votos no candidato 2: " + numVotosCandidato2)
//     document.getElementById('tela').innerHTML =  "Você votou no candidato 2";
//     setTimeout(inicializacao, tempo);
//     liberaInicio = 0;
//     }
// }

// function votocandidato3(){
//     if(liberaInicio == 1){
//     numVotosCandidato3 += 1;
//     console.log("votos no candidato 3: " + numVotosCandidato3)
//     document.getElementById('tela').innerHTML =  "Você votou no candidato 3";
//     setTimeout(inicializacao, tempo);
//     liberaInicio = 0;
//     }
// }

// function votoembranco(){
//     if(liberaInicio == 1){
//     numVotosBranco += 1;
//     console.log("votos em branco: " + numVotosBranco)
//     document.getElementById('tela').innerHTML =  "Você votou em branco";
//     setTimeout(inicializacao, tempo);
//     liberaInicio = 0;
//     }
// }

// function votonulo(){
//     if(liberaInicio == 1){
//     numVotosNulo += 1;
//     console.log("votos nulos: " + numVotosNulo)
//     document.getElementById('tela').innerHTML =  "Você votou nulo";
//     setTimeout(inicializacao, tempo);
//     liberaInicio = 0;
//     }
// }

// function contagemvotos(){

//     let numVotosTotal = numVotosCandidato1 + numVotosCandidato2 + numVotosCandidato3 + numVotosBranco + numVotosNulo;

//     let porcenCandidato1 = (numVotosCandidato1 * 100) / numVotosTotal;
//     let porcenCandidato2 = (numVotosCandidato2 * 100) / numVotosTotal;
//     let porcenCandidato3 = (numVotosCandidato3 * 100) / numVotosTotal;
//     let porcenBrancos = (numVotosBranco * 100) / numVotosTotal;
//     let porcenNulos = (numVotosNulo * 100) / numVotosTotal;

//     document.getElementById('tela').innerHTML =  "Resultado da votação: <br><br>";
//     document.getElementById('tela').innerHTML +=  "Quantidade de votos do candidato 1: " + numVotosCandidato1 + " Porcentagem de votos: " + Math.trunc(porcenCandidato1 * 100) / 100 + " %"+ "<br>";
//     document.getElementById('tela').innerHTML +=  "Quantidade de votos do candidato 2: " + numVotosCandidato2 + " Porcentagem de votos: " + Math.trunc(porcenCandidato2 * 100) / 100 + " %"+ "<br>";
//     document.getElementById('tela').innerHTML +=  "Quantidade de votos do candidato 3: " + numVotosCandidato3 + " Porcentagem de votos: " + Math.trunc(porcenCandidato3 * 100) / 100 + " %"+ "<br>";
//     document.getElementById('tela').innerHTML +=  "Quantidade de votos em branco: " + numVotosBranco + " Porcentagem de votos: " + Math.trunc(porcenBrancos * 100) / 100  + " %"+ "<br>";
//     document.getElementById('tela').innerHTML +=  "Quantidade de votos nulos: " + numVotosNulo + " Porcentagem de votos: " + Math.trunc(porcenNulos * 100) / 100 + " %"+ "<br><br>";


//     if(numVotosCandidato1 > numVotosCandidato2){
//         if(numVotosCandidato1 > numVotosCandidato3){
//         document.getElementById('tela').innerHTML +=  "Candidadto 1 é o vencedor com: " + (numVotosCandidato1 + numVotosBranco) + " votos <br>";
//         } else if (numVotosCandidato3 > numVotosCandidato2){
//         document.getElementById('tela').innerHTML +=  "Candidadto 3 é o vencedor com: " + (numVotosCandidato3 + numVotosBranco) + " votos <br>";
//         } else {
//         document.getElementById('tela').innerHTML +=  "Candidadto 2 é o vencedor com: " + (numVotosCandidato2 + numVotosBranco) + " votos <br>";
//         }
//     }else if(numVotosCandidato2 > numVotosCandidato3){
//         document.getElementById('tela').innerHTML +=  "Candidadto 2 é o vencedor com: " + (numVotosCandidato2 + numVotosBranco) + " votos <br>"; 
//         } else {
//         document.getElementById('tela').innerHTML +=  "Candidadto 3 é o vencedor com: " + (numVotosCandidato3 + numVotosBranco) + " votos ";   
//         }
    
//     document.getElementById('tela').innerHTML +=  "<br><br><br> Pressione reset para zerar a votação.";
// }

// function encerravotacao(){
//     confirmacaoReset = 1;
//     contagemvotos();
// }

// function reset(){

//     numVotosCandidato1 = 0;
//     numVotosCandidato2 = 0;
//     numVotosCandidato3 = 0;
//     numVotosBranco = 0;
//     numVotosNulo = 0;

//     document.getElementById('tela').innerHTML =  "Pressione iniciar para iniciar uma nova votação.";

//     liberaInicio = 0;
//     confirmacaoReset = 0;
// }