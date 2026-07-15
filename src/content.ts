export type Lesson = {
  heading: string;
  body: string[];
};

export type Module = {
  key: string;
  number: string;
  title: string;
  subtitle: string;
  duration: string;
  icon: string;
  objective: string;
  lessons: Lesson[];
  exercise: {
    title: string;
    steps: string[];
  };
  takeaway: string;
};

export const MODULES: Module[] = [
  {
    key: 'm1',
    number: '01',
    title: 'Os 3 Gatilhos da Manhã',
    subtitle: 'Sete minutos ao acordar que reativam a energia predadora antes do primeiro contato humano do dia.',
    duration: '12 min',
    icon: 'sunrise',
    objective:
      'Sair de casa já "aceso" — com a aura ativa desde o primeiro olhar do dia, fazendo com que as pessoas reajam diferente desde o elevador.',
    lessons: [
      {
        heading: 'Por que a manhã define tudo',
        body: [
          'Os primeiros 20 minutos do seu dia programam o estado energético para as próximas 12 horas. Não é misticismo — é neuroquímica. O cortisol matinal (que todo homem produz ao acordar) pode ser canalizado para um estado de presença dominante ou desperdiçado em ansiedade dispersa.',
          'A maioria dos homens acorda e imediatamente se contrai: checa o celular, pensa em problemas, se apressa. Cada uma dessas ações ensina o sistema nervoso a operar em modo "defensivo" — que é exatamente o oposto da aura predadora.',
          'O protocolo dos 3 Gatilhos reverte isso. Em 7 minutos você instala um padrão de ativação que o corpo carrega o dia inteiro. É como ligar o motor antes de sair com o carro — você não espera a estrada te acordar.',
        ],
      },
      {
        heading: 'Gatilho 1 — O Scan de Expansão (2 minutos)',
        body: [
          'Ao abrir os olhos, não pegue o celular. Permaneça deitado. Respire fundo três vezes pelo nariz, soltando pela boca devagar. Agora faça o "scan": sinta os pés, depois as pernas, depois o peito, depois os ombros, depois a mandíbula.',
          'Onde houver tensão — ombros elevados, mandíbula cerrada, punhos fechados — solte conscientemente. A expansão física é o primeiro sinal que o corpo dá ao sistema nervoso de que está em modo "predador", não "presa".',
          'Predador ocupa espaço. Presa se contrai. Esse scan, feito todos os dias, treina o corpo a acordar expandido — e esse estado vira padrão. Em duas semanas, você não precisa mais pensar nele.',
        ],
      },
      {
        heading: 'Gatilho 2 — A Âncora de Postura (3 minutos)',
        body: [
          'Levante-se. Vá até um espelho — do banheiro serve. Fique de pé, pés paralelos na largura dos ombros. Distribua o peso igualmente. Agora faça três ajustes:',
          '1. Empurre o topo da cabeça para cima, como se um fio te puxasse. Alongue a espinha.',
          '2. Deixe os ombros caírem para trás e para baixo — não force, deixe cair. O peito se abre naturalmente.',
          '3. Olhe nos seus próprios olhos no espelho. Não desvie. Permaneça 30 segundos.',
          'Esses três ajustes comunicam à sua própria mente: "eu ocomo espaço". O cérebro acredita no que o corpo demonstra. Fazer isso todo dia instala a postura predadora como padrão basal — não como ato forçado.',
        ],
      },
      {
        heading: 'Gatilho 3 — A Intenção de Presença (2 minutos)',
        body: [
          'Antes de sair do banheiro, diga uma frase mentalmente — não em voz alta, mentalmente. A frase é: "Hoje eu ocupo cada sala que entrar."',
          'Pode parecer bobo. Não é. A mente trabalha por scripts. Se você não instala um script, ela roda o padrão antigo — o da invisibilidade. Essa frase não é afirmação motivacional; é uma instrução operacional para o subconsciente.',
          'Depois de dizê-la, não pense mais nisso. Solte. O efeito acontece em segundo plano, como um app rodando no fundo. Você vai notar, ao sair de casa, que o corpo está diferente. Mais estável. Mais presente. E as pessoas vão notar antes de você.',
        ],
      },
    ],
    exercise: {
      title: 'O Protocolo dos 7 Minutos',
      steps: [
        'Amanhã, ao acordar, não toque no celular pelos primeiros 7 minutos.',
        'Faita o Scan de Expansão por 2 minutos — sinta e solte cada tensão.',
        'Vá ao espelho e aplique a Âncora de Postura por 3 minutos.',
        'Diga mentalmente a intenção: "Hoje eu ocupo cada sala que entrar."',
        'Saia de casa sem checar mensagens. Observe como as pessoas reagem.',
        'Repita por 7 dias consecutivos. No 7º dia, compare com o 1º.',
      ],
    },
    takeaway:
      'A aura não se acorda no meio do dia — ela se programa de manhã. Quem domina a manhã domina o estado. Quem domina o estado domina a presença.',
  },
  {
    key: 'm2',
    number: '02',
    title: 'O Protocolo da Postura Predadora',
    subtitle: 'Uma sequência de micro-ajustes que comunicam dominância sem parecer forçado. O corpo muda a energia — a energia muda o olhar delas.',
    duration: '15 min',
    icon: 'move',
    objective:
      'Instalar uma postura que comunica dominância calma — não agressividade — e que se mantém naturalmente em qualquer ambiente.',
    lessons: [
      {
        heading: 'Postura não é "ficar reto"',
        body: [
          'Quando a maioria dos homens tenta "ter postura", eles ficam rígidos. Ombros forçados para trás, peito estufado, queixo erguido. Parece um soldado em formatura. E todo mundo percebe que é forçado.',
          'A postura predadora é o oposto da rigidez. É uma estrutura relaxada, mas estável. Pense num leão deitado: solto, mas impossível de ignorar. Pense num lutador antes do golpe: relaxado, mas cada músculo pronto.',
          'A diferença entre "ficar reto" e "estar presente" é a tensão. Ficar reto adiciona tensão. Estar presente remove tensão desnecessária e mantém apenas o tônus de prontidão. É esse tônus que as mulheres leem como "interessante".',
        ],
      },
      {
        heading: 'Os 5 micro-ajustes',
        body: [
          'Ajuste 1 — A base. Pés paralelos, na largura dos ombros. Não juntos (parece inseguro), não muito abertos (parece agressivo). O peso distribuído igualmente nos dois pés. Essa base diz: "estou aqui, não vou a lugar nenhum."',
          'Ajuste 2 — O eixo. Imagine um fio puxando o topo da cabeça para cima. A espinha alonga, o peito se abre sem forçar, o queixo fica paralelo ao chão. Não erga o queixo — isso demonstra desafio. Mantenha nivelado — isso demonstra presença.',
          'Ajuste 3 — Os ombros. Deixe cair. A maioria anda com ombros elevados de tensão acumulada. O simples ato de soltá-los para baixo muda a silhueta inteira e comunica: "estou confortável no meu corpo."',
          'Ajuste 4 — As mãos. Não cruze os braços. Não enfaie nos bolsos. Deixe as mãos soltas ao lado do corpo ou uma sobre a outra na frente, relaxadas. Mãos soltas comunicam abertura e segurança — mãos escondidas comunicam defesa.',
          'Ajuste 5 — O movimento. Quando andar, mova a partir do core (abdômen/lombar), não dos ombros. O homem que anda com o tronco estável e as pernas fazendo o trabalho parece sólido. O que balança o tronco parece instável.',
        ],
      },
      {
        heading: 'Por que isso funciona sem esforço',
        body: [
          'A postura não é um ornamento. Ela é a interface entre o seu estado interno e o mundo externo. Quando você ajusta a postura, você está ajustando o estado — porque o corpo e a mente são um sistema de mão dupla.',
          'Estudos de linguagem corporal mostram que apenas 2 minutos em postura expandida reduzem o cortisol e aumentam a testosterona. Não é teoria — é biologia. A postura muda os hormônios, os hormônios mudam o estado, o estado muda a aura.',
          'Por isso, quando você instala esses 5 ajustes como padrão, você não está "fingindo" confiança. Você está literalmente produzindo-a no nível hormonal. A aura que as mulheres sentem não é uma impressão — é uma leitura biológica real do seu estado interno, que a postura sustenta.',
        ],
      },
    ],
    exercise: {
      title: 'O Teste do Elevador',
      steps: [
        'Aplique os 5 micro-ajustes antes de entrar em qualquer ambiente novo.',
        'Entre num elevador ou sala com essas posturas ativas.',
        'Observe: alguém te olhou? Quantas pessoas? Por quanto tempo?',
        'Anote mentalmente: "entrou X pessoas, Y me olharam por Z segundos."',
        'Faça isso 5 vezes num dia. Compare com um dia sem aplicar.',
        'A diferença vai ser óbvia. Esse é o seu novo padrão.',
      ],
    },
    takeaway:
      'A postura não é o que você faz — é o que você é. E o que você é se ajusta, um micro-ajuste de cada vez, até virar a coisa mais natural do mundo.',
  },
  {
    key: 'm3',
    number: '03',
    title: 'O Olhar Que Trava',
    subtitle: 'Um exercício de 4 minutos que treina o olhar a carregar a aura. Depois disso, mulheres travam quando você olha — e não conseguem desviar primeiro.',
    duration: '14 min',
    icon: 'eye',
    objective:
      'Treinar o olhar para carregar presença — não ameaça, não vazio — de forma que cause um "trava" instintivo em quem recebe.',
    lessons: [
      {
        heading: 'O olhar é o canal mais direto da aura',
        body: [
          'De todos os sinais não-verbais, o olhar é o que viaja mais rápido e mais fundo. Uma postura leva segundos para ser lida. Uma voz leva mais. O olhar é instantâneo — e atinge partes do cérebro que não passam pelo filtro racional.',
          'É por isso que você já sentiu: certos homens olham e algo acontece. Não é o formato dos olhos. Não é a cor. É a qualidade do olhar — o que ele carrega. Um olhar vazio é transparente. Um olhar cheio é impossível de ignorar.',
          'O exercício que vem a seguir treina essa qualidade. Não é sobre "olhar fixo" — qualquer um consegue olhar fixo. É sobre olhar com presença. E presença, como tudo neste método, se treina.',
        ],
      },
      {
        heading: 'O Exercício do Ponto (4 minutos por dia)',
        body: [
          'Escolha um ponto numa parede lisa — uma marca, um buraco, qualquer referência pequena. Fique a 1 metro de distância. Olhe para o ponto. Não pisque se puder resistir.',
          'Aqui está o segredo: enquanto olha, não pense em nada. Não pense no ponto. Não pense em olhar. Apenas esteja. Sinta seu corpo. Sinta sua respiração. Mas não desvie do ponto.',
          'O que você está treinando não é o músculo do olho — é a mente. A maioria dos homens desvia o olhar porque a mente foge. O pensamento foge, o olhar segue. Treinar o olhar parado é treinar a mente parada.',
          'Faça 4 minutos. No começo vai ser difícil. Em 3 dias, fácil. Em 7 dias, você vai notar que seu olhar com pessoas mudou — sem você tentar. Ele ficou mais estável, mais presente, mais "pesado" no bom sentido.',
        ],
      },
      {
        heading: 'A diferença entre olhar e encarar',
        body: [
          'Encarar é agressivo. É forçado. É o cara que tenta demonstrar poder olhando demais. As mulheres leem isso como ameaça ou insegurança disfarçada. Elas desviam — não por intimidação positiva, mas por desconforto.',
          'Olhar com presença é diferente. É o olhar que não força, mas também não foge. É o olhar que diz: "eu te vejo. E não tenho pressa de parar de ver." Esse olhar não ameaça — convida. E o convite é silencioso, mas inegável.',
          'A regra prática: quando olhar para alguém, não force a fixação. Olhe naturalmente. Mas quando os olhos dela encontrarem os seus, não desvie primeiro. Segure. Meio segundo, um segundo. Depois solte devagar, não rápido. Esse "solte devagar" é o que causa o trava.',
        ],
      },
    ],
    exercise: {
      title: 'Os 4 Minutos + O Teste Real',
      steps: [
        'Por 7 dias, faça o Exercício do Ponto por 4 minutos ao dia.',
        'Escolha o mesmo horário — manhã ou noite, tanto faz.',
        'No 4º dia, aplique em uma conversa: segure o olhar ao encontrar os olhos de alguém.',
        'Não desvie primeiro. Solte devagar quando decidir soltar.',
        'Observe a reação: a pessoa hesitou? Segurou o olhar de volta? Sorriu?',
        'No 7º dia, você não vai mais precisar pensar nisso. Vira automático.',
      ],
    },
    takeaway:
      'O olhar não é um ato. É um estado que se mostra através dos olhos. Treine o estado, e o olhar cuida de si mesmo.',
  },
  {
    key: 'm4',
    number: '04',
    title: 'O Mapa da Aura Constante',
    subtitle: 'Como manter a energia ativa 24h, mesmo cansado, mesmo estressado, mesmo em silêncio. O motor de fundo que nunca apaga.',
    duration: '16 min',
    icon: 'flame',
    objective:
      'Transformar a aura de "estado que se ativa" em "estado que permanece" — um motor de fundo que opera mesmo nas piores condições.',
    lessons: [
      {
        heading: 'O problema do "estado ligado/desligado"',
        body: [
          'A maioria dos métodos de presença ensinam a "ativar" a aura para momentos específicos — antes de uma festa, antes de um encontro. Funciona? Mais ou menos. O problema é que vira um interruptor que você precisa lembrar de ligar. E nos momentos em que mais precisa (cansado, estressado, pego de surpresa), você esquece.',
          'O homem que realmente tem aura não liga nada. Ele está sempre ligado. Mesmo cansado, mesmo estressado, mesmo sozinho no ônibus. A aura dele é basal — como a temperatura do corpo, não como uma lâmpada.',
          'Este módulo é sobre fazer essa transição: de interruptor para termostato. De algo que você ativa para algo que você é.',
        ],
      },
      {
        heading: 'Os 3 níveis de manutenção',
        body: [
          'Nível 1 — Manutenção Matinal (o que você já aprendeu no Módulo 1). Os 7 minutos ao acordar instalam o padrão do dia. Sem isso, os outros níveis não têm base.',
          'Nível 2 — Micro-Recargas (3 vezes ao dia). Três vezes por dia — meio-dia, fim de tarde, antes de dormir — faça 60 segundos de "reset". Respire fundo 3 vezes, solte os ombros, sinta os pés no chão. Isso impede que o estresse do dia apague a aura. É como recarregar uma bateria antes de zerar.',
          'Nível 3 — O Estado de Repouso Predador (à noite). Antes de dormir, 2 minutos de respiração lenta e visualização da aura como uma luz que permanece acesa enquanto você dorme. Parece místico, mas o efeito é neuroquímico: você treina o sistema nervoso a não desligar a presença, mesmo em repouso.',
        ],
      },
      {
        heading: 'Por que a aura apaga (e como impedir)',
        body: [
          'A aura apaga por 3 motivos: tensão acumulada, dispersão mental e esgotamento energético. Os 3 níveis de manutenção atacam cada um.',
          'A micro-recarga resolve a tensão. O estado de repouso resolve o esgotamento (porque ensina o corpo a descansar sem "desligar"). A manutenção matinal resolve a dispersão, porque instala um foco que dura o dia.',
          'Quando os 3 níveis viram rotina — e leva cerca de 21 dias para virarem — a aura não precisa mais ser "ativada". Ela se mantém. Você acorda, ela está lá. Você vai dormir, ela permanece. Esse é o ponto em que o método deixa de ser técnica e vira identidade.',
        ],
      },
    ],
    exercise: {
      title: 'A Rotina dos 21 Dias',
      steps: [
        'Manhã: 7 minutos do protocolo do Módulo 1 (não pule).',
        'Meio-dia: 60 segundos de micro-recarga (respire, solte ombros, sinta os pés).',
        'Fim de tarde: mais 60 segundos de micro-recarga.',
        'Antes de dormir: 2 minutos de respiração lenta + visualização da aura acesa.',
        'Marque cada dia num calendário. Não pule mais de 1 dia seguido.',
        'No dia 21, você vai notar: a aura está ativa mesmo nos dias ruins.',
      ],
    },
    takeaway:
      'Aura não é o que você liga. É o que você para de desligar. Mantenha a base, e o resto cuida de si mesmo.',
  },
  {
    key: 'm5',
    number: '05',
    title: 'A Linguagem do Silêncio',
    subtitle: 'Como ocupar espaço sem falar. O que separa o homem magnético do "chato que fala demais". As mulheres preferem o silêncio certo.',
    duration: '13 min',
    icon: 'volume-x',
    objective:
      'Aprender a comunicar presença através do silêncio e da ocupação de espaço — sem precisar encher o ar com palavras.',
    lessons: [
      {
        heading: 'Por que falar demais mata a aura',
        body: [
          'Existe uma lei não-escrita: o homem que fala demais vale menos. Não porque o que ele diz é ruim — mas porque a necessidade de falar comunica necessidade. E necessidade é o oposto da aura predadora.',
          'O predador não explica. Ele não justifica. Ele não preenche silêncios por desconforto. Ele está confortável no silêncio — e esse conforto é mais eloquente que qualquer frase.',
          'Quando você fala menos, cada palavra que diz ganha peso. Quando fala demais, tudo vira ruído. As mulheres leem isso: o homem que fala pouco, mas certo, parece ter algo. O que fala muito parece tentar provar que tem.',
        ],
      },
      {
        heading: 'A técnica do espaço ocupado',
        body: [
          'O silêncio certo não é passivo. É um silêncio que ocupa espaço. Você está calado, mas presente. O corpo está estável. O olhar está ativo. A respiração é lenta. Você não está "esperando a vez de falar" — você está sendo.',
          'Para treinar isso: numa próxima conversa, faça uma pergunta. Quando a pessoa responder, não responda imediatamente. Espere 2 segundos. Olhe. Absorva. Depois responda. Esses 2 segundos de pausa comunicam: "eu ouvi. Eu processo. Eu não tenho pressa."',
          'No começo vai parecer estranho. Em 3 dias, vira poderoso. As pessoas começam a esperar o que você vai dizer — porque você não fala à toa. Esse é o efeito do silêncio ocupado: ele cria expectativa. E expectativa é atração.',
        ],
      },
      {
        heading: 'O silêncio em ambientes sociais',
        body: [
          'Numa festa, num bar, num grupo — o homem com aura não precisa estar no centro da roda. Ele pode estar na borda, calado, observando. E ainda assim ser o mais notado. Por quê? Porque o silêncio dele é cheio, não vazio.',
          'O silêncio vazio é o cara no canto, tenso, mexendo no celular, evitando contato. O silêncio cheio é o cara no canto, relaxado, olhando o ambiente, confortável em não fazer nada. As mulheres distinguem os dois instantaneamente.',
          'A regra: esteja onde está, completamente. Se está calado, esteja calado por completo. Se está ouvindo, ouça por completo. A presença total — mesmo em silêncio — é mais magnética que qualquer表演.',
        ],
      },
    ],
    exercise: {
      title: 'O Dia do Silêncio Ativo',
      steps: [
        'Escolha um dia. Nesse dia, fale 50% menos que o normal.',
        'A cada pergunta que fizer, espere 2 segundos antes de responder à resposta.',
        'Em grupo, permaneça em silêncio ocupado por 5 minutos — presente, observando.',
        'Observe: quem procurou você? Quem olhou? Quem perguntou sua opinião?',
        'Anote o que sentiu: desconforto? Poder? Alívio?',
        'Repita 3 vezes. O silêncio vai virar uma ferramenta, não um desconforto.',
      ],
    },
    takeaway:
      'O homem que não teme o silêncio não precisa preenchê-lo. E o silêncio que não teme é o que mais comunica.',
  },
  {
    key: 'm6',
    number: '06',
    title: 'O Desbloqueador de Energia Represada',
    subtitle: 'O passo que 97% dos homens ignoram e que é o motivo real de estarem invisíveis. Sem ele, nada do resto cola.',
    duration: '18 min',
    icon: 'zap',
    objective:
      'Identificar e liberar a energia represada — o bloqueio mais profundo e mais ignorado que impede a aura de se manifestar.',
    lessons: [
      {
        heading: 'O bloqueio que ninguém vê',
        body: [
          'Existe um motivo pelo qual você aplica postura, olhar, silêncio — e ainda assim algo não cola. A aura aparece em flashes, mas não se sustenta. Você se sente "quase lá", mas não lá. Esse "quase" tem nome: energia represada.',
          'Energia represada é força vital que ficou bloqueada no corpo por anos — às vezes décadas — de tensão crônica, emoção não processada, medo reprimido, raiva engolida, desejo negado. Não é psicologia abstrata: é física. O corpo contrai, a energia não circula, a aura não se manifesta.',
          'É como uma represa: a água está lá, a força está lá, mas não passa. Você pode ter toda a técnica do mundo — se a represa não abre, nada flui. Este módulo é sobre abrir a represa.',
        ],
      },
      {
        heading: 'Os 3 pontos de bloqueio',
        body: [
          'Ponto 1 — A mandíbula. A maioria dos homens anda com a mandíbula tensa o dia inteiro, sem perceber. Essa tensão bloqueia a expressão e sinaliza ao corpo "estou em defesa". Solte: várias vezes ao dia, leve a mandíbula para baixo, solte os dentes, deixe a boca levemente entreaberta. Isso sozinho muda a aura em minutos.',
          'Ponto 2 — O diafragma. A respiração rasa, presa no peito, é o segundo bloqueio. O homem com aura respira pelo ventre — devagar, fundo. A respiração presa comunica ansiedade mesmo quando você não sente. Pratique: 4 segundos inspirando pela narina, 6 segundos soltando pela boca, 4 ciclos, várias vezes ao dia.',
          'Ponto 3 — O quadril. Tensão no quadril — de ficar sentado, de medo de ocupar espaço — bloqueia a base inteira da presença. Solte: alongamentos simples de quadril, 2 minutos ao dia. Quando o quadril solta, a postura se sustenta sem esforço.',
        ],
      },
      {
        heading: 'O ritual de liberação (5 minutos)',
        body: [
          'Aqui está o ritual que abre a represa. Faça 1 vez ao dia, preferencialmente à noite, por 14 dias.',
          'Passo 1 (1 min): Fique de pé. Respire fundo 3 vezes. Tensione todo o corpo por 5 segundos — maximum tensão — e solte de uma vez. Repita 3 vezes. Isso "quebra" o padrão de tensão crônica.',
          'Passo 2 (2 min): Massageie a mandíbula com os dedos, em movimentos circulares, por 30 segundos. Respire fundo no diafragma (mão no abdômen, sinta subir e descer) por 60 segundos. Alongue o quadril por 30 segundos.',
          'Passo 3 (2 min): Fique parado, olhos fechados. Visualize a energia que estava represada subindo da base do tronco até o topo da cabeça, como uma corrente. Não force — apenas sinta. Permaneça 2 minutos. Abra os olhos. Você vai notar: algo mudou. A aura está mais presente.',
        ],
      },
    ],
    exercise: {
      title: 'Os 14 Dias de Desbloqueio',
      steps: [
        'Faça o ritual de liberação de 5 minutos, 1 vez ao dia, por 14 dias.',
        'Mantenha os 3 pontos de bloqueio soltos ao longo do dia (mandíbula, diafragma, quadril).',
        'No dia 7, compare seu estado com o dia 1. Anote o que mudou.',
        'No dia 14, você vai sentir: a aura não é mais algo que você "ativa". Ela flui.',
        'Continue o ritual 3 vezes por semana para manter a represa aberta.',
        'Este é o módulo que faz todos os outros funcionarem. Não pule.',
      ],
    },
    takeaway:
      'A aura não é algo que você adiciona. É algo que estava lá, represado, esperando você abrir o caminho. Abra — e ela faz o resto.',
  },
];

export type Bonus = {
  key: string;
  number: string;
  title: string;
  subtitle: string;
  duration: string;
  icon: string;
  objective: string;
  lessons: Lesson[];
  exercise: {
    title: string;
    steps: string[];
  };
  takeaway: string;
  audio?: boolean;
};

export const BONUSES: Bonus[] = [
  {
    key: 'b1',
    number: 'Bônus #1',
    title: 'O Manual do Olhar Magnético',
    subtitle: 'Como treinar o olhar a provocar frio na espinha em 4 minutos por dia.',
    duration: '11 min',
    icon: 'eye',
    objective:
      'Levar o treino do olhar a um nível avançado — capaz de provocar uma reação física instintiva em quem recebe.',
    lessons: [
      {
        heading: 'O olhar magnético vs. o olhar comum',
        body: [
          'No Módulo 3 você aprendeu a estabilizar o olhar. Aqui você vai aprender a carregá-lo. A diferença é: o olhar estável não desvia. O olhar magnético faz algo acontecer em quem o recebe.',
          'O olhar magnético não é mais intenso — é mais presente. A diferença não está na força, está na qualidade. É o olhar que diz, sem palavras: "eu sei algo que você ainda não sabe." Essa qualidade provoca um frio na espinha — uma reação física involuntária, quase um susto interno.',
          'Para chegar lá, você precisa de 3 elementos: estabilidade (já treinada), intenção (o que o olhar carrega) e timing (quanto tempo segurar antes de soltar). Este manual cobre os três.',
        ],
      },
      {
        heading: 'A intenção do olhar',
        body: [
          'Quando você olha para alguém, o que está pensando? A maioria está pensando em "não desviar". Isso é intenção negativa — e o olhar fica vazio. O olhar magnético tem intenção positiva: "eu te vejo. E gosto do que vejo."',
          'Não é sexual. Não é agressivo. É apreciativo. É o olhar de quem vê algo interessante e não tem medo de estar vendo. Essa intenção se comunica — porque a mente da pessoa que recebe o olhar lê a qualidade, não apenas a duração.',
          'Para treinar: antes de olhar para alguém, pense mentalmente uma frase curta — "interessante" ou "gostei" ou simplesmente "sim". Essa intenção carrega o olhar. Sem ela, você está apenas olhando. Com ela, você está dizendo algo.',
        ],
      },
      {
        heading: 'O timing do soltar',
        body: [
          'O segredo do olhar magnético não está em segurar — está em como solta. O homem comum, quando decide desviar, desvia rápido. Isso comunica desconforto. O homem magnético solta devagar.',
          'A sequência: olhar encontra → segure 1 a 2 segundos → comece a virar a cabeça devagar → os olhos seguem por último, soltando o contato apenas no final do movimento. Esse "solte devagar" é o que provoca o frio na espinha. A pessoa sente que você não queria ir — mesmo que tenha ido.',
          'Pratique sozinho: olhe para um objeto, segure, e vire devagar. Treine o movimento. Quando aplicar em pessoa, vai ser automático. E a reação vai ser imediata.',
        ],
      },
    ],
    exercise: {
      title: 'Os 4 Minutos Magnéticos',
      steps: [
        'Continue o Exercício do Ponto do Módulo 3, mas agora com intenção.',
        'Ao olhar o ponto, pense: "interessante." Carregue essa intenção no olhar.',
        'Pratique o "solte devagar" — vire a cabeça, os olhos seguem por último.',
        'Aplique em 3 conversas ao dia. Segure 1-2 segundos, solte devagar.',
        'Observe a reação: a pessoa sorriu? Hesitou? Segurou o olhar de volta?',
        'Em 7 dias, o olhar magnético vira automático.',
      ],
    },
    takeaway:
      'O olhar magnético não é mais forte — é mais vivo. E o que é vivo não precisa forçar para ser sentido.',
  },
  {
    key: 'b2',
    number: 'Bônus #2',
    title: 'Áudio de Ativação Noturna',
    subtitle: 'Um áudio de 11 minutos para escutar antes de dormir que reforça a aura enquanto você dorme.',
    duration: '11 min',
    icon: 'moon',
    objective:
      'Usar o estado hipnagógico (antes do sono) para instalar a aura predadora no subconsciente, enquanto o corpo descansa.',
    lessons: [
      {
        heading: 'Por que antes de dormir funciona',
        body: [
          'O período entre a vigília e o sono — chamado estado hipnagógico — é quando o cérebro está mais receptivo a sugestão. As defesas do ego estão baixas. O crítico interno está adormecendo. O que você instala nesse momento entra fundo.',
          'É por isso que as pessoas que assistem conteúdo negativo antes de dormir têm pior qualidade de sono e mais ansiedade. E por que as que fazem o oposto — instalam estados positivos — acordam diferentes. O áudio usa essa janela.',
          'Não é subliminar. Não é mágica. É neurociência aplicada. Você escuta uma sequência de instruções calmas, respiratórias e de visualização que levam o sistema nervoso a um estado de presença profunda — e esse estado se "grava" no subconsciente enquanto você dorme.',
        ],
      },
      {
        heading: 'Como usar o áudio',
        body: [
          'Deite-se de costas, em cama ou superfície confortável. Coloque fones. Feche os olhos. Pressione play. Não precisa prestar atenção consciente — o áudio foi feito para ser ouvido meio adormecido.',
          'O áudio guia uma respiração lenta (4 segundos inspirando, 6 soltando) por 4 minutos, depois passa para visualizações da aura como uma luz dourada que cresce do centro do peito e se expande pelo corpo. Nos últimos 3 minutos, instruções silenciosas instalam a presença no subconsciente.',
          'Se você adormecer antes do fim, ótimo — o efeito é ainda mais forte. Se permanecer acordado, também funciona. O importante é escutar todos os dias por 21 dias. Depois, pode usar 3 vezes por semana para manutenção.',
        ],
      },
      {
        heading: 'O que esperar',
        body: [
          'Na primeira semana, você vai acordar mais descansado e com uma sensação sutil de "presença" ao abrir os olhos — o efeito da instalação noturna.',
          'Na segunda semana, vai notar que a aura está mais ativa durante o dia, sem esforço consciente. O trabalho noturno está sustentando o trabalho diurno.',
          'Na terceira semana, a aura vira basal. Você não precisa mais "ativar" — ela está lá, como um zumbido constante. É o ponto em que o método se integra e você para de fazer — e passa apenas de ser.',
        ],
      },
    ],
    exercise: {
      title: 'O Protocolo dos 21 Dias',
      steps: [
        'Todas as noites, deite-se e pressione play no áudio abaixo.',
        'Use fones. Feche os olhos. Não force atenção — deixe fluir.',
        'Se adormecer, ótimo. Se permanecer acordado, também funciona.',
        'Faça 21 dias seguidos. Não pule mais de 1 dia.',
        'Após 21 dias, use 3x por semana para manutenção.',
        'Observe: a aura fica mais estável a cada semana.',
      ],
    },
    takeaway:
      'Enquanto o corpo dorme, o subconsciente trabalha. Instale a aura na janela certa — e ela acorda antes de você.',
    audio: true,
  },
  {
    key: 'b3',
    number: 'Bônus #3',
    title: 'A Linguagem do Silêncio (Avançado)',
    subtitle: 'Como ocupar espaço e ser notado sem dizer uma palavra — mesmo numa sala cheia.',
    duration: '14 min',
    icon: 'volume-x',
    objective:
      'Dominar a ocupação de espaço em ambientes sociais — ser notado não pelo volume, mas pela qualidade da presença silenciosa.',
    lessons: [
      {
        heading: 'O silêncio avançado vs. o básico',
        body: [
          'No Módulo 5 você aprendeu a não falar demais e a fazer pausas. Aqui você vai além: aprende a ocupar espaço físico e energético sem dizer uma palavra. Não é apenas "ficar calado" — é "ser presente" em silêncio.',
          'O silêncio básico é passivo: você não fala. O silêncio avançado é ativo: você ocupa. A diferença é que no avançado, as pessoas sentem que você está ali — mesmo que não tenha dito nada. Você não é invisível. Você é inevitável.',
          'Isso se aplica em qualquer ambiente: uma sala de reunião, uma festa, um bar, um elevador. O homem que ocupa espaço em silêncio é o que todos notam — e o que mais intriga.',
        ],
      },
      {
        heading: 'As 3 dimensões da ocupação',
        body: [
          'Dimensão 1 — Física. Onde você se posiciona num ambiente importa mais do que o que diz. Não encoste na parede. Não fique no canto. Posicione-se no centro ou num ponto de passagem. Onde as pessoas precisam passar por você. O espaço físico que você ocupa comunica status antes de qualquer palavra.',
          'Dimensão 2 — Temporal. Não tenha pressa. O homem que se move devagar comunica que tem tempo — e ter tempo é luxo. O que se apressa comunica que está sendo cobrado por algo. Ande 20% mais devagar. Faça movimentos deliberados. A lentidão certa é poder.',
          'Dimensão 3 — Visual. Onde seus olhos estão quando não estão em alguém. O homem com aura não olha para o celular. Não olha para o chão. Olha para o ambiente — com curiosidade calma, não com vigilância. Esse "olhar o ambiente" comunica: "eu pertenço aqui."',
        ],
      },
      {
        heading: 'O teste da sala cheia',
        body: [
          'Aqui está o teste final. Entre numa sala cheia — uma festa, um evento, um bar. Não fale com ninguém por 10 minutos. Aplique as 3 dimensões: posicione-se num ponto central, mova-se devagar, olhe o ambiente com curiosidade calma.',
          'Observe: em quanto tempo alguém olha para você? Em quanto tempo alguém se aproxima? Em quanto tempo alguém inicia conversa? O homem com aura avançada não passa 10 minutos sozinho — mesmo sem dizer uma palavra.',
          'Isso não é teoria. É teste. Faça. O resultado vai te mostrar exatamente onde está sua aura — e o quanto ela cresceu desde o Módulo 1.',
        ],
      },
    ],
    exercise: {
      title: 'O Teste da Sala Cheia',
      steps: [
        'Vá a um evento social com pessoas que não te conhecem.',
        'Não fale com ninguém por 10 minutos. Aplique as 3 dimensões.',
        'Posicione-se num ponto central. Mova-se devagar. Olhe o ambiente.',
        'Conte: quantas pessoas te olharam? Quantas se aproximaram?',
        'Compare com o que aconteceria antes do método.',
        'A diferença é a sua aura. Esse é o seu novo padrão.',
      ],
    },
    takeaway:
      'O silêncio avançado não é ausência de fala — é presença completa. E presença completa, mesmo muda, é a coisa mais barulhenta numa sala.',
  },
];
