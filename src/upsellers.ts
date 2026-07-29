//Bune





// NOVOS UPSELLS E DOWNSELLS — não mexe em upsells.ts.
// Este arquivo exporta UPSELLS_EXTRA (u4, d4, u5, d5) que são mesclados
// com os upsells existentes no Dashboard e na AuthPage.

import type { Upsell } from './upsells';

export const UPSELLS_EXTRA: Upsell[] = [
  // ============================================================
  // UPSELL #4 — O Mapa da Caçada (u4)
  // ============================================================
  {
    key: 'u4',
    number: 'Upsell #4',
    title: 'O Mapa da Caçada — Os 7 Passos do Olhar Até a Cama',
    subtitle:
      'A aura faz ela olhar. Mas olhar não bota ninguém na cama. Este é o passo a passo exato que leva do instante em que ela te olha até o instante em que a porta do quarto fecha. O que falar, como olhar de volta, como aproximar sem assustar, como arrancar ela do grupo, como beijar sem risco de rejeição, como conduzir até a cama. Cada passo. Sem buracos. Sem teoria. Só execução.',
    duration: '35 min',
    icon: 'eye',
    objective:
      'Te entregar um mapa de 7 passos testado que transforma o olhar dela em uma noite completa na sua cama — desde o instante em que ela te olha até o instante em que a porta do quarto fecha, sem travar, sem errar, sem virar amigo.',
    lessons: [
      {
        heading: 'A porta que ninguém te ensinou a cruzar',
        body: [
          'Você já tem a aura. As mulheres vão começar a te olhar diferente. Os pescoços vão virar. Os sorrisos sem motivo vão começar. Você vai sentir o poder. Mas aqui está a verdade que ninguém tem coragem de te dizer: 83% dos homens que compram produtos de atração nunca transam por causa deles. Eles leem, acham incrível, sentem a aura funcionando — e continuam indo pra casa sozinhos.',
          'Sabe por quê? Porque nenhum desses produtos te ensina o que fazer depois do olhar. A aura faz ela te notar. Mas entre ela te notar e ela estar na sua cama, existem 7 passos. E são nesses 7 passos que 97% dos homens travam — e perdem a mulher que JÁ ESTAVA INTERESSADA.',
          'Pensa comigo: o homem mais magnético do mundo entra num bar. Três mulheres viram a cabeça. Ele senta. Elas continuam olhando. E ele... não faz nada. Ele não sabe o que fazer. Ele sente o olhar delas — e congela. O momento esfria. Elas voltam pros celulares. Ele vai pra casa. Sozinho. Igual a todos os outros dias. É o homem mais magnético do mundo — e mesmo assim perde. Porque a aura abre a porta, mas ninguém te ensinou a cruzá-la.',
          'O Mapa da Caçada é o que falta. Não é teoria. Não é "seja confiante". É um mapa de 7 passos que te diz exatamente o que fazer desde o instante em que ela te olha até o instante em que a porta do quarto fecha. Cada passo. Sem buracos. Sem teoria. Só execução.',
        ],
      },
      {
        heading: 'Os 4 gargalos mortais (onde você está perdendo)',
        body: [
          'Gargalo 1 — Ela olha, você congela. O olhar veio. Você sentiu. E seu cérebro travou igual uma porta enferrujada. Você não sabe se olha de volta, se sorri, se se aproxima. Fica ali, paralisado, enquanto o momento escorre pelo ralo. Ela desiste. Você vai pra casa sozinho — de novo. Igual a todas as outras noites.',
          'Gargalo 2 — Você se aproxima, erra. Você reúne a coragem de um Deus, vai até ela — e fala a coisa errada. No momento errado. Com a energia errada. A química que ela sentiu se quebra em segundos. O olhar dela apaga. Você vira mais um cara genérico que tentou e falhou. Ela volta pro celular. Você volta pra parede.',
          'Gargalo 3 — Vocês conversam, vira amigo. Vocês estão falando. Ela está rindo. Mas você não sabe como tocar, como mudar de ambiente, como criar tensão sexual. A conversa esfria. O clima morre. Ela diz "foi legal conhecer você" — a frase que significa: eu não senti nada. Você ganhou mais uma amiga. Parabéns.',
          'Gargalo 4 — Vocês beijam, e para aí. O beijo aconteceu. E agora? Você não sabe conduzir. Não sabe levar pra um lugar íntimo. A noite termina no beijo. Ela vai pra casa. Você vai pra sua. O desejo morre ali — e ela nunca mais vai te dar outra chance. Cada um desses pontos é um lugar onde o homem comum trava e perde a mulher que já estava interessada. O Mapa da Caçada fecha os 4.',
        ],
      },
      {
        heading: 'Passo 1 — O Retorno do Olhar (0 a 3 segundos)',
        body: [
          'O olhar dela é o convite. Mas o convite tem prazo de validade: aproximadamente 5 segundos. É nesse intervalo que o destino da interação é decidido. A maioria dos homens sente o olhar, fica em choque, e o olhar esfria antes de qualquer palavra. O momento morre. O Passo 1 te ensina a responder antes que a janela feche.',
          'A regra do Retorno Calmo: quando ela olhar, não sorria largo. Não desvie. Olhe de volta, segure 1 a 2 segundos, e diga mentalmente: "interessante". Esse segundo de espera comunica que você não está em choque — está avaliando. E a avaliação comunica poder. O homem que reage instantaneamente parece ansioso. O que espera 1 segundo parece no controle.',
          'Depois do segundo de espera, há três respostas possíveis. Se ela sorrir ou segurar o olhar de volta: green light — você avança para o Passo 2. Se ela hesitar ou ficar curiosa sem sorrir: yellow light — você segura mais 2 segundos e observa. Se ela desviar rápido e voltar ao celular: red light — você solta devagar e segue. Na maioria das vezes, com a aura ativa, é green light. A aura já fez metade do trabalho. O Passo 1 é só não desperdiçar.',
          'O erro mortal aqui é o "desvio rápido". Quando você desvia primeiro e rápido, comunica desconforto. Mesmo que ela tenha olhado primeiro, desviar rápido apaga a atração. A regra de ouro: quando os olhos dela encontrarem os seus, não desvie primeiro. Segure. Solte devagar quando decidir soltar. Esse "solte devagar" — virando a cabeça primeiro, os olhos acompanhando por último — é o que causa o trava nela. Ela sente que você não queria ir, mesmo tendo ido.',
        ],
      },
      {
        heading: 'Passo 2 — A Aproximação Sem Medo (3 a 15 segundos)',
        body: [
          'Green light confirmado. Agora você precisa cruzar o espaço entre vocês. E é aqui que 60% dos homens travam pela segunda vez. Não pelo medo de olhar — pelo medo de se mover. O movimento é a parte que mais comunica intenção. E intenção mal executada assusta.',
          'A Regra da Aproximação Lateral: nunca vá de frente. De frente é como um predador ataca — e o cérebro dela lê como ameaça. Aproxime-se num ângulo de 45 graus, levemente lateral. É o ângulo social, o ângulo que amigos usam. Esse ângulo comunica "conversa", não "ataque".',
          'A Regra da Velocidade: ande 20% mais devagar do que acha que deveria. O homem ansioso anda rápido. O homem com aura anda devagar porque tem tempo. A velocidade do seu movimento comunica o seu estado interno mais do que qualquer palavra. Devagar = confortável = atraente.',
          'A Regra da Abertura: não comece com uma pergunta sobre ela. Comece com uma observação sobre o ambiente, ou um comentário que não exige resposta imediata. "Esse lugar tem uma energia estranha hoje" ou "A música aqui sempre escolhe o momento certo pra parar." Isso tira a pressão dela — você não está comentando o corpo dela, não está pedindo nada. Está comentando o contexto. E ao fazer isso, demonstra observação e desapego. A resposta natural dela é concordar ou discordar — e ambos iniciam a conversa a partir de um lugar de igualdade, não de perseguição.',
          'A distância de parada: pare a aproximadamente 1 metro dela — perto o suficiente pra conversar sem gritar, longe o suficiente pra ela não se sentir encurralada. Se ela recuar meio passo, você fica parado — não avance. Se ela se inclinar pra frente ou ficar estável, você está na distância certa. O corpo dela diz tudo antes da boca.',
        ],
      },
      {
        heading: 'Passo 3 — O Isolamento (15 a 90 minutos)',
        body: [
          'Vocês estão conversando. O ambiente está barulhento. As amigas dela estão perto. E é aqui que 90% dos homens perdem — porque não sabem arrancar ela do grupo. A conversa no meio do barulho não cria intimidade. Ela cria frustração. Você gritando, ela fingindo que ouviu, o clima esfriando a cada "o quê?" que ela pergunta.',
          'A Técnica da Mudança de Ambiente: no meio da conversa, diga com calma: "Aqui tá impossível de conversar. Vamos pra lá [apontando para um canto mais calmo, o balcão, a varanda]." Não pergunte "quer ir?". Pergunta comunica pedido de permissão. Afirmação comunica liderança. "Vamos pra lá" é uma instrução suave — e as mulheres seguem liderança calma mais do que seguem pedidos.',
          'A Técnica do Gancho de Curiosidade: se ela hesitar, não insista. Use o gancho: "Tô te contando uma história que você precisa ouvir inteira, mas aqui o barulho corta. Vem." O "vem" é direto. O "você precisa ouvir" é o gancho. A curiosidade dela vence a hesitação. Você não está pedindo — está oferecendo algo que ela vai querer.',
          'A Técnica do Isolamento do Grupo: se ela estiver com amigas, não ataque o grupo. Faça amizade com o grupo primeiro — 2 minutos de conversa leve com todos. Depois, dirija-se a ela especificamente: "Você parece a mais [qualidade interessante] desse grupo. Me conta uma coisa." Quando ela responder, você cria um micro-mundo entre vocês dois dentro do grupo. Depois, a mudança de ambiente acontece naturalmente — "vamos continuar lá fora" — e as amigas nem percebem que você está conduzindo. Ela também não. Só segue.',
          'O ponto do isolamento não é separar ela das amigas de forma agressiva. É criar um espaço onde só existem vocês dois — onde a conversa pode aprofundar, onde o toque pode começar, onde a tensão sexual pode crescer sem a interferência do ambiente. Sem isolamento, nada mais avança. É o passo onde 90% dos homens travam — e onde você não vai mais travar.',
        ],
      },
      {
        heading: 'Passo 4 — A Escalada da Tensão (90 a 120 minutos)',
        body: [
          'Agora vocês estão a sós. A conversa está fluindo. E aqui é onde a maioria dos homens fica preso na "amizade" — porque não sabe escalar a tensão sexual sem parecer agressivo. A tensão não se força. Se se constrói. E se constrói em camadas.',
          'Camada 1 — O Toque Social. Comece com toques que qualquer amigo faria. Um toque no braço quando ela fizer uma piada. Um toque no ombro quando você concordar com algo. São toques breves, naturais, que quebram a barreira física sem comunicar intenção. O corpo dela se acostuma com o seu contato antes que o contato tenha peso.',
          'Camada 2 — O Toque Direcionado. Depois de 3-4 toques sociais, mude a qualidade. Em vez de tocar o braço de relance, toque e segure 2 segundos. Em vez de tocar o ombro, toque a parte de trás do braço, perto do cotovelo — uma zona mais íntima que comunica "eu te vejo como mulher, não como amiga". Se ela não recuar, você avança.',
          'Camada 3 — O Toque de Cintura. O toque na cintua é a linha divisória entre "amigo" e "interessado". Quando estiverem lado a lado, coloque a mão levemente na cintura dela pra guiar o caminho — "por aqui". O toque de cintura comunicado como guia é aceito socialmente, mas o corpo dela lê como intenção. Se ela se aproxima em vez de se afastar, a tensão subiu de nível.',
          'Camada 4 — O Olhar de Boca. No meio da conversa, quando ela estiver falando, deixe seu olhar descer dos olhos dela para a boca dela por 1 segundo — e volte. Não faça isso toda hora. Uma vez. Ela vai notar. E o subconsciente dela vai registrar: "ele está pensando na minha boca." Esse é o gatilho que prepara o Passo 5. Sem ele, o beijo vem do nada. Com ele, o beijo é esperado.',
        ],
      },
      {
        heading: 'Passo 5 — O Beijo Sem Rejeição (o gatilho exato)',
        body: [
          'Aqui está o passo que mais homens temem. O beijo. O medo da rejeição é tão grande que a maioria adia até o clima esfriar — e aí nunca mais beija. O Passo 5 elimina o risco de rejeição porque ela já está esperando antes de você chegar perto da boca dela.',
          'A Janela de Beijo: você identifica a janela por 3 sinais. Sinal 1: ela está olhando para sua boca (o olhar de boca funciona nos dois sentidos). Sinal 2: ela faz silêncio no meio da conversa — um silêncio carregado, não vazio. Sinal 3: ela não recua quando você se aproxima. Quando os 3 sinais estão presentes, a janela está aberta. Não pergunte. Não diga "posso te beijar?". A pergunta mata a tensão. Aja.',
          'O Movimento do Beijo: diminua a velocidade da conversa. Faça uma pausa de 2 segundos. Olhe nos olhos dela. Desça o olhar para a boca. Volte para os olhos. Incline a cabeça levemente. Aproxime-se 70% do caminho. Pare. Os últimos 30% são dela. Se ela fechar os olhos ou se inclinar, você completa. Se ela recuar, você recua sem drama — "tudo bem" com um sorriso calmo e volta à conversa como se nada tivesse acontecido. A ausência de drama comunica confiança. E muitas vezes, a recua não acontece porque os 3 sinais já confirmaram a janela.',
          'O segredo do "70% do caminho": você nunca completa o beijo sozinho. Você cria a oportunidade. Ela decide cruzar os últimos 30%. Isso elimina a rejeição — porque você não forçou. Você ofereceu. E o oferecimento calmo, sem pressa, sem nervosismo, é o que faz ela já estar de olhos fechados antes de você chegar perto da boca dela.',
          'O timing: não espere o "momento perfeito". O momento perfeito não existe. Espere os 3 sinais. Quando os 3 sinais estão presentes, aja nos próximos 30 segundos. Adiar mais que isso esfria a janela. A janela de beijo não é uma porta aberta — é uma porta que se fecha. Aja enquanto está aberta.',
        ],
      },
      {
        heading: 'Passo 6 — O Pós-Beijo (consolidar, não celebrar)',
        body: [
          'O beijo aconteceu. E aqui é onde a maioria dos homens comete o erro que mata tudo: eles celebram. Param. Sorriem. Ficam sem assunto. O beijo vira o pico — e depois do pico, só descida. O Passo 6 te ensina a fazer o beijo ser o início, não o fim.',
          'A Regra do Não-Celebração: depois do beijo, não comente. Não diga "nossa". Não sorria largo. Volte à conversa como se o beijo fosse natural — porque é. A naturalidade comunica que você beija mulheres atraentes regularmente, que isso não é um evento raro pra você. A celebração comunica o oposto: que o beijo foi uma vitória rara. E vitória rara comunica escassez. Escassez mata atração.',
          'A Regra do Toque Contínuo: depois do beijo, o toque físico não recua. Se vocês estavam de mãos dadas, continue. Se a mão estava na cintura, mantenha. Recuar o toque após o beijo comunica "isso foi tudo que eu queria". Manter o toque comunica "isso é parte de algo maior". A diferença é sutil, mas ela sente.',
          'A Regra da Mudança de Estado: após o beijo, mude sutilmente o tom da conversa. Deixe mais lento. Mais baixo. Mais próximo. Sussurre perto do ouvido dela. A mudança de tom comunica que vocês entraram em um novo estágio — e o novo estágio é mais íntimo que o anterior. É a preparação para o Passo 7. Sem essa mudança de estado, o beijo fica isolado, e a noite pode terminar aí.',
        ],
      },
      {
        heading: 'Passo 7 — A Condução Até a Cama (fechar sem hesitação)',
        body: [
          'O passo final. O que separa o homem que fecha do homem que termina a noite no beijo. A condução não é sobre sexo — é sobre liderança. Você não pergunta "quer ir pra minha casa?". Você conduz. E a condução certa faz ela ir com você sem que ela invente uma desculpa pra ir embora.',
          'A Técnica do Motivo Natural: não diga "vamos pra minha casa". Diga "vou te mostrar [uma música / uma vista / uma coisa que eu falei / meu dogue]." O motivo não importa. O que importa é que dá a ela uma razão social pra ir que não é "transar". Ela sabe. Você sabe. Mas o motivo social permite que ela se permita ir sem se sentir julgada — por ela mesma ou pelas amigas dela. O motivo natural é a ponte entre o beijo e a porta do quarto.',
          'A Técnica da Decisão Reduzida: quando propor, reduza as decisões que ela precisa tomar. Não "quer ir?". Diga "tô indo, vem comigo". A decisão reduzida é "ir ou não ir" — não "querer ou não querer". A primeira é uma ação. A segunda é uma avaliação moral. Você quer a ação, não a avaliação.',
          'A Técnica da Janela de Saída: quando estiverem a caminho, não pressione. Não fale sobre o que vai acontecer. Converse sobre qualquer outra coisa — leve, divertida, sem peso. A pressão sexual já está construída. Pressionar verbalmente agora quebra a magia. Deixe a tensão fazer o trabalho. A condução silenciosa é mais poderosa que qualquer frase.',
          'A chegada: quando entrarem, não vá direto pro quarto. Ofereça água. Coloque uma música. Crie 2 minutos de transição entre "chegamos" e "agora". Esses 2 minutos permitem que ela se acomode no espaço — e uma mulher acomodada no seu espaço é uma mulher que vai ficar. A pressa na chegada comunica ansiedade. A calma na chegada comunica controle. Controle é o que faz ela relaxar. E relaxada, ela não inventa desculpa. Ela fica.',
        ],
      },
    ],
    exercise: {
      title: 'Os 7 Passos em 14 Dias',
      steps: [
        'Dias 1-2: treine o Passo 1 (Retorno do Olhar) — toda vez que alguém olhar, segure 1-2s, solte devagar. 5x ao dia.',
        'Dia 3: treine o Passo 2 (Aproximação Lateral) — aproxime de 2 estranhos com um comentário de ambiente, sem intenção.',
        'Dia 4: pratique o Passo 3 (Isolamento) — numa conversa em grupo, conduza uma pessoa para um canto mais calmo.',
        'Dias 5-6: treine o Passo 4 (Escalada) — pratique as 4 camadas de toque em interações sociais, do social ao dirigido.',
        'Dia 7: estude os 3 sinais da Janela de Beijo (Passo 5) — observe interações e identifique quando a janela estaria aberta.',
        'Dias 8-10: aplique os Passos 1 ao 4 numa interação real. Não force o beijo. Só chegue ao isolamento + escalada.',
        'Dias 11-14: aplique os 7 passos completos. Observe onde flui e onde trava. Ajuste. Repita.',
        'Ao final dos 14 dias, você terá o mapa instalado. Os gargalos não existem mais — só a execução.',
      ],
    },
    takeaway:
      'A aura abre a porta. O Mapa da Caçada te ensina a cruzar. Os 7 passos não são teoria — são o caminho do olhar dela até a porta do quarto. Sem travar. Sem errar. Sem virar amigo. Só execução.',
  },

  // ============================================================
  // DOWNSELL #4 — O Mapa da Caçada, Versão Essencial (d4)
  // ============================================================
  {
    key: 'd4',
    number: 'Downsell #4',
    title: 'O Mapa da Caçada — Versão Essencial',
    subtitle:
      'O protocolo completo dos 7 passos que levam do instante em que ela te olha até o instante em que a porta do quarto fecha. O que falar, como olhar de volta, como aproximar sem assustar, como arrancar ela do grupo, como beijar sem risco de rejeição, como conduzir até a cama. Cada passo em detalhe. Sem buracos. Sem teoria. Só execução.',
    duration: '35 min',
    icon: 'eye',
    objective:
      'Te entregar um mapa de 7 passos testado que transforma o olhar dela em uma noite completa na sua cama — desde o instante em que ela te olha até o instante em que a porta do quarto fecha, sem travar, sem errar, sem virar amigo.',
    lessons: [
      {
        heading: 'A porta que ninguém te ensinou a cruzar',
        body: [
          'Você já tem a aura. As mulheres vão começar a te olhar diferente. Os pescoços vão virar. Os sorrisos sem motivo vão começar. Você vai sentir o poder. Mas aqui está a verdade que ninguém tem coragem de te dizer: 83% dos homens que compram produtos de atração nunca transam por causa deles. Eles leem, acham incrível, sentem a aura funcionando — e continuam indo pra casa sozinhos.',
          'Sabe por quê? Porque nenhum desses produtos te ensina o que fazer depois do olhar. A aura faz ela te notar. Mas entre ela te notar e ela estar na sua cama, existem 7 passos. E são nesses 7 passos que 97% dos homens travam — e perdem a mulher que JÁ ESTAVA INTERESSADA.',
          'Pensa comigo: o homem mais magnético do mundo entra num bar. Três mulheres viram a cabeça. Ele senta. Elas continuam olhando. E ele... não faz nada. Ele não sabe o que fazer. Ele sente o olhar delas — e congela. O momento esfria. Elas voltam pros celulares. Ele vai pra casa. Sozinho. Igual a todos os outros dias. É o homem mais magnético do mundo — e mesmo assim perde. Porque a aura abre a porta, mas ninguém te ensinou a cruzá-la.',
          'O Mapa da Caçada é o que falta. Não é teoria. Não é "seja confiante". É um mapa de 7 passos que te diz exatamente o que fazer desde o instante em que ela te olha até o instante em que a porta do quarto fecha. Cada passo. Sem buracos. Sem teoria. Só execução. Você não precisa nascer sabendo. Não precisa de carisma. Não precisa de experiência. Você só precisa seguir a sequência.',
        ],
      },
      {
        heading: 'Os 4 gargalos mortais (onde você está perdendo)',
        body: [
          'Gargalo 1 — Ela olha, você congela. O olhar veio. Você sentiu. E seu cérebro travou igual uma porta enferrujada. Você não sabe se olha de volta, se sorri, se se aproxima. Fica ali, paralisado, enquanto o momento escorre pelo ralo. Ela desiste. Você vai pra casa sozinho — de novo. Igual a todas as outras noites.',
          'Gargalo 2 — Você se aproxima, erra. Você reúne a coragem de um Deus, vai até ela — e fala a coisa errada. No momento errado. Com a energia errada. A química que ela sentiu se quebra em segundos. O olhar dela apaga. Você vira mais um cara genérico que tentou e falhou. Ela volta pro celular. Você volta pra parede.',
          'Gargalo 3 — Vocês conversam, vira amigo. Vocês estão falando. Ela está rindo. Mas você não sabe como tocar, como mudar de ambiente, como criar tensão sexual. A conversa esfria. O clima morde. Ela diz "foi legal conhecer você" — a frase que significa: eu não senti nada. Você ganhou mais uma amiga. Parabéns.',
          'Gargalo 4 — Vocês beijam, e para aí. O beijo aconteceu. E agora? Você não sabe conduzir. Não sabe levar pra um lugar íntimo. A noite termina no beijo. Ela vai pra casa. Você vai pra sua. O desejo morre ali — e ela nunca mais vai te dar outra chance. Cada um desses pontos é um lugar onde o homem comum trava e perde a mulher que já estava interessada. O Mapa da Caçada fecha os 4.',
        ],
      },
      {
        heading: 'Passo 1 — O Retorno do Olhar (0 a 3 segundos)',
        body: [
          'O olhar dela é o convite. Mas o convite tem prazo de validade: aproximadamente 5 segundos. É nesse intervalo que o destino da interação é decidido. A maioria dos homens sente o olhar, fica em choque, e o olhar esfria antes de qualquer palavra. O momento morre. O Passo 1 te ensina a responder antes que a janela feche.',
          'A regra do Retorno Calmo: quando ela olhar, não sorria largo. Não desvie. Olhe de volta, segure 1 a 2 segundos, e diga mentalmente: "interessante". Esse segundo de espera comunica que você não está em choque — está avaliando. E a avaliação comunica poder. O homem que reage instantaneamente parece ansioso. O que espera 1 segundo parece no controle.',
          'Depois do segundo de espera, há três respostas possíveis. Se ela sorrir ou segurar o olhar de volta: green light — você avança para o Passo 2. Se ela hesitar ou ficar curiosa sem sorrir: yellow light — você segura mais 2 segundos e observa. Se ela desviar rápido e voltar ao celular: red light — você solta devagar e segue. Na maioria das vezes, com a aura ativa, é green light. A aura já fez metade do trabalho. O Passo 1 é só não desperdiçar.',
          'O erro mortal aqui é o "desvio rápido". Quando você desvia primeiro e rápido, comunica desconforto. Mesmo que ela tenha olhado primeiro, desviar rápido apaga a atração. A regra de ouro: quando os olhos dela encontrarem os seus, não desvie primeiro. Segure. Solte devagar quando decidir soltar. Esse "solte devagar" — virando a cabeça primeiro, os olhos acompanhando por último — é o que causa o trava nela. Ela sente que você não queria ir, mesmo tendo ido.',
        ],
      },
      {
        heading: 'Passo 2 — A Aproximação Sem Medo (3 a 15 segundos)',
        body: [
          'Green light confirmado. Agora você precisa cruzar o espaço entre vocês. E é aqui que 60% dos homens travam pela segunda vez. Não pelo medo de olhar — pelo medo de se mover. O movimento é a parte que mais comunica intenção. E intenção mal executada assusta.',
          'A Regra da Aproximação Lateral: nunca vá de frente. De frente é como um predador ataca — e o cérebro dela lê como ameaça. Aproxime-se num ângulo de 45 graus, levemente lateral. É o ângulo social, o ângulo que amigos usam. Esse ângulo comunica "conversa", não "ataque".',
          'A Regra da Velocidade: ande 20% mais devagar do que acha que deveria. O homem ansioso anda rápido. O homem com aura anda devagar porque tem tempo. A velocidade do seu movimento comunica o seu estado interno mais do que qualquer palavra. Devagar = confortável = atraente.',
          'A Regra da Abertura: não comece com uma pergunta sobre ela. Comece com uma observação sobre o ambiente, ou um comentário que não exige resposta imediata. "Esse lugar tem uma energia estranha hoje" ou "A música aqui sempre escolhe o momento certo pra parar." Isso tira a pressão dela — você não está comentando o corpo dela, não está pedindo nada. Está comentando o contexto. E ao fazer isso, demonstra observação e desapego. A resposta natural dela é concordar ou discordar — e ambos iniciam a conversa a partir de um lugar de igualdade, não de perseguição.',
          'A distância de parada: pare a aproximadamente 1 metro dela — perto o suficiente pra conversar sem gritar, longe o suficiente pra ela não se sentir encurralada. Se ela recuar meio passo, você fica parado — não avance. Se ela se inclinar pra frente ou ficar estável, você está na distância certa. O corpo dela diz tudo antes da boca.',
        ],
      },
      {
        heading: 'Passo 3 — O Isolamento (15 a 90 minutos)',
        body: [
          'Vocês estão conversando. O ambiente está barulhento. As amigas dela estão perto. E é aqui que 90% dos homens perdem — porque não sabem arrancar ela do grupo. A conversa no meio do barulho não cria intimidade. Ela cria frustração. Você gritando, ela fingindo que ouviu, o clima esfriando a cada "o quê?" que ela pergunta.',
          'A Técnica da Mudança de Ambiente: no meio da conversa, diga com calma: "Aqui tá impossível de conversar. Vamos pra lá [apontando para um canto mais calmo, o balcão, a varanda]." Não pergunte "quer ir?". Pergunta comunica pedido de permissão. Afirmação comunica liderança. "Vamos pra lá" é uma instrução suave — e as mulheres seguem liderança calma mais do que seguem pedidos.',
          'A Técnica do Gancho de Curiosidade: se ela hesitar, não insista. Use o gancho: "Tô te contando uma história que você precisa ouvir inteira, mas aqui o barulho corta. Vem." O "vem" é direto. O "você precisa ouvir" é o gancho. A curiosidade dela vence a hesitação. Você não está pedindo — está oferecendo algo que ela vai querer.',
          'A Técnica do Isolamento do Grupo: se ela estiver com amigas, não ataque o grupo. Faça amizade com o grupo primeiro — 2 minutos de conversa leve com todos. Depois, dirija-se a ela especificamente: "Você parece a mais [qualidade interessante] desse grupo. Me conta uma coisa." Quando ela responder, você cria um micro-mundo entre vocês dois dentro do grupo. Depois, a mudança de ambiente acontece naturalmente — "vamos continuar lá fora" — e as amigas nem percebem que você está conduzindo. Ela também não. Só segue.',
          'O ponto do isolamento não é separar ela das amigas de forma agressiva. É criar um espaço onde só existem vocês dois — onde a conversa pode aprofundar, onde o toque pode começar, onde a tensão sexual pode crescer sem a interferência do ambiente. Sem isolamento, nada mais avança. É o passo onde 90% dos homens travam — e onde você não vai mais travar.',
        ],
      },
      {
        heading: 'Passo 4 — A Escalada da Tensão (90 a 120 minutos)',
        body: [
          'Agora vocês estão a sós. A conversa está fluindo. E aqui é onde a maioria dos homens fica presa na "amizade" — porque não sabe escalar a tensão sexual sem parecer agressivo. A tensão não se força. Se se constrói. E se constrói em camadas.',
          'Camada 1 — O Toque Social. Comece com toques que qualquer amigo faria. Um toque no braço quando ela fizer uma piada. Um toque no ombro quando você concordar com algo. São toques breves, naturais, que quebram a barreira física sem comunicar intenção. O corpo dela se acostuma com o seu contato antes que o contato tenha peso.',
          'Camada 2 — O Toque Direcionado. Depois de 3-4 toques sociais, mude a qualidade. Em vez de tocar o braço de relance, toque e segure 2 segundos. Em vez de tocar o ombro, toque a parte de trás do braço, perto do cotovelo — uma zona mais íntima que comunica "eu te vejo como mulher, não como amiga". Se ela não recuar, você avança.',
          'Camada 3 — O Toque de Cintura. O toque na cintura é a linha divisória entre "amigo" e "interessado". Quando estiverem lado a lado, coloque a mão levemente na cintura dela pra guiar o caminho — "por aqui". O toque de cintura comunicado como guia é aceito socialmente, mas o corpo dela lê como intenção. Se ela se aproxima em vez de se afastar, a tensão subiu de nível.',
          'Camada 4 — O Olhar de Boca. No meio da conversa, quando ela estiver falando, deixe seu olhar descer dos olhos dela para a boca dela por 1 segundo — e volte. Não faça isso toda hora. Uma vez. Ela vai notar. E o subconsciente dela vai registrar: "ele está pensando na minha boca." Esse é o gatilho que prepara o Passo 5. Sem ele, o beijo vem do nada. Com ele, o beijo é esperado.',
        ],
      },
      {
        heading: 'Passo 5 — O Beijo Sem Rejeição (o gatilho exato)',
        body: [
          'Aqui está o passo que mais homens temem. O beijo. O medo da rejeição é tão grande que a maioria adia até o clima esfriar — e aí nunca mais beija. O Passo 5 elimina o risco de rejeição porque ela já está esperando antes de você chegar perto da boca dela.',
          'A Janela de Beijo: você identifica a janela por 3 sinais. Sinal 1: ela está olhando para sua boca (o olhar de boca funciona nos dois sentidos). Sinal 2: ela faz silêncio no meio da conversa — um silêncio carregado, não vazio. Sinal 3: ela não recua quando você se aproxima. Quando os 3 sinais estão presentes, a janela está aberta. Não pergunte. Não diga "posso te beijar?". A pergunta mata a tensão. Aja.',
          'O Movimento do Beijo: diminua a velocidade da conversa. Faça uma pausa de 2 segundos. Olhe nos olhos dela. Desça o olhar para a boca. Volte para os olhos. Incline a cabeça levemente. Aproxime-se 70% do caminho. Pare. Os últimos 30% são dela. Se ela fechar os olhos ou se inclinar, você completa. Se ela recuar, você recua sem drama — "tudo bem" com um sorriso calmo e volta à conversa como se nada tivesse acontecido. A ausência de drama comunica confiança. E muitas vezes, a recua não acontece porque os 3 sinais já confirmaram a janela.',
          'O segredo do "70% do caminho": você nunca completa o beijo sozinho. Você cria a oportunidade. Ela decide cruzar os últimos 30%. Isso elimina a rejeição — porque você não forçou. Você ofereceu. E o oferecimento calmo, sem pressa, sem nervosismo, é o que faz ela já estar de olhos fechados antes de você chegar perto da boca dela.',
          'O timing: não espere o "momento perfeito". O momento perfeito não existe. Espere os 3 sinais. Quando os 3 sinais estão presentes, aja nos próximos 30 segundos. Adiar mais que isso esfria a janela. A janela de beijo não é uma porta aberta — é uma porta que se fecha. Aja enquanto está aberta.',
        ],
      },
      {
        heading: 'Passo 6 — O Pós-Beijo (consolidar, não celebrar)',
        body: [
          'O beijo aconteceu. E aqui é onde a maioria dos homens comete o erro que mata tudo: eles celebram. Param. Sorriem. Ficam sem assunto. O beijo vira o pico — e depois do pico, só descida. O Passo 6 te ensina a fazer o beijo ser o início, não o fim.',
          'A Regra do Não-Celebração: depois do beijo, não comente. Não diga "nossa". Não sorria largo. Volte à conversa como se o beijo fosse natural — porque é. A naturalidade comunica que você beija mulheres atraentes regularmente, que isso não é um evento raro pra você. A celebração comunica o oposto: que o beijo foi uma vitória rara. E vitória rara comunica escassez. Escassez mata atração.',
          'A Regra do Toque Contínuo: depois do beijo, o toque físico não recua. Se vocês estavam de mãos dadas, continue. Se a mão estava na cintura, mantenha. Recuar o toque após o beijo comunica "isso foi tudo que eu queria". Manter o toque comunica "isso é parte de algo maior". A diferença é sutil, mas ela sente.',
          'A Regra da Mudança de Estado: após o beijo, mude sutilmente o tom da conversa. Deixe mais lento. Mais baixo. Mais próximo. Sussurre perto do ouvido dela. A mudança de tom comunica que vocês entraram em um novo estágio — e o novo estágio é mais íntimo que o anterior. É a preparação para o Passo 7. Sem essa mudança de estado, o beijo fica isolado, e a noite pode terminar aí.',
        ],
      },
      {
        heading: 'Passo 7 — A Condução Até a Cama (fechar sem hesitação)',
        body: [
          'O passo final. O que separa o homem que fecha do homem que termina a noite no beijo. A condução não é sobre sexo — é sobre liderança. Você não pergunta "quer ir pra minha casa?". Você conduz. E a condução certa faz ela ir com você sem que ela invente uma desculpa pra ir embora.',
          'A Técnica do Motivo Natural: não diga "vamos pra minha casa". Diga "vou te mostrar [uma música / uma vista / uma coisa que eu falei / meu dogue]." O motivo não importa. O que importa é que dá a ela uma razão social pra ir que não é "transar". Ela sabe. Você sabe. Mas o motivo social permite que ela se permita ir sem se sentir julgada — por ela mesma ou pelas amigas dela. O motivo natural é a ponte entre o beijo e a porta do quarto.',
          'A Técnica da Decisão Reduzida: quando propor, reduza as decisões que ela precisa tomar. Não "quer ir?". Diga "tô indo, vem comigo". A decisão reduzida é "ir ou não ir" — não "querer ou não querer". A primeira é uma ação. A segunda é uma avaliação moral. Você quer a ação, não a avaliação.',
          'A Técnica da Janela de Saída: quando estiverem a caminho, não pressione. Não fale sobre o que vai acontecer. Converse sobre qualquer outra coisa — leve, divertida, sem peso. A pressão sexual já está construída. Pressionar verbalmente agora quebra a magia. Deixe a tensão fazer o trabalho. A condução silenciosa é mais poderosa que qualquer frase.',
          'A chegada: quando entrarem, não vá direto pro quarto. Ofereça água. Coloque uma música. Crie 2 minutos de transição entre "chegamos" e "agora". Esses 2 minutos permitem que ela se acomode no espaço — e uma mulher acomodada no seu espaço é uma mulher que vai ficar. A pressa na chegada comunica ansiedade. A calma na chegada comunica controle. Controle é o que faz ela relaxar. E relaxada, ela não inventa desculpa. Ela fica.',
        ],
      },
    ],
    exercise: {
      title: 'Os 7 Passos em 14 Dias',
      steps: [
        'Dias 1-2: treine o Passo 1 (Retorno do Olhar) — toda vez que alguém olhar, segure 1-2s, solte devagar. 5x ao dia.',
        'Dia 3: treine o Passo 2 (Aproximação Lateral) — aproxime de 2 estranhos com um comentário de ambiente, sem intenção.',
        'Dia 4: pratique o Passo 3 (Isolamento) — numa conversa em grupo, conduza uma pessoa para um canto mais calmo.',
        'Dias 5-6: treine o Passo 4 (Escalada) — pratique as 4 camadas de toque em interações sociais, do social ao dirigido.',
        'Dia 7: estude os 3 sinais da Janela de Beijo (Passo 5) — observe interações e identifique quando a janela estaria aberta.',
        'Dias 8-10: aplique os Passos 1 ao 4 numa interação real. Não force o beijo. Só chegue ao isolamento + escalada.',
        'Dias 11-14: aplique os 7 passos completos. Observe onde flui e onde trava. Ajuste. Repita.',
        'Ao final dos 14 dias, você terá o mapa instalado. Os gargalos não existem mais — só a execução.',
      ],
    },
    takeaway:
      'A aura abre a porta. O Mapa da Caçada te ensina a cruzar. Os 7 passos não são teoria — são o caminho do olhar dela até a porta do quarto. Sem travar. Sem errar. Sem virar amigo. Só execução.',
  },

  // ============================================================
  // UPSELL #5 — O Protocolo da Dominação (u5)
  // ============================================================
  {
    key: 'u5',
    number: 'Upsell #5',
    title: 'O Protocolo da Dominação — O Manual da Hora H',
    subtitle:
      'A aura faz ela olhar. O mapa faz ela ir pra cama. Mas o que acontece na cama decide se ela volta — ou se te esquece. O guia completo de como ser absolutamente excepcional na cama: controle total para durar o tempo que quiser, técnicas que geram orgasmos em minutos, o mapa do corpo feminino que 97% dos homens desconhecem. Como sair de "ok" pra "inesquecível".',
    duration: '48 min',
    icon: 'flame',
    objective:
      'Te transformar em um homem excepcional na cama — com controle total da ejaculação, técnicas de orgasmo múltiplo nela, e o mapa completo do corpo feminino — para que ela volte, sempre, e conte pras amigas.',
    lessons: [
      {
        heading: 'A cama é o exame final',
        body: [
          'Vou te falar algo que nenhum homem gosta de ouvir. 70% das mulheres já fingiram um orgasmo. E a maioria finge porque o homem na cama é medíocre — e ela quer acabar logo. Você pode ter a aura mais potente do mundo. Pode ter o mapa da caçada mais perfeito. Pode levar a mulher mais linda pra cama. Mas se na hora H você for como os outros 97% — rápido, sem técnica, sem controle, sem saber tocar — ela vai sair, fingir que foi bom, e nunca mais responder sua mensagem.',
          'E o pior: ela vai contar pra amigas. E as amigas vão saber. E o nome que você construiu com a aura vai ser destruído em uma noite. A cama é o exame final. Tudo o que você construiu — a aura, o olhar, a aproximação — converge pra esse momento. E é aqui que a maioria dos homens falha. Não por falta de vontade. Por falta de conhecimento.',
          'Este protocolo te coloca no 3% que faz a mulher perder a noção do tempo. Não é sobre ter um pênis maior. Não é sobre durar a noite inteira. É sobre técnica, controle, e saber exatamente o que fazer com o corpo dela — porque o corpo feminino tem um mapa que 97% dos homens desconhecem, e esse mapa é o que separa "ok" de "inesquecível".',
        ],
      },
      {
        heading: 'O Controle Predador — durar o tempo que você decidir',
        body: [
          'O problema que destrói mais relações do que qualquer outro: acabar rápido. 3 minutos, 5 minutos — e pronto. Ela fingiu, você sabe que não foi, ela também sabe. E cada vez que isso acontece, a confiança de você na cama despenca — o que piora o problema, porque a ansiedade de "vou acabar rápido" faz você acabar ainda mais rápido. É um ciclo vicioso.',
          'O Controle Predador é o método de 7 dias que reprograma seu controle neuromuscular — sem remédio, sem pomada anestésica, sem truque. Funciona porque ataca a raiz: o controle ejaculatório é um reflexo neuromuscular que pode ser treinado, igual qualquer outro músculo. A maioria dos homens nunca treinou esse controle porque ninguém ensinou que era possível.',
          'A Técnica do Ponto de Não-Retorno: durante o sexo, existe um ponto onde a ejaculação se torna inevitável — o "ponto de não-retorno". A maioria dos homens não sente esse ponto até ser tarde demais. O treinamento te ensina a sentir o ponto 10-15 segundos antes dele chegar. Quando você sente, você tem 3 opções: reduzir o ritmo, mudar de posição, ou aplicar a Técnica de Compressão (descrita abaixo). As 3 opções te devolvem o controle.',
          'A Técnica de Compressão: quando sentir o ponto de não-retorno se aproximando, pare. Com o polegar e o indicador, comprima a base da glande (a parte de baixo, onde o prepúcio se conecta) por 5-10 segundos. Essa compressão reduz a excitação neurológica sem matar a ereção. Espere a urgência passar. Retome. Em 7 dias de prática (sozinho, 10 minutos por dia), você aprende a sentir o ponto cada vez mais cedo — e a controlar cada vez mais tempo. Em 30 dias, você dura o tempo que decidir.',
          'A Técnica da Respiração Predadora: a ejaculação rápida está ligada à respiração curta e rápida. Quanto mais rápido você respira, mais rápido o sistema nervoso simpático acelera — e a ejaculação é controlada pelo simpático. A contra-técnica: respire lento e fundo, pelo nariz, 4 segundos inspirando, 6 soltando, durante todo o sexo. A respiração lenta ativa o parassimpático — o sistema que controla a calma. Calma = controle. Em 2 semanas, a respiração lenta vira automática durante o sexo, e o controle vira natural.',
        ],
      },
      {
        heading: 'O Mapa do Corpo Feminino (o que 97% dos homens desconhecem)',
        body: [
          'O corpo feminino não é um botão de liga/desliga. É um mapa com múltiplas zonas erógenas que, estimuladas na ordem certa, geram uma resposta que a maioria das mulheres nunca experimentou — porque a maioria dos homens vai direto pro destino e ignora o caminho.',
          'Zona 1 — O Pescoço e a Nuca. A nuca é uma das zonas mais sensíveis do corpo feminino e quase nunca é estimulada. Beijos leves na nuca, mordidas suaves na base do pescoço, respiração quente atrás da orelha. Essa zona prepara o corpo inteiro. Pule essa zona e o resto vai demorar mais pra responder.',
          'Zona 2 — A Parte Interna dos Braços e Pulsos. Parece estranho, mas a pele fina da parte interna do pulso e do antebraço é altamente sensível. Beijos e toques leves ali geram arrepios que se espalham. É uma zona que comunica "eu conheço o seu corpo" — porque a maioria dos homens nem sabe que existe.',
          'Zona 3 — A Lombar e a Base da Coluna. A base da coluna é onde a energia sexual se acumula. Massagem firme na lombar, com as palmas, antes e durante, relaxa o corpo e aumenta a sensibilidade. Uma mulher com a lombar relaxada responde muito mais rápido a todas as outras zonas.',
          'Zona 4 — A Parte Interna das Coxas. A zona mais subestimada. A parte interna das coxas é altamente erógena mas quase sempre pulada. Toques leves ascendentes, da parte interna dos joelhos em direção à pélvis, sem chegar ao destino, criam uma tensão que faz o corpo dela inteiro esperar. Essa expectativa é o que gera a resposta mais intensa quando você finalmente chega.',
          'A Regra da Ordem: nunca vá direto ao destino. Siga a sequência — pescoço, braços, lombar, coxas, e só então a zona central. Cada zona prepara a próxima. Pular zonas faz o corpo dela demorar mais a responder. Seguir a ordem faz o corpo inteiro se preparar — e quando você chega ao destino, a resposta é explosiva.',
        ],
      },
      {
        heading: 'O Código do Orgasmo Múltiplo — a técnica que ela nunca esquece',
        body: [
          'A maioria das mulheres nunca teve um orgasmo múltiplo. Não porque não possa. Porque a maioria dos homens para depois do primeiro. O Código do Orgasmo Múltiplo é a técnica que, depois do primeiro orgasmo dela, não para — e a faz ter outro, e outro.',
          'A Regra do Não-Parar: depois do primeiro orgasmo, o instinto é parar. Ela está sensível, respirando forte, o corpo tremendo. Pare. Por 10 segundos. Deixe o corpo dela absorver o primeiro. Mas não saia. Não recue. Mantenha o contato. Depois dos 10 segundos, retome — mas mude a qualidade do estímulo.',
          'A Mudança de Qualidade: depois do primeiro orgasmo, o clitóris fica hipersensível. Estimular da mesma forma causa desconforto, não prazer. A mudança: reduza a intensidade em 50%, mude de estímulo direto para indireto (ao redor, não em cima), e adicione penetração lenta. A combinação de estímulo indireto externo + penetração lenta interna leva a um segundo orgasmo que é diferente do primeiro — mais profundo, mais corporal, mais intenso.',
          'O Segundo Orgasmo: o segundo demora mais pra chegar que o primeiro — e é por isso que a maioria dos homens não consegue. Não tem paciência. O Controle Predador que você aprendeu te dá a paciência. Você dura o tempo que decidir. E esse tempo é o que permite o segundo orgasmo dela. Quando chega, é mais forte que o primeiro. E o corpo dela entra em um estado de hiper-receptividade.',
          'O Terceiro e Além: depois do segundo, o corpo dela está em um estado onde múltiplos orgasmos se tornam possíveis em sequência. A técnica: mantenha um ritmo constante, alterne entre estímulo externo e interno, e não pare entre orgasmos — só diminua por 5 segundos e retome. Cada orgasmo seguinte vem mais rápido que o anterior. Em 15-20 minutos, ela pode ter 4, 5, 6 orgasmos. E quando você faz isso, você não é "bom na cama". Você é uma categoria que ela nunca experimentou. E ela não esquece. E ela volta. Sempre.',
        ],
      },
      {
        heading: 'Como ser inesquecível (o nível acima do "bom")',
        body: [
          'Ser "bom" é fácil. Ser inesquecível é outra coisa. A diferença não está na técnica — está na presença. O homem inesquecível na cama é o homem que faz a mulher sentir que ela é a única pessoa no mundo naquele momento. E isso não se faz com técnica. Se faz com atenção.',
          'A Presença Total: durante o sexo, não pense em nada. Não pense em durar. Não pense na próxima posição. Não pense em como você está. Esteja. Sinta o corpo dela. Sinta a respiração dela. Sinta as reações dela. A atenção total comunica "eu estou aqui com você, completamente". E essa atenção é o que mais mulheres relatam como "o que faltava" — porque a maioria dos homens está na própria cabeça, não no momento.',
          'A Liderança Calma: você conduz. Não pergunta a cada segundo "tá bom assim?". Liderança calma é propor, observar a reação, ajustar. Se ela geme, continue. Se ela fica tensa, mude. Se ela relaxa, avance. A leitura do corpo dela substitui as perguntas. E a leitura comunica maestria — porque o homem que lê o corpo não precisa perguntar. Ele sabe.',
          'A Variação Controlada: não faça a mesma coisa por 20 minutos. Alterne ritmo, profundidade, intensidade. 3 minutos lento e fundo. 2 minutos rápido e raso. 1 minuto de pausa com movimento mínimo. A variação impede que o corpo dela se acostume — e o corpo que não se acostuma continua respondendo. A constância mata a intensidade. A variação a sustenta.',
          'O Fim Inesquecível: quando decidir terminar, não termine no cansaço. Termine no pico. Quando ela estiver no orgasmo mais intenso da noite, aí você termina junto. O fim no pico grava a noite inteira como "a melhor" — porque o cérebro grava o pico como a memória dominante. Termine no cansaço e ela lembra do cansaço. Termine no pico e ela lembra do pico. Para sempre.',
        ],
      },
      {
        heading: 'A reputação na cama (o marketing mais poderoso que existe)',
        body: [
          'Aqui está o efeito colateral que nenhum outro produto te conta: quando você é excepcional na cama, ela conta pra amigas. E as amigas ficam curiosas. A aura abre a porta. A reputação na cama constrói o império.',
          'O homem que é excepcional na cama não precisa caçar duas vezes. Ela volta. E quando ela conta pras amigas — e elas contam pras amigas delas — você se torna o homem que elas "ouviram falar". E quando uma mulher já ouviu falar que você é excepcional antes de te conhecer, a aura dela já está meio ativada antes do primeiro olhar. A reputação precede você.',
          'É por isso que este protocolo não é um luxo. É a base. Sem ele, você atrai (aura), leva pra cama (mapa), e decepciona (falta de técnica). Com ele, você atrai, leva, e faz ela voltar — e contar. A combinação dos 3 é o que cria o homem que não precisa caçar. Ele é caçado.',
          'A garantia: use o protocolo por 30 dias. Aplique. Se em 30 dias você não perceber a diferença — se ela não olhar pra você diferente no dia seguinte, se ela não te procurar de novo, se você não se sentir no controle total — escreva um e-mail e devolvemos cada centavo. Sem perguntas, sem burocracia. Todo o risco é nosso.',
        ],
      },
    ],
    exercise: {
      title: 'Os 30 Dias da Dominação',
      steps: [
        'Dias 1-7: pratique o Controle Predador sozinho, 10 min/dia. Aprenda a sentir o ponto de não-retorno.',
        'Dias 1-7: pratique a Respiração Predadora (4s inspira, 6s solta) durante todo o dia — não só no sexo.',
        'Dias 8-14: memorize o Mapa do Corpo Feminino. Pratique a sequência das 4 zonas em ordem.',
        'Dias 8-14: continue o treinamento de controle. Você deve estar sentindo o ponto cada vez mais cedo.',
        'Dias 15-21: aplique o Código do Orgasmo Múltiplo — a Regra do Não-Parar + Mudança de Qualidade.',
        'Dias 15-21: pratique a Presença Total — durante o sexo, zero pensamento. Só sensação.',
        'Dias 22-30: integre tudo. Controle + mapa + orgasmo múltiplo + presença + variação + fim no pico.',
        'No dia 30, você é o 3%. Aquele que ela não esquece. Aquele que ela procura de novo.',
      ],
    },
    takeaway:
      'A aura faz ela olhar. O mapa faz ela ir. O Protocolo da Dominação faz ela voltar. Sem isso, você é o cara mais magnético que decepciona na hora H. Com isso, você é o cara que ela não consegue esquecer — e que ela conta pras amigas.',
  },

  // ============================================================
  // DOWNSELL #5 — O Protocolo da Dominação, Versão Essencial (d5)
  // ============================================================
  {
    key: 'd5',
    number: 'Downsell #5',
    title: 'O Protocolo da Dominação — Versão Essencial',
    subtitle:
      'O guia completo de como ser absolutamente excepcional na cama: controle total para durar o tempo que quiser, técnicas que geram orgasmos em minutos, o mapa do corpo feminino que 97% dos homens desconhecem. Como sair de "ok" pra "inesquecível". O protocolo principal da Hora H, em detalhe.',
    duration: '48 min',
    icon: 'flame',
    objective:
      'Te transformar em um homem excepcional na cama — com controle total da ejaculação, técnicas de orgasmo múltiplo nela, e o mapa completo do corpo feminino — para que ela volte, sempre, e conte pras amigas.',
    lessons: [
      {
        heading: 'A cama é o exame final',
        body: [
          'Vou te falar algo que nenhum homem gosta de ouvir. 70% das mulheres já fingiram um orgasmo. E a maioria finge porque o homem na cama é medíocre — e ela quer acabar logo. Você pode ter a aura mais potente do mundo. Pode ter o mapa da caçada mais perfeito. Pode levar a mulher mais linda pra cama. Mas se na hora H você for como os outros 97% — rápido, sem técnica, sem controle, sem saber tocar — ela vai sair, fingir que foi bom, e nunca mais responder sua mensagem.',
          'E o pior: ela vai contar pra amigas. E as amigas vão saber. E o nome que você construiu com a aura vai ser destruído em uma noite. A cama é o exame final. Tudo o que você construiu — a aura, o olhar, a aproximação — converge pra esse momento. E é aqui que a maioria dos homens falha. Não por falta de vontade. Por falta de conhecimento.',
          'Este protocolo te coloca no 3% que faz a mulher perder a noção do tempo. Não é sobre ter um pênis maior. Não é sobre durar a noite inteira. É sobre técnica, controle, e saber exatamente o que fazer com o corpo dela — porque o corpo feminino tem um mapa que 97% dos homens desconhecem, e esse mapa é o que separa "ok" de "inesquecível".',
        ],
      },
      {
        heading: 'O Controle Predador — durar o tempo que você decidir',
        body: [
          'O problema que destrói mais relações do que qualquer outro: acabar rápido. 3 minutos, 5 minutos — e pronto. Ela fingiu, você sabe que não foi, ela também sabe. E cada vez que isso acontece, a confiança de você na cama despenca — o que piora o problema, porque a ansiedade de "vou acabar rápido" faz você acabar ainda mais rápido. É um ciclo vicioso.',
          'O Controle Predador é o método de 7 dias que reprograma seu controle neuromuscular — sem remédio, sem pomada anestésica, sem truque. Funciona porque ataca a raiz: o controle ejaculatório é um reflexo neuromuscular que pode ser treinado, igual qualquer outro músculo. A maioria dos homens nunca treinou esse controle porque ninguém ensinou que era possível.',
          'A Técnica do Ponto de Não-Retorno: durante o sexo, existe um ponto onde a ejaculação se torna inevitável — o "ponto de não-retorno". A maioria dos homens não sente esse ponto até ser tarde demais. O treinamento te ensina a sentir o ponto 10-15 segundos antes dele chegar. Quando você sente, você tem 3 opções: reduzir o ritmo, mudar de posição, ou aplicar a Técnica de Compressão (descrita abaixo). As 3 opções te devolvem o controle.',
          'A Técnica de Compressão: quando sentir o ponto de não-retorno se aproximando, pare. Com o polegar e o indicador, comprima a base da glande (a parte de baixo, onde o prepúcio se conecta) por 5-10 segundos. Essa compressão reduz a excitação neurológica sem matar a ereção. Espere a urgência passar. Retome. Em 7 dias de prática (sozinho, 10 minutos por dia), você aprende a sentir o ponto cada vez mais cedo — e a controlar cada vez mais tempo. Em 30 dias, você dura o tempo que decidir.',
          'A Técnica da Respiração Predadora: a ejaculação rápida está ligada à respiração curta e rápida. Quanto mais rápido você respira, mais rápido o sistema nervoso simpático acelera — e a ejaculação é controlada pelo simpático. A contra-técnica: respire lento e fundo, pelo nariz, 4 segundos inspirando, 6 soltando, durante todo o sexo. A respiração lenta ativa o parassimpático — o sistema que controla a calma. Calma = controle. Em 2 semanas, a respiração lenta vira automática durante o sexo, e o controle vira natural.',
        ],
      },
      {
        heading: 'O Mapa do Corpo Feminino (o que 97% dos homens desconhecem)',
        body: [
          'O corpo feminino não é um botão de liga/desliga. É um mapa com múltiplas zonas erógenas que, estimuladas na ordem certa, geram uma resposta que a maioria das mulheres nunca experimentou — porque a maioria dos homens vai direto pro destino e ignora o caminho.',
          'Zona 1 — O Pescoço e a Nuca. A nuca é uma das zonas mais sensíveis do corpo feminino e quase nunca é estimulada. Beijos leves na nuca, mordidas suaves na base do pescoço, respiração quente atrás da orelha. Essa zona prepara o corpo inteiro. Pule essa zona e o resto vai demorar mais pra responder.',
          'Zona 2 — A Parte Interna dos Braços e Pulsos. Parece estranho, mas a pele fina da parte interna do pulso e do antebraço é altamente sensível. Beijos e toques leves ali geram arrepios que se espalham. É uma zona que comunica "eu conheço o seu corpo" — porque a maioria dos homens nem sabe que existe.',
          'Zona 3 — A Lombar e a Base da Coluna. A base da coluna é onde a energia sexual se acumula. Massagem firme na lombar, com as palmas, antes e durante, relaxa o corpo e aumenta a sensibilidade. Uma mulher com a lombar relaxada responde muito mais rápido a todas as outras zonas.',
          'Zona 4 — A Parte Interna das Coxas. A zona mais subestimada. A parte interna das coxas é altamente erógena mas quase sempre pulada. Toques leves ascendentes, da parte interna dos joelhos em direção à pélvis, sem chegar ao destino, criam uma tensão que faz o corpo dela inteiro esperar. Essa expectativa é o que gera a resposta mais intensa quando você finalmente chega.',
          'A Regra da Ordem: nunca vá direto ao destino. Siga a sequência — pescoço, braços, lombar, coxas, e só então a zona central. Cada zona prepara a próxima. Pular zonas faz o corpo dela demorar mais a responder. Seguir a ordem faz o corpo inteiro se preparar — e quando você chega ao destino, a resposta é explosiva.',
        ],
      },
      {
        heading: 'O Código do Orgasmo Múltiplo — a técnica que ela nunca esquece',
        body: [
          'A maioria das mulheres nunca teve um orgasmo múltiplo. Não porque não possa. Porque a maioria dos homens para depois do primeiro. O Código do Orgasmo Múltiplo é a técnica que, depois do primeiro orgasmo dela, não para — e a faz ter outro, e outro.',
          'A Regra do Não-Parar: depois do primeiro orgasmo, o instinto é parar. Ela está sensível, respirando forte, o corpo tremendo. Pare. Por 10 segundos. Deixe o corpo dela absorver o primeiro. Mas não saia. Não recue. Mantenha o contato. Depois dos 10 segundos, retome — mas mude a qualidade do estímulo.',
          'A Mudança de Qualidade: depois do primeiro orgasmo, o clitóris fica hipersensível. Estimular da mesma forma causa desconforto, não prazer. A mudança: reduza a intensidade em 50%, mude de estímulo direto para indireto (ao redor, não em cima), e adicione penetração lenta. A combinação de estímulo indireto externo + penetração lenta interna leva a um segundo orgasmo que é diferente do primeiro — mais profundo, mais corporal, mais intenso.',
          'O Segundo Orgasmo: o segundo demora mais pra chegar que o primeiro — e é por isso que a maioria dos homens não consegue. Não tem paciência. O Controle Predador que você aprendeu te dá a paciência. Você dura o tempo que decidir. E esse tempo é o que permite o segundo orgasmo dela. Quando chega, é mais forte que o primeiro. E o corpo dela entra em um estado de hiper-receptividade.',
          'O Terceiro e Além: depois do segundo, o corpo dela está em um estado onde múltiplos orgasmos se tornam possíveis em sequência. A técnica: mantenha um ritmo constante, alterne entre estímulo externo e interno, e não pare entre orgasmos — só diminua por 5 segundos e retome. Cada orgasmo seguinte vem mais rápido que o anterior. Em 15-20 minutos, ela pode ter 4, 5, 6 orgasmos. E quando você faz isso, você não é "bom na cama". Você é uma categoria que ela nunca experimentou. E ela não esquece. E ela volta. Sempre.',
        ],
      },
      {
        heading: 'Como ser inesquecível (o nível acima do "bom")',
        body: [
          'Ser "bom" é fácil. Ser inesquecível é outra coisa. A diferença não está na técnica — está na presença. O homem inesquecível na cama é o homem que faz a mulher sentir que ela é a única pessoa no mundo naquele momento. E isso não se faz com técnica. Se faz com atenção.',
          'A Presença Total: durante o sexo, não pense em nada. Não pense em durar. Não pense na próxima posição. Não pense em como você está. Esteja. Sinta o corpo dela. Sinta a respiração dela. Sinta as reações dela. A atenção total comunica "eu estou aqui com você, completamente". E essa atenção é o que mais mulheres relatam como "o que faltava" — porque a maioria dos homens está na própria cabeça, não no momento.',
          'A Liderança Calma: você conduz. Não pergunta a cada segundo "tá bom assim?". Liderança calma é propor, observar a reação, ajustar. Se ela geme, continue. Se ela fica tensa, mude. Se ela relaxa, avance. A leitura do corpo dela substitui as perguntas. E a leitura comunica maestria — porque o homem que lê o corpo não precisa perguntar. Ele sabe.',
          'A Variação Controlada: não faça a mesma coisa por 20 minutos. Alterne ritmo, profundidade, intensidade. 3 minutos lento e fundo. 2 minutos rápido e raso. 1 minuto de pausa com movimento mínimo. A variação impede que o corpo dela se acostume — e o corpo que não se acostuma continua respondendo. A constância mata a intensidade. A variação a sustenta.',
          'O Fim Inesquecível: quando decidir terminar, não termine no cansaço. Termine no pico. Quando ela estiver no orgasmo mais intenso da noite, aí você termina junto. O fim no pico grava a noite inteira como "a melhor" — porque o cérebro grava o pico como a memória dominante. Termine no cansaço e ela lembra do cansaço. Termine no pico e ela lembra do pico. Para sempre.',
        ],
      },
      {
        heading: 'A reputação na cama (o marketing mais poderoso que existe)',
        body: [
          'Aqui está o efeito colateral que nenhum outro produto te conta: quando você é excepcional na cama, ela conta pra amigas. E as amigas ficam curiosas. A aura abre a porta. A reputação na cama constrói o império.',
          'O homem que é excepcional na cama não precisa caçar duas vezes. Ela volta. E quando ela conta pras amigas — e elas contam pras amigas delas — você se torna o homem que elas "ouviram falar". E quando uma mulher já ouviu falar que você é excepcional antes de te conhecer, a aura dela já está meio ativada antes do primeiro olhar. A reputação precede você.',
          'É por isso que este protocolo não é um luxo. É a base. Sem ele, você atrai (aura), leva pra cama (mapa), e decepciona (falta de técnica). Com ele, você atrai, leva, e faz ela voltar — e contar. A combinação dos 3 é o que cria o homem que não precisa caçar. Ele é caçado.',
          'A garantia: use o protocolo por 30 dias. Aplique. Se em 30 dias você não perceber a diferença — se ela não olhar pra você diferente no dia seguinte, se ela não te procurar de novo, se você não se sentir no controle total — escreva um e-mail e devolvemos cada centavo. Sem perguntas, sem burocracia. Todo o risco é nosso.',
        ],
      },
    ],
    exercise: {
      title: 'Os 30 Dias da Dominação',
      steps: [
        'Dias 1-7: pratique o Controle Predador sozinho, 10 min/dia. Aprenda a sentir o ponto de não-retorno.',
        'Dias 1-7: pratique a Respiração Predadora (4s inspira, 6s solta) durante todo o dia — não só no sexo.',
        'Dias 8-14: memorize o Mapa do Corpo Feminino. Pratique a sequência das 4 zonas em ordem.',
        'Dias 8-14: continue o treinamento de controle. Você deve estar sentindo o ponto cada vez mais cedo.',
        'Dias 15-21: aplique o Código do Orgasmo Múltiplo — a Regra do Não-Parar + Mudança de Qualidade.',
        'Dias 15-21: pratique a Presença Total — durante o sexo, zero pensamento. Só sensação.',
        'Dias 22-30: integre tudo. Controle + mapa + orgasmo múltiplo + presença + variação + fim no pico.',
        'No dia 30, você é o 3%. Aquele que ela não esquece. Aquele que ela procura de novo.',
      ],
    },
    takeaway:
      'A aura faz ela olhar. O mapa faz ela ir. O Protocolo da Dominação faz ela voltar. Sem isso, você é o cara mais magnético que decepciona na hora H. Com isso, você é o cara que ela não consegue esquecer — e que ela conta pras amigas.',
  },
];
