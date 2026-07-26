# Sistema de Classificação de Entrevistas — Ground Truth

**Objetivo deste documento:** definir um framework simples e consistente para avaliar cada entrevista realizada, permitindo comparar entrevistas entre si, identificar quando a operação está gerando aprendizado real (ou só volume) e alimentar os critérios de encerramento (documento 10) e os KPIs (documento 11) com dado estruturado, não impressão.
**Responsável:** Founder / Entrevistador (preenchimento); Operations Lead (consolidação e auditoria periódica).
**Status:** Ativo — preencher para toda entrevista, sem exceção, nos 15 minutos seguintes ao encerramento (ver `06-roteiro-entrevistas.md`).
**Critério de conclusão:** não se conclui — é usado continuamente; revisado a cada onda para checar se as notas estão sendo aplicadas de forma consistente entre diferentes entrevistadores, se houver mais de um.

---

## Por que seis dimensões, e por que elas não são a mesma coisa

É tentador reduzir tudo a uma nota única de "essa entrevista foi boa ou ruim". Isso destrói informação: uma entrevista pode ser **profunda** (a pessoa se abriu bastante) mas de **baixa novidade** (confirmou o que já sabíamos, sem acrescentar nada novo) — e isso é uma informação diferente de uma entrevista **superficial** mas com um único insight de **altíssimo potencial estratégico**. Tratar as duas como "nota 3 de 5" esconderia decisões diferentes que cada uma pede.

Cada dimensão abaixo responde a uma pergunta distinta sobre a mesma entrevista.

## As seis dimensões

Todas em escala de 1 a 5. Preenchidas pelo próprio entrevistador logo após a conversa — é ele quem tem o contexto fresco, e nenhuma outra pessoa deveria reclassificar sem ter ouvido/lido o registro completo.

### 1. Qualidade

**Pergunta que responde:** a conversa em si foi bem conduzida e a pessoa se engajou de verdade, independentemente do conteúdo?

| Nota | Descrição |
|------|-----------|
| 1 | A pessoa respondeu de forma monossilábica ou claramente desconfortável a maior parte do tempo; a conversa não fluiu |
| 2 | Engajamento abaixo do esperado; várias respostas curtas ou evasivas |
| 3 | Conversa funcional, com momentos de abertura e momentos mais fechados |
| 4 | Boa fluidez na maior parte da conversa, com poucos momentos de resistência |
| 5 | A pessoa se engajou genuinamente do início ao fim, com respostas longas e espontâneas |

### 2. Profundidade

**Pergunta que responde:** conseguimos ir além da resposta de primeira camada (ver técnica do "porquê" em camadas, documento 6)?

| Nota | Descrição |
|------|-----------|
| 1 | Só respostas de primeira camada, sem nenhum aprofundamento |
| 2 | Aprofundamento tentado, mas sem sucesso na maioria dos blocos |
| 3 | Aprofundamento bem-sucedido em pelo menos um bloco da entrevista |
| 4 | Aprofundamento bem-sucedido na maior parte dos blocos |
| 5 | Conversa chegou consistentemente à causa raiz/motivação real, não só ao sintoma relatado |

### 3. Quantidade de insights

**Pergunta que responde:** quantos pontos de aprendizado distintos e registráveis saíram desta entrevista (não a mesma ideia repetida de formas diferentes)?

| Nota | Descrição |
|------|-----------|
| 1 | Nenhum insight distinto claro |
| 2 | 1 insight distinto |
| 3 | 2–3 insights distintos |
| 4 | 4–5 insights distintos |
| 5 | 6 ou mais insights distintos |

*Nota de aplicação:* um "insight distinto" é uma afirmação que poderia virar uma linha própria no Banco de Insights (documento 9) — se duas falas da entrevista dizem essencialmente a mesma coisa, contam como um insight, não dois.

### 4. Nível de confiança

**Pergunta que responde:** o quanto confiamos que o que foi dito reflete comportamento/realidade genuína, e não uma resposta educada, performática ou hipotética?

| Nota | Descrição |
|------|-----------|
| 1 | Respostas majoritariamente hipotéticas, vagas ou aparentemente ditas para agradar o entrevistador |
| 2 | Mistura de respostas concretas e respostas genéricas, com predominância de genéricas |
| 3 | Equilíbrio entre relatos concretos (fatos, exemplos específicos) e opiniões gerais |
| 4 | Maioria das respostas ancoradas em exemplos concretos e verificáveis ("a última vez que...") |
| 5 | Quase todas as respostas relevantes vieram acompanhadas de exemplo concreto, número ou situação específica |

### 5. Potencial estratégico

**Pergunta que responde:** o que foi dito nesta entrevista, se verdade, muda ou reforça de forma relevante algo em `01-product/problem-patterns-fitness-wellness.md`, `priority-opportunities.md` ou `thesis-validation.md`?

| Nota | Descrição |
|------|-----------|
| 1 | Nenhuma relação perceptível com os padrões/priorização já documentados |
| 2 | Toca tangencialmente em algum padrão já conhecido, sem acrescentar ou contestar nada |
| 3 | Confirma ou dá mais um dado a um padrão já conhecido |
| 4 | Adiciona nuance relevante a um padrão já conhecido (ex.: contexto que muda a intensidade ou o ator afetado) |
| 5 | Contesta um padrão já documentado, ou aponta algo relevante e ainda não documentado |

*Nota de aplicação:* esta é a dimensão mais importante para a síntese final (Épica E8 do documento 2) — entrevistas nota 5 aqui devem ser sinalizadas para revisão prioritária pelo Founder, não esperar o ciclo semanal padrão.

### 6. Novidade

**Pergunta que responde:** o que foi dito já apareceu em outras entrevistas deste mesmo ator, ou é a primeira vez?

| Nota | Descrição |
|------|-----------|
| 1 | Tudo o que foi dito já apareceu de forma equivalente em pelo menos 3 outras entrevistas do mesmo ator |
| 2 | A maior parte já apareceu antes, com pouca variação |
| 3 | Mistura equilibrada de repetição e conteúdo novo |
| 4 | A maior parte do conteúdo é nova em relação às entrevistas anteriores do mesmo ator |
| 5 | Praticamente tudo é novo — nenhum equivalente registrado antes para este ator |

*Nota de aplicação:* esta dimensão só pode ser preenchida com precisão a partir da segunda ou terceira entrevista de cada ator (não há "novidade" possível na primeira conversa de um ator, que deve receber nota 5 por padrão). É a dimensão que mais diretamente alimenta o critério de encerramento (documento 10): quando a novidade média de um ator despenca e se mantém baixa por várias entrevistas seguidas, é sinal de saturação.

---

## Onde e como registrar

Cada entrevista recebe uma linha no Banco de Insights (documento 9) com as seis notas, mais um campo de texto curto justificando qualquer nota 1 ou 5 (os extremos são os que mais merecem uma linha de contexto, para quem for reler essa nota depois entender o porquê sem ter estado na conversa).

## Como usar as notas (e como não usar)

- **Não** existe uma "nota final" combinando as seis em uma média — isso reintroduziria o problema que este framework existe para evitar. As seis ficam visíveis lado a lado.
- Notas de Qualidade e Confiança baixas (1–2) em conjunto são o sinal mais forte de que uma entrevista deve ser tratada com cautela na síntese final — não descartada, mas citada com a ressalva de baixa confiança, do mesmo jeito que os documentos de Discovery já sinalizam "evidência insuficiente" quando cabe.
- Notas de Potencial Estratégico e Novidade altas (4–5), mesmo em entrevistas com Qualidade ou Profundidade medianas, merecem uma segunda leitura — pode haver um insight importante em uma conversa tecnicamente "mediana".
- A média de Novidade por ator, ao longo do tempo, é o principal insumo do critério de encerramento (documento 10) — não a quantidade de entrevistas realizadas.
