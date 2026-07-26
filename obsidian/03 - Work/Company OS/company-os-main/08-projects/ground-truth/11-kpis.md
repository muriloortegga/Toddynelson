# KPIs — Ground Truth

**Objetivo deste documento:** definir os indicadores que realmente importam para saber se a operação está funcionando — não apenas quantas entrevistas foram feitas, mas se o recrutamento é eficiente, se o aprendizado está crescendo ou estagnando, e se a operação está saudável no dia a dia.
**Responsável:** Operations Lead.
**Status:** Ativo — revisão semanal.
**Critério de conclusão:** não se conclui — os KPIs acompanham a operação inteira e alimentam o relatório de encerramento (Épica E8, documento 2).

---

## Por que "quantidade de entrevistas" não é suficiente sozinho

Um KPI de volume (quantas entrevistas esta semana) mede esforço, não resultado. Uma operação pode fazer 20 entrevistas em uma semana e aprender menos do que outra que fez 8 — se as 20 forem redundantes entre si. Os indicadores abaixo são organizados em três grupos, e o segundo grupo (Aprendizado) é o mais importante dos três: é o que de fato decide se a operação está cumprindo seu propósito.

---

## Grupo 1 — KPIs de Recrutamento

| KPI | Como calcular | Frequência | Para que serve |
|-----|----------------|-------------|------------------|
| Taxa de resposta por canal | Respostas recebidas ÷ contatos enviados, por canal (documento 3) | Semanal | Identificar quais canais merecem mais esforço e quais devem ser abandonados — complementa a avaliação qualitativa já feita no documento 3 com dado real |
| Taxa de conversão formulário → agendamento | Formulários preenchidos ÷ agendamentos confirmados | Semanal | Detectar se o atrito está na captação (poucos preenchem o formulário) ou no agendamento (preenchem, mas não marcam horário) |
| Taxa de comparecimento (show-up rate) | Entrevistas realizadas ÷ entrevistas agendadas | Semanal | Um show-up rate baixo indica problema de lembrete/confirmação ou de real interesse de quem se inscreveu — merece investigação antes de simplesmente agendar mais |
| Tempo médio entre primeiro contato e entrevista realizada | Média, em dias, do primeiro contato até a conversa acontecer | Quinzenal | Um tempo muito longo aumenta o risco de desistência antes da conversa acontecer |
| Taxa de indicação | Entrevistas originadas por indicação (documento 5, campo "como ficou sabendo") ÷ total de entrevistas | Quinzenal | Uma taxa de indicação crescente ao longo da operação é sinal de que o relacionamento construído está gerando confiança real — é, ela mesma, uma medida indireta de qualidade da operação, não só de volume |

## Grupo 2 — KPIs de Aprendizado (o grupo mais importante)

| KPI | Como calcular | Frequência | Para que serve |
|-----|----------------|-------------|------------------|
| Novidade média por ator (janela móvel de 5 entrevistas) | Média da nota de Novidade (documento 8) das últimas 5 entrevistas de cada ator | Semanal | É o principal insumo do critério de encerramento (documento 10) — quando essa curva cai e se mantém baixa, o ator está saturando |
| Taxa de insights atômicos por entrevista | Novos insights atômicos criados no Banco de Insights (documento 9) ÷ entrevistas realizadas, na semana | Semanal | Complementa a Novidade: mede se as entrevistas ainda geram conhecimento novo registrável, não só se "parecem" repetitivas |
| Proporção de entrevistas com Potencial Estratégico alto | Entrevistas com nota 4 ou 5 em Potencial Estratégico (documento 8) ÷ total de entrevistas da semana | Semanal | Mede se a operação está encontrando achados relevantes o suficiente para mudar `problem-patterns` e `priority-opportunities`, não apenas confirmando o que já era conhecido |
| Proporção de insights que confirmam vs. contradizem o Discovery anterior | Insights marcados como "confirma" vs. "contradiz" um Problem Pattern já documentado (documento 9) ÷ total de insights | A cada fechamento de ator | Mede o quanto a evidência secundária original está se sustentando na prática — um indicador direto de quão bem calibrado estava o Discovery antes desta operação |
| Cobertura de diversidade por ator | % das faixas de tempo de atuação, porte e região com representação mínima atingida (documento 10, Critério 3) | Quinzenal | Garante que a saturação medida pela Novidade não está sendo enganada por uma amostra homogênea demais |

## Grupo 3 — KPIs de Saúde Operacional

| KPI | Como calcular | Frequência | Para que serve |
|-----|----------------|-------------|------------------|
| Tempo médio entre entrevista e registro completo | Média, em horas, entre o fim da entrevista e o preenchimento completo no Banco de Insights e na classificação | Semanal | O roteiro (documento 6) exige registro nos primeiros 15 minutos — um tempo médio crescente é sinal de sobrecarga do entrevistador e risco de perda de qualidade no registro |
| Backlog de entrevistas sem classificação/registro | Número de entrevistas realizadas sem classificação (documento 8) ou registro (documento 9) pendente, a qualquer momento | Semanal | Deveria ser sempre zero ou próximo disso — um backlog crescente é o primeiro sinal de que a operação está gerando volume mais rápido do que consegue processar em conhecimento |
| Cadência semanal real vs. planejada | Entrevistas realizadas na semana ÷ meta da fase corrente (documento 1) | Semanal | Detecta atraso de cronograma cedo o suficiente para agir (reforçar canal, redistribuir esforço) em vez de descobrir só no fechamento da fase |
| Distribuição de carga entre entrevistadores (se houver mais de um) | Entrevistas realizadas por entrevistador, comparado à sua disponibilidade | Quinzenal | Evita que um único entrevistador acumule fadiga (risco já sinalizado no documento 1) sem que isso apareça em nenhum outro número |

---

## Como revisar estes KPIs

Revisão semanal recomendada, combinada com a "Revisão semanal do Banco de Insights" já prevista no documento 2 (Épica E6) — os dois processos compartilham a mesma cadência porque um alimenta o outro. Nenhum KPI isolado deve gerar uma decisão sozinho: um show-up rate baixo em uma única semana pode ser ruído; um show-up rate baixo por três semanas seguidas é sinal para investigar o processo de confirmação/lembrete.
