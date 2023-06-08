// Crio um array com todas as perguntas. 
const formSteps = document.getElementsByClassName('form-step');

// Defino o form inicial
var currentStep = 1;

// Função para exibir a etapa atual do formulário
 function showStep(currentStep) {

    // Identifico todos os elementos pela classe
   

    //Laço de repetição que identifica todos os elementos com a form-step e aplica display: none
    for (let i = 0; i < formSteps.length; i++) {
        formSteps[i].style.display = 'none';
    }

    var nID = 'step' + currentStep;
    document.getElementById(nID).style.display = 'block';
}

// Função para avançar para a próxima etapa
function nextStep() {
    if (currentStep >= formSteps.length){
        // Nada acontece
    } else {
        currentStep += 1;
        showStep(currentStep);
    }    
    
}

// Função para voltar para a etapa anterior
function prevStep() {
    if (currentStep <= 1){
        // Nada acontece
    } else {
        currentStep -= 1;
        showStep(currentStep);
    }
}

showStep(1)

 // Objeto com propriedades com os perfis coletados. 
 // Cada perfil é alimentado de acordo com as respostas do usuário. 
const numRespostasPerfil = {
    aventureiro: 0,
    equilibrado: 0,
    conservador: 0,
    introvertido: 0
};

// Função para calcular o perfil predominante
function calcularPerfilPredominante() {
    let perfilPredominante = 'aventureiro';
    let maxRespostas = numRespostasPerfil.aventureiro;

    if (numRespostasPerfil.equilibrado > maxRespostas) {
        perfilPredominante = 'equilibrado';
        maxRespostas = numRespostasPerfil.equilibrado;
    }
    if (numRespostasPerfil.conservador > maxRespostas) {
        perfilPredominante = 'conservador';
        maxRespostas = numRespostasPerfil.conservador;
    }
    if (numRespostasPerfil.introvertido > maxRespostas) {
        perfilPredominante = 'introvertido';
        maxRespostas = numRespostasPerfil.introvertido;
    }

    return perfilPredominante;
}

// Função para fazer o processamento das respostas
function processarRespostas(respostas) {
    for (let i = 0; i < respostas.length; i++) {
        const resposta = respostas[i];
        const perfil = resposta.perfil;
        numRespostasPerfil[perfil]++;
    }

    const perfilPredominante = calcularPerfilPredominante();
    
    const containerResposta = document.getElementById("container-resposta");
    containerResposta.innerHTML = 'Perfil predominante: ' + perfilPredominante

    console.log('Perfil predominante: ' + perfilPredominante);
}

// Função para processar as respostas ao clicar no botão
function enviarFormulario() {
    const respostas = [];
    const form = document.querySelector('form');
    const perguntas = form.querySelectorAll('h3');

    perguntas.forEach((pergunta, index) => {
        const respostaSelecionada = form.querySelector(`input[name="resposta${index + 1}"]:checked`);

        if (respostaSelecionada) {
            const resposta = {
                perfil: respostaSelecionada.dataset.perfil,
                resposta: respostaSelecionada.value
            };
            respostas.push(resposta);
        }
    });

    // Chamando a função para processar as respostas
    processarRespostas(respostas);
}

// Adicione um event listener para o botão de processar respostas
const botaoProcessar = document.getElementById('botao-processar');
botaoProcessar.addEventListener('click', enviarFormulario);

const botaoAnterior = document.getElementById('botao-anterior');
botaoAnterior.addEventListener('click', nextStep);

const botaoProximo = document.getElementById('botao-proximo');
botaoProximo.addEventListener('click', prevStep);