export type OrderBumpLesson = {
  heading: string;
  body: string[];
};

export type OrderBump = {
  key: string;
  number: string;
  title: string;
  subtitle: string;
  duration: string;
  icon: string;
  objective: string;
  checkoutUrl: string;
  lessons: OrderBumpLesson[];
  exercise: {
    title: string;
    steps: string[];
  };
  takeaway: string;
};

export const ORDER_BUMPS: OrderBump[] = [
  {
    key: 'ob1',
    number: 'Order Bump #1',
    title: 'Os 10 Gatilhos da Aura Magnética',
    subtitle: 'O que falar quando ela olhar. Os primeiros 5 segundos decidem se o olhar vira aproximação — ou morre.',
    duration: '22 min',
    icon: 'eye',
    objective:
      'Entregar exatamente o que dizer nos primeiros 5 segundos após o olhar dela — transformando o "olhar dela" em "ela vir até você".',
    checkoutUrl: 'https://pay.cakto.com.br/4sq7ykd',
    lessons: [
      {
        heading: 'A janela dos 5 segundos',
        body: [
          'A aura predadora faz ela olhar. Mas o olhar dela tem prazo de validade. Quando ela olha, uma janela se abre — e ela se fecha em aproximadamente 5 segundos. É nesse intervalo que o destino da interação é decidido.',
          'A maioria dos homens sente o olhar, fica em choque, e o olhar esfria antes de qualquer palavra. O momento morre. A oportunidade passa. E o pior: ela interpreta o seu silêncio como "ele não tem o que eu pensei que ele tinha". A aura, que estava ativa, perde credibilidade.',
          'Este bolso de 10 gatilhos verbais te entrega o que falar, como olhar de volta, e como transformar o "olhar dela" em "ela vir até você". Cada gatilho é uma frase curta, testada, que funciona em qualquer ambiente — balada, bar, academia, rua. Não é teoria. É script.',
        ],
      },
      {
        heading: 'Gatilho 1 — O Reconhecimento Calmo',
        body: [
          'Quando ela olhar, não sorria largo. Não desvie. Olhe de volta, segure 1 segundo, e diga mentalmente: "interessante". Depois, em voz baixa e calma, diga: "Notei que você olhou."',
          'Essa frase é poderosa porque não é uma pergunta (pergunta comunica insegurança). É uma observação. Observação comunica presença. Você não está pedindo permissão — está relatando o que aconteceu. E isso muda a dinâmica inteira.',
          'A reação dela vai ser uma de três: ela sorri (green light), ela hesita (yellow light — você segura), ou ela desvia (red light — você solta e segue). Na maioria das vezes, com a aura ativa, é green light. E a partir daí, a conversa já começou — sem esforço, sem pickup line, sem tensão.',
        ],
      },
      {
        heading: 'Gatilho 2 — O Comentário de Ambiente',
        body: [
          'Em vez de falar sobre ela, fale sobre o ambiente. "Esse lugar tem uma energia estranha hoje, você sente?" ou "A música aqui sempre escolhe o momento certo para parar."',
          'Por que isso funciona? Porque tira a pressão dela. Você não está comentando o corpo dela, a roupa dela, ou o olhar dela. Está comentando o contexto. E ao fazer isso, você demonstra duas coisas: observação (você nota o ambiente — sinal de presença) e desapego (você não precisa falar dela para ter assunto — sinal de abundância).',
          'A resposta natural dela é concordar ou discordar — e ambos iniciam a conversa. A partir daí, você está em diálogo. E o diálogo começou de um lugar de igualdade, não de perseguição.',
        ],
      },
      {
        heading: 'Gatilho 3 — A Pergunta de Opinião',
        body: [
          'Mulheres adoram dar opinião. Use isso. "Preciso de uma opinião feminina rápida: [qualquer assunto banal — um presente, uma roupa, uma decisão]."',
          'O segredo aqui é: a pergunta não importa. O que importa é que você a está incluindo em algo, sem estar flertando abertamente. É o oposto do "posso te comprar uma bebida?" — que comunica interesse demais e valor de menos.',
          'A pergunta de opinião comunica: "eu valorizo seu input". Isso é raro. A maioria dos homens tenta impressionar; você está pedindo para ser impressionado por ela. A inversão é magnética. E a conversa flui naturalmente a partir da resposta dela.',
        ],
      },
      {
        heading: 'Gatilho 4 — O Olhar de Volta com Pausa',
        body: [
          'Às vezes, a melhor frase é nenhuma frase. Quando ela olhar, olhe de volta, segure 2 segundos, e então — em vez de falar — faça um leve aceno com a cabeça, como quem diz "vi você me vendo". Depois, volte ao que estava fazendo.',
          'Esse gatilho é avançado porque comunica: "eu vi, eu sei, e não tenho pressa". A maioria dos homens, ao receber o olhar, corre para falar algo. O que comunica necessidade. A pausa comunica o oposto: conforto com a tensão.',
          'Em 70% dos casos, ela vai se aproximar depois desse gatilho. Porque a pausa cria um mistério — "ele não veio falar comigo? Por quê?" E o mistério é mais atraente que qualquer frase.',
        ],
      },
      {
        heading: 'Gatilho 5 — O Cumprimento Específico',
        body: [
          'Em vez de "você é linda" (genérico, esperado, fraco), diga algo específico: "Você tem uma presença que interrompe a sala." ou "O jeito que você se move chama atenção sem pedir."',
          'O específico comunica observação real. O genérico comunica que você diria isso para qualquer mulher. E mulheres distinguem os dois instantaneamente. O específico demonstra que você vê — não apenas olha.',
          'A regra: cumprimente algo que ela controla (estilo, postura, energia), não algo que ela não controla (rosto, corpo). Cumprir o que ela controla valoriza a escolha dela. Cumprir o que ela não controla é genérico e preguiçoso.',
        ],
      },
      {
        heading: 'Gatilho 6 — O Convite Indireto',
        body: [
          'Em vez de "posso te conhecer?", diga: "Estava prestes a pegar uma bebida / ir até o balcão. Quer vir?"',
          'O "quer vir?" é diferente do "posso ir com você?". O primeiro te coloca como o líder do movimento. O segundo te coloca como seguidor. A diferença é sutil, mas as mulheres leem isso instantaneamente.',
          'Se ela for, a conversa acontece em movimento — que é mais natural que a conversa parada. Se ela não for, você foi de qualquer forma — não perdeu nada, não ficou esperando. O convite indireto é o único que funciona sem pressão.',
        ],
      },
      {
        heading: 'Gatilho 7 — A Observação de Padrão',
        body: [
          'Diga algo que você notou sobre o padrão dela: "Você é o tipo de pessoa que observa antes de agir, não é?" ou "Você parece alguém que decide rápido quando quer."',
          'Esses comentários funcionam porque todo mundo ama ser "lido". E mesmo se você errar, o erro gera conversa — "não, na verdade eu sou o oposto". O que importa é que você demonstrou percepção, e isso é raro.',
          'A regra: faça a observação neutra, não elogiosa. Não é um elogio — é uma leitura. A leitura comunica profundidade. O elogio comunica superficialidade. Escolha a leitura.',
        ],
      },
      {
        heading: 'Gatilho 8 — O Desafio Brincalhão',
        body: [
          'Diga: "Aposto que você é a pessoa mais teimosa desse lugar." ou "Você parece alguém que sempre escolhe o caminho mais difícil."',
          'O desafio brincalhão funciona porque comunica que você não está intimidado. A maioria dos homens concorda com tudo que a mulher diz, esperando aprovação. O desafio comunica o oposto: "eu vejo você como igual, e iguais se desafiam."',
          'A resposta dela vai ser defesa ou confirmação — e ambas geram conversa. O segredo é manter o tom leve, não agressivo. É brincadeira, não ataque. O sorriso discreto na hora de dizer é o que diferencia o desafio charmoso do desafio hostil.',
        ],
      },
      {
        heading: 'Gatilho 9 — O Silêncio Estratégico',
        body: [
          'Depois de dizer qualquer coisa, silencie. Não preencha. Não continue. Deixe o silêncio fazer o trabalho.',
          'O silêncio após uma frase é a coisa mais subestimada da comunicação. A maioria dos homens, por nervosismo, continua falando — e mata a frase anterior. O silêncio deixa a frase respirar, e dá a ela espaço para responder.',
          'A regra dos 3 segundos: diga a frase, silencie por 3 segundos, olhe nos olhos dela. Se ela não responder, você continua. Mas na maioria das vezes, ela responde antes dos 3 segundos — porque o silêncio é desconfortável para ela também, e ela vai preenchê-lo.',
        ],
      },
      {
        heading: 'Gatilho 10 — O Fechamento Sem Pressão',
        body: [
          'Quando a conversa estiver boa, não espere o ponto perfeito. Feche assim: "Preciso voltar para [qualquer coisa], mas foi bom trocar palavra com você. Se quiser continuar isso outro dia, aqui está meu contato."',
          'Note: você oferece o SEU contato, não pede o dela. "Se quiser continuar" é sem pressão. "Aqui está meu contato" é liderança. A combinação é: você está aberto, mas não dependente.',
          'Se ela aceitar, ótimo. Se não, você saiu no auge — não na descida. O fechamento sem pressão é o que separa o homem com aura do homem desesperado. O desesperado pede o número. O homem com aura oferece o seu.',
        ],
      },
    ],
    exercise: {
      title: 'Os 10 Gatilhos em 7 Dias',
      steps: [
        'Dia 1-2: Pratique o Gatilho 1 (Reconhecimento Calmo) 3 vezes ao dia, em qualquer interação.',
        'Dia 3: Adicione o Gatilho 4 (Olhar de Volta com Pausa) — pratique a pausa de 2 segundos.',
        'Dia 4: Use o Gatilho 2 ou 3 (Comentário de Ambiente ou Pergunta de Opinião) numa conversa real.',
        'Dia 5: Aplique o Gatilho 5 (Cumprimento Específico) — observe algo único e comente.',
        'Dia 6: Teste o Gatilho 9 (Silêncio Estratégico) — diga a frase e silencie por 3 segundos.',
        'Dia 7: Use o Gatilho 10 (Fechamento Sem Pressão) — ofereça seu contato, não peça o dela.',
        'Ao final dos 7 dias, você terá os 10 gatilhos instalados. Use o que funcionar melhor para você.',
      ],
    },
    takeaway:
      'O olhar dela é o convite. O que você faz nos 5 segundos seguintes é a resposta. Tenha a resposta pronta — e o olhar nunca mais vai esfriar.',
  },
  {
    key: 'ob2',
    number: 'Order Bump #2',
    title: 'Protocolo Noite de Predador',
    subtitle: 'O guia da balada e do encontro. O mapa completo da noite: entrar, se posicionar, ser notado, e não cometer o erro que apaga a aura às 23h.',
    duration: '28 min',
    icon: 'moon',
    objective:
      'Entregar o mapa completo da noite — balada, bar e encontro — para que o homem com aura entre em qualquer ambiente noturno e faça o ambiente reagir, sem depender de bebida, amigo ou sorte.',
    checkoutUrl: 'https://pay.kiwify.com.br/checkout-placeholder-ob2',
    lessons: [
      {
        heading: 'A balada tem regras próprias',
        body: [
          'A aura funciona em qualquer lugar — isso é verdade. Mas a balada, o bar e o encontro têm regras próprias. O que funciona na rua ou no trabalho não funciona igual à noite. A noite é um ecossistema diferente: luz baixa, álcool, música alta, competição, e um relógio que corre mais rápido.',
          'O cara com aura na balada não depende de beber, de amigo, nem de sorte. Ele entra e o ambiente reage. Mas isso não é acaso — é protocolo. Este guia é o mapa completo da noite, do momento em que você decide sair até o momento em que você decide ir embora.',
          'Cada fase da noite tem uma janela. Perder a janela é perder a noite. Este protocolo te entrega cada janela, em ordem, para que você nunca mais saia de uma balada sentindo que "podia ter feito mais".',
        ],
      },
      {
        heading: 'Fase 1 — A Preparação (antes de sair de casa)',
        body: [
          'A noite começa antes de você sair de casa. O que você faz nas 2 horas antes de sair define o estado que você carrega para a balada. A maioria dos homens se prepara no automático — toma banho, veste, sai. O predador se prepara com intenção.',
          'Passo 1: 10 minutos antes de sair, faça o ritual de ativação do Módulo 1 — scan de expansão, âncora de postura, intenção de presença. Instale o estado antes de entrar no ambiente. Quem entra com o estado já ativo não precisa "ligar" nada lá dentro.',
          'Passo 2: Vista-se para ser notado, não para se misturar. Uma peça de destaque — um anel, um colar, uma jaqueta com personalidade. Não exagero. Apenas uma peça que comunica "eu escolhi isso" em vez de "eu peguei o que estava na cadeira". A peça é um gancho visual — dá a ela algo para comentar, e dá a você um conversador natural.',
          'Passo 3: Não chegue bêbado. O pior erro. O álcool antes de chegar apaga a aura antes de ela acender. Cheque sóbrio, com o estado ativo. Beba depois, se quiser — mas depois de já estar presente, não antes.',
        ],
      },
      {
        heading: 'Fase 2 — A Entrada (os primeiros 10 minutos)',
        body: [
          'Os primeiros 10 minutos depois de entrar definem a noite inteira. É quando o ambiente te lê pela primeira vez. E a leitura que o ambiente faz nesses 10 minutos é a leitura que permanece.',
          'Não entre correndo. Não entre procurando amigos. Não entre indo direto ao bar. Entre devagar. Pare na porta por 3 segundos. Olhe o ambiente inteiro — não procure ninguém, apenas veja o espaço. Esses 3 segundos comunicam: "eu estou avaliando este lugar, não o lugar está me avaliando."',
          'Depois, ande pelo ambiente com o Módulo 2 ativo — postura predadora, movimento devagar, olhar ativo. Não vá direto ao bar. Dê uma volta. Posicione-se num ponto central ou de passagem. O homem que se posiciona bem nos primeiros 10 minutos é notado o resto da noite — mesmo que não faça mais nada.',
        ],
      },
      {
        heading: 'Fase 3 — O Posicionamento (onde ficar)',
        body: [
          'Onde você fica na balada é mais importante do que o que você faz. Posicionamento é poder. O homem no canto é invisível. O homem no centro é inevitável.',
          'Regra 1: não encoste na parede. A parede comunica "estou observando, não participando". Posicione-se a 2-3 metros da parede, de frente para o fluxo de pessoas. Você quer ser visto e ver.',
          'Regra 2: fique perto do bar, mas não no balcão. O balcão é onde os homens vão quando não sabem o que fazer. Perto do bar, mas de frente para o ambiente, é o ponto ideal — você tem motivo para estar ali (bebida) sem parecer que está esperando algo.',
          'Regra 3: mude de posição a cada 20-30 minutos. O homem que fica parado o tempo todo vira parte do mobiliário. O que se move, com intenção, é notado a cada movimento. Mude, posicione-se, observe, mude de novo. Cada mudança é uma nova chance de ser notado.',
        ],
      },
      {
        heading: 'Fase 4 — A Primeira Interação (minutos 10-30)',
        body: [
          'A primeira mulher que te notar em 2 minutos é a primeira oportunidade. Não a deixe passar. A primeira interação define o tom da noite — se você a aproveita, a noite flui. Se a ignora, o ambiente lê: "ele não age quando tem chance", e as oportunidades seguintes diminuem.',
          'Use os gatilhos do Order Bump #1. O Reconhecimento Calmo, o Comentário de Ambiente, a Pergunta de Opinião — qualquer um funciona. O importante é agir nos primeiros 30 minutos, não esperar o "momento perfeito". O momento perfeito não existe. O momento é agora.',
          'Não foque em "conquistar" a primeira. Foque em iniciar a conversa. O objetivo da primeira interação não é fechar — é aquecer. Aquecido, você fica solto. Solto, as próximas interações são naturais. Tenso, as próximas são forçadas. A primeira é o aquecimento.',
        ],
      },
      {
        heading: 'Fase 5 — O Erro das 23h (o que apaga a aura)',
        body: [
          'Aqui está o erro que 90% dos homens cometem: às 23h, eles começam a beber mais rápido. A balada está aquecendo, eles sentem que "precisam acompanhar", e aceleram o álcool. Esse é o erro que apaga a aura até o fim da noite.',
          'O que acontece no corpo: o álcool em excesso após as 23h destrói a postura (ombros caem), o olhar (fica vidrado), e o timing (fica lento demais). A aura, que estava ativa, vai apagando copo a copo. E o pior: você não percebe — porque o álcool anula a autopercepção.',
          'O protocolo: depois das 23h, troque para água ou refrigerante por 30 minutos. Sim, 30 minutos. Você vai ser o único homem sóbrio o suficiente para manter a aura enquanto os outros apagam. E é exatamente nessa janela — 23h às 00h — que as mulheres mais notam quem ainda está presente. Porque todo mundo ao redor está apagando. E você não.',
          'O cara com aura às 23h não é o mais bêbado. É o mais presente. E presença, às 23h, é raridade. Raridade é atração.',
        ],
      },
      {
        heading: 'Fase 6 — O Encontro (a balada dentro do encontro)',
        body: [
          'O encontro é uma balada silenciosa. As mesmas regras se aplicam, mas sem música, sem álcool, sem multidão. O que sobra é você e ela — e a aura precisa carregar sozinha.',
          'No encontro, a postura é ainda mais importante. Sem o barulho da balada para mascarar a insegurança, cada micro-ajuste é visível. Aplique os 5 micro-ajustes do Módulo 2 antes de sentar. E quando sentar, não se contraia — ocupe a cadeira, costas no encosto, braços soltos na mesa.',
          'O silêncio no encontro é diferente do silêncio na balada. Na balada, o silêncio é preenchido pelo ambiente. No encontro, o silêncio é preenchido por vocês dois. Não o tema. O silêncio no encontro é onde a aura mais brilha — porque é onde a presença é mais testada. Quem suporta o silêncio do encontro sem preenchê-lo com nervosismo é quem domina o encontro.',
        ],
      },
      {
        heading: 'Fase 7 — A Saída (sair no auge, não na descida)',
        body: [
          'A maioria dos homens sai da balada quando ela está acabando — 3h, 4h, quando a energia já desceu. Isso é um erro. Saia no auge. Quando a noite está no pico, quando você está no melhor momento, quando a aura está mais ativa — saia.',
          'Sair no auge comunica: "eu tenho para onde ir. Eu não preciso do fim da balada para ter motivo de ir embora." Isso é poder. O homem que fica até o fim comunica: "eu não tenho nada melhor". O que sai no auge comunica: "eu escolho quando ir."',
          'No encontro, a mesma regra. Termine a conversa antes de ela esfriar. Saia quando o encontro está bom — não quando está acabando. "Preciso ir, mas foi ótimo." Deixa a impressão no auge, não na descida. A próxima interação começa do auge, não da descida.',
        ],
      },
    ],
    exercise: {
      title: 'O Protocolo da Próxima Noite',
      steps: [
        'Antes de sair: faça o ritual de ativação de 10 minutos (Módulo 1 + vestir uma peça de destaque).',
        'Chegando: pare na porta por 3 segundos, olhe o ambiente, entre devagar.',
        'Primeiros 10 minutos: posicione-se num ponto central, não no canto, não no balcão.',
        'Minutos 10-30: inicie a primeira conversa usando um gatilho do Order Bump #1.',
        '23h: troque para água por 30 minutos. Seja o mais presente enquanto os outros apagam.',
        'Mude de posição a cada 20-30 minutos. Cada mudança é uma nova chance de ser notado.',
        'Saia no auge — quando a noite está no pico, não quando está acabando.',
        'No dia seguinte, anote: o que funcionou, o que não funcionou, e o que vai ajustar na próxima.',
      ],
    },
    takeaway:
      'O cara com aura na balada não depende de beber, de amigo, nem de sorte. Ele entra e o ambiente reage. Porque ele tem o mapa — e o mapa é este protocolo.',
  },
];
