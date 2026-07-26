# Critério de Encerramento — Ground Truth

**Objetivo deste documento:** definir, de forma objetiva e acordada antes do início da operação, quando paramos de entrevistar — por ator e no total — para que a decisão de parar (ou continuar) nunca seja tomada só por cansaço ou só por entusiasmo, e sim por evidência de que aprender mais está gerando cada vez menos retorno.
**Responsável:** Operations Lead (cálculo e recomendação); Founder (decisão final de fechamento por ator).
**Status:** Ativo — revisado a cada onda (ver `02-projeto-asana.md`).
**Critério de conclusão deste documento:** não se conclui — o critério em si é usado repetidamente ao longo da operação.

---

## Por que "número de entrevistas" sozinho é o critério errado

"Entrevistamos 300 pessoas" não diz nada sobre se aprendemos algo novo nas últimas 250. O critério certo não é volume — é **saturação temática**: o ponto em que novas entrevistas deixam de revelar informação nova e passam só a confirmar o que já sabemos. Antes desse ponto, cada entrevista tem alto valor marginal; depois dele, o valor marginal cai para perto de zero e o esforço deveria ser redirecionado (para outro ator, ou para a síntese).

## Os três critérios combinados

Nenhum critério isolado decide o encerramento de um ator — os três precisam ser satisfeitos juntos.

### Critério 1 — Piso mínimo de entrevistas

Nenhum ator pode ser considerado "saturado" antes de um número mínimo de entrevistas, porque amostra pequena demais gera falsa sensação de saturação (parece que não há nada novo simplesmente porque poucas pessoas foram ouvidas, não porque o tema se esgotou).

- **Piso mínimo por ator: 15 entrevistas.**
- Abaixo desse piso, mesmo que a "Novidade" (documento 8) das últimas entrevistas esteja caindo, a operação continua recrutando para aquele ator.

### Critério 2 — Sinal de saturação

Aplicado apenas depois do piso mínimo ser atingido. Um ator é considerado saturado quando, simultaneamente:

- A média da nota de **Novidade** (documento 8) das últimas 5 entrevistas consecutivas daquele ator é **2 ou menos** (em escala de 1 a 5); **e**
- Nenhuma dessas mesmas últimas 5 entrevistas recebeu nota de **Potencial Estratégico** 4 ou 5 (documento 8) — ou seja, mesmo o pouco de novo que apareceu não é estrategicamente relevante o suficiente para justificar continuar.

Se qualquer uma das últimas 5 entrevistas tiver Potencial Estratégico alto mesmo com Novidade baixa no geral, a operação continua por mais algumas entrevistas para investigar aquele ponto específico antes de considerar o ator fechado.

### Critério 3 — Cobertura mínima de diversidade

Saturação não conta se a amostra for homogênea demais — 15 ou 30 entrevistas só com profissionais de grande cidade, só autônomos, ou só com mais de 10 anos de experiência não representam o ator como um todo. Antes de declarar saturação, checar:

- **Tempo de atuação:** pelo menos 20% da amostra do ator em cada uma das quatro faixas do formulário (documento 5) — ou, no mínimo, nenhuma faixa com zero representantes.
- **Porte do negócio:** presença de pelo menos alguns entrevistados de cada uma das três faixas (sozinho / equipe pequena / equipe maior), quando aplicável ao ator (alguns atores, como personal trainers autônomos, naturalmente concentram em "sozinho" — o critério é sobre não ignorar diversidade que exista, não forçar uma distribuição artificial).
- **Região:** não concentrar mais de 60% da amostra de um ator em uma única cidade/região metropolitana.

Se a cobertura estiver desequilibrada quando os Critérios 1 e 2 já foram satisfeitos, a operação continua recrutando **de forma direcionada** (canais e abordagens específicas para preencher a lacuna, ver documento 3) em vez de simplesmente mais do mesmo perfil.

## Teto máximo por ator

Para proteger a operação de nunca fechar um ator "fácil" de recrutar (drenando recurso que poderia ir para um ator mais difícil de alcançar):

- **Teto máximo por ator: 60 entrevistas.**
- Se um ator atingir 60 entrevistas sem satisfazer os Critérios 2 e 3, isso é, em si, um sinal a ser registrado no Banco de Insights (documento 9) — pode indicar que o ator é mais heterogêneo do que o esperado, e essa própria heterogeneidade é um achado relevante para a síntese final, não um problema da operação.

## Quando a operação inteira encerra

A operação Ground Truth (como um todo) encerra quando **todos os seis atores** atingem saturação (Critérios 1+2+3) ou o teto máximo — o que vier primeiro para cada um — **e** a revisão de `thesis-validation.md` (seção "O que ainda não sabemos") não apontar nenhuma pergunta crítica ainda sem resposta que dependa especificamente de mais entrevistas de campo (algumas perguntas daquele documento podem depender de outro tipo de investigação, não de mais conversas).

## O que fazer com um ator que nunca satura dentro do teto

Se um ator atingir o teto máximo (60) sem satisfazer os critérios de saturação e diversidade, a decisão não é automática — é uma escolha explícita do Founder, registrada no relatório de encerramento (Épica E8, documento 2), entre três caminhos: encerrar mesmo assim (aceitando a limitação como parte do resultado), estender o teto para aquele ator especificamente com uma nova meta definida, ou tratar a heterogeneidade encontrada como um achado em si (ou seja, talvez esse "ator" seja, na verdade, dois ou mais segmentos distintos demais para caber numa única categoria — o que seria, ele mesmo, um resultado relevante para revisar `01-product/market-overview-fitness-wellness.md`).
