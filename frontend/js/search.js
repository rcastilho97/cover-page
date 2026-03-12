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
    snippet: 'From rural Brazil to Dublin, Ireland. A creative professional transitioning into software engineering with a global mindset shaped by living in four countries.',
    iconClass: 'icon-about',
    icon: '<svg viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>'
  },
  'experience-film': {
    url: 'coverpage.rebeca.dev › experience › film',
    title: 'Film & Television Experience',
    snippet: 'Camera department, directing, and productions across New York and Ireland. From Arri Alexa to The Art Thief — a career in visual storytelling.',
    iconClass: 'icon-experience',
    icon: '<svg viewBox="0 0 24 24"><path d="M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4zM9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9z"/></svg>'
  },
  'experience-screenwriting': {
    url: 'coverpage.rebeca.dev › experience › screenwriting',
    title: 'Screenwriting Experience',
    snippet: 'Comedy pilots, feature screenplays, and the writers room methodology that prepared Rebeca for agile software development.',
    iconClass: 'icon-experience',
    icon: '<svg viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>'
  },
  'experience-vodafone': {
    url: 'coverpage.rebeca.dev › experience › vodafone',
    title: 'Vodafone — Corporate Events & Digital Transformation',
    snippet: 'Managing 6 executive accounts, leading a team of 8, and driving digital transformation with 80% delivery improvement and 1,000+ data entries migrated.',
    iconClass: 'icon-experience',
    icon: '<svg viewBox="0 0 24 24"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/></svg>'
  },
  'experience-story-analyst': {
    url: 'coverpage.rebeca.dev › experience › story-analyst',
    title: 'Story Analyst — PAGE Awards',
    snippet: '600+ screenplays analyzed across 8 genres. Built a standardized evaluation rubric that improved team consistency by 60%.',
    iconClass: 'icon-experience',
    icon: '<svg viewBox="0 0 24 24"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/></svg>'
  },
  'experience-internships': {
    url: 'coverpage.rebeca.dev › experience › internships',
    title: 'Film Industry Internships — NYC',
    snippet: 'Cinetic Media, Archer Gray, and Killer Films. $50K in closed revenue, Salesforce CRM, and three competitive internships at top production companies.',
    iconClass: 'icon-experience',
    icon: '<svg viewBox="0 0 24 24"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/></svg>'
  },
  'experience-courses': {
    url: 'coverpage.rebeca.dev › experience › courses',
    title: 'Additional Courses & Training',
    snippet: 'Harvard CS50, Code First Girls Python, and HB Studio theatre. The stepping stones that built the foundation for software engineering.',
    iconClass: 'icon-experience',
    icon: '<svg viewBox="0 0 24 24"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/></svg>'
  },
  'projects-coverpage': {
    url: 'coverpage.rebeca.dev › projects › coverpage',
    title: 'CoverPage — This Application',
    snippet: 'A full-stack AI cover letter built as a Google Search experience. Java, Spring Boot, Gemini AI, RAG, Firebase, Cloud Run. Built solo in 4 days.',
    iconClass: 'icon-projects',
    icon: '<svg viewBox="0 0 24 24"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>'
  },
  'projects-filmoji': {
    url: 'coverpage.rebeca.dev › projects › filmoji',
    title: 'Filmoji — AI Film Recommendation Engine',
    snippet: 'Emoji-based film recommendations using vector embeddings and cosine similarity. Java, Spring Boot, PostgreSQL, pgvector, HuggingFace. 5-person team.',
    iconClass: 'icon-projects',
    icon: '<svg viewBox="0 0 24 24"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>'
  },
  'projects-flowerpower': {
    url: 'coverpage.rebeca.dev › projects › flowerpower',
    title: 'Flower Power — Sustainability Tracker',
    snippet: 'Gamified sustainability tracker using React, Firebase, and behavioral design. Frontend development, authentication, and full-cycle engineering.',
    iconClass: 'icon-projects',
    icon: '<svg viewBox="0 0 24 24"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>'
  },
  skills: {
    url: 'coverpage.rebeca.dev › skills',
    title: 'Technical Skills — Languages, Frameworks & Tools',
    snippet: 'Java, JavaScript (ES6+), Spring Boot, SQL, Gemini AI, RAG, Firebase, Google Cloud Run, Docker, Git. Self-taught and building continuously.',
    iconClass: 'icon-skills',
    icon: '<svg viewBox="0 0 24 24"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/></svg>'
  },
  'education-maynooth': {
    url: 'coverpage.rebeca.dev › education › maynooth',
    title: 'Maynooth University — HDip Software Development',
    snippet: 'Higher Diploma in Software Development (1.1 Honours projected). 94.5% in Java bootcamp. Equivalent to a 4-year CS degree.',
    iconClass: 'icon-education',
    icon: '<svg viewBox="0 0 24 24"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/></svg>'
  },
  'education-fordham': {
    url: 'coverpage.rebeca.dev › education › fordham',
    title: 'Fordham University — BA Film & Television',
    snippet: 'BA in Film & Television Production, NYC. GPA 3.2/4.0. The C++ moment that sparked a love of code. Three competitive internships.',
    iconClass: 'icon-education',
    icon: '<svg viewBox="0 0 24 24"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/></svg>'
  },
  'education-sorbonne': {
    url: 'coverpage.rebeca.dev › education › sorbonne',
    title: 'Sorbonne University — Semester Abroad',
    snippet: 'Film & TV semester in Paris. Directed a team of 6 entirely in French. Achieved the highest grade in the class: A+.',
    iconClass: 'icon-education',
    icon: '<svg viewBox="0 0 24 24"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/></svg>'
  },
  'why-google': {
    url: 'coverpage.rebeca.dev › why-google',
    title: 'Why Google',
    snippet: 'Values alignment, user experience focus, AI innovation, and a personal dream from rural Brazil. Why Google is where this journey leads.',
    iconClass: 'icon-why',
    icon: '<svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>'
  },
  'why-apprenticeship': {
    url: 'coverpage.rebeca.dev › why-apprenticeship',
    title: 'Why the Apprenticeship',
    snippet: 'Structured learning, the toolkit philosophy, world-class training, and an ICT format that mirrors the Java bootcamp experience.',
    iconClass: 'icon-why',
    icon: '<svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>'
  },
  'why-tech': {
    url: 'coverpage.rebeca.dev › why-tech',
    title: 'Why Tech — The Transition Story',
    snippet: 'From rural Brazil to C++ at Fordham to digital transformation at Vodafone. The journey from film to software engineering.',
    iconClass: 'icon-why',
    icon: '<svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>'
  },
  collaboration: {
    url: 'coverpage.rebeca.dev › collaboration',
    title: 'Collaboration & Leadership Style',
    snippet: 'From writers rooms to Scrum sessions. Structured collaboration techniques, empathy-driven leadership, and making every team member feel heard.',
    iconClass: 'icon-collaboration',
    icon: '<svg viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>'
  },
  awards: {
    url: 'coverpage.rebeca.dev › awards',
    title: 'Awards & Recognition',
    snippet: 'Best Film (West London Film Festival), Best Film (NY Short Film Festival), Best Short Play (NY Theatre Summerfest), and top academic grades.',
    iconClass: 'icon-awards',
    icon: '<svg viewBox="0 0 24 24"><path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/></svg>'
  },
  personal: {
    url: 'coverpage.rebeca.dev › personal',
    title: 'Personal Qualities',
    snippet: 'Curiosity, global mindset, discipline, empathy, and a people-centric approach. Shaped by four countries and two industries.',
    iconClass: 'icon-personal',
    icon: '<svg viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>'
  },
  interests: {
    url: 'coverpage.rebeca.dev › interests',
    title: 'Interests',
    snippet: 'CrossFit, film, tennis, Women in STEM, LGBTQ+ advocacy, and a love of travel across four countries and three languages.',
    iconClass: 'icon-interests',
    icon: '<svg viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>'
  },
  'looking-ahead': {
    url: 'coverpage.rebeca.dev › looking-ahead',
    title: 'Looking Ahead — Future Technologies',
    snippet: 'Machine learning, recommendation algorithms, image recognition, deep neural networks, and the vision for an AI shopping assistant.',
    iconClass: 'icon-looking-ahead',
    icon: '<svg viewBox="0 0 24 24"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z"/></svg>'
  },
  contact: {
    url: 'coverpage.rebeca.dev › contact',
    title: 'Contact Rebeca Castilho',
    snippet: 'Get in touch via email, GitHub, or LinkedIn. Based in Dublin, Ireland.',
    iconClass: 'icon-contact',
    icon: '<svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>'
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
      .innerHTML = response.answer;
    resetAIToggle();
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
      <div class="result-url">
        <div class="result-icon ${card.iconClass}">${card.icon}</div>
        ${card.url}
      </div>
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
  const source  = document.getElementById('ai-source');

  loading.style.display = state === 'loading' ? 'flex'  : 'none';
  answer.style.display  = state === 'answer'  ? 'block' : 'none';
  error.style.display   = state === 'error'   ? 'block' : 'none';
  source.style.display  = state === 'answer'  ? 'block' : 'none';
}

// =============================================
// AI OVERVIEW TOGGLE — Show more / Show less
// =============================================
function toggleAIOverview() {
  const content = document.getElementById('ai-answer-content');
  const btn     = document.getElementById('ai-toggle');
  const text    = document.getElementById('ai-toggle-text');
  const fade    = document.getElementById('ai-answer-fade');

  const isExpanded = content.classList.contains('expanded');

  if (isExpanded) {
    content.classList.remove('expanded');
    btn.classList.remove('expanded');
    text.textContent = 'Show more';
    fade.style.opacity = '1';
  } else {
    content.classList.add('expanded');
    btn.classList.add('expanded');
    text.textContent = 'Show less';
    fade.style.opacity = '0';
  }
}

function resetAIToggle() {
  const content = document.getElementById('ai-answer-content');
  const btn     = document.getElementById('ai-toggle');
  const text    = document.getElementById('ai-toggle-text');
  const fade    = document.getElementById('ai-answer-fade');

  content.classList.remove('expanded');
  btn.classList.remove('expanded');
  text.textContent = 'Show more';
  fade.style.opacity = '1';
}