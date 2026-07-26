# Banco de Insights — Ground Truth

**Objetivo deste documento:** definir como cada entrevista realizada se transforma em conhecimento estruturado, reutilizável e sem duplicidade — o ativo permanente que sobra depois que a operação termina.
**Responsável:** Operations Lead (estrutura e consolidação); Founder/Entrevistador (alimentação após cada entrevista).
**Status:** Ativo — alimentar continuamente, revisão semanal obrigatória.
**Critério de conclusão:** não se conclui durante a operação; na síntese final (Épica E8, documento 2), o Banco de Insights consolidado é o principal entregável revisado.

---

## Por que um banco de insights, e não só uma pasta de anotações de entrevista

Uma pasta com uma anotação por entrevista responde "o que essa pessoa disse". Um banco de insights responde "o que sabemos, no agregado, e com que confiança" — que é a pergunta que realmente importa para revisar `problem-patterns-fitness-wellness.md`, `priority-opportunities.md` e `thesis-validation.md`. Isso exige duas camadas de registro, não uma.

## As duas camadas

### Camada 1 — Registro bruto da entrevista

Uma linha por entrevista realizada, preenchida junto com a classificação (documento 8). Campos:

| Campo | Conteúdo |
|-------|----------|
| ID da entrevista | Código sequencial único (ex.: `GT-PT-014` = Ground Truth, ator Personal Trainer, 14ª entrevista deste ator) |
| Data | Data da conversa |
| Ator | Um dos seis atores mapeados |
| Entrevistador | Quem conduziu |
| Canal de origem | De onde veio o contato (alimenta o KPI de canal, documento 11) |
| Porte / tempo de atuação / região | Copiado das respostas do formulário (documento 5), para permitir segmentação depois |
| Notas de classificação | As seis dimensões do documento 8 |
| Resumo factual (3–5 frases) | O que aconteceu na conversa, sem interpretação — fatos e citações relevantes |
| Lista de insights atômicos extraídos | Links para as linhas correspondentes na Camada 2 |

### Camada 2 — Insights atômicos (o conhecimento em si)

Um "insight atômico" é uma única afirmação verificável extraída de uma ou mais entrevistas — não um resumo da entrevista inteira. Uma entrevista rica pode gerar 5 insights atômicos distintos; uma entrevista fraca pode gerar zero.

Cada insight atômico é uma linha própria, com campos:

| Campo | Conteúdo |
|-------|----------|
| ID do insight | Código sequencial (ex.: `INS-042`) |
| Descrição objetiva | Uma frase factual, no estilo "fato observado", não opinião do entrevistador — ex.: "Cobra taxa de cancelamento de última hora, mas relata ter perdido pelo menos um cliente por causa disso" |
| Ator(es) relacionado(s) | Um ou mais dos seis atores |
| Padrão relacionado | Referência a um dos 7 Problem Patterns de `problem-patterns-fitness-wellness.md`, ou "candidato a novo padrão" se não se encaixar em nenhum |
| Categoria | Operacional / Financeira / Crescimento — mesma taxonomia já usada em `pain-points-fitness-wellness.md`, para manter compatibilidade com o Discovery anterior |
| Entrevistas que sustentam este insight | Lista de IDs de entrevista (Camada 1) que geraram ou confirmaram este mesmo insight |
| Nível de confiança agregado | Recalculado conforme o número e a qualidade das entrevistas que sustentam o insight (ver seção de deduplicação) |
| Data da última atualização | Toda vez que uma nova entrevista reforça ou contradiz este insight, a data é atualizada |

## Como registrar sem duplicar

Antes de criar uma nova linha na Camada 2, o passo obrigatório é buscar, entre os insights já existentes do mesmo ator, se algum já descreve essencialmente o mesmo fenômeno. Três desfechos possíveis:

1. **Já existe um insight equivalente:** não criar uma nova linha. Em vez disso, adicionar o ID da nova entrevista à lista de "entrevistas que sustentam este insight" e recalcular o nível de confiança agregado (mais entrevistas independentes sustentando o mesmo insight → confiança sobe).
2. **Existe um insight parecido, mas com uma nuance relevante diferente** (ex.: mesmo tema, mas um ator diferente, ou uma causa diferente): criar uma nova linha, mas registrar no campo de descrição a relação com o insight parecido, para não perder a conexão entre os dois.
3. **Não existe nada parecido:** criar uma nova linha.

Esta regra espelha o princípio já estabelecido em `00-foundation/documentation-framework.md` (§7.2): um fato tem exatamente um registro canônico; tudo o que se repete reforça esse registro em vez de criar um paralelo.

## Como agrupar

Os insights devem poder ser filtrados e agrupados por três eixos simultaneamente, sem que isso exija reorganizar a base:

- **Por ator** — para responder "o que aprendemos sobre nutricionistas até agora".
- **Por padrão relacionado** — para responder "o que temos de evidência de campo sobre o Padrão 1 (intermediação de pagamento) até agora", diretamente comparável ao que já existe em `problem-patterns-fitness-wellness.md`.
- **Por categoria (operacional/financeira/crescimento)** — para manter compatibilidade com a estrutura de `pain-points-fitness-wellness.md` e permitir, na síntese final, uma comparação lado a lado entre a evidência secundária original e a evidência primária coletada agora.

## Como encontrar padrões (cadência de síntese)

A busca por padrão não deve esperar o fim da operação — isso adiaria demais a correção de rota. Cadência recomendada:

- **Semanal (durante a Onda de Escala):** reler os insights atômicos novos da semana e verificar se algum já teve 3 ou mais entrevistas independentes sustentando o mesmo ponto — esse é o sinal mínimo para tratar algo como um padrão emergente, não uma opinião isolada.
- **A cada fechamento de ator (Épica E7, documento 2):** revisão completa dos insights daquele ator, produzindo uma síntese específica (quais dos 7 Problem Patterns se confirmaram, quais não apareceram, e se surgiu algum candidato a padrão novo).
- **Na síntese final (Épica E8):** consolidação entre atores — um insight que aparece de forma independente em múltiplos atores diferentes é candidato a ser, ele mesmo, um padrão transversal (o mesmo tipo de achado que gerou os 7 Problem Patterns originais a partir de fontes secundárias, agora com evidência primária).

## Regra de honestidade do banco

Todo insight que **contradiz** um Problem Pattern já documentado deve ser registrado com o mesmo cuidado que um insight que o confirma — inclusive marcado de forma visível (ex.: tag "contradiz Padrão X"). Um banco de insights que só acumula confirmações não é um banco de conhecimento, é um viés de confirmação documentado. A síntese final (documento 2, Épica E8) depende de conseguir ver claramente onde a evidência de campo discordou do que a pesquisa secundária havia sugerido.
