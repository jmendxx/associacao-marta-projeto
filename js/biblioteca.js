// CONTEÚDOS DA BIBLIOTECA

const conteudos = [

    {
        titulo: 'Controle de Gastos',

        categoria: 'Educação Financeira',

        descricao:
            'Aprenda a organizar receitas e despesas.',

        imagem:
            'assets/gastos.jpg',

        id: 'gastos'
    },

    {
        titulo: 'Autoestima',

        categoria: 'Autocuidado',

        descricao:
            'Fortaleça sua autoconfiança e bem-estar emocional.',

        imagem:
            'assets/autoestima.jpg',

        id: 'autoestima'
    },

    {
        titulo: 'Comunicação Respeitosa',

        categoria: 'Relacionamentos',

        descricao:
            'Aprenda a construir relações baseadas no diálogo e respeito.',

        imagem:
            'assets/comunicacao.jpg',

        id: 'comunicacao'
    },

    {
        titulo: 'Empreendedorismo Feminino',

        categoria: 'Oficinas',

        descricao:
            'Desenvolva habilidades para criar e fortalecer seu negócio.',

        imagem:
            'assets/empreendedorismo.jpg',

        id: 'empreendedorismo'
    }

];

// ELEMENTOS

const lista =
    document.getElementById(
        'listaConteudos'
    );

const contador =
    document.getElementById(
        'contadorConteudos'
    );

// RENDERIZAÇÃO DOS CARDS

function renderizar(
    categoria = 'todos'
) {

    lista.innerHTML = '';

    let quantidade = 0;

    conteudos.forEach(
        conteudo => {

            if (

                categoria === 'todos' ||

                conteudo.categoria === categoria

            ) {

                quantidade++;

                lista.innerHTML += `

                    <div class="card">

                        <img
                            src="${conteudo.imagem}"
                            alt="${conteudo.titulo}"
                            class="card-imagem">

                        <span class="categoria-card">

                            ${conteudo.categoria}

                        </span>

                        <h3>

                            ${conteudo.titulo}

                        </h3>

                        <p>

                            ${conteudo.descricao}

                        </p>

                        <a href="conteudos.html?id=${conteudo.id}" class="btn-explorar">
    
                            Explorar Conteúdo

                            <i class="fa-solid fa-arrow-right"></i>

                        </a>

                    </div>

                `;
            }

        }
    );

    contador.innerText =
        `${quantidade} conteúdo(s) encontrado(s)`;
}

// FILTROS

const botoesFiltro =
    document.querySelectorAll(
        '.btn-filtro'
    );

botoesFiltro.forEach(
    botao => {

        botao.addEventListener(
            'click',
            () => {

                botoesFiltro.forEach(
                    btn =>
                    btn.classList.remove(
                        'ativo'
                    )
                );

                botao.classList.add(
                    'ativo'
                );

                renderizar(
                    botao.dataset.categoria
                );

            }
        );

    }
);

// PESQUISA

const campoPesquisa =
    document.getElementById(
        'campoPesquisa'
    );

campoPesquisa.addEventListener(
    'input',
    function () {

        const termo =
            this.value.toLowerCase();

        const cards =
            document.querySelectorAll(
                '.card'
            );

        let encontrou = false;

        cards.forEach(
            card => {

                const texto =
                    card.innerText
                    .toLowerCase();

                const visivel =
                    texto.includes(
                        termo
                    );

                card.style.display =
                    visivel
                    ? 'block'
                    : 'none';

                if (visivel) {

                    encontrou = true;
                }

            }
        );

        document
            .getElementById(
                'semResultados'
            )
            .style.display =

            encontrou
            ? 'none'
            : 'block';

    }
);

// INICIALIZAÇÃO

renderizar();