// Mapeamento dos elementos HTML
const botaoIniciar = document.querySelector(".iniciar-btn");
const telaInicial = document.querySelector(".tela-inicial");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoJogarNovamente = document.querySelector(".novamente-btn");

let atual = 0;
let historiaFinal = "";

// Ouvinte de evento no botão Iniciar
botaoIniciar.addEventListener('click', iniciaJogo);

// Função que inicia a experiência
function iniciaJogo() {
    atual = 0;
    historiaFinal = "";
    telaInicial.style.display = 'none';
    
    caixaPerguntas.classList.remove("mostrar");
    caixaAlternativas.classList.remove("mostrar");
    caixaResultado.classList.remove("mostrar");
    
    mostraPergunta();
}

// Função para exibir a pergunta atual (exemplo básico para funcionalidade)
function mostraPergunta() {
    caixaPerguntas.classList.add("mostrar");
    caixaAlternativas.classList.add("mostrar");
    caixaPerguntas.textContent = "Você acredita que a Inteligência Artificial pode nos substituir?";
}

function substituiNome() {
    // Lógica adicional para personalização, caso necessário
}

// Execução inicial
substituiNome();
