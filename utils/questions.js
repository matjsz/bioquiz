const questions = [
    {
        "question": "Qual das seguintes fontes de produção de energia é a mais recomendável para a diminuição dos gases causadores do aquecimento global?",
        "questionNumber": "1",
        "answers": ["Óleo diesel.",
        "Gasolina.",
        "Carvão mineral.",
        "Vento."
        ],
        "answer": 3,
        "points": 1
    },
    {
        "question": "Em que ano e onde aconteceu o maior acidente aéreo da história do Brasil?",
        "questionNumber": "2",
        "answers": ["Ano 2007, em São Paulo",
        "Ano 2006, no Mato Grosso",
        "Ano 1982, no Ceará",
        "Ano 1996, em São Paulo"
        ],
        "answer": 0,
        "points": 1
    },
    {
        "question": "Qual das alternativas apresenta os Presidentes do Brasil em ordem de sucessão?",
        "questionNumber": "3",
        "answers": ["Dilma Rousseff, Lula, Jair Bolsonaro",
        "Fernando Henrique, Itamar Franco, Lula",
        "Dilma Rousseff, Michel Temer, Jair Bolsonaro",
        "Collor, Lula, Dilma Rousseff"
        ],
        "answer": 2,
        "points": 1
    },
    {
        "question": "Quais destas empresas brasileiras foram incluídas no pacote de privatizações do governo Temer?",
        "questionNumber": "4",
        "answers": ["Eletrobras e Embraer",
        "Eletrobras e Casa da Moeda",
        "Aeroporto de Congonhas e Vale S.A.",
        "Casa da Moeda e Aeroporto Internacional do Rio de Janeiro Galeão/Tom Jobim"
        ],
        "answer": 1,
        "points": 1
    },
    {
        "question": "Quais destas empresas brasileiras foram incluídas no pacote de privatizações do governo Temer?",
        "questionNumber": "4",
        "answers": ["Eletrobras e Embraer",
        "Eletrobras e Casa da Moeda",
        "Aeroporto de Congonhas e Vale S.A.",
        "Casa da Moeda e Aeroporto Internacional do Rio de Janeiro Galeão/Tom Jobim"
        ],
        "answer": 1,
        "points": 1
    },
    {
        "question": "Qual a função da ONU?",
        "questionNumber": "6",
        "answers": ["Zelar pela cultura em todas as nações",
        "Unir as nações com o objetivo de manter a paz e a segurança mundial",
        "Financiar países em desenvolvimento",
        "Regular o funcionamento do sistema financeiro a nível internacional"
        ],
        "answer": 1,
        "points": 1
    },
    {
        "question": "Qual a primeira mulher a ganhar um prêmio Nobel?",
        "questionNumber": "7",
        "answers": ["Madre Teresa de Calcutá",
        "Elizabeth Blackweel",
        "Valentina Tereshkova",
        "Marie Curie"
        ],
        "answer": 3,
        "points": 1
    },
    {
        "question": "Em que governo brasileiro foi sancionada a lei das cotas para o ensino superior?",
        "questionNumber": "8",
        "answers": ["Governo de Dilma Rousseff",
        "Governo de José Sarney",
        "Governo de Fernando Henrique",
        "Governo de Luís Inácio Lula da Silva"
        ],
        "answer": 0,
        "points": 1
    },
    {
        "question": "Chernobyl e Césio-137 fazem parte dos maiores acidentes nucleares da história. Em que países aconteceram?",
        "questionNumber": "9",
        "answers": ["Rússia e Espanha",
        "Ucrânia e Brasil",
        "Estados Unidos e Ucrânia",
        "Japão e Brasil"
        ],
        "answer": 1,
        "points": 1
    },
    {
        "question": "Como morreu Saddam Hussein?",
        "questionNumber": "10",
        "answers": ["Vítima de câncer",
        "Suicídio",
        "Decapitado",
        "Enforcado"
        ],
        "answer": 3,
        "points": 1
    },
    {
        "question": "Como forma de resistir às tradições do Halloween, qual a data comemorativa foi instituída no Brasil para ser celebrada no dia 31 de outubro?",
        "questionNumber": "11",
        "answers": ["Dia das bruxas",
        "Dia do folclore",
        "Dia da poupança",
        "Dia do Saci"
        ],
        "answer": 3,
        "points": 1
    },
    {
        "question": "Em que país se localizava Auschwitz, o maior campo de concentração nazi?",
        "questionNumber": "12",
        "answers": ["Alemanha",
        "Polônia",
        "Estados Unidos",
        "Áustria"
        ],
        "answer": 1,
        "points": 1
    },
    {
        "question": "Quem é Luiz Gabriel Tiago?",
        "questionNumber": "13",
        "answers": ["Brasileiro indicado ao Prêmio Nobel da Paz 2018",
        "Militar e político brasileiro",
        "Escritor e poeta português",
        "Escritor e poeta espanhol"
        ],
        "answer": 0,
        "points": 1
    },
    {
        "question": "Qual o nome do líder da Coreia do Norte?",
        "questionNumber": "14",
        "answers": ["Pak Pong-ju",
        "Kim Jong-un",
        "Kim Jong-Il",
        "Moon Jae-in"
        ],
        "answer": 1,
        "points": 1
    },
    {
        "question": "Quais as consequências para o Brasil decorrentes da crise na Venezuela?",
        "questionNumber": "15",
        "answers": ["Sobrecarregamento no sistema público de saúde em Roraima",
        "Fortalecimento do Mercosul",
        "Aumento de mão-de-obra",
        "Crescimento de investimentos estrangeiros"
        ],
        "answer": 0,
        "points": 1
    },
    {
        "question": "Em 2018 é o centenário da morte de que importante poeta brasileiro?",
        "questionNumber": "16",
        "answers": ["Monteiro Lobato",
        "Machado de Assis",
        "Aluísio de Azevedo",
        "Olavo Bilac"
        ],
        "answer": 3,
        "points": 1
    },
    {
        "question": "Que país foram as Olimpíadas de 2020?",
        "questionNumber": "17",
        "answers": ["Catar",
        "Rússia",
        "França",
        "Japão"
        ],
        "answer": 3,
        "points": 1
    },
    {
        "question": "Quais as maiores pandemias da história?",
        "questionNumber": "18",
        "answers": ["Gripe espanhola e câncer",
        "Varíola e hipertensão",
        "Peste negra e covid-19",
        "Cólera e colesterol"
        ],
        "answer": 2,
        "points": 1
    },
    {
        "question": "Quem é Abraham Weintraub?",
        "questionNumber": "19",
        "answers": ["Ministro da Educação do Brasil entre 2019 e 2020",
        "Compositor de origem judaica",
        "Ex-agente secreto israelense",
        "Sociólogo e ativista brasileiro"
        ],
        "answer": 0,
        "points": 1
    },
    {
        "question": "Quem é a primeira santa nascida no Brasil, canonizada em 2019?",
        "questionNumber": "20",
        "answers": ["Santa Dulce dos Pobres",
        "Nossa Senhora Aparecida",
        "Madre Teresa de Calcutá",
        "Rainha Santa Isabel"
        ],
        "answer": 0,
        "points": 1
    },
    {
        "question": "Sobre a recombinação gênica é correto afirmar que:",
        "questionNumber": "21",
        "answers": ["A recombinação gênica pode ser homóloga ou heteróloga.",
        "A principal diferença entre os tipos de recombinação é que ocorrem em etapas diferentes da mitose.",
        "A recombinação gênica é classificada em homóloga e não-homóloga.",
        "Enquanto um tipo de recombinação permite a variabilidade, o outro tipo apresenta limitações."
        ],
        "answer": 2,
        "points": 1
    },
    {
        "question": "Pares de genes, com segregação independente podem agir, conjuntamente, na determinação de uma mesma característica fenotípica. Este fenômeno é conhecido como:",
        "questionNumber": "22",
        "answers": ["interação gênica",
        "epistasia",
        "poligenia",
        "dominância completa"
        ],
        "answer": 0,
        "points": 1
    },
    {
        "question": "A mutação genética difere da recombinação gênica, pois",
        "questionNumber": "23",
        "answers": ["enquanto a mutação corresponde a uma mudança hereditária no DNA, a recombinação cria novos genes.",
        "enquanto a mutação corresponde a uma mudança hereditária no DNA, a recombinação se dá pela mistura de genes com seres da mesma espécie.",
        "A mutação é espontânea e a recombinação é induzida.",
        "A mutação é uma fonte secundária de variação, enquanto a recombinação é uma fonte primária."
        ],
        "answer": 1,
        "points": 1
    },
    {
        "question": "Das alternativas a seguir qual NÃO apresenta um tipo de seleção natural.",
        "questionNumber": "24",
        "answers": ["Seleção direcional",
        "Seleção estabilizadora",
        "Seleção disruptiva",
        "Seleção dimensional"
        ],
        "answer": 3,
        "points": 1
    },
    {
        "question": "(PUC - RIO) Uma característica genética recessiva presente no cromossomo Y é:",
        "questionNumber": "25",
        "answers": ["poder ser herdada do pai ou da mãe pelos descendentes do sexo masculino e do feminino.",
        "só poder ser herdada a partir do pai por seus descendentes do sexo masculino.",
        "só poder ser herdada a partir do pai por seus descendentes do sexo feminino.",
        "só poder ser herdada a partir da mãe por seus descendentes do sexo masculino."
        ],
        "answer": 1,
        "points": 1
    },
    {
        "question": "Das opções abaixo, a que não representa um impacto ambiental é:",
        "questionNumber": "26",
        "answers": ["chuva ácida",
        "assoreamento dos rios",
        "desertificação",
        "mobilidade urbana"
        ],
        "answer": 3,
        "points": 1
    },
    {
        "question": "Complete: O _________ é um dos principais problemas ambientais no Brasil que acontece desde a chegada dos portugueses em 1500.",
        "questionNumber": "27",
        "answers": ["assoreamento",
        "efeito estufa",
        "desmatamento",
        "empobrecimento do solo"
        ],
        "answer": 2,
        "points": 1
    },
    {
        "question": "As ilhas de calor representam um dos problemas ambientais urbanos. Esse fenômeno climático acontece devido:",
        "questionNumber": "28",
        "answers": ["ao aumento das queimadas nas zonas rurais.",
        "a diminuição da densidade demográfica dos centros urbanos.",
        "ao aumento da inversão térmica nas cidades.",
        "a elevação das temperaturas em algumas zonas urbanas."
        ],
        "answer": 3,
        "points": 1
    },
    {
        "question": "A poluição radioativa é considerada um dos piores tipos de poluição, pois:",
        "questionNumber": "29",
        "answers": ["provoca o desmatamento da cobertura vegetal.",
        "acelera o processo de desertificação do planeta.",
        "utiliza elementos artificiais criados em laboratório.",
        "libera gases e elementos tóxicos na atmosfera."
        ],
        "answer": 3,
        "points": 1
    },
    {
        "question": "(FEBA) A hematose ocorre:",
        "questionNumber": "30",
        "answers": ["na matriz citoplasmática",
        "na matriz mitocondrial",
        "nos átrios cardíacos",
        "nos alvéolos pulmonares"
        ],
        "answer": 3,
        "points": 1
    },
    {
        "question": "(UnB) Assinale a alternativa que apresenta uma estrutura comum ao sistema respiratório e digestivo.",
        "questionNumber": "31",
        "answers": ["Brônquios",
        "Faringe",
        "Pulmão",
        "Esôfago"
        ],
        "answer": 1,
        "points": 1
    },
    {
        "question": "(Fuvest-SP) No homem, o controle dos movimentos respiratórios é exercido",
        "questionNumber": "32",
        "answers": ["pelo cérebro",
        "pelo cerebelo",
        "pelo bulbo",
        "pela medula"
        ],
        "answer": 2,
        "points": 1
    },
    {
        "question": "(Uece/1999) São células MAIS DIFERENCIADAS e com MENOR capacidade de reprodução:",
        "questionNumber": "33",
        "answers": ["neurônios.",
        "epiteliais de revestimento.",
        "hepatócitos.",
        "fibroblastos."
        ],
        "answer": 0,
        "points": 1
    },
    {
        "question": "(Fuvest) Qual dos seguintes comportamentos envolve maior número de órgãos do sistema nervoso?",
        "questionNumber": "34",
        "answers": ["Salivar ao sentir o aroma de comida gostosa.",
        "Levantar a perna quando o médico toca com martelo no joelho do paciente.",
        "Piscar com a aproximação brusca de um objeto.",
        "Preencher uma ficha de identificação."
        ],
        "answer": 3,
        "points": 1
    },
    {
        "question": "Assinale a alternativa que NÃO apresenta uma função do sistema cardiovascular.",
        "questionNumber": "35",
        "answers": ["Transporte de nutrientes",
        "Eliminação de excreções",
        "Distribuição de mecanismos de defesa",
        "Produção de hormônios"
        ],
        "answer": 3,
        "points": 1
    },
    {
        "question": "Sobre a estrutura do sistema cardiovascular é correto afirmar que:",
        "questionNumber": "36",
        "answers": ["É formada por coração, vasos sanguíneos e sangue.",
        "O coração, órgão muscular oco, está situado atrás dos pulmões.",
        "Os vasos sanguíneos são compostos por músculos estriados.",
        "O sangue é o principal órgão do sistema cardiovascular."
        ],
        "answer": 0,
        "points": 1
    },
    {
        "question": "Sobre os vasos sanguíneos é INCORRETO afirmar que:",
        "questionNumber": "37",
        "answers": ["Constituem uma ampla rede de tubos por onde circula o sangue, distribuídos por todo o corpo.",
        "Existem três tipos de vasos sanguíneos: as artérias, as veias e os vasos capilares.",
        "Esses tubos possuem diferentes diâmetros e fazem circular o sangue arterial e venoso.",
        "São formados por duas camadas, também chamadas de túnicas."
        ],
        "answer": 3,
        "points": 1
    },
    {
        "question": "A pressão arterial está diretamente relacionada ao ciclo cardíaco e sobre ela é INCORRETO afirmar que:",
        "questionNumber": "38",
        "answers": ["A hipertensão corresponde à pressão arterial acima do ideal.",
        "Apresenta valores fixos independente da condição do indivíduo, como por exemplo a gravidez.",
        "Corresponde à pressão que o sangue faz sobre as paredes das artérias.",
        "A hipotensão arterial corresponde aos valores abaixo do ideal."
        ],
        "answer": 1,
        "points": 1
    },
    {
        "question": "Sobre os lipídios é correto afirmar que:",
        "questionNumber": "39",
        "answers": ["são as macromoléculas fundamentais para a estrutura e função celular.",
        "são moléculas essenciais para as reações bioquímicas do nosso corpo.",
        "são moléculas orgânicas que não se dissolvem em água, mas que são solúveis em substâncias orgânicas, tais como álcool, éter e acetona.",
        "são compostos orgânicos importantes para acelerar reações químicas no organismo."
        ],
        "answer": 2,
        "points": 1
    },
    {
        "question": "Entre as alternativas abaixo, identifique qual NÃO apresenta uma função dos lipídios.",
        "questionNumber": "40",
        "answers": ["Reserva energética",
        "Isolamento térmico",
        "Auxiliar na absorção de vitaminas",
        "Combate às infecções através dos anticorpos"
        ],
        "answer": 3,
        "points": 1
    },
    {
        "question": "(Uel) A fórmula molecular do 2,3 - dimetil butano, é:",
        "questionNumber": "41",
        "answers": ["C6H14",
        "C6H12",
        "C6H10",
        "C4H10"
        ],
        "answer": 0,
        "points": 1
    },
    {
        "question": "(UFU-MG) A substância de fórmula C8H16 representa um:",
        "questionNumber": "42",
        "answers": ["alcano de cadeia aberta.",
        "alceno de cadeia aberta.",
        "alcino de cadeia aberta.",
        "composto aromático."
        ],
        "answer": 1,
        "points": 1
    },
    {
        "question": "(Unifor) O 2-metilpent-2-eno tem fórmula molecular:",
        "questionNumber": "43",
        "answers": ["C6H12.",
        "C6H10.",
        "C5H12.",
        "C5H10."
        ],
        "answer": 0,
        "points": 1
    },
    {
        "question": "(Uel) Um dos hidrocarbonetos de fórmula C5H12 pode ter cadeia carbônica:",
        "questionNumber": "44",
        "answers": ["cíclica saturada.",
        "acíclica heterogênea.",
        "aberta ramificada.",
        "cíclica ramificada."
        ],
        "answer": 2,
        "points": 1
    },
    {
        "question": "(Fatec) O hidrocarboneto que apresenta a menor quantidade de átomos de H por molécula é:",
        "questionNumber": "45",
        "answers": ["metano.",
        "etano.",
        "eteno.",
        "etino."
        ],
        "answer": 3,
        "points": 1
    },
    {
        "question": "(F. Ibero-Americana-SP) O grupo da Tabela Periódica que se caracteriza por apresentar predominância de elementos artificiais é o dos:",
        "questionNumber": "46",
        "answers": ["lantanídios",
        "gases nobres",
        "metais de transição",
        "actinídios"
        ],
        "answer": 3,
        "points": 1
    },
    {
        "question": "(CESGRANRIO) Dados os elementos de números atômicos 3, 9, 11, 12, 20, 37, 38, 47, 55, 56 e 75, a opção que só contém metais alcalinos é:",
        "questionNumber": "47",
        "answers": ["3, 11, 37 e 55",
        "3, 9, 37 e 55",
        "9, 11, 38 e 55",
        "12, 20, 38 e 56"
        ],
        "answer": 0,
        "points": 1
    },
    {
        "question": "(UFC) Um átomo x tem um próton a mais que um átomo y. Com base nessa informação, determine a afirmativa correta.",
        "questionNumber": "48",
        "answers": ["Se y for alcalino-terroso, x será metal alcalino.",
        "Se y for um gás nobre, x será um halogênio.",
        "Se y for um metal de transição, x será um gás nobre.",
        "Se y for um gás nobre, x será metal alcalino."
        ],
        "answer": 3,
        "points": 1
    },
    {
        "question": "(FAESP) Constituem propriedades aperiódicas dos elementos:",
        "questionNumber": "49",
        "answers": ["densidade, volume atômico e massa atômica.",
        "ponto de fusão, eletronegatividade e calor específico.",
        "volume atômico, massa atômica e ponto de fusão.",
        "massa atômica e calor específico."
        ],
        "answer": 3,
        "points": 1
    },
    {
        "question": "(UESB) A radioatividade emitida por determinadas amostras de substâncias provém",
        "questionNumber": "50",
        "answers": ["da energia térmica liberada em sua combustão.",
        "de alterações em núcleos de átomos que as formam.",
        "de rupturas de ligações químicas entre os átomos que as formam.",
        "de rupturas de ligações químicas entre os átomos que as formam."
        ],
        "answer": 1,
        "points": 1
    },
    {
        "question": "A globalização foi um processo iniciado nos anos 90. Para a indústria, uma das principais consequências foi:",
        "questionNumber": "51",
        "answers": ["reorganização do mercado de trabalho, com a diminuição dos direitos trabalhistas somente nos países desenvolvidos.",
        "desconcentração espacial da indústria e da tecnologia que pode estar em qualquer parte do globo.",
        "melhora das condições de trabalho nos países asiáticos, em geral e na China, em particular.",
        "fim do trabalho escravo registrado nos países da periferia do capitalismo."
        ],
        "answer": 1,
        "points": 1
    },
    {
        "question": "Entre as características da Globalização podemos citar:",
        "questionNumber": "51",
        "answers": ["reorganização produtiva baseada no Toyotismo.",
        "surgimento de novas empresas baseadas no capital estatal",
        "ampliação de políticas sociais aliada à incorporação de novas tecnologias.",
        "expansão do capital financeiro e surgimento de blocos econômicos."
        ],
        "answer": 3,
        "points": 1
    },
    {
        "question": "A globalização é um processo econômico, social e cultural que aproxima as nações de todo o mundo. Sobre o aspecto cultural podemos observar:",
        "questionNumber": "53",
        "answers": ["na popularização do idioma inglês, em todos os âmbitos sociais.",
        "na hegemonia europeia através de programas de financiamento científico e cultural",
        "no surgimento de movimentos de nacionalização que são contra a globalização",
        "no fortalecimento das relações culturais entre países em desenvolvimento e desenvolvidos."
        ],
        "answer": 0,
        "points": 1
    },
    {
        "question": "Marque a alternativa que NÃO apresenta climas do Brasil.",
        "questionNumber": "54",
        "answers": ["Tropical Atlântico e Tropical de Altitude",
        "Temperado e Mediterrâneo",
        "Equatorial e Tropical",
        "Subtropical e Semiárido"
        ],
        "answer": 1,
        "points": 1
    },
    {
        "question": "De acordo com a origem dos sedimentos, as planícies podem ser de quais tipos?",
        "questionNumber": "55",
        "answers": ["vulcânica, litorânea e erosiva",
        "de água doce, de água marinha e terrestre",
        "costeira, fluvial e lacustre",
        "desertas, arenosas e lateralizada"
        ],
        "answer": 2,
        "points": 1
    },
    {
        "question": "As formações geológicas constituídas de rochas sedimentares, metamórficas e vulcânicas originam, respectivamente, os planaltos",
        "questionNumber": "56",
        "answers": ["monominerálicos, diminerálicos e poliminerálicos",
        "magmáticos, ígneos e metamórficos",
        "erosivos, glaciais e marinhos",
        "sedimentares, cristalinos e basálticos"
        ],
        "answer": 3,
        "points": 1
    },
    {
        "question": "De acordo com os fenômenos naturais sofridos ao longo dos anos, as montanhas são classificadas em:",
        "questionNumber": "57",
        "answers": ["planas, irregulares, fluviais e lacustres",
        "sedimentares, cristalinas, intrusivas e extrusivas",
        "vulcânicas, dobradas, falhadas e de erosão",
        "erosivas, magmáticas, basálticas e costeiras"
        ],
        "answer": 2,
        "points": 1
    },
    {
        "question": "As depressões são formadas principalmente pelos processos de erosão. Elas são classificadas em depressões relativas e absolutas de acordo com",
        "questionNumber": "58",
        "answers": ["os relevos circundantes",
        "a altitude",
        "a posição em relação ao nível do mar",
        "as rochas formadoras"
        ],
        "answer": 2,
        "points": 1
    },
    {
        "question": "Quais das opções a seguir NÃO é considerada uma forma de relevo?",
        "questionNumber": "59",
        "answers": ["Morro",
        "Chapada",
        "Serra",
        "Latossolo"
        ],
        "answer": 3,
        "points": 1
    },
    {
        "question": "As ilhas podem ser definidas como",
        "questionNumber": "60",
        "answers": ["porções do continente que se desprenderam e não mais estão ligadas a eles.",
        "porções de terra com um terço de dimensões continentais.",
        "constituintes do relevo oceânico, que se elevam acima do nível das águas.",
        "porção de relevo que flutuam no oceano."
        ],
        "answer": 2,
        "points": 1
    },
    {
        "question": "A formação do solo é resultado:",
        "questionNumber": "61",
        "answers": ["Apenas da ação de agentes orgânicos no meio ambiente.",
        "Da deposição de materiais inorgânicos que se acumulam na superfície terrestre.",
        "Da ação integrada e simultânea de fatores e processos.",
        "Das transformações primárias que um material de origem sofre."
        ],
        "answer": 2,
        "points": 1
    },
    {
        "question": "Qual das alternativas a seguir apresenta os fatores que atuam de forma conjunta na formação do solo?",
        "questionNumber": "62",
        "answers": ["rochas, areia, água e temperatura.",
        "magma, fatores bióticos, fatores abióticos e resíduos.",
        "microrganismos, umidade, temperatura e minerais.",
        "material de origem, clima, organismos, relevo e tempo."
        ],
        "answer": 3,
        "points": 1
    },
    {
        "question": "Para a formação do solo deve ocorrer os processos de:",
        "questionNumber": "63",
        "answers": ["arenização, deslizamento, desmatamento e impermeabilização.",
        "perdas, transformações, transportes e adições.",
        "erosão, infiltração, sublimação e arenização.",
        "climatização, salinização, desgaste e acúmulo de água."
        ],
        "answer": 1,
        "points": 1
    },
    {
        "question": "Qual das alternativas a seguir NÃO apresenta uma característica que diferencia os movimentos de rotação e translação?",
        "questionNumber": "64",
        "answers": ["A duração",
        "A direção",
        "A inclinação",
        "A velocidade"
        ],
        "answer": 2,
        "points": 1
    },
    {
        "question": "Qual das alternativas a seguir NÃO apresenta consequências dos movimentos da Terra?",
        "questionNumber": "65",
        "answers": ["Sucessão de dias e noites",
        "Sucessão de solstícios e equinócios",
        "Sistema de fuso-horários",
        "Uniformidade das estações do ano"
        ],
        "answer": 3,
        "points": 1
    },
    {
        "question": "Qual das alternativas a seguir NÃO apresenta consequências dos movimentos da Terra?",
        "questionNumber": "66",
        "answers": ["Sucessão de dias e noites",
        "Sucessão de solstícios e equinócios",
        "Sistema de fuso-horários",
        "Uniformidade das estações do ano"
        ],
        "answer": 3,
        "points": 1
    },
    {
        "question": "(FCC) Qual é a velocidade escalar média, em km/h, de uma pessoa que percorre a pé 1200 m em 20 min?",
        "questionNumber": "67",
        "answers": ["4,8",
        "3,6",
        "2,7",
        "2,1"
        ],
        "answer": 1,
        "points": 1
    },
    {
        "question": "(Cesgranrio) Uma pessoa, correndo, percorre 4,0 km com velocidade escalar média de 12 km/h. O tempo do percurso é de:",
        "questionNumber": "68",
        "answers": ["3,0 min",
        "8,0 min",
        "20 min",
        "30 min"
        ],
        "answer": 2,
        "points": 1
    },
    {
        "question": "(Unitau) Um carro mantém uma velocidade escalar constante de 72,0 km/h. Em uma hora e dez minutos ele percorre, em quilômetros, a distância de:",
        "questionNumber": "69",
        "answers": ["79,2",
        "80,0",
        "82,4",
        "84,0"
        ],
        "answer": 3,
        "points": 1
    },
    {
        "question": "(UEL) Um pequeno animal desloca-se com velocidade média igual a 0,5 m/s. A velocidade desse animal em km/dia é:",
        "questionNumber": "70",
        "answers": ["13,8",
        "48,3",
        "43,2",
        "4,30"
        ],
        "answer": 2,
        "points": 1
    },
    {
        "question": "(EsPECx - 2013) Um termômetro digital, localizado em uma praça na Inglaterra, marca a temperatura de 10,4 ºF. Essa temperatura, na escala Celsius, corresponde a",
        "questionNumber": "71",
        "answers": ["- 5 ºC",
        "- 10 ºC",
        "- 12 ºC",
        "- 27 ºC"
        ],
        "answer": 2,
        "points": 1
    },
    {
        "question": "(UECE) Do ponto de vista da primeira lei da termodinâmica, o balanço de energia de um dado sistema é dado em termos de três grandezas:",
        "questionNumber": "72",
        "answers": ["pressão, volume e temperatura.",
        "calor, energia interna e volume.",
        "trabalho, calor e energia interna.",
        "trabalho, calor e densidade."
        ],
        "answer": 2,
        "points": 1
    },
    {
        "question": "(UFRS) Qual é a variação de energia interna de um gás ideal sobre a qual é realizado um trabalho de 80J, durante uma compressão adiabática?",
        "questionNumber": "73",
        "answers": ["80 J",
        "40 J",
        "zero",
        "– 40 J"
        ],
        "answer": 0,
        "points": 1
    },
    {
        "question": "(FAAP) Dois pontos A e B situam-se respectivamente a 10 cm e 20 cm do eixo de rotação da roda de um automóvel em movimento uniforme. É possível afirmar que:",
        "questionNumber": "74",
        "answers": ["O período do movimento de A é menor quer o de B.",
        "A frequência do movimento de A é maior que o de B.",
        "A velocidade angular do movimento de B é maior que a de A.",
        "As velocidades angulares de A e B são iguais."
        ],
        "answer": 3,
        "points": 1
    },
    {
        "question": "(UECE-CEVE - 2018) Um relógio mecânico, os ponteiros de minuto e segundo têm velocidade angular, respectivamente,",
        "questionNumber": "75",
        "answers": ["60 rpm e 1 rpm.",
        "60 radianos/s e 1 rpm.",
        "1/60 rpm e 1 rpm.",
        "1 radiano/s e 60 rpm."
        ],
        "answer": 2,
        "points": 1
    },
    {
        "question": "(PUC/RJ - 2018) Um carro parte do repouso com aceleração de 5,0 m/s2 e percorre uma distância de 1,0 km. Qual é o valor da velocidade média do carro, em m/s, nesse trecho?",
        "questionNumber": "76",
        "answers": ["2,5",
        "20",
        "50",
        "100"
        ],
        "answer": 2,
        "points": 1
    },
    {
        "question": "[...], o que faz com que durante o dia a temperatura chegue a 105 °C e à noite caia para −155 °C. Essa variação térmica, medida na escala Fahrenheit de temperatura, vale: ",
        "questionNumber": "77",
        "answers": ["50.",
        "90.",
        "292.",
        "468."
        ],
        "answer": 2,
        "points": 1
    },
    {
        "question": "Dividindo o polinômio p(x) por d(x) = x² + 1, encontram-se o quociente q(x) = x + 3 e o resto r(x) = -7x - 11. Então a soma de todas as soluções da equação p(x) = 0 é igual a:",
        "questionNumber": "78",
        "answers": ["-3",
        "-1",
        "8",
        "16"
        ],
        "answer": 0,
        "points": 1
    },
    {
        "question": "Considerando-se os algarismos significativos dos números 28,7 e 1,03, podemos afirmar que a soma destes números é dada por:",
        "questionNumber": "79",
        "answers": ["29,7",
        "29,73",
        "29",
        "29,74"
        ],
        "answer": 0,
        "points": 1
    },
    {
        "question": "Quantos anagramas da palavra PERFIL começam com P ou terminam com L?",
        "questionNumber": "80",
        "answers": ["200",
        "224",
        "232",
        "216"
        ],
        "answer": 3,
        "points": 1
    },
    {
        "question": "Se loga b = 3 e logab c = 4, então loga c é:",
        "questionNumber": "81",
        "answers": ["12",
        "16",
        "24",
        "8"
        ],
        "answer": 1,
        "points": 1
    },
    {
        "question": "Se log5 x = 2 e log10 y = 4, então log20 y/x é:",
        "questionNumber": "82",
        "answers": ["2",
        "4",
        "6",
        "8"
        ],
        "answer": 0,
        "points": 1
    },
    {
        "question": "Se 10^x = 20^y , atribuindo 0,3 para log 2 , então o valor de x/y é:",
        "questionNumber": "83",
        "answers": ["0,3.",
        "0,5.",
        "0,7.",
        "1,3."
        ],
        "answer": 3,
        "points": 1
    },
    {
        "question": "Atribuindo para log 2 o valor 0,3, então o valor de 100^0,3 é:",
        "questionNumber": "84",
        "answers": ["3",
        "4",
        "8",
        "10"
        ],
        "answer": 1,
        "points": 1
    },
    {
        "question": "A solução da equação na variável real x , logx (x+6) = 2 , é um número:",
        "questionNumber": "85",
        "answers": ["primo.",
        "par.",
        "negativo",
        "irracional."
        ],
        "answer": 0,
        "points": 1
    },
    {
        "question": "Um agricultor tinha 163 frutas entre laranjas e maçãs. Vendeu 2/3 das laranjas e 4/5 das maçãs e, agora, o número de laranjas supera em 1 o número de maçãs. Quantas laranjas e maçãs ele tinha?",
        "questionNumber": "86",
        "answers": ["115 maçãs e 48 laranjas",
        "95 maçãs e 68 laranjas",
        "100 maçãs e 63 laranjas",
        "120 maçãs e 43 laranjas"
        ],
        "answer": 2,
        "points": 1
    },
    {
        "question": "A soma de todas as frações da forma n/(n+1), onde n é um elemento do conjunto {1, 2, 3, 4, 5}, é",
        "questionNumber": "87",
        "answers": ["4,55",
        "6,55",
        "5,55",
        "3,55"
        ],
        "answer": 3,
        "points": 1
    },
    {
        "question": "Em uma esfera o volume é numericamente igual à área. Sobre o raio dessa esfera, podemos afirmar que:",
        "questionNumber": "88",
        "answers": ["é um número irracional",
        "é um número quadrado perfeito",
        "é um número primo",
        "é um número par"
        ],
        "answer": 2,
        "points": 1
    },
    {
        "question": "Na seguinte sequência de números reais 0, 1, √2, √3, 2, √5, √6, √7, √8, 3, √10, ..., construída seguindo uma lógica estrutural, o número de termos entre 17 e 18, sem incluir 17 e 18, é",
        "questionNumber": "89",
        "answers": ["36",
        "34",
        "33",
        "35"
        ],
        "answer": 1,
        "points": 1
    },
    {
        "question": "Assinale o valor de θ para o qual sen2θ = tgθ .",
        "questionNumber": "90",
        "answers": ["π/2",
        "π/32",
        "(2π)/3",
        "(3π)/4"
        ],
        "answer": 3,
        "points": 1
    },
    {
        "question": "Considere: x+(x+2)^0,5=10, é correto afiramar que:",
        "questionNumber": "91",
        "answers": ["não possui raízes reais.",
        "possui uma única raiz real.",
        "possui duas raízes reais distintas.",
        "possui duas raízes complexas distintas."
        ],
        "answer": 1,
        "points": 1
    },
    {
        "question": "Quatro moedas são lançadas simultaneamente. Qual é a probabilidade de ocorrer coroa em uma só moeda?",
        "questionNumber": "92",
        "answers": ["1/8",
        "2/9",
        "1/4",
        "1/3"
        ],
        "answer": 2,
        "points": 1
    },
    {
        "question": "Jogamos dois dados comuns. Qual a probabilidade de que o total de pontos seja igual a 10?",
        "questionNumber": "93",
        "answers": ["1/12",
        "1/11",
        "1/10",
        "2/23"
        ],
        "answer": 0,
        "points": 1
    },
    {
        "question": "A probabilidade de um casal com quatro filhos ter dois do sexo masculino e dois do sexo feminino é:",
        "questionNumber": "94",
        "answers": ["60%",
        "50%",
        "45%",
        "37,5%"
        ],
        "answer": 3,
        "points": 1
    },
    {
        "question": "A probabilidade de um dos cem números 1, 2, 3, 4, ..., 100 ser múltiplo de 6 e de 10 ao mesmo tempo é:",
        "questionNumber": "95",
        "answers": ["3%.",
        "6%",
        "2%",
        "10%."
        ],
        "answer": 0,
        "points": 1
    },
    {
        "question": "Um dado não tendencioso de seis faces será lançado duas vezes. A probabilidade de que o maior valor obtido nos lançamentos seja menor do que 3 é igual a:",
        "questionNumber": "96",
        "answers": ["1/3",
        "1/5.",
        "1/7.",
        "1/9.."
        ],
        "answer": 3,
        "points": 1
    },
    {
        "question": "Uma moeda balanceada é lançada quatro vezes, obtendo-se cara exatamente três vezes. A probabilidade de que as caras tenham saído consecutivamente é igual a:",
        "questionNumber": "97",
        "answers": ["1/4.",
        "3/8",
        "1/2.",
        "3/4"
        ],
        "answer": 2,
        "points": 1
    },
    {
        "question": "Um dado não tendencioso de seis faces será lançado duas vezes. A probabilidade de que o maior valor obtido nos lançamentos seja menor do que 3 é igual a:",
        "questionNumber": "98",
        "answers": ["1/3.",
        "1/5.",
        "1/7.",
        "1/9"
        ],
        "answer": 3,
        "points": 1
    },
    {
        "question": "Considerando pi como um numero entre 3 e 4, as condições econômicas da Turquia, investimentos na educação do governo Brasileiro nos ultimos 40 anos, a data de nascimento do Roberto Carlos, Calcule a massa do sol",
        "questionNumber": "99",
        "answers": ["1.989 × 10^27 kg",
        "1.989 × 10^30 kg",
        "1.989 × 10^38 kg",
        "20 kg"
        ],
        "answer": 1,
        "points": 1
    }
]

module.exports = questions