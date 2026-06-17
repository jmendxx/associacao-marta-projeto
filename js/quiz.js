// QUIZ

const perguntas = [

    "Seu parceiro controla suas amizades?",

    "Você sente medo de discordar dele?",

    "Ele monitora suas redes sociais?",

    "Ele controla seu dinheiro?",

    "Ele tenta afastá-la da família ou amigos?"
];

let perguntaAtual = 0;

let pontuacao = 0;

const perguntaElemento =
    document.getElementById("pergunta");

const infoElemento =
    document.getElementById("quiz-info");

const barra =
    document.getElementById("barra-progresso");

const resultado =
    document.getElementById("resultado-quiz");

function iniciarQuiz() {

    perguntaAtual = 0;

    pontuacao = 0;

    resultado.innerHTML = "";

    document.getElementById("quiz")
        .style.display = "block";

    carregarPergunta();
}

function carregarPergunta() {

    perguntaElemento.innerText =
        perguntas[perguntaAtual];

    infoElemento.innerText =
        `Pergunta ${perguntaAtual + 1} de ${perguntas.length}`;

    const progresso =
        ((perguntaAtual) / perguntas.length) * 100;

    barra.style.width =
        `${progresso}%`;
}

function responder(sim) {

    if (sim) {

        pontuacao++;
    }

    perguntaAtual++;

    if (perguntaAtual < perguntas.length) {

        carregarPergunta();

    } else {

        mostrarResultado();
    }
}

function mostrarResultado() {

    document.getElementById("quiz")
        .style.display = "none";

    barra.style.width = "100%";

    let classe = "";
    let mensagem = "";

    if (pontuacao <= 1) {

        classe = "resultado-verde";

        mensagem =
            "Nenhum sinal de alerta foi identificado neste momento. No entanto, conhecer os sinais de violência e relacionamentos abusivos é uma forma importante de prevenção. O respeito, a confiança e a liberdade devem estar presentes em toda relação saudável.";

    } else if (pontuacao <= 3) {

        classe = "resultado-amarelo";

        mensagem =
            "Alguns comportamentos identificados merecem atenção e reflexão. Nem sempre situações de abuso são percebidas imediatamente, por isso é importante observar como você se sente dentro da relação e se suas escolhas, amizades e decisões são respeitadas.";

    } else {

        classe = "resultado-vermelho";

        mensagem =
            "Foram identificados diversos sinais de alerta que podem indicar comportamentos abusivos. Controle excessivo, isolamento, medo constante ou restrições à liberdade são atitudes que não fazem parte de relacionamentos saudáveis. Buscar informação, fortalecer sua rede de apoio e conversar com pessoas de confiança pode ser um passo importante.";
    }

    resultado.innerHTML = `
        <div class="resultado-card ${classe}">

            <h3 class="titulo-resultado">

                Resultado da Avaliação

            </h3>

            <p class="pontuacao-quiz">

                Você marcou ${pontuacao}
                sinal(is) de alerta.

            </p>

            <p class="mensagem-quiz">

                ${mensagem}

            </p>

            <button
                class="btn-refazer"
                onclick="iniciarQuiz()">

                Refazer Teste

            </button>

        </div>
    `;
}

// inicia automaticamente

document.addEventListener(
    "DOMContentLoaded",
    iniciarQuiz
);s