// =============================================
// SEARCH.JS — Search bar behaviour
// Includes: autocomplete, suggestions, submit
// =============================================

// Suggested questions — add more as knowledge base grows
const suggestions = [
  'Why should we hire Rebeca Castilho?',
  'What experience does Rebeca have?',
  'What has Rebeca built?',
  'Why does Rebeca want to work at Google?',
  'What makes Rebeca different from other candidates?',
  'What technical skills does Rebeca have?',
  'Why is Rebeca transitioning into engineering?',
  'What projects has Rebeca worked on?',
  'Why is Rebeca applying for an apprenticeship?',
  'What does Rebeca know about Java and Spring Boot?'
];

// =============================================
// SETUP — called once on page load
// =============================================
function setupSearch() {
  setupSearchBar(
    'search-input-home',
    'autocomplete-home'
  );
  setupSearchBar(
    'search-input-results',
    'autocomplete-results'
  );
}

// =============================================
// SETUP INDIVIDUAL SEARCH BAR
// =============================================
function setupSearchBar(inputId, dropdownId) {
  const input    = document.getElementById(inputId);
  const dropdown = document.getElementById(dropdownId);

  if (!input || !dropdown) return;

  // Show all suggestions on click
  input.addEventListener('focus', function() {
    const query = input.value.trim();
    renderSuggestions(dropdown, query, inputId);
    showDropdown(dropdown);
  });

  // Filter suggestions as user types
  input.addEventListener('input', function() {
    const query = input.value.trim();
    renderSuggestions(dropdown, query, inputId);
    showDropdown(dropdown);
  });

  // Submit on Enter
  input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      hideDropdown(dropdown);
      submitSearch(inputId);
    }
    // Navigate suggestions with arrow keys
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      focusNextSuggestion(dropdown, 1);
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      focusNextSuggestion(dropdown, -1);
    }
    // Escape closes dropdown
    if (e.key === 'Escape') {
      hideDropdown(dropdown);
    }
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', function(e) {
    if (!input.contains(e.target) &&
        !dropdown.contains(e.target)) {
      hideDropdown(dropdown);
    }
  });
}

// =============================================
// RENDER SUGGESTIONS
// =============================================
function renderSuggestions(dropdown, query, inputId) {
  // Filter suggestions based on query
  const filtered = query.length === 0
    ? suggestions
    : suggestions.filter(s =>
        s.toLowerCase().includes(query.toLowerCase())
      );

  // Build dropdown HTML
  dropdown.innerHTML = '';

  filtered.forEach(function(suggestion) {
    const item = document.createElement('div');
    item.className = 'autocomplete-item';

    // Highlight matching text
    const highlighted = highlightMatch(suggestion, query);

    item.innerHTML = `
      <svg class="suggest-icon" viewBox="0 0 24 24">
        <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 
        9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 
        4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 
        0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 
        9.5 11.99 14 9.5 14z"/>
      </svg>
      <span class="suggest-text">${highlighted}</span>
    `;

    // Click suggestion — fill input and submit
    item.addEventListener('click', function() {
      const input = document.getElementById(inputId);
      input.value = suggestion;
      hideDropdown(dropdown);
      submitSearch(inputId);
    });

    dropdown.appendChild(item);
  });

  // If no matches — show a friendly message
  if (filtered.length === 0) {
    dropdown.innerHTML = `
      <div class="autocomplete-empty">
        Press Enter to ask Gemini AI
      </div>
    `;
  }
}

// =============================================
// HIGHLIGHT MATCHING TEXT IN SUGGESTIONS
// =============================================
function highlightMatch(text, query) {
  if (!query) return text;
  const regex = new RegExp(
    `(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`,
    'gi'
  );
  return text.replace(regex, '<strong>$1</strong>');
}

// =============================================
// ARROW KEY NAVIGATION
// =============================================
function focusNextSuggestion(dropdown, direction) {
  const items = dropdown.querySelectorAll('.autocomplete-item');
  const current = dropdown.querySelector('.autocomplete-item.focused');
  let index = -1;

  if (current) {
    current.classList.remove('focused');
    index = Array.from(items).indexOf(current);
  }

  index = index + direction;

  if (index < 0) index = items.length - 1;
  if (index >= items.length) index = 0;

  if (items[index]) {
    items[index].classList.add('focused');
    items[index].scrollIntoView({ block: 'nearest' });
  }
}

// =============================================
// SHOW / HIDE DROPDOWN
// =============================================
function showDropdown(dropdown) {
  dropdown.style.display = 'block';
}

function hideDropdown(dropdown) {
  dropdown.style.display = 'none';
}

// =============================================
// SUBMIT SEARCH
// =============================================
function submitSearch(inputId) {
  // If no inputId provided figure out which page is active
  if (!inputId) {
    const currentPage = document.querySelector('.page.active').id;
    inputId = currentPage === 'page-home'
      ? 'search-input-home'
      : 'search-input-results';
  }

  const input = document.getElementById(inputId);
  const question = input ? input.value.trim() : '';

  if (!question) return;

  // Sync both inputs
  document.getElementById('search-input-home').value = question;
  document.getElementById('search-input-results').value = question;

  // Navigate to results and fetch answer
  showPage('results');
  fetchAnswer(question);
}

// =============================================
// RESULT CARD DATA
// Maps section keys to display info
// =============================================
const cardData = {
  about: {
    url: 'coverpage.rebeca.dev › about',
    title: 'About Rebeca Castilho — Background & Story',
    snippet: 'From rural Brazil to Dublin, Ireland. A creative professional transitioning into software engineering with a global mindset shaped by living in four countries.'
  },
  experience: {
    url: 'coverpage.rebeca.dev › experience',
    title: 'Professional Experience — Film, TV & Tech',
    snippet: 'From corporate events at Vodafone to film production internships at Killer Films and Cinetic Media. A career that spans two industries and demonstrates adaptability, creativity, and technical depth.'
  },
  projects: {
    url: 'coverpage.rebeca.dev › projects',
    title: 'Projects — What Rebeca Has Built',
    snippet: 'CoverPage, Filmoji, and Flower Power — full-stack applications featuring AI integration, vector databases, RAG architecture, and Google Cloud deployment. Built from scratch.'
  },
  skills: {
    url: 'coverpage.rebeca.dev › skills',
    title: 'Technical Skills — Languages, Frameworks & Tools',
    snippet: 'Java, JavaScript (ES6+), Spring Boot, SQL, Gemini AI, RAG, Firebase, Google Cloud Run, Docker, Git. Self-taught and building continuously.'
  },
  why: {
    url: 'coverpage.rebeca.dev › why-google',
    title: 'Why Google — Rebeca\'s Case for the Apprenticeship',
    snippet: 'Values alignment, world-class structured learning, and a personal dream from rural Brazil. Three specific reasons why Google\'s apprenticeship is the right next step.'
  },
  contact: {
    url: 'coverpage.rebeca.dev › contact',
    title: 'Contact Rebeca Castilho',
    snippet: 'Get in touch via email, GitHub, or LinkedIn. Based in Dublin, Ireland.'
  }
};

// =============================================
// FETCH ANSWER FROM BACKEND
// =============================================
async function fetchAnswer(question) {
  setAIState('loading');
  renderResultCards([]);

  const response = await askGemini(question);

  if (response.success) {
    document.getElementById('ai-answer-text')
      .textContent = response.answer;
    setAIState('answer');
    renderResultCards(response.relevantSections || []);
  } else {
    document.getElementById('ai-error-text')
      .textContent = response.error;
    setAIState('error');
    renderResultCards(['about', 'experience', 'projects', 'skills', 'why']);
  }
}

// =============================================
// RENDER DYNAMIC RESULT CARDS
// =============================================
function renderResultCards(sectionKeys) {
  const container = document.getElementById('result-cards');
  container.innerHTML = '';

  sectionKeys.forEach(function(key) {
    const card = cardData[key];
    if (!card) return;

    const div = document.createElement('div');
    div.className = 'result-card';
    div.onclick = function() { showSection(key); };
    div.innerHTML = `
      <div class="result-url">${card.url}</div>
      <div class="result-title">${card.title}</div>
      <div class="result-snippet">${card.snippet}</div>
    `;
    container.appendChild(div);
  });
}

// =============================================
// AI OVERVIEW STATE
// =============================================
function setAIState(state) {
  const loading = document.getElementById('ai-loading');
  const answer  = document.getElementById('ai-answer');
  const error   = document.getElementById('ai-error');

  loading.style.display = state === 'loading' ? 'flex'  : 'none';
  answer.style.display  = state === 'answer'  ? 'block' : 'none';
  error.style.display   = state === 'error'   ? 'block' : 'none';
}