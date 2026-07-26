# Especificação de Formulário de Inscrição — Ground Truth

**Objetivo deste documento:** especificar completamente o formulário (Google Forms ou equivalente) que recebe quem clicou no CTA da landing page, para que ele seja montado sem decisão de conteúdo pendente. Este formulário **não é o roteiro de entrevista** (documento 6) — é a triagem e o agendamento que acontecem antes da conversa.
**Responsável:** Operations Lead.
**Status:** Rascunho — pronto para montagem.
**Critério de conclusão deste documento:** formulário montado, testado com 3 envios simulados de ponta a ponta, e texto de consentimento revisado por alguém com responsabilidade formal sobre tratamento de dados antes de ir ao ar.

---

## Princípios de design deste formulário

1. **Perguntas sobre o trabalho vêm antes de perguntas de identificação pessoal.** Isso reduz a fricção percebida no início (a pessoa começa respondendo sobre o próprio ofício, não entregando dado pessoal) e serve como filtro natural antes de pedir contato.
2. **O aviso de privacidade aparece antes de qualquer campo de dado pessoal ser solicitado**, não escondido no rodapé — consentimento informado exige que a pessoa saiba o que vai acontecer com o dado antes de fornecê-lo, não depois.
3. **Nenhuma pergunta sobre disposição a pagar, interesse em produto, ou avaliação de ferramenta específica.** Este formulário serve só para triagem e agendamento — qualquer pergunta de conteúdo pertence à entrevista (documento 6), conduzida com contexto e profundidade, não a um formulário de auto-preenchimento.
4. **Tempo total esperado: 2 a 3 minutos.** Consistente com a promessa feita na landing page (documento 4). Se qualquer revisão futura adicionar perguntas, esse tempo deve ser reavaliado e a landing page ajustada em conjunto.

---

## Seção A — Sobre você e seu trabalho (sem dado pessoal ainda)

| Nº | Pergunta | Objetivo | Tipo | Obrigatória | Lógica condicional | Tempo esperado |
|----|----------|----------|------|--------------|----------------------|-------------------|
| 1 | Qual dessas opções melhor descreve sua atuação principal? (Personal trainer autônomo(a) / Dono(a) ou gestor(a) de academia / Dono(a) ou instrutor(a) de estúdio — yoga, pilates, crossfit, funcional, dança / Nutricionista / Fisioterapeuta / Criador(a) de conteúdo fitness / Outro) | Rotear a pessoa para a variação correta do roteiro de entrevista (documento 6) e garantir que a amostra cubra os seis atores mapeados no Discovery | Múltipla escolha (seleção única) | Sim | Se "Outro" → exibe pergunta 1b | 15s |
| 1b | Qual é a sua atuação, então? | Capturar perfis fora dos seis atores mapeados — pode sinalizar um sétimo ator a considerar no Discovery, ou apenas ruído de recrutamento | Resposta curta | Sim, se 1 = "Outro" | — | 15s |
| 2 | Há quanto tempo você atua nessa área? (Menos de 1 ano / 1 a 3 anos / 3 a 10 anos / Mais de 10 anos) | Garantir diversidade de tempo de carreira na amostra — evitar entrevistar só veteranos (mais fáceis de recrutar por indicação) ou só iniciantes (mais fáceis de recrutar por redes sociais) | Múltipla escolha (seleção única) | Sim | — | 10s |
| 3 | Você atua sozinho(a) ou com equipe? (Sozinho(a) / Com equipe pequena — até 5 pessoas / Com equipe maior — mais de 5 pessoas) | Capturar porte do negócio — vários Problem Patterns documentados (ex.: teto estrutural de receita, trabalho não remunerado) provavelmente variam por porte, e isso precisa ser possível de segmentar depois | Múltipla escolha (seleção única) | Sim | — | 10s |
| 4 | Em que cidade e estado você atua principalmente? | Mapear diversidade geográfica — evitar amostra concentrada só em grandes centros, o que enviesaria qualquer conclusão sobre o mercado nacional | Resposta curta | Sim | — | 15s |
| 5 | Como você ficou sabendo dessa pesquisa? (Instagram / LinkedIn / Facebook / WhatsApp / Indicação de alguém / Evento / Outro) | Alimentar o KPI de desempenho por canal de recrutamento (documento 11) — sem esse dado, não há como saber quais canais do documento 3 realmente funcionam | Múltipla escolha (seleção única) | Sim | Se "Indicação de alguém" → exibe pergunta 5b | 10s |
| 5b | Quem te indicou, se puder compartilhar o nome? | Rastrear a árvore de indicação, permitir agradecer quem indicou (documento 7) e medir a taxa de indicação como KPI de qualidade de recrutamento | Resposta curta | Não | — | 10s |

## Seção B — Antes de continuar: privacidade e consentimento

Bloco informativo (não é pergunta), seguido de uma pergunta de confirmação obrigatória.

**Texto do aviso (a ser revisado por responsável formal por LGPD antes de publicar):**

> "Para agendar sua conversa, precisamos do seu nome, e-mail e WhatsApp. Esses dados são usados apenas para marcar e confirmar a entrevista, e o conteúdo da conversa é usado de forma agregada, para entender padrões do setor — nunca publicado com seu nome ou o nome do seu negócio sem sua autorização explícita e separada. Seus dados não são vendidos nem compartilhados com terceiros para fins comerciais. Você pode pedir a exclusão dos seus dados a qualquer momento pelo e-mail de contato informado na landing page. Ao continuar, você concorda com esse uso, conforme a Lei Geral de Proteção de Dados (LGPD)."

| Nº | Pergunta | Objetivo | Tipo | Obrigatória | Lógica condicional | Tempo esperado |
|----|----------|----------|------|--------------|----------------------|-------------------|
| 6 | "Li e concordo com o uso dos meus dados conforme descrito acima." (caixa de seleção) | Consentimento explícito e registrável antes de qualquer coleta de dado pessoal — requisito de conformidade com a LGPD, não apenas boa prática | Caixa de seleção única (checkbox) | Sim — formulário não deve permitir avançar sem marcar | Se não marcado → formulário impede envio | 15s |

## Seção C — Dados de contato e agendamento

| Nº | Pergunta | Objetivo | Tipo | Obrigatória | Lógica condicional | Tempo esperado |
|----|----------|----------|------|--------------|----------------------|-------------------|
| 7 | Nome completo | Identificação para agendamento e registro no Banco de Insights (documento 9) | Resposta curta | Sim | — | 10s |
| 8 | E-mail | Canal de confirmação de agendamento e envio de convite de calendário | Resposta curta (validação de formato e-mail) | Sim | — | 10s |
| 9 | WhatsApp (com DDD) | Canal preferencial de confirmação e lembrete, dado que é o canal já universal nesse mercado (ver `03-sistema-recrutamento.md`) | Resposta curta (validação de formato telefone) | Sim | — | 10s |
| 10 | Quais dias e horários geralmente funcionam melhor para uma conversa de 30–45 minutos? (Manhã / Tarde / Noite, para cada dia da semana — múltipla seleção) | Reduzir o vaivém de agendamento, coletando disponibilidade ampla de uma vez | Caixas de seleção (múltipla escolha) | Sim | — | 20s |
| 11 | Você prefere que a conversa seja por vídeo, ligação de voz, ou presencial (se estiver na mesma região do entrevistador)? | Logística de agendamento e preparação do entrevistador | Múltipla escolha (seleção única) | Sim | — | 10s |
| 12 | Gostaria de receber, ao final da pesquisa, um resumo geral (agregado) dos aprendizados sobre o setor? | Honrar o benefício oferecido na landing page (documento 4) sem forçar — e permitir medir interesse real no retorno da pesquisa | Sim / Não | Não | — | 5s |

---

## Resumo de tempo total esperado

Somando as seções A, B e C: aproximadamente **2 a 2,5 minutos** para preenchimento completo, consistente com a promessa da landing page. Se o formulário crescer em revisões futuras, esse número deve ser recalculado e a landing page (documento 4) atualizada junto.

## Nota sobre dados e retenção

- Os dados coletados por este formulário devem ser armazenados na mesma base usada para o Banco de Insights (documento 9), com controle de acesso restrito à equipe da operação.
- Recomenda-se um prazo de retenção definido (ex.: dados de contato mantidos apenas enquanto a operação estiver ativa e por um período razoável após o encerramento, depois anonimizados ou removidos) — o prazo exato deve ser confirmado por quem assumir responsabilidade formal por conformidade de dados na empresa, já que este documento propõe a estrutura, não substitui uma revisão jurídica.
