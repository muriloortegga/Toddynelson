# Especificação do Projeto Asana — Ground Truth

**Objetivo deste documento:** especificar, em detalhe suficiente para importação direta, a estrutura de execução da operação no Asana — épicas, sprints, tarefas, subtarefas, dependências, prioridades, responsáveis e critérios de conclusão. Este documento é o projeto; o Asana é apenas onde ele passa a ser executado e rastreado dia a dia.
**Responsável:** Operations Lead.
**Status:** Rascunho — pronto para importar no Asana.
**Critério de conclusão deste documento:** estrutura revisada pelo Founder e replicada no Asana com todos os campos customizados abaixo configurados.

> Nota de escopo: este documento **não implementa** o projeto no Asana — é a especificação que permite fazer isso. Nenhuma ação foi tomada em nenhuma ferramenta externa.

---

## Configuração recomendada do projeto no Asana

- **Tipo de visualização:** Board (Kanban) como padrão, com uma visão de Timeline habilitada para acompanhar as ondas do cronograma.
- **Seções do board = Sprints** (não Épicas) — porque o que muda de estado dia a dia é a tarefa dentro de um sprint, não a épica. As Épicas viram um **campo customizado** (`Épica`), permitindo filtrar/agrupar por épica sem perder a visão de sprint.
- **Campos customizados a criar no projeto:**
  - `Épica` (dropdown de seleção única — valores: E1 a E8, conforme abaixo)
  - `Prioridade` (dropdown: P0 – Bloqueante, P1 – Importante, P2 – Desejável)
  - `Responsável sugerido` (dropdown de papel, não pessoa, conforme convenção do Company OS: Founder, Operations Lead, Growth, Entrevistador, Design)
  - `Critério de conclusão` (texto longo — preenchido a partir da coluna "Critério de conclusão" das tabelas abaixo)
  - `Ator relacionado` (dropdown multi-seleção: Personal Trainers, Academias, Estúdios, Nutricionistas, Fisioterapeutas, Criadores de Conteúdo, Transversal)
- **Dependências:** usar o campo nativo "Dependencies" do Asana entre tarefas, conforme a coluna "Depende de" nas tabelas abaixo.
- **Sprints sugeridos:** ciclos de 2 semanas, numerados Sprint 0 a Sprint 6+ (o número de sprints de escala é aberto, guiado pelo critério de encerramento, documento 10).

---

## Épicas

| Código | Nome da épica | Objetivo da épica |
|--------|---------------|---------------------|
| E1 | Fundação e Setup | Colocar toda a infraestrutura documental e operacional de pé antes de qualquer contato com entrevistado |
| E2 | Ativação de Recrutamento | Colocar os canais de recrutamento (documento 3) funcionando e gerando agendamentos |
| E3 | Produção de Landing Page & Formulário | Publicar os ativos de captação (documentos 4 e 5) |
| E4 | Onda Piloto | Validar roteiro, classificação e recrutamento em pequena escala antes de escalar |
| E5 | Classificação & Banco de Insights | Garantir que toda entrevista realizada vire conhecimento estruturado, de forma contínua |
| E6 | Onda de Escala | Executar o volume principal de entrevistas por ator |
| E7 | Encerramento por Ator | Fechar cada ator individualmente conforme atinge saturação |
| E8 | Síntese Final & Handoff | Consolidar o aprendizado e revisar os documentos de Discovery à luz da evidência primária |

---

## Sprint 0 — Fundação e Setup (Épica E1 e parte de E3)

| Tarefa | Subtarefas | Depende de | Prioridade | Responsável sugerido | Critério de conclusão |
|--------|------------|-------------|------------|------------------------|--------------------------|
| Aprovar Plano Operacional | — Revisar cronograma e metas — Confirmar premissas — Assinar aprovação | — | P0 | Founder | Documento 1 aprovado sem pendências |
| Validar roteiro de entrevista internamente | — Rodar 2 entrevistas simuladas internas — Cronometrar duração — Ajustar perguntas confusas | Aprovar Plano Operacional | P0 | Founder | Roteiro (documento 6) testado e sem ambiguidade percebida nas simulações |
| Montar projeto no Asana | — Criar campos customizados — Criar seções de sprint — Importar épicas e tarefas | Aprovar Plano Operacional | P0 | Operations Lead | Projeto no Asana espelha esta especificação |
| Configurar consentimento e tratamento LGPD | — Redigir texto de consentimento — Definir onde os dados ficam armazenados — Definir prazo de retenção | — | P0 | Operations Lead | Texto de consentimento revisado e anexado ao formulário (documento 5) |
| Preparar planilha/base do Banco de Insights | — Criar estrutura de campos (documento 9) — Testar com 1 entrevista simulada | Validar roteiro de entrevista internamente | P0 | Operations Lead | Estrutura testada com um registro completo de ponta a ponta |
| Escrever e revisar templates de outreach | — Revisar os 8 templates (documento 7) — Adaptar tom por canal | — | P1 | Growth | Todos os 8 templates aprovados pelo Founder |

## Sprint 0–1 — Produção de Landing Page & Formulário (Épica E3)

| Tarefa | Subtarefas | Depende de | Prioridade | Responsável sugerido | Critério de conclusão |
|--------|------------|-------------|------------|------------------------|--------------------------|
| Produzir landing page a partir da especificação | — Diagramar conforme documento 4 — Revisar copy — Publicar no ar | Aprovar Plano Operacional | P0 | Design / Growth | Página no ar, testada em mobile e desktop, link de formulário funcionando |
| Montar formulário a partir da especificação | — Configurar perguntas e lógica condicional conforme documento 5 — Testar envio ponta a ponta — Conectar a planilha de respostas | Configurar consentimento e tratamento LGPD | P0 | Operations Lead | Formulário testado com 3 envios simulados, dados chegando corretamente à planilha |
| Conectar formulário a agenda de entrevistas | — Definir ferramenta de agendamento (calendário compartilhado) — Testar fluxo de confirmação | Montar formulário a partir da especificação | P1 | Operations Lead | Um agendamento de teste percorre todo o fluxo sem intervenção manual extra |

## Sprint 1–2 — Onda Piloto (Épica E4)

| Tarefa | Subtarefas | Depende de | Prioridade | Responsável sugerido | Critério de conclusão | Ator relacionado |
|--------|------------|-------------|------------|------------------------|--------------------------|-------------------|
| Ativar 2 canais de recrutamento por ator | — Selecionar os 2 canais de maior "qualidade esperada" por ator (documento 3) — Publicar/disparar abordagem inicial | Produzir landing page / Escrever templates | P0 | Growth / Founder | Pelo menos 2 canais ativos por ator com evidência de alcance (mensagens enviadas, posts publicados) | Todos |
| Conduzir 5–8 entrevistas piloto por ator | — Agendar — Conduzir com roteiro — Classificar imediatamente após (documento 8) — Registrar no Banco de Insights (documento 9) | Ativar canais de recrutamento / Validar roteiro | P0 | Founder | 30–48 entrevistas piloto concluídas, classificadas e registradas | Todos |
| Revisar roteiro após piloto | — Identificar perguntas que não geraram profundidade — Ajustar ordem ou fraseado — Republicar versão 2 do roteiro | Conduzir 5–8 entrevistas piloto por ator | P0 | Founder / Operations Lead | Roteiro revisado com cadenca de mudanças documentada no changelog do documento 6 |
| Avaliar desempenho dos canais testados no piloto | — Calcular taxa de resposta e agendamento por canal — Comparar com "esforço esperado" do documento 3 | Conduzir 5–8 entrevistas piloto por ator | P1 | Operations Lead | Relatório curto (pode ser um comentário na tarefa) indicando quais canais escalar e quais abandonar por ator |

## Sprint 3+ — Onda de Escala (Épica E6, contínua)

| Tarefa | Subtarefas | Depende de | Prioridade | Responsável sugerido | Critério de conclusão | Ator relacionado |
|--------|------------|-------------|------------|------------------------|--------------------------|-------------------|
| Escalar canais validados no piloto | — Aumentar volume de abordagem nos canais de melhor desempenho — Ativar canais adicionais se necessário (documento 3) | Avaliar desempenho dos canais testados no piloto | P0 | Growth / Founder | Volume de agendamento semanal suficiente para atingir a meta de ondas do documento 1 | Todos |
| Conduzir entrevistas de escala | — Agendar — Conduzir — Classificar — Registrar | Escalar canais validados no piloto | P0 | Founder | Cadência semanal de entrevistas sustentada, conforme KPI de volume (documento 11) | Todos |
| Revisão semanal do Banco de Insights | — Reler entrevistas da semana — Agrupar por padrão (documento 9) — Sinalizar novidades ou contradições aos Problem Patterns | Conduzir entrevistas de escala (semanal) | P0 | Operations Lead | Banco de Insights atualizado semanalmente, sem entrevistas pendentes de classificação por mais de 7 dias |
| Checagem de saturação por ator | — Aplicar critério de encerramento (documento 10) a cada ator — Recomendar fechamento ou continuidade | Revisão semanal do Banco de Insights | P0 | Operations Lead | Decisão de fechar/continuar registrada por ator, a cada 2 semanas | Todos |

## Sprint contínuo — Encerramento por Ator (Épica E7)

| Tarefa | Subtarefas | Depende de | Prioridade | Responsável sugerido | Critério de conclusão | Ator relacionado |
|--------|------------|-------------|------------|------------------------|--------------------------|-------------------|
| Encerrar recrutamento de um ator saturado | — Pausar canais ativos daquele ator — Realocar esforço de recrutamento para atores ainda abertos | Checagem de saturação por ator | P1 | Growth / Operations Lead | Canais pausados, esforço redirecionado, decisão registrada com justificativa | Ator específico |
| Consolidar aprendizados do ator encerrado | — Revisar todas as entrevistas do ator — Produzir uma síntese por ator (input para documento de síntese final) | Encerrar recrutamento de um ator saturado | P1 | Operations Lead | Síntese por ator revisada e anexada ao Banco de Insights | Ator específico |

## Sprint final — Síntese Final & Handoff (Épica E8)

| Tarefa | Subtarefas | Depende de | Prioridade | Responsável sugerido | Critério de conclusão |
|--------|------------|-------------|------------|------------------------|--------------------------|
| Consolidar Banco de Insights completo | — Unificar sínteses por ator — Remover duplicidades finais — Revisar classificações inconsistentes | Consolidar aprendizados do ator encerrado (para todos os 6 atores) | P0 | Operations Lead | Banco de Insights final revisado sem pendências |
| Revisar Problem Patterns à luz da evidência de campo | — Para cada um dos 7 padrões, marcar como confirmado / parcialmente confirmado / refutado — Anexar citações reais como evidência | Consolidar Banco de Insights completo | P0 | Founder / Operations Lead | `problem-patterns-fitness-wellness.md` revisado ou complementado com uma seção de evidência primária |
| Revisar priorização e hipótese central | — Recalcular prioridade dos padrões com evidência de campo — Reclassificar a hipótese central (Fraca/Moderada/Forte) | Revisar Problem Patterns à luz da evidência de campo | P0 | Founder | `priority-opportunities.md` e `thesis-validation.md` revisados com nova evidência |
| Produzir relatório de encerramento da operação | — Resumo executivo — Principais aprendizados — Recomendação sobre próximos passos de Discovery (sem propor solução) | Revisar priorização e hipótese central | P0 | Operations Lead | Relatório aprovado pelo Founder, operação formalmente encerrada |
| Documentar lições operacionais para a próxima operação de campo | — O que funcionou no recrutamento — O que funcionou no roteiro — O que deveria mudar no sistema (não no conteúdo) | Produzir relatório de encerramento da operação | P1 | Operations Lead | Seção de "lições operacionais" registrada neste projeto para reuso futuro |

---

## Convenção de prioridade usada em todas as tarefas

- **P0 — Bloqueante:** a operação não avança sem essa tarefa. Deve ser resolvida antes de qualquer tarefa que dependa dela.
- **P1 — Importante:** afeta a qualidade ou velocidade da operação, mas não bloqueia o avanço imediato.
- **P2 — Desejável:** melhora a operação, mas pode ser adiada sem risco para o objetivo principal.
