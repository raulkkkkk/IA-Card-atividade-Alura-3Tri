const botaoIniciar = document.querySelector(".iniciar-btn");
const telaInicial = document.querySelector(".tela-inicial");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const tituloCartao = document.querySelector(".titulo-cartao");
const textoCartao = document.querySelector(".texto-cartao");
const botaoProximo = document.querySelector(".proximo-btn");

// Lista com os pontos negativos do impacto da IA
const pontosNegativos = [
    {
        titulo: "Desemprego e Automação",
        texto: "A substituição de tarefas humanas por algoritmos pode causar demissões em massa e exigirá a requalificação acelerada de milhões de trabalhadores."
    },
    {
        titulo: "Desinformação e Deepfakes",
        texto: "A criação de áudios, imagens e vídeos falsos extremamente realistas facilita a proliferação de notícias falsas e manipulação política."
    },
    {
        titulo: "Privacidade e Vigilância",
        texto: "A coleta ostensiva de dados para treinar modelos de IA pode acabar com a privacidade individual e alimentar sistemas de vigilância em massa."
    },
    {
        titulo: "Viés e Discriminação Algorítmica",
        texto: "Como as IAs aprendem com dados históricos, elas podem perpetuar ou amplificar preconceitos de raça, gênero e classe social."
    },
    {
        titulo: "Dependência Tecnológica",
        texto: "A dependência excessiva de sistemas inteligentes pode enfraquecer o raciocínio crítico, a criatividade e a capacidade humana de resolver problemas."
    }
];

let indiceAtual = 0;

botaoIniciar.addEventListener('click', iniciaExploracao);
botaoProximo.addEventListener('click', exibeProximoCartao);

function iniciaExploracao() {
    telaInicial.style.display = 'none';
    caixaPerguntas.classList.add("mostrar");
    carregaCartao();
}

function carregaCartao() {
    const ponto = pontosNegativos[indiceAtual];
    tituloCartao.textContent = ponto.titulo;
    textoCartao.textContent = ponto.texto;
}

function exibeProximoCartao() {
    // Avança para o próximo item e volta ao início se chegar ao fim da lista
    indiceAtual = (indiceAtual + 1) % pontosNegativos.length;
    carregaCartao();
}
