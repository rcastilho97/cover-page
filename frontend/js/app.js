// =============================================
// APP.JS — Page navigation and initialisation
// Uses History API so browser back button works
// =============================================

// On page load — set everything up
document.addEventListener('DOMContentLoaded', function() {
  setupSearch();

  // Handle browser back/forward buttons
  window.addEventListener('popstate', function(e) {
    if (e.state) {
      handleRoute(e.state);
    } else {
      renderPage('home', null, false);
    }
  });

  // Handle direct URL on first load
  const path = window.location.pathname;
  if (path.includes('/results')) {
    const params = new URLSearchParams(window.location.search);
    const query = params.get('q') || '';
    if (query) {
      document.getElementById('search-input-home').value = query;
      document.getElementById('search-input-results').value = query;
    }
    renderPage('results', null, false);
    history.replaceState({ page: 'results' }, '', `/results${query ? '?q=' + encodeURIComponent(query) : ''}`);
    if (query) fetchAnswer(query);
  } else if (path.includes('/section/')) {
    const key = path.split('/section/')[1];
    renderPage('section', key, false);
    history.replaceState({ page: 'section', section: key }, '', `/section/${key}`);
  } else {
    renderPage('home', null, false);
    history.replaceState({ page: 'home' }, '', '/');
  }
});

// =============================================
// CORE NAVIGATION — all navigation goes here
// =============================================
function renderPage(pageName, sectionKey, pushState) {

  // Hide all pages
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });

  // Show requested page
  const target = document.getElementById(`page-${pageName}`);
  if (target) target.classList.add('active');

  // If it's a section page — inject content
  if (pageName === 'section' && sectionKey) {
    const section = sections[sectionKey];
    if (section) {
      document.getElementById('section-body').innerHTML = section.content;
      document.title = section.title + ' — CoverPage';
    }
  }

  // Push to browser history so back button works
  if (pushState) {
    let url = '/';
    if (pageName === 'results') {
      const query = document.getElementById('search-input-results').value.trim();
      url = '/results' + (query ? '?q=' + encodeURIComponent(query) : '');
    }
    if (pageName === 'section') url = `/section/${sectionKey}`;

    history.pushState(
      { page: pageName, section: sectionKey },
      '',
      url
    );
  }

  window.scrollTo(0, 0);
}

// Handle browser back/forward
function handleRoute(state) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });

  const target = document.getElementById(`page-${state.page}`);
  if (target) target.classList.add('active');

  if (state.page === 'section' && state.section) {
    const section = sections[state.section];
    if (section) {
      document.getElementById('section-body').innerHTML = section.content;
      document.title = section.title + ' — CoverPage';
    }
  }

  window.scrollTo(0, 0);
}

// =============================================
// PUBLIC NAVIGATION FUNCTIONS
// Called from onclick in HTML
// =============================================
function showPage(pageName) {
  renderPage(pageName, null, true);
}

function showSection(sectionKey) {
  renderPage('section', sectionKey, true);
}