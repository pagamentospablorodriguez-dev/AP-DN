export type UpsellLesson = {
  heading: string;
  body: string[];
};

export type UpsellAudio = {
  src: string;
  title: string;
  description?: string;
};

export type UpsellPdf = {
  src: string;
  title: string;
};

export type Upsell = {
  key: string;
  number: string;
  title: string;
  subtitle: string;
  duration: string;
  icon: string;
  objective: string;
  lessons: UpsellLesson[];
  exercise: {
    title: string;
    steps: string[];
  };
  takeaway: string;
  audios?: UpsellAudio[];
  pdfs?: UpsellPdf[];
};

export const UPSELLS: Upsell[] = [
  {
    key: 'u1',
    number: 'Upsell #1',
    title: 'Áudio de Ativação Sacral — OM KROOM LINGAYA OM',
    subtitle:
      'O mantra indiano ancestral entoado em frequência específica que ativa o chakra sacral, o centro da energia masculina. Acorda o fogo que dorme na base da sua coluna — e quando esse fogo acorda, as mulheres sentem antes de você terminar de ouvir.',
    duration: '22 min',
    icon: 'flame',
    objective:
      'Ativar o chakra sacral através de um mantra ancestral em frequência específica, acelerando a manifestação da aura predadora de semanas para dias.',
    lessons: [
      {
        heading: 'O mapa não te leva — o som te leva',
        body: [
          'Você comprou o Código da Aura Predadora. O protocolo é o mapa. Ele te diz para onde ir. Mas o mapa não te leva até lá. O que te leva é um som — um mantra indiano ancestral, OM KROOM LINGAYA OM, entoado em uma frequência específica que ativa o chakra sacral, o centro da energia masculina.',
          'Esse conhecimento não está no Google. Não está no YouTube. Ele foi guardado por séculos em linhagens tântricas do norte da Índia — passado de boca a ouvido, de mestre a discípulo. O que ele faz é simples: acorda o fogo que dorme na base da sua coluna. E quando esse fogo acorda, algo muda no seu campo magnético. As mulheres sentem. Não pensam, não decidem — sentem.',
          'Sem o áudio, o protocolo leva semanas para gerar o mesmo efeito. Com o áudio, os primeiros olhares começam em dias. Às vezes em horas. É a diferença entre ler sobre fogo e segurar o fósforo.',
        ],
      },
      {
        heading: 'O que acontece quando você escuta',
        body: [
          'Olhares na rua: mulheres viram o pescoço quando você passa. Não sabem por que olharam — só olharam.',
          'Energia no ambiente: você entra num lugar e o clima muda. As pessoas te notam antes de você falar qualquer coisa.',
          'Voz mais firme: o som da sua voz desce, fica mais grave, mais segura. Sem esforço — o corpo se ajusta sozinho.',
          'Presença sem palavras: você senta em silêncio e ainda assim domina a mesa. A aura fala por você.',
        ],
      },
      {
        heading: 'Os 3 áudios do pacote',
        body: [
          'Áudio Principal — OM KROOM LINGAYA OM (9 minutos): o mantra ancestral entoado em frequência específica que ativa o chakra sacral. Escute com fones de ouvido durante o dia — no trânsito, caminhando, antes de sair de casa. A energia muda antes de você terminar de ouvir.',
          'Bônus 1 — Versão Noturna (11 minutos): a mesma frequência, calibrada para escutar antes de dormir. Ancora a energia durante o sono, enquanto o corpo repousa. Você acorda diferente — mais firme, mais presente.',
          'Bônus 2 — Campo Energético (5 minutos): versão curta para escutar 1 minuto antes de entrar em qualquer ambiente — festa, reunião, elevador. Cria o campo magnético antes de você abrir a porta.',
        ],
      },
      {
        heading: 'Como usar',
        body: [
          
          'Áudio principal: 9 minutos pela manhã ou antes de sair de casa. Repita se quiser intensificar.',
          'Versão noturna: 11 minutos antes de dormir. Deite-se de costas, feche os olhos, deixe o som te levar.',
          'Campo energético: 5 minutos antes de entrar em qualquer ambiente social. É o gatilho instantâneo.',
          'Os primeiros efeitos aparecem em 3 a 4 dias. O efeito pleno se instala em 7 a 14 dias de uso contínuo.',
        ],
      },
    ],
    exercise: {
      title: 'O Protocolo de 7 Dias Sacral',
      steps: [
        'Dias 1-3: escute o Áudio Principal (9 min) toda manhã com fones.',
        'Dias 1-7: escute a Versão Noturna (11 min) toda noite antes de dormir.',
        'Antes de qualquer ambiente social, escute 1 min do Campo Energético (5 min).',
        'Não pule mais de 1 dia seguido. A frequência precisa de continuidade.',
        'No dia 4, observe: alguém te olhou diferente? Anote.',
        'No dia 7, compare seu estado com o dia 1. A diferença é o áudio funcionando.',
      ],
    },
    takeaway:
      'O protocolo é o mapa. O mantra é o combustível. Sem o combustível, o mapa só serve para olhar. Com ele, você chega.',
    audios: [
      { src: '/audios/u1-sacral-principal.mp3', title: 'Áudio Principal — OM KROOM LINGAYA OM (9 min)', description: 'O mantra ancestral em frequência específica que ativa o chakra sacral. Escute com fones de ouvido durante o dia.' },
      { src: '/audios/u1-sacral-noturna.mp3', title: 'Bônus 1 — Versão Noturna (11 min)', description: 'A mesma frequência, calibrada para escutar antes de dormir. Ancora a energia durante o sono.' },
      { src: '/audios/u1-campo-energetico.mp3', title: 'Bônus 2 — Campo Energético (5 min)', description: 'Versão curta para escutar antes de entrar em qualquer ambiente. Cria o campo magnético instantâneo.' },
    ],
  },
  {
    key: 'd1',
    number: 'Downsell #1',
    title: 'Áudio de Ativação Sacral — Versão Essencial',
    subtitle:
      'O áudio principal de 9 minutos, sem os bônus. Mesma frequência ancestral OM KROOM LINGAYA OM que ativa o chakra sacral.',
    duration: '9 min',
    icon: 'flame',
    objective:
      'Ativar o chakra sacral através do mantra ancestral essencial, sem os bônus complementares — para quem quer o núcleo do efeito pelo menor valor.',
    lessons: [
      {
        heading: 'O essencial que muda tudo',
        body: [
          'Esta é a versão essencial — só o áudio principal de 9 minutos, sem os bônus. O mesmo mantra OM KROOM LINGAYA OM, a mesma frequência que ativa o chakra sacral. Sem a versão noturna, sem o campo energético.',
          'O áudio principal já é o núcleo. Ele acorda o fogo que dorme na base da sua coluna. Os bônus aceleram e sustentam, mas o essencial está aqui — neste som de 9 minutos.',
          'Se você quer o efeito sem o preço cheio, esta é a versão. Escute com fones, 9 minutos por dia, e os primeiros olhares começam em dias.',
        ],
      },
      {
        heading: 'Como usar a versão essencial',
        body: [
          'Use fones de ouvido. A frequência atua por vibração direta no canal auditivo.',
          'Escute 9 minutos toda manhã, ou antes de sair de casa.',
          'Se quiser intensificar, escute novamente à tarde.',
          'Os primeiros efeitos aparecem em 3 a 4 dias. O efeito pleno em 7 a 14 dias.',
          'A diferença desta versão para a completa: você não tem a versão noturna (que ancora durante o sono) nem o campo energético (gatilho instantâneo). Mas o núcleo funciona.',
        ],
      },
    ],
    exercise: {
      title: 'O Protocolo Essencial de 7 Dias',
      steps: [
        'Escute o áudio de 9 minutos toda manhã com fones de ouvido.',
        'Não pule mais de 1 dia seguido.',
        'No dia 4, observe se alguém te olhou diferente. Anote.',
        'No dia 7, compare seu estado com o dia 1.',
        'Continue usando diariamente para sustentar o efeito.',
      ],
    },
    takeaway:
      'Menos bônus, mesmo fogo. O essencial já acorda o sacral — o resto é aceleração.',
    audios: [
      { src: '/audios/d1-sacral-essencial.mp3', title: 'Áudio Essencial — OM KROOM LINGAYA OM (9 min)', description: 'O mantra ancestral em frequência específica que ativa o chakra sacral. Escute com fones de ouvido, 9 minutos por dia.' },
    ],
  },
  {
    key: 'u2',
    number: 'Upsell #2',
    title: 'O Chamado de Asmodeus — Energia Predadora Avançada',
    subtitle:
      'O mantra de invocação da energia de Asmodeus, a força mais predadora que um homem pode carregar. Mais denso, mais direto, mais antigo que o sacral. Quando você escuta, sente no corpo — uma pressão no peito, um calor na base da coluna, uma firmeza que não estava ali antes.',
    duration: '28 min',
    icon: 'zap',
    objective:
      'Invocar a energia de Asmodeus através de um mantra de tradição esotérica, gerando uma explosão da energia sexual predadora — o nível acima do sacral.',
    lessons: [
      {
        heading: 'O sacral acende. Asmodeus explode.',
        body: [
          'Asmodeus não é invenção. Ele aparece na demonologia clássica há séculos — descrito como a encarnação da luxúria, a força que distorce o desejo feminino. O que poucos sabem é que essa mesma força pode ser invocada, e não para dominar ninguém — mas para acender, dentro de você, a energia que faz as mulheres virem até você.',
          'O mantra do Chamado de Asmodeus é diferente do OM KROOM. Ele não acorda o fogo devagar. Ele explode. É uma frequência mais densa, mais direta, mais antiga. Quando você escuta, sente no corpo — uma pressão no peito, um calor na base da coluna, uma firmeza que não estava ali antes.',
          'Esse conhecimento não está no Google. Não está em canal nenhum. Ele foi extraído de textos esotéricos raros e calibrado em uma frequência audível que qualquer homem pode usar — com fones de ouvido, 7 minutos por dia, durante 3 dias seguidos.',
        ],
      },
      {
        heading: 'O que acontece quando você escuta',
        body: [
          'Aproximação sem esforço: elas vêm até você. Sem você abordar, sem você insistir. A energia faz o trabalho que a palavra faria.',
          'Desejo no olhar: não é curiosidade — é desejo. O olhar muda. A pupila dilata. Você reconhece quando vê.',
          'Autoridade natural: você fala e as pessoas escutam. Você pede e as pessoas atendem. Sem gritar, sem forçar.',
          'Magnetismo sexual: o campo magnético ao seu redor muda. As mulheres sentem antes de você abrir a boca.',
          'Efeito cumulativo: quanto mais você escuta (com o ritual), mais sólida a presença fica. Não é pico — é base.',
          'Sustentação por horas: com a versão estendida de 21 minutos, o campo dura a noite inteira. Uma festa, um evento, um encontro.',
        ],
      },
      {
        heading: 'Os 3 itens do pacote',
        body: [
          'Áudio Principal — O Chamado de Asmodeus (7 minutos): o mantra de invocação da energia de Asmodeus. Explosão da energia sexual predadora. Muito mais potente que o sacral — é o nuclear.',
          'Bônus 1 — Selo de Asmodeus (21 minutos): versão estendida para sessões profundas. Escute quando quiser carregar o campo por horas — antes de um evento, de um encontro, de uma noite inteira.',
          'Bônus 2 — O Livro de Asmodeus (PDF, ritual de 3 dias): manual de uso responsável com o ritual completo de 3 dias. O que fazer, quando fazer, o que esperar. Sem ele, o áudio é forte demais para uso sem orientação.',
        ],
      },
      {
        heading: 'O ritual de 3 dias',
        body: [
          'Aviso: conteúdo avançado. Use com responsabilidade — a energia é forte demais para uso indiscriminado. Por isso o Manual de Uso Responsável vem incluso. Sem ele, o áudio é como um motor potente sem volante.',
          'Dia 1: escute o áudio principal de 7 minutos, uma vez ao dia, com fones. Observe o que sente no corpo.',
          'Dia 2: escute novamente. A energia começa a se acumular. Você vai sentir uma pressão no peito, um calor na base da coluna.',
          'Dia 3: escute pela última vez do ritual. A energia se instala. A partir daqui, use o Selo de Asmodeus (21 min) quando quiser carregar o campo por horas.',
          'O resultado: você não precisa abordar, não precisa forçar, não precisa jogar conversa. As mulheres reagem. Elas olham, se aproximam, procuram conversa. Sem você fazer nada além de estar no ambiente. É a diferença entre caçar e ser o ímã.',
        ],
      },
    ],
    exercise: {
      title: 'O Ritual de 3 Dias de Asmodeus',
      steps: [
        'Dia 1: escute o áudio principal (7 min) com fones. Observe as sensações no corpo.',
        'Dia 2: escute novamente. Sinta a energia acumulando — pressão no peito, calor na base.',
        'Dia 3: escute pela última vez do ritual. A energia se instala.',
        'Após o ritual, use o Selo de Asmodeus (21 min) antes de eventos noturnos.',
        'Leia o Livro de Asmodeus (PDF) antes de começar — o ritual é forte demais sem orientação.',
        'Não use mais de 1 vez ao dia durante o ritual. Respeite a intensidade.',
      ],
    },
    takeaway:
      'O sacral é a vela. Asmodeus é o incêndio. São níveis diferentes. Se você quer o máximo, é este.',
    audios: [
      { src: '/audios/u2-asmodeus-principal.mp3', title: 'Áudio Principal — O Chamado de Asmodeus (7 min)', description: 'O mantra de invocação da energia de Asmodeus. Explosão da energia sexual predadora. Use com fones, 1 vez ao dia.' },
      { src: '/audios/u2-selo-asmodeus.mp3', title: 'Bônus 1 — Selo de Asmodeus (21 min)', description: 'Versão estendida para sessões profundas. Escute antes de um evento ou encontro para carregar o campo por horas.' },
    ],
    pdfs: [
      { src: '/pdfs/u2-livro-asmodeus.pdf', title: 'Bônus 2 — O Livro de Asmodeus (Ritual de 3 dias)' },
    ],
  },
  {
    key: 'd2',
    number: 'Downsell #2',
    title: 'O Chamado de Asmodeus — Versão Única',
    subtitle:
      'Só o áudio principal de 7 minutos, sem o Selo estendido e sem o Livro de Asmodeus. Mesma energia nuclear, sem os complementos.',
    duration: '7 min',
    icon: 'zap',
    objective:
      'Invocar a energia de Asmodeus através do áudio principal essencial, sem os bônus — para quem quer a explosão predadora pelo menor valor.',
    lessons: [
      {
        heading: 'A versão única — só o nuclear',
        body: [
          'Esta é a versão única — só o áudio principal de 7 minutos, sem o Selo de Asmodeus estendido, sem o Livro de Asmodeus. Mesma energia, sem os complementos.',
          'O mantra de invocação da energia de Asmodeus, a força mais predadora que um homem pode carregar. Mais densa, mais direta, mais antiga que o sacral. Quando você escuta, sente no corpo.',
          'Sem o manual, você precisa ter mais cuidado. Use no máximo 1 vez ao dia, com fones, e respeite a intensidade. A energia é forte — não é pico, é base.',
        ],
      },
      {
        heading: 'Como usar a versão única',
        body: [
          'Use fones de ouvido. A frequência atua por vibração direta.',
          'Escute 7 minutos, 1 vez ao dia, por 3 dias seguidos. A energia se instala.',
          'Após os 3 dias, use quando quiser intensificar — antes de um evento, um encontro, uma noite.',
          'Não use mais de 1 vez ao dia. A intensidade é real — respeite.',
          'Os primeiros efeitos: aproximação sem esforço, desejo no olhar, autoridade natural. Em horas, não dias.',
        ],
      },
    ],
    exercise: {
      title: 'O Ritual Essencial de 3 Dias',
      steps: [
        'Dias 1-3: escute o áudio de 7 minutos, 1 vez ao dia, com fones.',
        'Observe as sensações: pressão no peito, calor na base da coluna, firmeza.',
        'Após os 3 dias, use quando quiser carregar o campo — antes de eventos.',
        'Não use mais de 1 vez ao dia. Respeite a intensidade.',
        'Observe: as mulheres reagem sem você fazer nada além de estar no ambiente.',
      ],
    },
    takeaway:
      'Sem os complementos, sem o preço cheio. Mas com o nuclear — e o nuclear já é o incêndio.',
    audios: [
      { src: '/audios/d2-asmodeus-unico.mp3', title: 'O Chamado de Asmodeus — Versão Única (7 min)', description: 'O mantra de invocação da energia de Asmodeus. Use com fones, 1 vez ao dia, por 3 dias seguidos.' },
    ],
  },
  {
    key: 'u3',
    number: 'Upsell #3',
    title: 'Arsenal Predador Completo — Bundle Exclusivo',
    subtitle:
      'Todos os mantras juntos — o sacral, o Chamado de Asmodeus, e 2 bônus exclusivos que não são vendidos separadamente em nenhuma tela anterior: o Mantra da Dominância Silenciosa e o Ritual de 7 Dias para a Aura Magnética. O sistema completo.',
    duration: '60 min',
    icon: 'sparkles',
    objective:
      'Integrar os 3 mantras em um sistema completo que cria uma presença que nenhum deles gera sozinho — o sacral acende, Asmodeus explode, a dominância silenciosa sustenta.',
    lessons: [
      {
        heading: 'A matemática do arsenal',
        body: [
          'Se você comprasse cada mantra separado — o sacral, o Asmodeus, e todos os bônus — você pagaria R$ 891. É a soma real de tudo, sem desconto.',
          'Aqui, nesta única tela, você leva tudo junto por R$ 197. Você economiza R$ 694 — e ainda ganha 2 bônus que não existem fora daqui: o Mantra da Dominância Silenciosa e o Ritual de 7 Dias para a Aura Magnética.',
          'Este bundle não existe fora desta tela. Se você sair, ele some. Não estará à venda em nenhuma página do produto. É a última chance de pegar tudo, com desconto, e com os exclusivos.',
        ],
      },
      {
        heading: 'O que vem no arsenal',
        body: [
          'Áudio OM KROOM LINGAYA OM (sacral) + seus 2 bônus: o áudio principal de 9 minutos + a versão noturna de 11 minutos + o Campo Energético de 5 minutos. Tudo da oferta 1, completo.',
          'Áudio O Chamado de Asmodeus + seus 2 bônus: o áudio principal de 7 minutos + o Selo de Asmodeus de 21 minutos + o Livro de Asmodeus (PDF com o ritual de 3 dias). Tudo da oferta 2, completo.',
          'BÔNUS EXCLUSIVO — Mantra da Dominância Silenciosa (8 minutos): áudio que ativa a presença de quem comanda um ambiente sem falar nada. Não vendido separadamente em nenhuma tela anterior. Só existe aqui, no bundle.',
          'BÔNUS EXCLUSIVO — Ritual de 7 Dias para a Aura Magnética (PDF): guia passo a dia que integra os 3 mantras em uma sequência de 7 dias. Sustenta a energia para além do pico. Só existe aqui.',
        ],
      },
      {
        heading: 'Por que o bundle converte mais',
        body: [
          'Efeito sistema, não pico: os 3 mantras combinados criam uma presença que nenhum deles gera sozinho. O sacral acende, Asmodeus explode, a dominância silenciosa sustenta.',
          'O ritual de 7 dias muda tudo: sem ele, a energia vai e volta. Com ele, fica. É o guia que integra os 3 mantras em uma sequência que sustenta o resultado.',
          '2 bônus que não existem fora: o Mantra da Dominância Silenciosa e o Ritual de 7 Dias não são vendidos separados em nenhuma tela. Só aqui.',
          'Economia de R$ 694: comprar separado custa R$ 891. Aqui, R$ 197. É menos da terça parte — e você leva mais.',
        ],
      },
      {
        heading: 'O Ritual de 7 Dias (exclusivo do bundle)',
        body: [
          'Este é o guia que transforma 3 áudios isolados em um sistema. Sem ele, cada mantra funciona por si — mas a energia vai e volta. Com ele, a energia fica.',
          'Dia 1-2: OM KROOM LINGAYA OM (sacral) pela manhã. Ancora a base.',
          'Dia 3-5: O Chamado de Asmodeus, 1 vez ao dia. Explode a energia.',
          'Dia 6-7: Mantra da Dominância Silenciosa. Sustenta o campo.',
          'A partir do dia 8, você alterna conforme a necessidade: sacral para manter, Asmodeus para intensificar, dominância silenciosa para sustentar. O ritual te dá o mapa de uso — e o mapa é o que faz o sistema funcionar.',
        ],
      },
    ],
    exercise: {
      title: 'O Sistema de 7 Dias do Arsenal',
      steps: [
        'Dias 1-2: escute o sacral (9 min) pela manhã + versão noturna (11 min) à noite.',
        'Dias 3-5: escute o Chamado de Asmodeus (7 min), 1 vez ao dia.',
        'Dia 6-7: escute o Mantra da Dominância Silenciosa (8 min), 1 vez ao dia.',
        'Use o Campo Energético (5 min) antes de qualquer ambiente social.',
        'Use o Selo de Asmodeus (21 min) antes de eventos noturnos.',
        'A partir do dia 8, alterne conforme a necessidade. O sistema está instalado.',
      ],
    },
    takeaway:
      'O homem que tem o arsenal não precisa escolher. Ele carrega tudo. E quem carrega tudo não caça — é o ímã.',
    audios: [
      { src: '/audios/u3-sacral-principal.mp3', title: 'OM KROOM LINGAYA OM — Sacral (9 min)', description: 'O mantra ancestral que ativa o chakra sacral. Escute pela manhã com fones.' },
      { src: '/audios/u3-sacral-noturna.mp3', title: 'Sacral — Versão Noturna (11 min)', description: 'Calibrada para escutar antes de dormir. Ancora a energia durante o sono.' },
      { src: '/audios/u3-campo-energetico.mp3', title: 'Campo Energético (5 min)', description: 'Versão curta para escutar antes de entrar em qualquer ambiente.' },
      { src: '/audios/u3-asmodeus-principal.mp3', title: 'O Chamado de Asmodeus (7 min)', description: 'O mantra de invocação da energia de Asmodeus. Use 1 vez ao dia, por 3 dias.' },
      { src: '/audios/u3-selo-asmodeus.mp3', title: 'Selo de Asmodeus (21 min)', description: 'Versão estendida para carregar o campo por horas. Antes de eventos noturnos.' },
      { src: '/audios/u3-dominancia-silenciosa.mp3', title: 'BÔNUS EXCLUSIVO — Mantra da Dominância Silenciosa (8 min)', description: 'Áudio que ativa a presença de quem comanda um ambiente sem falar nada. Exclusivo do bundle.' },
    ],
    pdfs: [
      { src: '/pdfs/u3-livro-asmodeus.pdf', title: 'O Livro de Asmodeus (Ritual de 3 dias)' },
      { src: '/pdfs/u3-ritual-7-dias.pdf', title: 'BÔNUS EXCLUSIVO — Ritual de 7 Dias para a Aura Magnética' },
    ],
  },
  {
    key: 'd3',
    number: 'Downsell #3',
    title: 'Arsenal Predador — Versão Digital Simples',
    subtitle:
      'Os 3 mantras principais — o sacral, o Chamado de Asmodeus, e o Mantra da Dominância Silenciosa — sem os bônus extras. A versão enxuta pra quem quer o arsenal sem o preço cheio.',
    duration: '24 min',
    icon: 'sparkles',
    objective:
      'Entregar os 3 mantras principais do arsenal sem os bônus extras — o núcleo do sistema predador pelo menor valor.',
    lessons: [
      {
        heading: 'A versão simples — 3 mantras, sem extras',
        body: [
          'Esta é a versão mais enxuta do arsenal. Os 3 mantras principais — o sacral, o Chamado de Asmodeus, e o Mantra da Dominância Silenciosa — sem os bônus extras (sem a versão noturna, sem o Campo Energético, sem o Selo estendido, sem o Ritual de 7 Dias).',
          'Sozinhos, esses 3 mantras já mudam tudo. É a versão enxuta pra quem quer o arsenal sem o preço cheio.',
          'O sacral acende. Asmodeus explode. A dominância silenciosa sustenta. Os 3 juntos já são o sistema — sem os complementos, mas com o núcleo.',
        ],
      },
      {
        heading: 'Os 3 mantras da versão simples',
        body: [
          'OM KROOM LINGAYA OM (sacral) — 9 minutos: acorda o fogo que dorme na base da coluna. O centro da energia masculina.',
          'O Chamado de Asmodeus — 7 minutos: explode a energia sexual predadora. O nuclear, o nível acima do sacral.',
          'Mantra da Dominância Silenciosa — 8 minutos: ativa a presença de quem comanda um ambiente sem falar nada. O que sustenta o sistema.',
        ],
      },
      {
        heading: 'Como usar a versão simples',
        body: [
          'Use fones de ouvido. A frequência atua por vibração direta.',
          'Dias 1-2: sacral (9 min) pela manhã.',
          'Dias 3-5: Chamado de Asmodeus (7 min), 1 vez ao dia.',
          'Dias 6-7: Mantra da Dominância Silenciosa (8 min), 1 vez ao dia.',
          'A partir do dia 8, alterne conforme a necessidade. O sistema está instalado — sem os extras, mas com o núcleo.',
        ],
      },
    ],
    exercise: {
      title: 'O Sistema Simples de 7 Dias',
      steps: [
        'Dias 1-2: escute o sacral (9 min) pela manhã.',
        'Dias 3-5: escute o Chamado de Asmodeus (7 min), 1 vez ao dia.',
        'Dias 6-7: escute o Mantra da Dominância Silenciosa (8 min), 1 vez ao dia.',
        'Não pule mais de 1 dia seguido.',
        'A partir do dia 8, alterne conforme a necessidade.',
        'Observe: a presença muda. As mulheres reagem. O sistema funciona.',
      ],
    },
    takeaway:
      'Sem os extras, sem o preço cheio. Mas com os 3 mantras — e os 3 mantras já são o arsenal.',
    audios: [
      { src: '/audios/d3-sacral.mp3', title: 'OM KROOM LINGAYA OM — Sacral (9 min)', description: 'Acorda o fogo que dorme na base da coluna. O centro da energia masculina.' },
      { src: '/audios/d3-asmodeus.mp3', title: 'O Chamado de Asmodeus (7 min)', description: 'Explode a energia sexual predadora. O nuclear, o nível acima do sacral.' },
      { src: '/audios/d3-dominancia-silenciosa.mp3', title: 'Mantra da Dominância Silenciosa (8 min)', description: 'Ativa a presença de quem comanda um ambiente sem falar nada. O que sustenta o sistema.' },
    ],
  },
];
