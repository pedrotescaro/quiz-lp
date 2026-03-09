/* ============================================
   Quiz LP — Dados das Questoes
   ============================================ */
const ADMIN_EMAIL = 'admin@quizlp.com';
const ADMIN_PASS = 'admin123';

const QUESTIONS = [
{
    text: "Qual e a intervencao mais importante e comprovada para reduzir o risco de lesao por pressao em pacientes acamados com mobilidade muito limitada?",
    correct: 0,
    options: [
        { letter: "A", text: "Mudanca de decubito em intervalos regulares, associada a avaliacao de risco" },
        { letter: "B", text: "Aplicacao de creme hidratante apenas uma vez ao dia" },
        { letter: "C", text: "Elevacao da cabeceira do leito acima de 45 graus durante todo o dia" },
        { letter: "D", text: "Uso exclusivo de curativos de espuma em proeminencias osseas" }
    ],
    explanations: [
        "CORRETA — A mudanca de decubito em intervalos regulares (geralmente a cada 2 horas) e a intervencao mais recomendada pelas diretrizes internacionais (NPUAP/EPUAP). Associada a uma avaliacao de risco padronizada, permite planejar cuidados individualizados e prevenir a lesao por pressao de forma eficaz.",
        "INCORRETA — Embora a hidratacao da pele seja importante, aplicar creme uma vez ao dia e insuficiente como medida isolada de prevencao. A hidratacao cutanea e apenas uma parte de um conjunto multifatorial de cuidados.",
        "INCORRETA — A elevacao da cabeceira acima de 45 graus por tempo prolongado aumenta a forca de cisalhamento na regiao sacral, o que na verdade ELEVA o risco de lesao por pressao. O angulo recomendado e de no maximo 30 graus quando possivel.",
        "INCORRETA — Curativos de espuma podem ajudar na redistribuicao da pressao em proeminencias osseas, mas seu uso isolado e exclusivo nao substitui o reposicionamento regular nem a avaliacao de risco."
    ]
},
{
    text: "Ao utilizar escalas validadas, como a escala de Braden, para avaliacao de risco de lesao por pressao, qual e a principal vantagem segundo as melhores evidencias?",
    correct: 2,
    options: [
        { letter: "A", text: "Substituir a avaliacao clinica completa do paciente, tornando-a desnecessaria" },
        { letter: "B", text: "Permitir que apenas o enfermeiro decida sozinho o plano de cuidados" },
        { letter: "C", text: "Fornecer um instrumento padronizado que orienta decisoes e priorizacao de intervencoes preventivas" },
        { letter: "D", text: "Garantir que o paciente nao desenvolvera lesao por pressao, independentemente de outras condicoes" }
    ],
    explanations: [
        "INCORRETA — A escala de Braden NAO substitui a avaliacao clinica completa. Ela e uma ferramenta complementar que ajuda a identificar pacientes em risco, mas deve sempre ser usada em conjunto com o julgamento clinico do profissional.",
        "INCORRETA — O cuidado preventivo deve ser multiprofissional. A escala de Braden orienta as decisoes, mas o plano de cuidados deve envolver toda a equipe de saude, nao apenas o enfermeiro.",
        "CORRETA — A escala de Braden fornece um instrumento padronizado e validado cientificamente que permite identificar pacientes em risco, orientar a tomada de decisao clinica e priorizar intervencoes preventivas de forma objetiva e reprodutivel.",
        "INCORRETA — Nenhum instrumento isolado garante a prevencao total de lesao por pressao. Existem fatores de risco intrinsecos (desnutricao, perfusao comprometida) que exigem abordagem multifatorial alem da avaliacao pela escala."
    ]
},
{
    text: "Em relacao ao uso de superficies especiais de apoio (como colchoes de redistribuicao de pressao), qual afirmacao esta mais alinhada as melhores evidencias para prevencao de lesao por pressao?",
    correct: 2,
    options: [
        { letter: "A", text: "Sao eficazes apenas em pacientes jovens e sem comorbidades" },
        { letter: "B", text: "Seu uso indiscriminado em todos os pacientes e recomendado, independentemente do risco" },
        { letter: "C", text: "Devem ser indicadas principalmente para pacientes com alto risco, como os imobilizados e com perfusao comprometida" },
        { letter: "D", text: "Podem substituir completamente a necessidade de mudanca de decubito, desde que sejam de alta tecnologia" }
    ],
    explanations: [
        "INCORRETA — As superficies de apoio sao indicadas para pacientes de qualquer idade que apresentem alto risco. Idade jovem e ausencia de comorbidades justamente reduzem a necessidade destas superficies especiais.",
        "INCORRETA — O uso indiscriminado gera custos desnecessarios e nao e recomendado. As diretrizes orientam que seu uso seja baseado na avaliacao de risco individual do paciente.",
        "CORRETA — As diretrizes (NPUAP/EPUAP) recomendam superficies especiais de apoio para pacientes identificados como de alto risco, como aqueles com imobilidade, perfusao tecidual comprometida e outros fatores agravantes. A indicacao deve ser individualizada.",
        "INCORRETA — Mesmo com as superficies mais avancadas, a mudanca de decubito continua sendo indispensavel. Nenhum colchao elimina completamente a pressao; eles apenas a redistribuem."
    ]
},
{
    text: "Sobre cuidados com a pele para prevencao de lesao por pressao, qual pratica e mais coerente com as melhores evidencias?",
    correct: 2,
    options: [
        { letter: "A", text: "Friccionar vigorosamente as areas de proeminencia ossea para ativar a circulacao local" },
        { letter: "B", text: "Evitar inspecao da pele em pacientes de risco, para nao causar desconforto" },
        { letter: "C", text: "Manter a pele limpa, seca, hidratada e evitar produtos irritantes, observando-a diariamente" },
        { letter: "D", text: "Usar alcool 70% na pele integra varias vezes ao dia para fortalecer a barreira cutanea" }
    ],
    explanations: [
        "INCORRETA — A friccao vigorosa sobre proeminencias osseas e CONTRAINDICADA, pois danifica os tecidos, causa cisalhamento e pode provocar ou agravar lesoes. Massagens nestas areas sao expressamente desaconselhadas pelas diretrizes.",
        "INCORRETA — A inspecao diaria da pele e FUNDAMENTAL em pacientes de risco. A identificacao precoce de hiperemia, alteracoes de temperatura ou umidade permite intervencao antes que a lesao se forme.",
        "CORRETA — Manter a pele limpa, seca e hidratada e a base da prevencao cutanea. A inspecao diaria permite detectar sinais precoces de lesao, e evitar produtos irritantes protege a barreira natural da pele.",
        "INCORRETA — O alcool 70% resseca e danifica a barreira cutanea, aumentando a vulnerabilidade da pele. Seu uso frequente na pele integra e prejudicial e contraindicado para prevencao de lesao por pressao."
    ]
},
{
    text: "Qual e a relacao entre estado nutricional e risco de lesao por pressao, segundo as melhores evidencias cientificas?",
    correct: 2,
    options: [
        { letter: "A", text: "Somente a hidratacao hidrica influencia o risco, nao havendo relacao com proteinas e calorias" },
        { letter: "B", text: "A nutricao nao tem impacto significativo no desenvolvimento de lesao por pressao" },
        { letter: "C", text: "Pacientes desnutridos ou com ingesta proteico-calorica inadequada apresentam maior risco e podem se beneficiar de suporte nutricional precoce" },
        { letter: "D", text: "A suplementacao nutricional so e indicada apos o aparecimento de lesao por pressao" }
    ],
    explanations: [
        "INCORRETA — Embora a hidratacao seja importante, as evidencias mostram que proteinas, calorias e micronutrientes (como zinco e vitamina C) sao essenciais para a integridade tecidual e cicatrizacao. A relacao vai muito alem da hidratacao hidrica.",
        "INCORRETA — Ha forte evidencia cientifica de que a desnutricao e um fator de risco independente para lesao por pressao. A nutricao adequada e componente fundamental da prevencao.",
        "CORRETA — As diretrizes internacionais reconhecem a desnutricao como fator de risco significativo. Pacientes com ingesta proteico-calorica inadequada tem comprometimento na regeneracao tecidual, e o suporte nutricional precoce e recomendado como parte da estrategia preventiva.",
        "INCORRETA — A suplementacao nutricional deve ser iniciada PREVENTIVAMENTE em pacientes de risco identificados como desnutridos, e nao apenas apos o surgimento da lesao. A prevencao e sempre preferivel ao tratamento."
    ]
},
{
    text: "Em relacao ao posicionamento do paciente para prevencao de lesao por pressao, qual pratica esta de acordo com as recomendacoes baseadas em evidencias?",
    correct: 1,
    options: [
        { letter: "A", text: "Deixar o paciente sentado por longos periodos sem redistribuir o peso, pois a posicao sentada e sempre mais segura" },
        { letter: "B", text: "Utilizar posicoes que reduzam pressao sobre proeminencias osseas, como decubito lateral em torno de 30 graus, e evitar angulos elevados de cabeceira por tempo prolongado" },
        { letter: "C", text: "Manter o paciente constantemente em decubito dorsal, com poucos ajustes, para nao cansar a equipe" },
        { letter: "D", text: "Utilizar travesseiros rigidos diretamente sob o calcaneo, comprimindo o tendao de Aquiles para manter o pe em posicao neutra" }
    ],
    explanations: [
        "INCORRETA — A posicao sentada por periodos prolongados concentra grande pressao na regiao isquiatica e sacral. E necessario alivio regular da pressao (a cada 15-30 minutos) e limitacao do tempo sentado.",
        "CORRETA — O decubito lateral a 30 graus reduz a pressao sobre o trocanter e esta alinhado com as diretrizes NPUAP/EPUAP. Angulos elevados de cabeceira (acima de 30 graus) aumentam cisalhamento na regiao sacral e devem ser minimizados.",
        "INCORRETA — Manter o paciente em uma unica posicao e exatamente o que causa lesao por pressao. A alternancia regular de posicoes e essencial, e o conforto da equipe nunca deve justificar a negligencia do cuidado ao paciente.",
        "INCORRETA — Travesseiros rigidos sob o calcaneo podem causar pressao excessiva no tendao de Aquiles. O correto e elevar os calcaneares do colchao usando dispositivos que distribuam o peso da perna ao longo da panturrilha, mantendo os calcaneares flutuantes."
    ]
},
{
    text: "Sobre o manejo da umidade (como incontinencia urinaria ou fecal) na prevencao de lesao por pressao, qual conduta e mais apropriada de acordo com a evidencia cientifica?",
    correct: 2,
    options: [
        { letter: "A", text: "Deixar a pele em contato prolongado com urina e fezes, priorizando apenas a troca de lencois" },
        { letter: "B", text: "Evitar uso de produtos barreira para nao interferir com a respiracao da pele" },
        { letter: "C", text: "Utilizar rotinas de higiene imediata apos episodios de incontinencia, associadas a barreiras de protecao cutanea" },
        { letter: "D", text: "Utilizar talco em grande quantidade para absorver umidade em areas de risco" }
    ],
    explanations: [
        "INCORRETA — O contato prolongado com urina e fezes macera a pele, altera seu pH e destroi a barreira cutanea, aumentando drasticamente o risco de lesao. A higiene deve ser IMEDIATA apos cada episodio de incontinencia.",
        "INCORRETA — Produtos barreira (como cremes a base de oxido de zinco ou dimeticona) sao recomendados pelas diretrizes. Eles protegem a pele da umidade excessiva sem impedir suas funcoes fisiologicas normais.",
        "CORRETA — A higiene imediata apos cada episodio de incontinencia, combinada com o uso de barreiras de protecao cutanea, e a conduta recomendada pelas melhores evidencias. Isso minimiza a exposicao da pele a umidade e agentes irritantes.",
        "INCORRETA — Talco em grande quantidade pode formar grumos com a umidade, causar atrito adicional e irritar a pele. As diretrizes nao recomendam o uso de talco como estrategia de manejo da umidade para prevencao de lesao por pressao."
    ]
},
{
    text: "Em relacao a educacao e treinamento da equipe de saude para prevencao de lesao por pressao, qual afirmacao e mais consistente com as melhores evidencias?",
    correct: 0,
    options: [
        { letter: "A", text: "Programas educativos continuos, com atualizacao das diretrizes e monitoramento de indicadores, reduzem a incidencia de lesao por pressao" },
        { letter: "B", text: "A prevencao e intuitiva, dispensando treinamento estruturado sobre avaliacao de risco e intervencoes" },
        { letter: "C", text: "Apenas novos funcionarios precisam de treinamento; profissionais antigos ja dominam o tema" },
        { letter: "D", text: "O treinamento deve focar exclusivamente em tecnicas de curativo, pois prevencao e responsabilidade apenas do enfermeiro" }
    ],
    explanations: [
        "CORRETA — Estudos demonstram que programas educativos continuos, baseados em evidencias atualizadas e com monitoramento de indicadores de qualidade, sao eficazes na reducao da incidencia de lesao por pressao em instituicoes de saude.",
        "INCORRETA — A prevencao de lesao por pressao NAO e intuitiva. Requer conhecimento especifico sobre fatores de risco, escalas de avaliacao, tecnicas de reposicionamento e cuidados com a pele. Sem treinamento estruturado, erros graves podem ocorrer.",
        "INCORRETA — As diretrizes sao atualizadas periodicamente, e novos conhecimentos surgem constantemente. Todos os profissionais, independentemente do tempo de experiencia, precisam de educacao continuada e reciclagem periodica.",
        "INCORRETA — A prevencao e multidisciplinar e vai muito alem de tecnicas de curativo. Envolve avaliacao de risco, nutricao, posicionamento, manejo da umidade e e responsabilidade de TODA a equipe de saude, nao apenas do enfermeiro."
    ]
},
{
    text: "Nos pacientes criticos em unidade de terapia intensiva (UTI), qual fator adicional torna a prevencao de lesao por pressao ainda mais desafiadora, segundo a literatura?",
    correct: 3,
    options: [
        { letter: "A", text: "Mobilidade preservada, permitindo que o paciente mude de posicao sozinho" },
        { letter: "B", text: "Menor uso de drogas vasoativas, que melhoram a perfusao tecidual" },
        { letter: "C", text: "Menor necessidade de monitorizacao da pele, pois os pacientes sao mais monitorizados em outros aspectos" },
        { letter: "D", text: "Uso frequente de sedacao e drogas vasoativas, associados a instabilidade hemodinamica e imobilidade" }
    ],
    explanations: [
        "INCORRETA — Pacientes em UTI geralmente NAO tem mobilidade preservada. A maioria esta sedada, intubada e totalmente dependente da equipe para qualquer mudanca de posicao.",
        "INCORRETA — O oposto e verdadeiro: pacientes em UTI frequentemente recebem drogas vasoativas que podem comprometer a perfusao tecidual periferica, aumentando o risco de lesao por pressao.",
        "INCORRETA — Embora pacientes de UTI sejam muito monitorizados em parametros vitais, a monitorizacao da pele e igualmente necessaria e frequentemente negligenciada. A presenca de dispositivos medicos cria pontos adicionais de pressao.",
        "CORRETA — Pacientes em UTI enfrentam multiplos fatores de risco: sedacao profunda que impede a mobilizacao, drogas vasoativas que comprometem a perfusao tecidual, instabilidade hemodinamica, umidade por sudorese, e dispositivos medicos multiplos. Tudo isso torna a prevencao significativamente mais desafiadora."
    ]
},
{
    text: "Quando se fala em prevencao de lesao por pressao baseada em melhores evidencias, qual abordagem geral e mais adequada?",
    correct: 0,
    options: [
        { letter: "A", text: "Adotar um conjunto multifatorial de intervencoes, integrando avaliacao de risco, reposicionamento, cuidado com a pele, manejo da umidade, nutricao e educacao da equipe" },
        { letter: "B", text: "Focar em uma unica intervencao de alto impacto, como uso de colchao especial, e desconsiderar outras medidas" },
        { letter: "C", text: "Aplicar intervencoes apenas apos o aparecimento dos primeiros sinais de lesao por pressao" },
        { letter: "D", text: "Deixar a decisao de prevencao exclusivamente a cargo do medico, por ser um tema estritamente medico" }
    ],
    explanations: [
        "CORRETA — As melhores evidencias (NPUAP/EPUAP/PPPIA) recomendam uma abordagem multifatorial e integrada: avaliacao de risco padronizada, reposicionamento regular, cuidado com a pele, manejo da umidade, suporte nutricional e educacao continua da equipe. Nenhuma medida isolada e suficiente.",
        "INCORRETA — Depender de uma unica intervencao, mesmo que eficaz, e insuficiente. A etiologia da lesao por pressao e multifatorial (pressao, cisalhamento, umidade, nutricao), e sua prevencao exige abordagem igualmente abrangente.",
        "INCORRETA — A prevencao deve ser PROATIVA, nao reativa. Esperar sinais de lesao para entao agir contradiz todo o conceito de prevencao baseada em evidencias. A identificacao precoce do risco e intervencao antecipada sao fundamentais.",
        "INCORRETA — A prevencao de lesao por pressao e responsabilidade de TODA a equipe multidisciplinar (enfermeiros, medicos, fisioterapeutas, nutricionistas, tecnicos). Nao e um tema exclusivamente medico, e enfermeiros desempenham papel central na prevencao."
    ]
}
];
