const parametros =
    new URLSearchParams(
        window.location.search
    );

const id =
    parametros.get('id');

    const conteudos = {

    // RELACIONAMENTOS SAUDÁVEIS

comunicacao: {

    categoria: 'Relacionamentos',

    titulo:
        'Comunicação Respeitosa',

    descricao:
        'A comunicação respeitosa fortalece vínculos saudáveis e ajuda a resolver conflitos sem agressões ou desrespeito.',

    imagem:
        'assets/comunicacao.jpg',

    aprendizados: [

        'Expressar sentimentos de forma saudável',

        'Praticar a escuta ativa',

        'Resolver conflitos com diálogo',

        'Estabelecer limites respeitosos'
    ],

    videos: [

        'https://www.youtube.com/embed/dQw4w9WgXcQ'
    ],

    materiais: [

        {
            titulo: 'Guia de Comunicação Não Violenta',
            descricao: 'Princípios básicos para melhorar o diálogo em relacionamentos.',
            link: '#'
        },

        {
            titulo: 'Exercícios de Escuta Ativa',
            descricao: 'Atividades para desenvolver uma comunicação mais empática.',
            link: '#'
        }
    ],

    especialistas: [

        {
            nome: 'Psicóloga de Relacionamentos',
            descricao: 'Orientações sobre diálogo saudável e resolução de conflitos.'
        },

        {
            nome: 'Mediadora Familiar',
            descricao: 'Estratégias para fortalecer a comunicação entre pessoas.'
        }
    ],

    oficinas: [

        {
            titulo: 'Comunicação Assertiva',
            descricao: 'Aprenda a expressar opiniões e sentimentos com respeito.'
        },

        {
            titulo: 'Resolução de Conflitos',
            descricao: 'Técnicas para lidar com divergências de forma saudável.'
        }
    ],

    relacionados: [

        {
            titulo: 'Confiança Mútua',
            id: 'confianca'
        },

        {
            titulo: 'Apoio Emocional',
            id: 'apoio'
        },

        {
            titulo: 'Respeito à Individualidade',
            id: 'individualidade'
        }
    ]
},

confianca: {

    categoria: 'Relacionamentos',

    titulo:
        'Confiança Mútua',

    descricao:
        'A confiança é construída por meio do respeito, da honestidade e da liberdade individual dentro de uma relação.',

    imagem:
        'assets/imagens/confianca.jpg',

    aprendizados: [

        'Reconhecer atitudes que fortalecem a confiança',

        'Desenvolver transparência na relação',

        'Respeitar a privacidade do outro',

        'Construir segurança emocional'
    ],

    videos: [

        'https://www.youtube.com/embed/dQw4w9WgXcQ'
    ],

    materiais: [

        {
            titulo: 'Construindo Relações de Confiança',
            descricao: 'Material educativo sobre confiança e respeito.'
        },

        {
            titulo: 'Privacidade e Limites',
            descricao: 'Como manter relações saudáveis sem controle excessivo.'
        }
    ],

    especialistas: [

        {
            nome: 'Psicóloga Clínica',
            descricao: 'Orientações sobre confiança e vínculos afetivos.'
        },

        {
            nome: 'Terapeuta Familiar',
            descricao: 'Dicas para fortalecer relações saudáveis.'
        }
    ],

    oficinas: [

        {
            titulo: 'Fortalecendo a Confiança',
            descricao: 'Atividades para desenvolver relações mais seguras.'
        },

        {
            titulo: 'Limites Saudáveis',
            descricao: 'Como respeitar espaços individuais.'
        }
    ],

    relacionados: [

        {
            titulo: 'Comunicação Respeitosa',
            id: 'comunicacao'
        },

        {
            titulo: 'Apoio Emocional',
            id: 'apoio'
        },

        {
            titulo: 'Respeito à Individualidade',
            id: 'individualidade'
        }
    ]
},

individualidade: {

    categoria: 'Relacionamentos',

    titulo:
        'Respeito à Individualidade',

    descricao:
        'Relacionamentos saudáveis permitem que cada pessoa mantenha sua identidade, amizades, objetivos e interesses próprios.',

    imagem:
        'assets/individualidade.jpg',

    aprendizados: [

        'Reconhecer a importância da autonomia',

        'Respeitar escolhas pessoais',

        'Valorizar amizades e projetos individuais',

        'Evitar comportamentos controladores'
    ],

    videos: [

        'https://www.youtube.com/embed/dQw4w9WgXcQ'
    ],

    materiais: [

        {
            titulo: 'Autonomia nos Relacionamentos',
            descricao: 'Entenda a importância da independência emocional.'
        },

        {
            titulo: 'Limites e Respeito',
            descricao: 'Como preservar a individualidade de forma saudável.'
        }
    ],

    especialistas: [

        {
            nome: 'Psicóloga Social',
            descricao: 'Conteúdo sobre autonomia e autoestima.'
        },

        {
            nome: 'Especialista em Desenvolvimento Humano',
            descricao: 'Reflexões sobre identidade e relacionamentos.'
        }
    ],

    oficinas: [

        {
            titulo: 'Autoconhecimento',
            descricao: 'Fortaleça sua identidade e seus objetivos.'
        },

        {
            titulo: 'Relacionamentos Saudáveis',
            descricao: 'Como equilibrar vida pessoal e vida afetiva.'
        }
    ],

    relacionados: [

        {
            titulo: 'Comunicação Respeitosa',
            id: 'comunicacao'
        },

        {
            titulo: 'Confiança Mútua',
            id: 'confianca'
        },

        {
            titulo: 'Apoio Emocional',
            id: 'apoio'
        }
    ]
},

apoio: {

    categoria: 'Relacionamentos',

    titulo:
        'Apoio Emocional',

    descricao:
        'O apoio emocional fortalece a confiança, promove segurança e contribui para o bem-estar dentro das relações.',

    imagem:
        'assets/apoio.jpg',

    aprendizados: [

        'Reconhecer necessidades emocionais',

        'Praticar empatia',

        'Oferecer apoio sem julgamentos',

        'Fortalecer vínculos afetivos'
    ],

    videos: [

        'https://www.youtube.com/embed/dQw4w9WgXcQ'
    ],

    materiais: [

        {
            titulo: 'Empatia e Apoio Emocional',
            descricao: 'Estratégias para acolher sentimentos de forma saudável.'
        },

        {
            titulo: 'Rede de Apoio',
            descricao: 'A importância de contar com pessoas de confiança.'
        }
    ],

    especialistas: [

        {
            nome: 'Psicóloga Especialista em Saúde Mental',
            descricao: 'Conteúdos sobre acolhimento emocional.'
        },

        {
            nome: 'Assistente Social',
            descricao: 'Orientações sobre fortalecimento de redes de apoio.'
        }
    ],

    oficinas: [

        {
            titulo: 'Empatia na Prática',
            descricao: 'Aprenda a acolher e apoiar outras pessoas.'
        },

        {
            titulo: 'Fortalecimento de Vínculos',
            descricao: 'Atividades para melhorar relações interpessoais.'
        }
    ],

    relacionados: [

        {
            titulo: 'Comunicação Respeitosa',
            id: 'comunicacao'
        },

        {
            titulo: 'Confiança Mútua',
            id: 'confianca'
        },

        {
            titulo: 'Respeito à Individualidade',
            id: 'individualidade'
        }
    ]
},

    // EDUCAÇÃO PARA JOVENS

redflags: {

    categoria: 'Educação para Jovens',

    titulo:
        'Red Flags',

    descricao:
        'Aprenda a identificar sinais de alerta em relacionamentos para construir relações mais saudáveis e seguras.',

    imagem:
        'assets/redflags.jpg',

    aprendizados: [

        'Reconhecer comportamentos abusivos',

        'Identificar manipulação emocional',

        'Perceber sinais de controle excessivo',

        'Fortalecer a autoestima e os limites pessoais'
    ],

    videos: [

        'https://www.youtube.com/embed/Ov5f7s6Lq9s'
    ],

    materiais: [

        {
            titulo: 'Guia de Sinais de Relacionamentos Abusivos',
            descricao: 'Material educativo para identificar comportamentos prejudiciais.',
            link: '#'
        },

        {
            titulo: 'Cartilha sobre Violência Psicológica',
            descricao: 'Informações sobre manipulação, controle e abuso emocional.',
            link: '#'
        }
    ],

    especialistas: [

        {
            nome: 'Psicóloga Especialista em Relacionamentos',
            descricao: 'Orientações sobre relacionamentos saudáveis.'
        },

        {
            nome: 'Assistente Social',
            descricao: 'Apoio e acolhimento para jovens em situação de vulnerabilidade.'
        }
    ],

    oficinas: [

        {
            titulo: 'Identificando Sinais de Alerta',
            descricao: 'Aprenda a reconhecer comportamentos abusivos.'
        },

        {
            titulo: 'Fortalecimento da Autoestima',
            descricao: 'Atividades para desenvolver confiança e autonomia.'
        }
    ],

    relacionados: [

        {
            titulo: 'Relacionamentos na Adolescência',
            id: 'adolescencia'
        },

        {
            titulo: 'Inteligência Emocional',
            id: 'inteligenciaEmocional'
        },

        {
            titulo: 'Comunicação Respeitosa',
            id: 'comunicacao'
        }
    ]
},

violenciaDigital: {

    categoria: 'Educação para Jovens',

    titulo:
        'Violência Digital',

    descricao:
        'Entenda como o controle e o abuso podem acontecer no ambiente virtual e aprenda a proteger sua privacidade.',

    imagem:
        'assets/violencia-digital.jpg',

    aprendizados: [

        'Reconhecer práticas de controle digital',

        'Proteger dados e informações pessoais',

        'Entender os limites da privacidade',

        'Utilizar a internet de forma segura'
    ],

    videos: [

        'https://www.youtube.com/embed/W3fJ2JwV6tM'
    ],

    materiais: [

        {
            titulo: 'Cartilha de Segurança Digital',
            descricao: 'Boas práticas para proteger sua privacidade online.',
            link: '#'
        },

        {
            titulo: 'Guia de Combate ao Cyberbullying',
            descricao: 'Informações sobre prevenção e denúncia.',
            link: '#'
        }
    ],

    especialistas: [

        {
            nome: 'Especialista em Segurança Digital',
            descricao: 'Orientações sobre proteção de dados pessoais.'
        },

        {
            nome: 'Psicóloga Escolar',
            descricao: 'Apoio para situações de violência online.'
        }
    ],

    oficinas: [

        {
            titulo: 'Privacidade nas Redes Sociais',
            descricao: 'Aprenda a configurar sua segurança digital.'
        },

        {
            titulo: 'Uso Consciente da Internet',
            descricao: 'Boas práticas para navegação segura.'
        }
    ],

    relacionados: [

        {
            titulo: 'Red Flags',
            id: 'redflags'
        },

        {
            titulo: 'Inteligência Emocional',
            id: 'inteligenciaEmocional'
        },

        {
            titulo: 'Relacionamentos na Adolescência',
            id: 'adolescencia'
        }
    ]
},

adolescencia: {

    categoria: 'Educação para Jovens',

    titulo:
        'Relacionamentos na Adolescência',

    descricao:
        'Conheça os pilares de relacionamentos saudáveis durante a adolescência, baseados em respeito, diálogo e liberdade.',

    imagem:
        'assets/adolescencia.jpg',

    aprendizados: [

        'Construir relações baseadas no respeito',

        'Desenvolver comunicação saudável',

        'Respeitar limites individuais',

        'Fortalecer a autonomia emocional'
    ],

    videos: [

        'https://www.youtube.com/embed/rQj2iS5Jr6E'
    ],

    materiais: [

        {
            titulo: 'Guia para Relacionamentos Saudáveis',
            descricao: 'Material sobre respeito e convivência saudável.',
            link: '#'
        },

        {
            titulo: 'Cartilha Juventude e Afetividade',
            descricao: 'Reflexões sobre relacionamentos na adolescência.',
            link: '#'
        }
    ],

    especialistas: [

        {
            nome: 'Psicóloga Infantil e Juvenil',
            descricao: 'Orientação sobre desenvolvimento emocional.'
        },

        {
            nome: 'Educadora Social',
            descricao: 'Atuação em projetos com adolescentes.'
        }
    ],

    oficinas: [

        {
            titulo: 'Construindo Relações Saudáveis',
            descricao: 'Atividades sobre respeito e convivência.'
        },

        {
            titulo: 'Comunicação e Empatia',
            descricao: 'Desenvolvimento de habilidades socioemocionais.'
        }
    ],

    relacionados: [

        {
            titulo: 'Comunicação Respeitosa',
            id: 'comunicacao'
        },

        {
            titulo: 'Red Flags',
            id: 'redflags'
        },

        {
            titulo: 'Inteligência Emocional',
            id: 'inteligenciaEmocional'
        }
    ]
},

inteligenciaEmocional: {

    categoria: 'Educação para Jovens',

    titulo:
        'Inteligência Emocional',

    descricao:
        'Aprenda a reconhecer emoções, lidar com conflitos e desenvolver habilidades importantes para a vida pessoal e social.',

    imagem:
        'assets/inteligencia-emocional.jpg',

    aprendizados: [

        'Reconhecer e compreender emoções',

        'Desenvolver empatia',

        'Lidar com conflitos de forma saudável',

        'Melhorar o autocontrole emocional'
    ],

    videos: [

        'https://www.youtube.com/embed/lQ8M4J8J4GQ'
    ],

    materiais: [

        {
            titulo: 'Guia de Inteligência Emocional',
            descricao: 'Conceitos básicos para desenvolver habilidades emocionais.',
            link: '#'
        },

        {
            titulo: 'Exercícios de Autoconhecimento',
            descricao: 'Atividades práticas para identificar emoções.',
            link: '#'
        }
    ],

    especialistas: [

        {
            nome: 'Psicóloga Clínica',
            descricao: 'Especialista em desenvolvimento emocional.'
        },

        {
            nome: 'Coach Socioemocional',
            descricao: 'Orientações sobre inteligência emocional.'
        }
    ],

    oficinas: [

        {
            titulo: 'Autoconhecimento e Emoções',
            descricao: 'Aprenda a compreender seus sentimentos.'
        },

        {
            titulo: 'Empatia e Resolução de Conflitos',
            descricao: 'Desenvolvimento de habilidades interpessoais.'
        }
    ],

    relacionados: [

        {
            titulo: 'Relacionamentos na Adolescência',
            id: 'adolescencia'
        },

        {
            titulo: 'Red Flags',
            id: 'redflags'
        },

        {
            titulo: 'Autoestima',
            id: 'autoestima'
        }
    ]
},

    // OFICINAS E CAPACITAÇÕES

    empreendedorismo: {

    categoria: 'Oficinas',

    titulo:
        'Empreendedorismo Feminino',

    descricao:
        'O empreendedorismo feminino é uma ferramenta importante para geração de renda, autonomia financeira e fortalecimento da independência das mulheres.',

    imagem:
        'assets/empreendedorismo.jpg',

    aprendizados: [

        'Identificar oportunidades de negócio',

        'Planejar produtos e serviços',

        'Organizar finanças do empreendimento',

        'Desenvolver autonomia financeira'
    ],

    videos: [

        'https://www.youtube.com/embed/7g7iA3v6k1s'
    ],

    materiais: [

        {
            titulo: 'Guia de Empreendedorismo Feminino',
            descricao: 'Material introdutório para quem deseja começar um negócio.',
            link: '#'
        },

        {
            titulo: 'Modelo de Plano de Negócios',
            descricao: 'Ferramenta para estruturar ideias empreendedoras.',
            link: '#'
        }
    ],

    especialistas: [

        {
            nome: 'Consultora de Negócios',
            descricao: 'Orientação para criação e gestão de pequenos negócios.'
        },

        {
            nome: 'Mentora de Empreendedorismo',
            descricao: 'Apoio ao desenvolvimento de projetos e geração de renda.'
        }
    ],

    oficinas: [

        {
            titulo: 'Primeiros Passos para Empreender',
            descricao: 'Aprenda conceitos básicos para iniciar um negócio.'
        },

        {
            titulo: 'Gestão Financeira para Empreendedoras',
            descricao: 'Controle de receitas, despesas e precificação.'
        }
    ],

    relacionados: [

        {
            titulo: 'Marketing Digital',
            id: 'marketing'
        },

        {
            titulo: 'Planejamento Financeiro',
            id: 'planejamento'
        },

        {
            titulo: 'Independência Financeira',
            id: 'independencia'
        }
    ]
},

marketing: {

    categoria: 'Oficinas',

    titulo:
        'Marketing Digital',

    descricao:
        'O marketing digital permite divulgar produtos, serviços e projetos utilizando redes sociais e ferramentas online.',

    imagem:
        'assets/marketing.jpg',

    aprendizados: [

        'Criar conteúdo para redes sociais',

        'Conhecer estratégias de divulgação',

        'Atrair e engajar público',

        'Fortalecer presença digital'
    ],

    videos: [

        'https://www.youtube.com/embed/uXWycyeTeCs'
    ],

    materiais: [

        {
            titulo: 'Guia de Redes Sociais',
            descricao: 'Boas práticas para divulgação online.',
            link: '#'
        },

        {
            titulo: 'Calendário de Conteúdo',
            descricao: 'Modelo para organizar publicações.',
            link: '#'
        }
    ],

    especialistas: [

        {
            nome: 'Especialista em Marketing Digital',
            descricao: 'Estratégias para divulgação de marcas e serviços.'
        },

        {
            nome: 'Social Media',
            descricao: 'Planejamento e produção de conteúdo para redes sociais.'
        }
    ],

    oficinas: [

        {
            titulo: 'Marketing para Pequenos Negócios',
            descricao: 'Como divulgar produtos e serviços na internet.'
        },

        {
            titulo: 'Criação de Conteúdo',
            descricao: 'Aprenda a produzir posts atrativos.'
        }
    ],

    relacionados: [

        {
            titulo: 'Canva para Iniciantes',
            id: 'canva'
        },

        {
            titulo: 'Empreendedorismo Feminino',
            id: 'empreendedorismo'
        },

        {
            titulo: 'Currículo Profissional',
            id: 'curriculo'
        }
    ]
},

curriculo: {

    categoria: 'Oficinas',

    titulo:
        'Currículo Profissional',

    descricao:
        'Um currículo bem elaborado aumenta as oportunidades de inserção no mercado de trabalho e valoriza experiências e competências.',

    imagem:
        'assets/curriculo.jpg',

    aprendizados: [

        'Organizar informações profissionais',

        'Destacar habilidades e competências',

        'Apresentar experiências de forma objetiva',

        'Preparar-se para processos seletivos'
    ],

    videos: [

        'https://www.youtube.com/embed/xFfL8yG8x3Y'
    ],

    materiais: [

        {
            titulo: 'Modelo de Currículo',
            descricao: 'Estrutura básica para criação de currículo.',
            link: '#'
        },

        {
            titulo: 'Guia para Entrevistas',
            descricao: 'Dicas para processos seletivos.',
            link: '#'
        }
    ],

    especialistas: [

        {
            nome: 'Analista de Recursos Humanos',
            descricao: 'Orientações para elaboração de currículo.'
        },

        {
            nome: 'Consultora de Carreira',
            descricao: 'Desenvolvimento profissional e empregabilidade.'
        }
    ],

    oficinas: [

        {
            titulo: 'Construção de Currículo',
            descricao: 'Aprenda a elaborar um currículo atrativo.'
        },

        {
            titulo: 'Preparação para Entrevistas',
            descricao: 'Técnicas para processos seletivos.'
        }
    ],

    relacionados: [

        {
            titulo: 'Empreendedorismo Feminino',
            id: 'empreendedorismo'
        },

        {
            titulo: 'Marketing Digital',
            id: 'marketing'
        },

        {
            titulo: 'Autoestima',
            id: 'autoestima'
        }
    ]
},

canva: {

    categoria: 'Oficinas',

    titulo:
        'Canva para Iniciantes',

    descricao:
        'O Canva é uma ferramenta simples e acessível para criação de artes, apresentações, currículos e materiais para redes sociais.',

    imagem:
        'assets/canva.jpg',

    aprendizados: [

        'Criar designs profissionais',

        'Utilizar modelos prontos',

        'Produzir materiais para redes sociais',

        'Desenvolver apresentações visuais'
    ],

    videos: [

        'https://www.youtube.com/embed/U0A8tLhJz7A'
    ],

    materiais: [

        {
            titulo: 'Guia Básico do Canva',
            descricao: 'Primeiros passos para utilizar a plataforma.',
            link: '#'
        },

        {
            titulo: 'Modelos Gratuitos',
            descricao: 'Sugestões de templates para diferentes projetos.',
            link: '#'
        }
    ],

    especialistas: [

        {
            nome: 'Designer Gráfico',
            descricao: 'Criação de materiais visuais para comunicação.'
        },

        {
            nome: 'Instrutora de Canva',
            descricao: 'Ensino de ferramentas de design para iniciantes.'
        }
    ],

    oficinas: [

        {
            titulo: 'Canva para Redes Sociais',
            descricao: 'Criação de posts e conteúdos visuais.'
        },

        {
            titulo: 'Design para Iniciantes',
            descricao: 'Princípios básicos de comunicação visual.'
        }
    ],

    relacionados: [

        {
            titulo: 'Marketing Digital',
            id: 'marketing'
        },

        {
            titulo: 'Currículo Profissional',
            id: 'curriculo'
        },

        {
            titulo: 'Empreendedorismo Feminino',
            id: 'empreendedorismo'
        }
    ]
},

    // EDUCAÇÃO FINANCEIRA

    gastos: {

    categoria: 'Educação Financeira',

    titulo:
        'Controle de Gastos',

    descricao:
        'Aprender a controlar gastos é um passo importante para desenvolver autonomia financeira, evitar dívidas e alcançar objetivos pessoais e familiares.',

    imagem:
        'assets/gastos.jpg',

    aprendizados: [

        'Organizar receitas e despesas',

        'Identificar gastos desnecessários',

        'Criar metas financeiras realistas',

        'Evitar o endividamento',

        'Planejar objetivos de curto e longo prazo'
    ],

    videos: [

        'https://www.youtube.com/embed/X0H5J0f5QqM'
    ],

    materiais: [

        {
            titulo:
                'Planilha de Controle Financeiro',

            descricao:
                'Modelo simples para registrar receitas, despesas e acompanhar seu orçamento mensal.',

            link: '#'
        },

        {
            titulo:
                'Guia de Organização Financeira',

            descricao:
                'Material introdutório sobre planejamento financeiro e uso consciente do dinheiro.',

            link: '#'
        }
    ],

    especialistas: [

        {
            nome:
                'Educadora Financeira',

            descricao:
                'Especialista em orçamento pessoal, consumo consciente e organização financeira.'
        },

        {
            nome:
                'Consultora Financeira',

            descricao:
                'Atua com orientação sobre independência financeira e definição de metas.'
        }
    ],

    oficinas: [

        {
            titulo:
                'Planejamento Financeiro Familiar',

            descricao:
                'Aprenda estratégias para organizar o orçamento doméstico e definir prioridades.'
        },

        {
            titulo:
                'Controle de Gastos Mensais',

            descricao:
                'Métodos simples para registrar despesas e melhorar a gestão do dinheiro.'
        }
    ],

    relacionados: [

        {
            titulo:
                'Planejamento Financeiro',

            id: 'planejamento'
        },

        {
            titulo:
                'Reserva de Emergência',

            id: 'reserva'
        },

        {
            titulo:
                'Independência Financeira',

            id: 'independencia'
        }
    ]
},

    reserva: {

    categoria: 'Educação Financeira',

    titulo:
        'Reserva de Emergência',

    descricao:
        'A reserva de emergência é uma quantia guardada para lidar com situações inesperadas, trazendo mais segurança financeira e tranquilidade.',

    imagem:
        'assets/reserva.jpg',

    aprendizados: [

        'Entender a importância da reserva financeira',

        'Definir metas para começar a poupar',

        'Criar hábitos de economia',

        'Preparar-se para imprevistos'
    ],

    videos: [

        'https://www.youtube.com/embed/4M0J4K0g4nE'
    ],

    materiais: [

        {
            titulo: 'Guia da Reserva de Emergência',
            descricao: 'Passo a passo para construir sua reserva financeira.',
            link: '#'
        },

        {
            titulo: 'Calculadora de Metas Financeiras',
            descricao: 'Ferramenta para planejar quanto guardar por mês.',
            link: '#'
        }
    ],

    especialistas: [

        {
            nome: 'Educadora Financeira',
            descricao: 'Orientações para organização financeira pessoal.'
        },

        {
            nome: 'Planejadora Financeira',
            descricao: 'Estratégias para criação de reservas e proteção financeira.'
        }
    ],

    oficinas: [

        {
            titulo: 'Como Criar sua Reserva de Emergência',
            descricao: 'Aprenda a guardar dinheiro mesmo com orçamento limitado.'
        },

        {
            titulo: 'Finanças para Imprevistos',
            descricao: 'Planejamento financeiro para situações inesperadas.'
        }
    ],

    relacionados: [

        {
            titulo: 'Controle de Gastos',
            id: 'gastos'
        },

        {
            titulo: 'Planejamento Financeiro',
            id: 'planejamento'
        },

        {
            titulo: 'Independência Financeira',
            id: 'independencia'
        }
    ]
},

    planejamento: {

    categoria: 'Educação Financeira',

    titulo:
        'Planejamento Financeiro',

    descricao:
        'Planejar as finanças permite definir metas, controlar gastos e construir um futuro mais seguro e organizado.',

    imagem:
        'assets/planejamento.jpg',

    aprendizados: [

        'Definir objetivos financeiros',

        'Montar um orçamento mensal',

        'Priorizar gastos essenciais',

        'Criar estratégias para alcançar metas'
    ],

    videos: [

        'https://www.youtube.com/embed/fmA6tA7g6yY'
    ],

    materiais: [

        {
            titulo: 'Planilha de Planejamento Financeiro',
            descricao: 'Modelo para organização do orçamento mensal.',
            link: '#'
        },

        {
            titulo: 'Guia de Metas Financeiras',
            descricao: 'Material para definição de objetivos de curto e longo prazo.',
            link: '#'
        }
    ],

    especialistas: [

        {
            nome: 'Consultora Financeira',
            descricao: 'Planejamento e organização de finanças pessoais.'
        },

        {
            nome: 'Educadora Financeira',
            descricao: 'Desenvolvimento de hábitos financeiros saudáveis.'
        }
    ],

    oficinas: [

        {
            titulo: 'Organização Financeira Pessoal',
            descricao: 'Aprenda a estruturar seu orçamento mensal.'
        },

        {
            titulo: 'Metas e Objetivos Financeiros',
            descricao: 'Como transformar sonhos em planejamento.'
        }
    ],

    relacionados: [

        {
            titulo: 'Controle de Gastos',
            id: 'gastos'
        },

        {
            titulo: 'Reserva de Emergência',
            id: 'reserva'
        },

        {
            titulo: 'Independência Financeira',
            id: 'independencia'
        }
    ]
},

    independencia: {

    categoria: 'Educação Financeira',

    titulo:
        'Independência Financeira',

    descricao:
        'A independência financeira fortalece a autonomia, amplia possibilidades de escolha e contribui para a segurança e bem-estar das mulheres.',

    imagem:
        'assets/independencia.jpg',

    aprendizados: [

        'Compreender o conceito de independência financeira',

        'Desenvolver autonomia na tomada de decisões',

        'Construir fontes de renda sustentáveis',

        'Planejar o futuro com mais segurança'
    ],

    videos: [

        'https://www.youtube.com/embed/Fq4vXkz5z6M'
    ],

    materiais: [

        {
            titulo: 'Guia de Autonomia Financeira',
            descricao: 'Material sobre educação financeira e independência econômica.',
            link: '#'
        },

        {
            titulo: 'Planejamento de Longo Prazo',
            descricao: 'Ferramenta para construção de objetivos financeiros futuros.',
            link: '#'
        }
    ],

    especialistas: [

        {
            nome: 'Especialista em Educação Financeira',
            descricao: 'Orientações para autonomia e organização financeira.'
        },

        {
            nome: 'Consultora de Empreendedorismo',
            descricao: 'Estratégias para geração de renda e independência.'
        }
    ],

    oficinas: [

        {
            titulo: 'Autonomia Financeira Feminina',
            descricao: 'Conheça caminhos para fortalecer sua independência econômica.'
        },

        {
            titulo: 'Planejamento para o Futuro',
            descricao: 'Como organizar metas financeiras de longo prazo.'
        }
    ],

    relacionados: [

        {
            titulo: 'Controle de Gastos',
            id: 'gastos'
        },

        {
            titulo: 'Reserva de Emergência',
            id: 'reserva'
        },

        {
            titulo: 'Empreendedorismo Feminino',
            id: 'empreendedorismo'
        }
    ]
},

    // AUTOCUIDADO E SAÚDE MENTAL

    autoestima: {

    categoria: 'Autocuidado',

    titulo:
        'Autoestima',

    descricao:
        'A autoestima está relacionada à forma como enxergamos nosso próprio valor. Fortalecê-la contribui para relações mais saudáveis, autonomia e bem-estar emocional.',

    imagem:
        'assets/autoestima.jpg',

    aprendizados: [

        'Reconhecer suas qualidades e potencialidades',

        'Desenvolver autoconfiança',

        'Identificar pensamentos autocríticos',

        'Valorizar conquistas e progressos pessoais'
    ],

    videos: [

        'https://www.youtube.com/embed/y1rJ6s4i3Oo'
    ],

    materiais: [

        {
            titulo: 'Guia de Fortalecimento da Autoestima',
            descricao: 'Exercícios práticos para desenvolver autoconfiança.',
            link: '#'
        },

        {
            titulo: 'Diário de Gratidão',
            descricao: 'Ferramenta para reconhecer conquistas e qualidades pessoais.',
            link: '#'
        }
    ],

    especialistas: [

        {
            nome: 'Psicóloga',
            descricao: 'Orientação sobre autoconhecimento e autoestima.'
        },

        {
            nome: 'Terapeuta',
            descricao: 'Desenvolvimento emocional e fortalecimento pessoal.'
        }
    ],

    oficinas: [

        {
            titulo: 'Construindo a Autoestima',
            descricao: 'Atividades para fortalecer a autoconfiança.'
        },

        {
            titulo: 'Autoconhecimento e Bem-Estar',
            descricao: 'Reflexões sobre identidade e valorização pessoal.'
        }
    ],

    relacionados: [

        {
            titulo: 'Inteligência Emocional',
            id: 'inteligenciaEmocional'
        },

        {
            titulo: 'Ansiedade',
            id: 'ansiedade'
        },

        {
            titulo: 'Rede de Apoio',
            id: 'redeApoio'
        }
    ]
},

    ansiedade: {

    categoria: 'Autocuidado',

    titulo:
        'Ansiedade',

    descricao:
        'A ansiedade é uma reação natural do organismo, mas quando excessiva pode impactar a qualidade de vida. Conhecer formas de lidar com ela é essencial para o bem-estar.',

    imagem:
        'assets/ansiedade.jpg',

    aprendizados: [

        'Identificar sinais de ansiedade',

        'Conhecer técnicas de respiração',

        'Desenvolver estratégias de autocuidado',

        'Buscar ajuda quando necessário'
    ],

    videos: [

        'https://www.youtube.com/embed/ZToicYcHIOU'
    ],

    materiais: [

        {
            titulo: 'Guia Prático sobre Ansiedade',
            descricao: 'Informações sobre sintomas e formas de enfrentamento.',
            link: '#'
        },

        {
            titulo: 'Exercícios de Respiração',
            descricao: 'Técnicas simples para momentos de tensão.',
            link: '#'
        }
    ],

    especialistas: [

        {
            nome: 'Psicóloga Clínica',
            descricao: 'Atendimento e orientação em saúde emocional.'
        },

        {
            nome: 'Terapeuta Cognitiva',
            descricao: 'Estratégias para gerenciamento da ansiedade.'
        }
    ],

    oficinas: [

        {
            titulo: 'Gerenciamento da Ansiedade',
            descricao: 'Práticas para lidar com preocupações excessivas.'
        },

        {
            titulo: 'Mindfulness para Iniciantes',
            descricao: 'Técnicas de atenção plena e relaxamento.'
        }
    ],

    relacionados: [

        {
            titulo: 'Autoestima',
            id: 'autoestima'
        },

        {
            titulo: 'Hábitos Saudáveis',
            id: 'habitos'
        },

        {
            titulo: 'Inteligência Emocional',
            id: 'inteligenciaEmocional'
        }
    ]
},

    redeApoio: {

    categoria: 'Autocuidado',

    titulo:
        'Rede de Apoio',

    descricao:
        'Ter uma rede de apoio fortalece a segurança emocional e ajuda a enfrentar momentos difíceis. Amigos, familiares e instituições podem oferecer suporte importante.',

    imagem:
        'assets/rede-apoio.jpg',

    aprendizados: [

        'Reconhecer pessoas de confiança',

        'Entender a importância do apoio emocional',

        'Fortalecer vínculos saudáveis',

        'Buscar ajuda quando necessário'
    ],

    videos: [

        'https://www.youtube.com/embed/rxQ2L5xM3lM'
    ],

    materiais: [

        {
            titulo: 'Mapa da Rede de Apoio',
            descricao: 'Ferramenta para identificar pessoas e instituições de suporte.',
            link: '#'
        },

        {
            titulo: 'Guia de Apoio Emocional',
            descricao: 'Orientações sobre como buscar e oferecer ajuda.',
            link: '#'
        }
    ],

    especialistas: [

        {
            nome: 'Assistente Social',
            descricao: 'Orientação sobre redes de proteção e apoio.'
        },

        {
            nome: 'Psicóloga',
            descricao: 'Fortalecimento de vínculos e suporte emocional.'
        }
    ],

    oficinas: [

        {
            titulo: 'Fortalecendo Redes de Apoio',
            descricao: 'Construção de relações saudáveis e seguras.'
        },

        {
            titulo: 'Comunicação e Apoio Emocional',
            descricao: 'Como pedir ajuda e oferecer acolhimento.'
        }
    ],

    relacionados: [

        {
            titulo: 'Apoio Emocional',
            id: 'apoio'
        },

        {
            titulo: 'Autoestima',
            id: 'autoestima'
        },

        {
            titulo: 'Ansiedade',
            id: 'ansiedade'
        }
    ]
},

    habitos: {

    categoria: 'Autocuidado',

    titulo:
        'Hábitos Saudáveis',

    descricao:
        'Pequenas atitudes diárias podem contribuir significativamente para a saúde física, emocional e mental, promovendo mais qualidade de vida.',

    imagem:
        'assets/habitos.jpg',

    aprendizados: [

        'Criar rotinas equilibradas',

        'Entender a importância do sono',

        'Valorizar alimentação saudável',

        'Incluir atividade física no dia a dia'
    ],

    videos: [

        'https://www.youtube.com/embed/V8vN5Kp5K2Y'
    ],

    materiais: [

        {
            titulo: 'Checklist de Hábitos Saudáveis',
            descricao: 'Ferramenta para acompanhamento de rotinas positivas.',
            link: '#'
        },

        {
            titulo: 'Guia de Bem-Estar',
            descricao: 'Orientações para uma vida mais equilibrada.',
            link: '#'
        }
    ],

    especialistas: [

        {
            nome: 'Nutricionista',
            descricao: 'Orientações sobre alimentação saudável.'
        },

        {
            nome: 'Educadora Física',
            descricao: 'Importância do movimento para a saúde.'
        }
    ],

    oficinas: [

        {
            titulo: 'Qualidade de Vida e Bem-Estar',
            descricao: 'Hábitos simples para melhorar a rotina.'
        },

        {
            titulo: 'Saúde Integral',
            descricao: 'Cuidados físicos e emocionais para o dia a dia.'
        }
    ],

    relacionados: [

        {
            titulo: 'Ansiedade',
            id: 'ansiedade'
        },

        {
            titulo: 'Autoestima',
            id: 'autoestima'
        },

        {
            titulo: 'Inteligência Emocional',
            id: 'inteligenciaEmocional'
        }
    ]
},

};

// BUSCA O CONTEÚDO SELECIONADO

const conteudo =
    conteudos[id];

console.log('ID:', id);
console.log('Conteúdo:', conteudo);

// CARREGA INFORMAÇÕES NA TELA

if (conteudo) {

    document
        .getElementById('tituloConteudo')
        .innerText =
        conteudo.titulo;

    document
        .getElementById('descricaoConteudo')
        .innerText =
        conteudo.descricao;

    document
        .getElementById('capaConteudo')
        .src =
        conteudo.imagem;

    document
        .getElementById('categoriaBreadcrumb')
        .innerText =
        conteudo.categoria;

    document
        .getElementById('tituloBreadcrumb')
        .innerText =
        conteudo.titulo;

    document
        .getElementById('categoriaConteudo')
        .innerText =
        conteudo.categoria;

    document
        .getElementById('totalAprendizados')
        .innerText =
        `${conteudo.aprendizados.length} tópicos`;

    document
        .getElementById('totalVideos')
        .innerText =
        `${conteudo.videos.length} vídeos`;

    document
        .getElementById('totalMateriais')
        .innerText =
        `${conteudo.materiais.length} materiais`;

}

// APRENDIZADOS

const listaAprendizado =
    document.getElementById(
        'listaAprendizado'
    );

conteudo.aprendizados.forEach(item => {

    listaAprendizado.innerHTML += `

        <div class="card-aprendizado">

            ✓ ${item}

        </div>

    `;
});

// VÍDEOS

const listaVideos =
    document.getElementById(
        'listaVideos'
    );

if (conteudo.videos.length > 0) {

    conteudo.videos.forEach(video => {

        listaVideos.innerHTML += `

            <iframe
                width="100%"
                height="315"
                src="${video}"
                title="Vídeo"
                allowfullscreen>
            </iframe>

        `;
    });

} else {

    listaVideos.innerHTML = `

        <p>

            Nenhum vídeo disponível
            no momento.

        </p>

    `;
}

// MATERIAIS

const listaMateriais =
    document.getElementById(
        'listaMateriais'
    );

listaMateriais.classList.add(
    'cards-grid'
);

if (conteudo.materiais.length > 0) {

    conteudo.materiais.forEach(material => {

        listaMateriais.innerHTML += `

            <div class="card">

                <h3>

                    ${material.titulo}

                </h3>

                <p>

                    ${material.descricao}

                </p>

                <a
                    href="${material.link}"
                    target="_blank">

                    <i class="fa-solid fa-file-arrow-down"></i>

                    Acessar Material

                </a>

            </div>

        `;
    });

} else {

    listaMateriais.innerHTML = `

        <p>

            Nenhum material disponível.

        </p>

    `;
}

// ESPECIALISTAS

const listaEspecialistas =
    document.getElementById(
        'listaEspecialistas'
    );

listaEspecialistas.classList.add(
    'cards-grid'
);

conteudo.especialistas.forEach(especialista => {

    listaEspecialistas.innerHTML += `

        <div class="card">

            <h3>

                ${especialista.nome}

            </h3>

            <p>

                ${especialista.descricao}

            </p>

        </div>

    `;
});

// OFICINAS

const listaOficinas =
    document.getElementById(
        'listaOficinas'
    );

listaOficinas.classList.add(
    'cards-grid'
);

conteudo.oficinas.forEach(oficina => {

    listaOficinas.innerHTML += `

        <div class="card">

            <h3>

                ${oficina.titulo}

            </h3>

            <p>

                ${oficina.descricao}

            </p>

        </div>

    `;
});

// TEMAS RELACIONADOS

const listaRelacionados =
    document.getElementById(
        'listaRelacionados'
    );

listaRelacionados.classList.add(
    'cards-grid'
);

conteudo.relacionados.forEach(item => {

    listaRelacionados.innerHTML += `

        <div class="card">

            <h3>

                ${item.titulo}

            </h3>

            <a
                href="conteudos.html?id=${item.id}">

                Continuar Aprendendo

                <i class="fa-solid fa-circle-chevron-right"></i>

            </a>

        </div>

    `;
});

// LISTAGEM DE CONTEÚDOS

const listaCategorias =
    document.getElementById(
        'listaCategorias'
    );

function renderizarConteudos(
    categoria = 'todos'
) {

    if (!listaCategorias) return;

    listaCategorias.innerHTML = '';

    Object.entries(
        conteudos
    ).forEach(([id, conteudo]) => {

        if (

            categoria === 'todos' ||

            conteudo.categoria === categoria

        ) {

            listaCategorias.innerHTML += `

                <div class="card">

                    <h3>

                        ${conteudo.titulo}

                    </h3>

                    <p>

                        ${conteudo.categoria}

                    </p>

                    <a
                        href="conteudos.html?id=${id}">

                        Abrir Conteúdo

                    </a>

                </div>

            `;
        }
    });
}

// NAVEGAÇÃO

const idsConteudos =

    Object.keys(conteudos)

        .filter(id =>

            conteudos[id].titulo &&

            conteudos[id].titulo.trim() !== ''

        );

const indiceAtual =
    idsConteudos.indexOf(id);

const anterior =
    idsConteudos[indiceAtual - 1];

const proximo =
    idsConteudos[indiceAtual + 1];

const btnAnterior =
    document.getElementById(
        'conteudoAnterior'
    );

const btnProximo =
    document.getElementById(
        'proximoConteudo'
    );

// CONTEÚDO ANTERIOR

if (anterior) {

    btnAnterior.href =
        `conteudos.html?id=${anterior}`;

    btnAnterior.innerHTML = `

        <i class="fa-solid fa-circle-chevron-left"></i>

        ${conteudos[anterior].titulo}

    `;

} else {

    btnAnterior.style.display =
        'none';
}

// PRÓXIMO CONTEÚDO

if (proximo) {

    btnProximo.href =
        `conteudos.html?id=${proximo}`;

    btnProximo.innerHTML = `

        ${conteudos[proximo].titulo}

        <i class="fa-solid fa-circle-chevron-right"></i>

    `;

} else {

    btnProximo.style.display =
        'none';
}

// BOTÃO VOLTAR AO TOPO

const btnTopo =
    document.getElementById(
        'btnTopo'
    );

window.addEventListener(
    'scroll',
    () => {

        btnTopo.classList.toggle(

            'mostrar',

            window.scrollY > 300

        );
    }
);

btnTopo.addEventListener(
    'click',
    () => {

        window.scrollTo({

            top: 0,

            behavior: 'smooth'

        });
    }
);

