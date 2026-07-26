(() => {
  'use strict';

  /* ============================================================
     DATA
     ============================================================ */
  const navLabels = {
    dashboard: 'Dashboard', product: 'Product', 'ground-truth': 'Ground Truth',
    projects: 'Projects', documents: 'Documents', chat: 'Chat', settings: 'Settings',
  };

  const sprint = { name: 'Sprint 24 — Fundação do Vault', period: '14–27 jul', progress: 62 };
  const nextTask = { title: 'Implementar sync bidirecional do Vault', project: 'Company OS', priority: 'Alta' };

  const projects = [
    { name: 'Company OS', desc: 'Sistema operacional da empresa: processos, decisões e memória institucional.', status: 'Em andamento', progress: 74, lastActivity: 'há 2h' },
    { name: 'Ground Truth', desc: 'Motor de pesquisa contínua: entrevistas, hipóteses e validação.', status: 'Em revisão', progress: 58, lastActivity: 'há 5h' },
    { name: 'Jarvis', desc: 'Camada de agentes de IA sobre o Vault versionado em Git.', status: 'Planejamento', progress: 21, lastActivity: 'ontem' },
  ];

  const documents = [
    { title: 'Arquitetura do Vault', category: 'Knowledge', type: 'Especificação', updated: 'há 2h' },
    { title: 'Onboarding de agentes de IA', category: 'System', type: 'Guia', updated: 'há 5h' },
    { title: 'Notas: entrevista Marina Duarte', category: 'Knowledge', type: 'Nota', updated: 'ontem' },
    { title: 'Roadmap Q3', category: 'Work', type: 'Doc', updated: 'há 2 dias' },
    { title: 'Padrões de commit do Vault', category: 'System', type: 'Guia', updated: 'há 3 dias' },
    { title: 'Brief: Priority Opportunities', category: 'Work', type: 'Doc', updated: 'há 3 dias' },
    { title: 'Glossário do KOS', category: 'Knowledge', type: 'Nota', updated: 'há 4 dias' },
    { title: 'Política de versionamento', category: 'System', type: 'Especificação', updated: 'há 5 dias' },
    { title: 'Resumo: sprint 23', category: 'Work', type: 'Doc', updated: 'há 6 dias' },
    { title: 'Mapa de stakeholders', category: 'Work', type: 'Nota', updated: 'há 1 semana' },
    { title: 'Guia de sincronização Git', category: 'System', type: 'Guia', updated: 'há 1 semana' },
  ];

  const focusItems = ['Revisar hipóteses da semana', 'Escrever spec de sync do Vault', 'Preparar entrevista com Diego Salles'];

  const activityFeed = [
    { icon: 'user-plus', text: 'Nova entrevista registrada — Otávio Lima', time: 'há 1h' },
    { icon: 'git-commit', text: 'Commit no Vault: "docs: política de versionamento"', time: 'há 2h' },
    { icon: 'file-text', text: 'Documento criado — Roadmap Q3', time: 'há 4h' },
    { icon: 'flask-conical', text: 'Hipótese marcada como validada', time: 'há 6h' },
    { icon: 'check-circle', text: 'Tarefa concluída — spec de onboarding de agentes', time: 'ontem' },
    { icon: 'message-square', text: 'Nova sessão de chat com o Vault', time: 'ontem' },
    { icon: 'folder', text: 'Projeto Jarvis movido para Planejamento', time: 'há 2 dias' },
    { icon: 'file-plus', text: 'Nota adicionada — Glossário do KOS', time: 'há 2 dias' },
  ];

  const productCards = [
    { title: 'Market Overview', desc: 'Panorama do espaço de Knowledge OS e concorrência direta e indireta.', status: 'Validado', updated: '12 jul' },
    { title: 'Pain Points', desc: 'Dores mapeadas de fundadores e times técnicos sobre perda de contexto.', status: 'Em progresso', updated: '18 jul' },
    { title: 'Problem Patterns', desc: 'Padrões recorrentes extraídos das entrevistas de Ground Truth.', status: 'Em progresso', updated: '20 jul' },
    { title: 'Priority Opportunities', desc: 'Oportunidades ranqueadas por impacto x esforço.', status: 'Rascunho', updated: '22 jul' },
    { title: 'Validation', desc: 'Testes de hipótese e sinais de tração inicial.', status: 'Em progresso', updated: '24 jul' },
  ];

  const interviews = [
    { name: 'Marina Duarte', tags: 'Fundadora, SaaS B2B · memória, contexto', date: '14 jul' },
    { name: 'Bruno Alcântara', tags: 'Head de Produto · workflow, IA', date: '15 jul' },
    { name: 'Carla Nogueira', tags: 'Engenheira de IA · agentes, RAG', date: '16 jul' },
    { name: 'Felipe Rezende', tags: 'Consultor de estratégia · documentação', date: '17 jul' },
    { name: 'Juliana Prado', tags: 'Fundadora, fintech · onboarding, memória', date: '18 jul' },
    { name: 'Diego Salles', tags: 'CTO · infraestrutura, git', date: '19 jul' },
    { name: 'Renata Cordeiro', tags: 'Product coach · processos', date: '20 jul' },
    { name: 'Otávio Lima', tags: 'Fundador, dev tools · produtividade, IA', date: '21 jul' },
  ];

  const hypothesesRaw = [
    { text: 'Fundadores perdem +5h/semana reconstruindo contexto.', status: 'validada' },
    { text: 'Um vault versionado em Git aumenta a confiança no output de IA.', status: 'validada' },
    { text: 'Times preferem um vault compartilhado a múltiplas ferramentas de notas.', status: 'em teste' },
    { text: 'Busca semântica sozinha resolve o problema de contexto.', status: 'invalidada' },
    { text: 'Comando por voz é crítico para adoção diária.', status: 'em teste' },
    { text: 'Founders querem um único command center, não mais um chat.', status: 'validada' },
    { text: 'Integração com Slack é bloqueador de adoção.', status: 'em teste' },
    { text: 'Templates prontos aceleram a estruturação do vault.', status: 'validada' },
  ];

  const insights = [
    { text: 'Perda de contexto é a dor nº1 citada nas entrevistas.', source: 'Síntese de entrevistas' },
    { text: 'Founders confiam mais em decisões quando veem a fonte.', source: 'Carla Nogueira' },
    { text: 'Git dá auditabilidade que ferramentas de nota não dão.', source: 'Diego Salles' },
    { text: 'Comando por voz é "nice to have", não essencial no MVP.', source: 'Síntese de entrevistas' },
    { text: 'Chat não deveria ser a tela principal do produto.', source: 'Otávio Lima' },
    { text: 'Estrutura importa mais que velocidade nas primeiras semanas.', source: 'Renata Cordeiro' },
  ];

  const suggestionChips = ['Resumir sprint atual', 'Buscar decisões sobre memória', 'Listar hipóteses validadas', 'Rascunhar nota de reunião'];

  const integrations = [
    { name: 'GitHub', icon: 'github' },
    { name: 'Obsidian Vault', icon: 'book-open' },
    { name: 'Slack', icon: 'message-circle' },
    { name: 'Notion', icon: 'file-stack' },
  ];

  const commandsBase = [
    { id: 'dashboard', label: 'Ir para Dashboard', icon: 'layout-dashboard', type: 'Navegação' },
    { id: 'product', label: 'Ir para Product', icon: 'layers', type: 'Navegação' },
    { id: 'ground-truth', label: 'Ir para Ground Truth', icon: 'flask-conical', type: 'Navegação' },
    { id: 'projects', label: 'Ir para Projects', icon: 'folder-kanban', type: 'Navegação' },
    { id: 'documents', label: 'Ir para Documents', icon: 'file-text', type: 'Navegação' },
    { id: 'chat', label: 'Ir para Chat', icon: 'message-square', type: 'Navegação' },
    { id: 'settings', label: 'Ir para Settings', icon: 'settings', type: 'Navegação' },
    { id: 'action-note', label: 'Nova nota', icon: 'plus', type: 'Ação' },
    { id: 'action-task', label: 'Nova tarefa', icon: 'plus', type: 'Ação' },
    { id: 'action-doc', label: 'Novo documento', icon: 'plus', type: 'Ação' },
  ];

  const chatMessages = [
    { from: 'user', text: 'Resuma o que aconteceu na sprint atual.' },
    { from: 'vault', text: 'A Sprint 24 está em 62%. Foco principal: sync bidirecional do Vault com o repositório Git.' },
    { from: 'user', text: 'Quais hipóteses já foram validadas?' },
    { from: 'vault', text: '4 hipóteses validadas até agora, incluindo "um vault versionado em Git aumenta a confiança no output de IA".' },
    { from: 'user', text: 'E a integração com Slack, virou bloqueador?' },
    { from: 'vault', text: 'Ainda em teste — sinal misto nas últimas 3 entrevistas.' },
    { from: 'user', text: 'Cria um rascunho de nota sobre a entrevista com o Diego.' },
    { from: 'vault', text: 'Rascunho criado em Documents › Knowledge. Nenhuma IA real está conectada neste protótipo.' },
  ];

  const hypothesisIconMap = {
    validada: { icon: 'check-circle-2', color: 'var(--mo-white)', opacity: 1 },
    'em teste': { icon: 'circle-dashed', color: 'rgba(255,255,255,.5)', opacity: 0.85 },
    invalidada: { icon: 'x-circle', color: 'rgba(255,255,255,.35)', opacity: 0.5 },
  };

  /* ============================================================
     STATE
     ============================================================ */
  const state = {
    activeModule: 'dashboard',
    sidebarExpanded: true,
    paletteOpen: false,
    paletteQuery: '',
    docCategory: 'all',
    docSearch: '',
    viewMode: 'grid',
  };

  /* ============================================================
     DOM HELPERS
     ============================================================ */
  const $ = (id) => document.getElementById(id);
  const escapeHtml = (str) => String(str).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c]));

  function refreshIcons() {
    if (window.lucide) window.lucide.createIcons();
  }

  /* ============================================================
     RENDER: SIDEBAR + TOPBAR
     ============================================================ */
  function renderSidebar() {
    const sidebar = $('sidebar');
    sidebar.classList.toggle('is-collapsed', !state.sidebarExpanded);
    $('collapseIcon').setAttribute('data-lucide', state.sidebarExpanded ? 'panel-left-close' : 'panel-left-open');

    document.querySelectorAll('.tn-nav-item').forEach((el) => {
      el.classList.toggle('is-active', el.dataset.module === state.activeModule);
    });

    $('activeModuleLabel').textContent = navLabels[state.activeModule];
  }

  /* ============================================================
     RENDER: DASHBOARD
     ============================================================ */
  function renderDashboard() {
    $('sprintName').textContent = sprint.name;
    $('sprintPeriod').textContent = sprint.period;
    $('sprintProgressBar').style.width = sprint.progress + '%';
    $('sprintProgressLabel').textContent = sprint.progress + '% concluído';

    $('nextTaskTitle').textContent = nextTask.title;
    $('nextTaskProject').textContent = nextTask.project;
    $('nextTaskPriority').textContent = nextTask.priority;

    $('dashProjects').innerHTML = projects.map((p) => `
      <div class="tn-list-row">
        <div class="tn-list-row__name">${escapeHtml(p.name)}</div>
        <span class="tn-mono tn-mono--xs tn-mono--secondary">${escapeHtml(p.status)}</span>
        <div class="tn-list-row__bar"><div class="tn-list-row__bar-fill" style="width:${p.progress}%;"></div></div>
      </div>
    `).join('');

    $('dashDocuments').innerHTML = documents.slice(0, 5).map((d) => `
      <div class="tn-doc-row">
        <i data-lucide="file-text"></i>
        <div class="tn-doc-row__title">${escapeHtml(d.title)}</div>
        <span class="tn-mono tn-mono--xs tn-mono--muted">${escapeHtml(d.category)}</span>
        <div class="tn-doc-row__updated">${escapeHtml(d.updated)}</div>
      </div>
    `).join('');

    $('focusItems').innerHTML = focusItems.map((f) => `
      <div class="tn-focus-row">
        <div class="tn-focus-check"></div>
        <div class="tn-focus-text">${escapeHtml(f)}</div>
      </div>
    `).join('');

    $('activityFeed').innerHTML = activityFeed.map((a) => `
      <div class="tn-activity-row">
        <i data-lucide="${a.icon}"></i>
        <div class="tn-activity-row__text">${escapeHtml(a.text)}</div>
        <div class="tn-activity-row__time">${escapeHtml(a.time)}</div>
      </div>
    `).join('');
  }

  /* ============================================================
     RENDER: PRODUCT
     ============================================================ */
  function renderProduct() {
    $('productCards').innerHTML = productCards.map((c) => `
      <div class="tn-card tn-product-card">
        <div class="tn-product-card__title">${escapeHtml(c.title)}</div>
        <div class="tn-product-card__desc">${escapeHtml(c.desc)}</div>
        <div class="tn-product-card__footer">
          <span class="tn-tag">${escapeHtml(c.status)}</span>
          <span class="tn-mono tn-mono--xs tn-mono--muted">${escapeHtml(c.updated)}</span>
        </div>
      </div>
    `).join('');
  }

  /* ============================================================
     RENDER: GROUND TRUTH
     ============================================================ */
  function renderGroundTruth() {
    const validCount = hypothesesRaw.filter((h) => h.status === 'validada').length;
    $('gtInterviews').textContent = interviews.length * 3;
    $('gtHypotheses').textContent = hypothesesRaw.length * 2;
    $('gtValidationRate').textContent = Math.round((validCount / hypothesesRaw.length) * 100) + '%';

    $('interviewsList').innerHTML = interviews.map((it) => `
      <div class="tn-interview-row">
        <div class="tn-interview-row__head">
          <span class="tn-interview-row__name">${escapeHtml(it.name)}</span>
          <span class="tn-interview-row__date">${escapeHtml(it.date)}</span>
        </div>
        <div class="tn-interview-row__tags">${escapeHtml(it.tags)}</div>
      </div>
    `).join('');

    $('hypothesesList').innerHTML = hypothesesRaw.map((h) => {
      const m = hypothesisIconMap[h.status];
      return `
      <div class="tn-hypothesis-row">
        <i data-lucide="${m.icon}" style="color:${m.color};"></i>
        <div class="tn-hypothesis-row__text" style="opacity:${m.opacity};">${escapeHtml(h.text)}</div>
        <span class="tn-mono tn-mono--xs tn-mono--secondary">${escapeHtml(h.status)}</span>
      </div>
    `;
    }).join('');

    $('insightsList').innerHTML = insights.map((ins) => `
      <div class="tn-insight-row">
        <div class="tn-insight-row__text">${escapeHtml(ins.text)}</div>
        <div class="tn-insight-row__source">${escapeHtml(ins.source)}</div>
      </div>
    `).join('');
  }

  /* ============================================================
     RENDER: PROJECTS
     ============================================================ */
  function renderProjects() {
    $('projectsList').innerHTML = projects.map((pr) => `
      <div class="tn-card tn-project-card">
        <div>
          <div class="tn-project-card__name">${escapeHtml(pr.name)}</div>
          <div class="tn-project-card__desc">${escapeHtml(pr.desc)}</div>
        </div>
        <span class="tn-tag">${escapeHtml(pr.status)}</span>
        <div>
          <div class="tn-progress" style="margin-bottom:6px;"><div class="tn-progress__bar" style="width:${pr.progress}%;"></div></div>
          <div class="tn-project-card__pct">${pr.progress}%</div>
        </div>
        <div class="tn-project-card__activity">${escapeHtml(pr.lastActivity)}</div>
      </div>
    `).join('');
  }

  /* ============================================================
     RENDER: DOCUMENTS
     ============================================================ */
  function getFilteredDocs() {
    const search = state.docSearch.toLowerCase();
    return documents.filter((d) => {
      const catOk = state.docCategory === 'all' || d.category.toLowerCase() === state.docCategory;
      const searchOk = d.title.toLowerCase().includes(search);
      return catOk && searchOk;
    });
  }

  function renderDocuments() {
    document.querySelectorAll('.tn-doc-toolbar .tn-pill').forEach((el) => {
      el.classList.toggle('is-active', el.dataset.cat === state.docCategory);
    });
    $('viewGridBtn').classList.toggle('is-active', state.viewMode === 'grid');
    $('viewListBtn').classList.toggle('is-active', state.viewMode === 'list');
    $('docGrid').hidden = state.viewMode !== 'grid';
    $('docList').hidden = state.viewMode !== 'list';

    const filtered = getFilteredDocs();

    if (!filtered.length) {
      const empty = '<div class="tn-empty-state">Nenhum documento encontrado.</div>';
      $('docGrid').innerHTML = empty;
      $('docList').innerHTML = empty;
      refreshIcons();
      return;
    }

    $('docGrid').innerHTML = filtered.map((d) => `
      <div class="tn-card tn-doc-card">
        <i data-lucide="file-text"></i>
        <div class="tn-doc-card__title">${escapeHtml(d.title)}</div>
        <span class="tn-mono tn-mono--xs tn-mono--muted">${escapeHtml(d.category)} · ${escapeHtml(d.type)}</span>
        <div class="tn-doc-card__updated">${escapeHtml(d.updated)}</div>
      </div>
    `).join('');

    $('docList').innerHTML = filtered.map((d) => `
      <div class="tn-doc-list-row">
        <i data-lucide="file-text"></i>
        <div class="tn-doc-list-row__title">${escapeHtml(d.title)}</div>
        <div class="tn-doc-list-row__category"><span class="tn-mono tn-mono--xs tn-mono--muted">${escapeHtml(d.category)}</span></div>
        <div class="tn-doc-list-row__type">${escapeHtml(d.type)}</div>
        <div class="tn-doc-list-row__updated">${escapeHtml(d.updated)}</div>
      </div>
    `).join('');

    refreshIcons();
  }

  /* ============================================================
     RENDER: CHAT
     ============================================================ */
  function renderChatMessages() {
    $('chatMessages').innerHTML = chatMessages.map((m) => `
      <div class="tn-chat-row ${m.from === 'user' ? 'is-user' : 'is-vault'}">
        <div class="tn-bubble ${m.from === 'user' ? 'tn-bubble--user' : 'tn-bubble--vault'}">${escapeHtml(m.text)}</div>
      </div>
    `).join('');
    $('chatMessages').scrollTop = $('chatMessages').scrollHeight;
  }

  function renderChat() {
    renderChatMessages();
    $('suggestionChips').innerHTML = suggestionChips.map((s) => `<button class="tn-pill" data-suggestion="${escapeHtml(s)}">${escapeHtml(s)}</button>`).join('');
  }

  function sendChatMessage(text) {
    const trimmed = text.trim();
    if (!trimmed) return;
    chatMessages.push({ from: 'user', text: trimmed });
    chatMessages.push({ from: 'vault', text: 'Nenhuma IA está conectada neste protótipo.' });
    renderChatMessages();
  }

  /* ============================================================
     RENDER: SETTINGS
     ============================================================ */
  function renderSettings() {
    $('integrationsGrid').innerHTML = integrations.map((i) => `
      <div class="tn-integration-row">
        <i data-lucide="${i.icon}"></i>
        <div class="tn-integration-row__name">${escapeHtml(i.name)}</div>
        <span class="tn-tag">Em breve</span>
      </div>
    `).join('');
  }

  /* ============================================================
     RENDER: COMMAND PALETTE
     ============================================================ */
  function renderPalette() {
    $('paletteOverlay').hidden = !state.paletteOpen;
    if (!state.paletteOpen) return;

    $('paletteInput').value = state.paletteQuery;

    const query = state.paletteQuery.toLowerCase();
    const results = commandsBase.filter((c) => c.label.toLowerCase().includes(query));

    $('paletteResults').innerHTML = results.map((c) => `
      <button class="tn-command-row" data-command="${c.id}">
        <i data-lucide="${c.icon}"></i>
        <span class="tn-command-row__label">${escapeHtml(c.label)}</span>
        <span class="tn-command-row__type">${escapeHtml(c.type)}</span>
      </button>
    `).join('');

    refreshIcons();
    $('paletteInput').focus();
  }

  function runCommand(id) {
    if (navLabels[id]) {
      setModule(id);
    }
    closePalette();
  }

  function openPalette() {
    state.paletteOpen = true;
    state.paletteQuery = '';
    renderPalette();
  }

  function closePalette() {
    state.paletteOpen = false;
    renderPalette();
  }

  /* ============================================================
     MODULE SWITCHING
     ============================================================ */
  function setModule(id) {
    state.activeModule = id;
    document.querySelectorAll('.tn-module').forEach((el) => {
      el.hidden = el.id !== `module-${id}`;
    });
    renderSidebar();
    refreshIcons();
  }

  /* ============================================================
     EVENT WIRING
     ============================================================ */
  function wireEvents() {
    document.querySelectorAll('.tn-nav-item').forEach((el) => {
      el.addEventListener('click', () => setModule(el.dataset.module));
    });

    document.querySelectorAll('[data-goto]').forEach((el) => {
      el.addEventListener('click', () => setModule(el.dataset.goto));
    });

    $('collapseBtn').addEventListener('click', () => {
      state.sidebarExpanded = !state.sidebarExpanded;
      renderSidebar();
    });

    $('openPaletteBtn').addEventListener('click', openPalette);
    $('paletteOverlay').addEventListener('click', (e) => {
      if (e.target === $('paletteOverlay')) closePalette();
    });
    $('paletteBox').addEventListener('click', (e) => e.stopPropagation());
    $('paletteInput').addEventListener('input', (e) => {
      state.paletteQuery = e.target.value;
      renderPalette();
    });
    $('paletteResults').addEventListener('click', (e) => {
      const row = e.target.closest('.tn-command-row');
      if (row) runCommand(row.dataset.command);
    });

    document.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        state.paletteOpen ? closePalette() : openPalette();
      } else if (e.key === 'Escape' && state.paletteOpen) {
        closePalette();
      }
    });

    document.querySelectorAll('.tn-doc-toolbar .tn-pill').forEach((el) => {
      el.addEventListener('click', () => {
        state.docCategory = el.dataset.cat;
        renderDocuments();
      });
    });

    $('docSearchInput').addEventListener('input', (e) => {
      state.docSearch = e.target.value;
      renderDocuments();
    });

    $('viewGridBtn').addEventListener('click', () => { state.viewMode = 'grid'; renderDocuments(); });
    $('viewListBtn').addEventListener('click', () => { state.viewMode = 'list'; renderDocuments(); });

    $('suggestionChips').addEventListener('click', (e) => {
      const chip = e.target.closest('[data-suggestion]');
      if (chip) sendChatMessage(chip.dataset.suggestion);
    });

    $('chatInput').addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        sendChatMessage(e.target.value);
        e.target.value = '';
      }
    });
  }

  /* ============================================================
     INIT
     ============================================================ */
  function init() {
    renderSidebar();
    renderDashboard();
    renderProduct();
    renderGroundTruth();
    renderProjects();
    renderDocuments();
    renderChat();
    renderSettings();
    wireEvents();
    refreshIcons();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
