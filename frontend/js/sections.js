// =============================================
// SECTIONS.JS — Inner page content
// All section pages are defined here as objects
// =============================================

// Reusable SVG icons
const ICONS = {
  person: '<svg viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>',
  briefcase: '<svg viewBox="0 0 24 24"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/></svg>',
  code: '<svg viewBox="0 0 24 24"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>',
  wrench: '<svg viewBox="0 0 24 24"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/></svg>',
  heart: '<svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>',
  mail: '<svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>',
  graduation: '<svg viewBox="0 0 24 24"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/></svg>',
  people: '<svg viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>',
  trophy: '<svg viewBox="0 0 24 24"><path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/></svg>',
  star: '<svg viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>',
  lightbulb: '<svg viewBox="0 0 24 24"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z"/></svg>',
  edit: '<svg viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>',
  camera: '<svg viewBox="0 0 24 24"><path d="M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4zM9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9z"/></svg>'
};

// Helper to build a related card
function relatedCard(key, iconSvg, colorClass, title, snippet) {
  return `
    <div class="related-card" onclick="showSection('${key}')">
      <div class="related-card-icon ${colorClass}">${iconSvg}</div>
      <div class="related-card-text">
        <div class="related-card-title">${title}</div>
        <div class="related-card-snippet">${snippet}</div>
      </div>
    </div>`;
}

const sections = {

  // =============================================
  // 1. ABOUT
  // =============================================
  about: {
    title: 'About Rebeca Castilho',
    meta: 'coverpage.rebeca.dev › about',
    content: `
      <div class="section-header">
        <div class="section-header-top">
          <div class="section-header-icon sh-blue">${ICONS.person}</div>
          <h1>About Rebeca Castilho</h1>
        </div>
        <p class="section-meta">coverpage.rebeca.dev › about</p>
        <div class="section-tags">
          <span class="tag highlight">Software Engineering</span>
          <span class="tag highlight">Dublin, Ireland</span>
          <span class="tag">Film Background</span>
          <span class="tag">Global Mindset</span>
          <span class="tag">Career Changer</span>
        </div>
      </div>

      <div class="stat-callout">
        <div class="stat">
          <div class="stat-number">4</div>
          <div class="stat-label">Countries Lived In</div>
        </div>
        <div class="stat">
          <div class="stat-number">28</div>
          <div class="stat-label">Years Old</div>
        </div>
        <div class="stat">
          <div class="stat-number">2</div>
          <div class="stat-label">Industries</div>
        </div>
      </div>

      <h2>Who I Am</h2>
      <p>
        I'm Rebeca Castilho — a 28-year-old creative professional based in Dublin, Ireland,
        transitioning into software engineering. I'm applying for Google's Software Development
        Apprenticeship in Engineering because I believe my unique combination of technical skills,
        creative thinking, and real-world experience makes me a strong fit for a team that values
        diverse perspectives.
      </p>

      <h2>Where I Come From</h2>
      <p>
        I grew up in rural Brazil, in the middle of nowhere. I was never encouraged to pursue
        STEM — that was simply "not what girls do." While my brothers were pushed toward
        neuroscience and robotics, I was steered toward psychology or nursing. But even then,
        I found myself messing around with HTML while curating my Tumblr feed and teaching
        myself basic code to design simple video games for me and my friends. I've always held
        on to my curiosity about technology.
      </p>
      <p>
        I challenged the norm in my small town by pursuing a career in the arts, following my
        passion for stories and film. Now I'm challenging norms again by transitioning into
        software engineering. I want to be an example for girls around the world — even in the
        middle of nowhere, Brazil — that they very much belong in STEM and can help make the
        world a better place through technology.
      </p>

      <h2>My Journey to Engineering</h2>
      <p>
        After years in
        <a class="cross-link" onclick="showSection('experience-film')">film and television production</a>,
        I realized that the problem-solving and systems thinking I loved most in filmmaking were
        the same skills that drive great software engineering. The transition wasn't random — it
        was the natural next step for someone who has always been drawn to building things from
        scratch and understanding how complex systems work together.
      </p>
      <p>
        Today I'm pursuing a Higher Diploma in Software Development at
        <a class="cross-link" onclick="showSection('education-maynooth')">Maynooth University</a>,
        building
        <a class="cross-link" onclick="showSection('projects-coverpage')">full-stack applications</a>,
        and discovering that I genuinely love
        <a class="cross-link" onclick="showSection('looking-ahead')">backend engineering and AI</a>.
      </p>

      <div class="related-pages">
        <h3>Related Pages</h3>
        <div class="related-cards">
          ${relatedCard('why-tech', ICONS.heart, 'rc-blue', 'Why Tech — The Transition Story', 'From film sets to code editors: why engineering was the natural next step')}
          ${relatedCard('personal', ICONS.person, 'rc-blue', 'Personal Qualities', 'Curiosity, discipline, global mindset, and a people-centric approach')}
          ${relatedCard('experience-film', ICONS.camera, 'rc-red', 'Film & Television Career', 'Camera work, directing, and the creative career that shaped my engineering mindset')}
        </div>
      </div>
    `
  },

  // =============================================
  // 2. EXPERIENCE — FILM
  // =============================================
  'experience-film': {
    title: 'Film & Television Experience',
    meta: 'coverpage.rebeca.dev › experience › film',
    content: `
      <div class="section-header">
        <div class="section-header-top">
          <div class="section-header-icon sh-red">${ICONS.camera}</div>
          <h1>Film & Television Experience</h1>
        </div>
        <p class="section-meta">coverpage.rebeca.dev › experience › film</p>
        <div class="section-tags">
          <span class="tag highlight">Camera Department</span>
          <span class="tag highlight">Directing</span>
          <span class="tag">2nd AC</span>
          <span class="tag">Focus Puller</span>
          <span class="tag">Arri Alexa</span>
          <span class="tag">RED One</span>
        </div>
      </div>

      <h2>Camera Department</h2>
      <p>
        I've worked as 2nd Assistant Camera, Camera Trainee, and Focus Puller on multiple
        short films, music videos, and commercials in both New York and Ireland (2016–2025).
        Productions include work shot on Arri Alexa Mini and RED One cameras, collaborating
        with directors and DoPs across a wide range of projects.
      </p>
      <p>
        Working in the camera department taught me precision under pressure, attention to
        technical detail, and the importance of clear communication in a fast-moving team.
        Every shot is a system — camera, lighting, blocking, timing — and my job was to make
        sure my piece of that system worked flawlessly.
      </p>

      <h2>Directing</h2>
      <p>
        I wrote, produced, and directed <strong>The Art Thief</strong> — a crowdfunded irreverent
        De Stijl-style short film about the wild world of contemporary art (2018). I handled
        everything: budgeting, casting, drafting contracts, scouting locations, requesting permits,
        and directing actors. The Art Thief went on to win
        <a class="cross-link" onclick="showSection('awards')">Best Film at the West London Film Festival</a> (2024).
      </p>
      <p>
        At the <a class="cross-link" onclick="showSection('education-sorbonne')">Sorbonne University</a>,
        I directed a team of 6 film students entirely in French, navigating cultural nuances
        within a global team. Our group achieved the highest grade in the module: A+.
      </p>

      <h2>What Film Taught Me About Engineering</h2>
      <p>
        Film production is essentially project management with creative problem-solving at every
        step. A film set runs on deadlines, dependencies, and collaboration — the same principles
        that drive agile software development. My experience on set prepared me for the structured
        chaos of building software in a team, where you need to
        <a class="cross-link" onclick="showSection('collaboration')">communicate clearly, adapt quickly, and trust your collaborators</a>.
      </p>

      <div class="related-pages">
        <h3>Related Pages</h3>
        <div class="related-cards">
          ${relatedCard('experience-screenwriting', ICONS.edit, 'rc-red', 'Screenwriting Experience', 'Comedy pilots, feature films, and the writers room that prepared me for agile')}
          ${relatedCard('awards', ICONS.trophy, 'rc-yellow', 'Awards & Recognition', 'Best Film, Best Short Play, and more')}
          ${relatedCard('collaboration', ICONS.people, 'rc-blue', 'Collaboration & Leadership', 'How filmmaking prepared me for software teams')}
        </div>
      </div>
    `
  },

  // =============================================
  // 3. EXPERIENCE — SCREENWRITING
  // =============================================
  'experience-screenwriting': {
    title: 'Screenwriting Experience',
    meta: 'coverpage.rebeca.dev › experience › screenwriting',
    content: `
      <div class="section-header">
        <div class="section-header-top">
          <div class="section-header-icon sh-red">${ICONS.edit}</div>
          <h1>Screenwriting Experience</h1>
        </div>
        <p class="section-meta">coverpage.rebeca.dev › experience › screenwriting</p>
        <div class="section-tags">
          <span class="tag highlight">Comedy Pilot</span>
          <span class="tag highlight">Feature Screenplay</span>
          <span class="tag">Writers Room</span>
          <span class="tag">Short Film</span>
          <span class="tag">Story Development</span>
        </div>
      </div>

      <h2>Original Work</h2>
      <ul>
        <li><strong>Sisters of Perpetual Indulgence</strong> — A comedy pilot about a Catholic church run by lesbians in Elizabethan England, developed in a simulated writers room led by mentor Jim Jennewein (2020)</li>
        <li><strong>Aleppo</strong> — A feature screenplay about a resilient Syrian family escaping the civil war (2019)</li>
        <li><strong>The Art Thief</strong> — A crowdfunded irreverent De Stijl-style short film about the wild world of contemporary art, which I wrote, produced, and directed (2018)</li>
      </ul>

      <h2>The Writers Room</h2>
      <p>
        In TV screenwriting, we workshop ideas collaboratively in writers rooms. Everyone gets a
        turn to pitch, feedback leads with what's working and why, and constructive criticism
        always comes with reasoning and a proposed solution. This framework keeps morale high,
        people feel heard, and critique stays professional.
      </p>
      <p>
        I've carried this exact approach into
        <a class="cross-link" onclick="showSection('collaboration')">my software development teamwork</a>.
        Writing code in a team is also workshopping ideas — the parallels are striking.
      </p>

      <h2>Why This Matters for Engineering</h2>
      <p>
        Screenwriting is structured problem-solving. Every scene must serve a purpose, every line
        of dialogue must earn its place, and the whole story needs to work as a system. That
        discipline translates directly into writing clean, purposeful code. The skill of knowing
        what to cut is just as valuable in a codebase as it is in a script.
      </p>

      <div class="related-pages">
        <h3>Related Pages</h3>
        <div class="related-cards">
          ${relatedCard('experience-film', ICONS.camera, 'rc-red', 'Film & Television Career', 'Camera work, directing, and productions across New York and Ireland')}
          ${relatedCard('collaboration', ICONS.people, 'rc-blue', 'Collaboration & Leadership', 'From writers rooms to Scrum: structured collaboration techniques')}
          ${relatedCard('experience-story-analyst', ICONS.briefcase, 'rc-red', 'Story Analyst — PAGE Awards', 'Analyzing 600+ screenplays across 8 genres')}
        </div>
      </div>
    `
  },

  // =============================================
  // 4. EXPERIENCE — VODAFONE
  // =============================================
  'experience-vodafone': {
    title: 'Vodafone — Corporate Events',
    meta: 'coverpage.rebeca.dev › experience › vodafone',
    content: `
      <div class="section-header">
        <div class="section-header-top">
          <div class="section-header-icon sh-red">${ICONS.briefcase}</div>
          <h1>Compass Group at Vodafone — Corporate Events</h1>
        </div>
        <p class="section-meta">coverpage.rebeca.dev › experience › vodafone</p>
        <div class="section-tags">
          <span class="tag highlight">Events Coordination</span>
          <span class="tag highlight">Digital Transformation</span>
          <span class="tag">Team Leadership</span>
          <span class="tag">Client Management</span>
          <span class="tag">Jan 2023 – Sept 2024</span>
        </div>
      </div>

      <div class="stat-callout">
        <div class="stat">
          <div class="stat-number">6</div>
          <div class="stat-label">Executive Accounts</div>
        </div>
        <div class="stat">
          <div class="stat-number">8</div>
          <div class="stat-label">Team Members Led</div>
        </div>
        <div class="stat">
          <div class="stat-number">80%</div>
          <div class="stat-label">Delivery Improvement</div>
        </div>
        <div class="stat">
          <div class="stat-number">1,000+</div>
          <div class="stat-label">Data Entries Migrated</div>
        </div>
      </div>

      <h2>What I Did</h2>
      <p>
        As Corporate Events Coordinator, I managed a portfolio of 6 senior executives' accounts,
        building long-standing relationships rooted in trust and transparent communication.
        I led a team of 8 professionals in executing high-volume catering operations, resulting
        in an 80% increase in on-time delivery and customer success.
      </p>

      <h2>Digital Transformation</h2>
      <p>
        I led the digital transformation of our stock management process — implementing a new
        inventory software system, migrating over 1,000 existing data entries, and optimizing
        workflows across the team. I was chosen for this initiative because I had been so vocal
        about my passion for technological integration. I also trained and supported team members
        in adopting the new system.
      </p>
      <p>
        This was my first taste of what it feels like to solve a real problem with technology,
        and it confirmed something I had always suspected:
        <a class="cross-link" onclick="showSection('why-tech')">I belong in tech</a>.
      </p>

      <h2>The International Women's Day Event</h2>
      <p>
        One of my favorite projects was planning and executing the International Women's Day event
        with my client Emily — an Alice in Wonderland-inspired tea party. When existing supplier
        options weren't special enough, I contacted suppliers directly, designed tailored menus,
        negotiated prices, and recommended combinations that fit the budget while achieving the
        wow-factor. The event was a resounding success.
      </p>

      <div class="related-pages">
        <h3>Related Pages</h3>
        <div class="related-cards">
          ${relatedCard('skills', ICONS.wrench, 'rc-yellow', 'Technical Skills', 'Languages, frameworks, tools, and the full toolkit')}
          ${relatedCard('collaboration', ICONS.people, 'rc-blue', 'Collaboration & Leadership', 'Cross-functional teamwork and structured collaboration')}
          ${relatedCard('why-tech', ICONS.heart, 'rc-blue', 'Why Tech', 'The transition story: from events coordination to software engineering')}
        </div>
      </div>
    `
  },

  // =============================================
  // 5. EXPERIENCE — STORY ANALYST
  // =============================================
  'experience-story-analyst': {
    title: 'Story Analyst — PAGE Awards',
    meta: 'coverpage.rebeca.dev › experience › story-analyst',
    content: `
      <div class="section-header">
        <div class="section-header-top">
          <div class="section-header-icon sh-red">${ICONS.briefcase}</div>
          <h1>Story Analyst — PAGE Awards</h1>
        </div>
        <p class="section-meta">coverpage.rebeca.dev › experience › story-analyst</p>
        <div class="section-tags">
          <span class="tag highlight">Script Analysis</span>
          <span class="tag highlight">Evaluation Rubric</span>
          <span class="tag">8 Genres</span>
          <span class="tag">Dec 2020 – Dec 2022</span>
        </div>
      </div>

      <div class="stat-callout">
        <div class="stat">
          <div class="stat-number">600+</div>
          <div class="stat-label">Scripts Analyzed</div>
        </div>
        <div class="stat">
          <div class="stat-number">8</div>
          <div class="stat-label">Genres Covered</div>
        </div>
        <div class="stat">
          <div class="stat-number">60%</div>
          <div class="stat-label">Consistency Improvement</div>
        </div>
      </div>

      <h2>What I Did</h2>
      <p>
        At the PAGE International Screenwriting Awards, I analyzed over 600 feature film and
        TV pilot screenplays across 8 genres. I evaluated story structures, character development,
        dialogue, and thematic elements with precision and consistency.
      </p>

      <h2>Building a Better System</h2>
      <p>
        I developed a standardized evaluation rubric that resulted in a 60% improvement in
        consistency and automation of script assessments across the team. This was essentially
        creating a framework — a reusable system that other analysts could follow to produce
        consistent, high-quality results.
      </p>
      <p>
        Looking back, this was an early sign of my engineering mindset: I saw an inefficiency
        in the process, designed a solution, and implemented it. The same instinct that drove
        me to build that rubric now drives me to write clean, maintainable code.
      </p>

      <div class="related-pages">
        <h3>Related Pages</h3>
        <div class="related-cards">
          ${relatedCard('experience-screenwriting', ICONS.edit, 'rc-red', 'Screenwriting Experience', 'Original scripts, writers rooms, and creative development')}
          ${relatedCard('experience-internships', ICONS.briefcase, 'rc-red', 'Film Industry Internships', 'Killer Films, Archer Gray, and Cinetic Media')}
          ${relatedCard('why-tech', ICONS.heart, 'rc-blue', 'Why Tech', 'How creative pattern recognition became engineering problem-solving')}
        </div>
      </div>
    `
  },

  // =============================================
  // 6. EXPERIENCE — INTERNSHIPS
  // =============================================
  'experience-internships': {
    title: 'Film Industry Internships',
    meta: 'coverpage.rebeca.dev › experience › internships',
    content: `
      <div class="section-header">
        <div class="section-header-top">
          <div class="section-header-icon sh-red">${ICONS.briefcase}</div>
          <h1>Film Industry Internships</h1>
        </div>
        <p class="section-meta">coverpage.rebeca.dev › experience › internships</p>
        <div class="section-tags">
          <span class="tag highlight">Cinetic Media</span>
          <span class="tag highlight">Archer Gray</span>
          <span class="tag highlight">Killer Films</span>
          <span class="tag">New York City</span>
          <span class="tag">2018 – 2020</span>
        </div>
      </div>

      <h2>Cinetic Media — Film Sales Development Intern</h2>
      <p><strong>Jan – May 2020</strong></p>
      <ul>
        <li>Prospected 100+ independent distributor and film festival grant leads weekly</li>
        <li>Generated <strong>$50,000 in closed revenue</strong> during my tenure — the highest of any rep</li>
        <li>Managed <strong>Salesforce CRM</strong> software on the full-cycle film distribution pipeline</li>
      </ul>

      <h2>Archer Gray — Development Intern</h2>
      <p><strong>Sept – Dec 2019</strong></p>
      <ul>
        <li>Wrote coverage of female-driven screenplays, pilots, plays, and novels</li>
        <li>Actively pitched story ideas in development meetings with indie producer Anne Carey</li>
        <li>Evaluated promotional materials for Emmy winner Liz Garbus' <em>Lost Girls</em> (Netflix)</li>
      </ul>

      <h2>Killer Films — Development Intern</h2>
      <p><strong>Aug – Dec 2018</strong></p>
      <ul>
        <li>Reviewed 30+ experimental screenplays, pilots, and novels</li>
        <li>Participated in scheduling and budgeting meetings with indie producer Christine Vachon</li>
        <li>Prepared comprehensive pitch decks</li>
      </ul>

      <h2>What These Internships Taught Me</h2>
      <p>
        These three competitive internships at top NYC production companies gave me
        experience with real-world business operations, CRM software, data-driven decision-making,
        and high-pressure creative environments. The discipline of managing pipelines in Salesforce
        wasn't so different from managing data flows in a software system.
      </p>

      <div class="related-pages">
        <h3>Related Pages</h3>
        <div class="related-cards">
          ${relatedCard('experience-film', ICONS.camera, 'rc-red', 'Film & Television Career', 'Camera department work and directing across New York and Ireland')}
          ${relatedCard('experience-story-analyst', ICONS.briefcase, 'rc-red', 'Story Analyst — PAGE Awards', 'Analyzing 600+ screenplays with systematic precision')}
          ${relatedCard('education-fordham', ICONS.graduation, 'rc-green', 'Fordham University', 'Where the film career and the love of code both began')}
        </div>
      </div>
    `
  },

  // =============================================
  // 7. EXPERIENCE — COURSES
  // =============================================
  'experience-courses': {
    title: 'Additional Courses & Training',
    meta: 'coverpage.rebeca.dev › experience › courses',
    content: `
      <div class="section-header">
        <div class="section-header-top">
          <div class="section-header-icon sh-red">${ICONS.briefcase}</div>
          <h1>Additional Courses & Training</h1>
        </div>
        <p class="section-meta">coverpage.rebeca.dev › experience › courses</p>
        <div class="section-tags">
          <span class="tag highlight">CS50</span>
          <span class="tag highlight">Code First Girls</span>
          <span class="tag highlight">HB Studio</span>
          <span class="tag">Python</span>
          <span class="tag">Public Speaking</span>
        </div>
      </div>

      <h2>Harvard CS50 — Introduction to Computer Science</h2>
      <p>
        Completed early 2025. This course gave me a strong foundation in computational thinking,
        algorithms, and data structures before starting my Higher Diploma at Maynooth. It confirmed
        that I wanted to pursue software engineering seriously and prepared me for the intensity
        of the program.
      </p>

      <h2>Code First Girls — Introduction to Python</h2>
      <p>
        Completed in 2022 — 3 months of Python fundamentals. This was my first structured
        programming course and an important stepping stone in my
        <a class="cross-link" onclick="showSection('why-tech')">transition into tech</a>.
        Code First Girls specifically supports women entering technology, which aligned with
        my personal mission.
      </p>

      <h2>HB Studio — Theatre Performance</h2>
      <p>
        Sept 2015 – May 2016. End-of-year theatre showcase and Public Speaking module. My
        experience in theatre taught me how to command a room, communicate with confidence,
        and actively listen — skills that directly support my
        <a class="cross-link" onclick="showSection('collaboration')">leadership in software teams</a>.
      </p>

      <div class="related-pages">
        <h3>Related Pages</h3>
        <div class="related-cards">
          ${relatedCard('education-maynooth', ICONS.graduation, 'rc-green', 'Maynooth University', 'Higher Diploma in Software Development — the current chapter')}
          ${relatedCard('skills', ICONS.wrench, 'rc-yellow', 'Technical Skills', 'The full toolkit built across all these learning experiences')}
          ${relatedCard('why-apprenticeship', ICONS.heart, 'rc-blue', 'Why the Apprenticeship', 'Why structured learning environments bring out my best work')}
        </div>
      </div>
    `
  },

  // =============================================
  // 8. PROJECTS — COVERPAGE
  // =============================================
  'projects-coverpage': {
    title: 'CoverPage — This Application',
    meta: 'coverpage.rebeca.dev › projects › coverpage',
    content: `
      <div class="section-header">
        <div class="section-header-top">
          <div class="section-header-icon sh-green">${ICONS.code}</div>
          <h1>CoverPage — This Application</h1>
        </div>
        <p class="section-meta">coverpage.rebeca.dev › projects › coverpage</p>
        <div class="section-tags">
          <span class="tag highlight">Java</span>
          <span class="tag highlight">Spring Boot</span>
          <span class="tag highlight">Gemini AI</span>
          <span class="tag highlight">RAG</span>
          <span class="tag">JavaScript</span>
          <span class="tag">HTML/CSS</span>
          <span class="tag">Firebase</span>
          <span class="tag">Cloud Run</span>
        </div>
      </div>

      <div class="stat-callout">
        <div class="stat">
          <div class="stat-number">1</div>
          <div class="stat-label">Solo Developer</div>
        </div>
        <div class="stat">
          <div class="stat-number">4</div>
          <div class="stat-label">Days to Build</div>
        </div>
        <div class="stat">
          <div class="stat-number">1st</div>
          <div class="stat-label">Deployed App</div>
        </div>
      </div>

      <h2>What It Is</h2>
      <p>
        CoverPage is the application you're using right now. Instead of sending a traditional
        cover letter, I built a full-stack AI-integrated web application where recruiters can
        search questions about my background through a Google-style interface. I named it
        CoverPage because instead of a cover <em>letter</em>, it's a cover <em>web page</em> — a pun I'm quite proud of.
      </p>

      <h2>Why I Built It This Way</h2>
      <p>
        The idea came from the screenwriting concept of <strong>show vs tell</strong>. I wanted
        to <em>show</em> Google I have the technical skills, creativity, and initiative rather
        than just <em>telling</em> them in a PDF. I also thought about the user experience — how
        can I make the recruiter's job as easy and engaging as possible? This is how I approach
        everything: always thinking from the user's perspective first, the same way I used to
        think about how I wanted the audience to feel when making choices in a story.
      </p>

      <h2>Architecture</h2>
      <ul>
        <li><strong>Frontend:</strong> Vanilla JavaScript, HTML, CSS — a Google Search-inspired interface with SPA navigation using the History API</li>
        <li><strong>Backend:</strong> Java with Spring Boot REST API handling search queries</li>
        <li><strong>AI Layer:</strong> RAG pipeline — my personal knowledge base is combined with each question and sent to Gemini AI for contextual answers</li>
        <li><strong>Deployment:</strong> Firebase Hosting (frontend) + Google Cloud Run (backend), with Cloud Build CI/CD triggered on git push</li>
      </ul>

      <h2>Design Decisions</h2>
      <p>
        When designing the dynamic result cards, I chose recognizable SVG icons (person, briefcase,
        code brackets, wrench, heart, envelope) over branded personal initials. The reason:
        they communicate what each section is about <em>instantly</em> — a recruiter can scan
        the results without reading a word. This was a deliberate UX decision: prioritizing
        the user's ability to quickly parse information over personal branding. It mirrors how
        I approach everything — thinking from the user's perspective first.
      </p>

      <h2>What I Learned</h2>
      <p>
        This was my first project built completely solo and my first deployed application. It
        took four days of highly focused work. The hardest part was deployment — I had never
        done it before and learned from scratch. I also learned a lot about debugging and the
        importance of try/catch blocks when dealing with multiple API calls.
      </p>
      <p>
        CoverPage only exists because I had learned about RAG and vectors from
        <a class="cross-link" onclick="showSection('projects-filmoji')">Filmoji</a>, which I
        only learned because I was curious about ML. That chain of learning fueling creativity
        is <a class="cross-link" onclick="showSection('why-apprenticeship')">how I work</a>.
      </p>

      <div class="related-pages">
        <h3>Related Pages</h3>
        <div class="related-cards">
          ${relatedCard('projects-filmoji', ICONS.code, 'rc-green', 'Filmoji — AI Film Recommendations', 'Vector databases, Spring Boot, and the project that sparked the chain')}
          ${relatedCard('skills', ICONS.wrench, 'rc-yellow', 'Technical Skills', 'Java, Spring Boot, Gemini AI, RAG, and the full toolkit')}
          ${relatedCard('why-google', ICONS.heart, 'rc-blue', 'Why Google', 'The company, the values, and the dream')}
        </div>
      </div>
    `
  },

  // =============================================
  // 9. PROJECTS — FILMOJI
  // =============================================
  'projects-filmoji': {
    title: 'Filmoji — AI Film Recommendation Engine',
    meta: 'coverpage.rebeca.dev › projects › filmoji',
    content: `
      <div class="section-header">
        <div class="section-header-top">
          <div class="section-header-icon sh-green">${ICONS.code}</div>
          <h1>Filmoji — AI Film Recommendation Engine</h1>
        </div>
        <p class="section-meta">coverpage.rebeca.dev › projects › filmoji</p>
        <div class="section-tags">
          <span class="tag highlight">Java</span>
          <span class="tag highlight">Spring Boot</span>
          <span class="tag highlight">PostgreSQL</span>
          <span class="tag">pgvector</span>
          <span class="tag">HuggingFace</span>
          <span class="tag">Firebase Auth</span>
          <span class="tag">TMDB API</span>
          <span class="tag">Scrum</span>
        </div>
      </div>

      <div class="stat-callout">
        <div class="stat">
          <div class="stat-number">5</div>
          <div class="stat-label">Team Size</div>
        </div>
        <div class="stat">
          <div class="stat-number">384</div>
          <div class="stat-label">Vector Dimensions</div>
        </div>
        <div class="stat">
          <div class="stat-number">3</div>
          <div class="stat-label">External APIs</div>
        </div>
      </div>

      <h2>What It Is</h2>
      <p>
        Filmoji is an AI-powered film recommendation engine built as a group project at
        Maynooth University. Users input emojis representing their current mood, and the app
        recommends films using <strong>vector embeddings</strong> and <strong>cosine similarity
        search</strong>. I came up with both the app concept and the name.
      </p>

      <h2>My Role</h2>
      <p>
        In a team of 5, my contribution was primarily <strong>backend architecture</strong>:
      </p>
      <ul>
        <li>The <strong>vector database</strong> using PostgreSQL with pgvector extension and ivfflat indexing for fast cosine similarity search</li>
        <li>The <strong>creative onboarding flow</strong> — a Buzzfeed-style personality quiz and Tinder-style film swipe UI to cold-start a 384-dimensional user preference vector from zero data</li>
        <li>The <strong>Spring Boot REST API</strong> connecting all layers of the application</li>
        <li>An <strong>online learning system</strong> using weighted vector arithmetic that updates user preferences on every like/dislike interaction</li>
      </ul>

      <h2>How the Idea Was Born</h2>
      <p>
        I wanted a project that would let me explore <strong>machine learning and AI</strong> —
        a field I'm genuinely curious about. Since I have a background in film and it's something
        everyone loves, I proposed a web app that recommends films based on emoji input. Everyone
        loved the idea — it was catchy and sticky.
      </p>

      <h2>Confronting Ambiguity</h2>
      <p>
        One of the most valuable moments in this project was discovering that we didn't have
        enough user data for true machine learning. Many teams would either abandon the project
        or pretend it was ML anyway. I did something different: I <strong>reframed the goal</strong>
        and built an online learning system using weighted vector arithmetic instead. This moment
        of confronting a wrong assumption, updating the plan, and continuing is how real software
        development works.
      </p>

      <h2>What I Discovered</h2>
      <p>
        Through this project I discovered that I genuinely enjoy <strong>backend problem-solving</strong>
        more than frontend design — which surprised me given my visual and creative background,
        but it confirmed my authentic engagement with engineering. The most rewarding parts were
        figuring out the best way to create the database, connect everything together, and seeing
        a feature come alive from nothing.
      </p>
      <p>
        I also brought my
        <a class="cross-link" onclick="showSection('collaboration')">film collaboration techniques</a>
        to the team — naturally taking charge of our Scrum sessions when no one else stepped up.
      </p>

      <div class="related-pages">
        <h3>Related Pages</h3>
        <div class="related-cards">
          ${relatedCard('projects-coverpage', ICONS.code, 'rc-green', 'CoverPage — This Application', 'The solo project that built on everything Filmoji taught me')}
          ${relatedCard('collaboration', ICONS.people, 'rc-blue', 'Collaboration & Leadership', 'How I led Scrum sessions and navigated team dynamics')}
          ${relatedCard('looking-ahead', ICONS.lightbulb, 'rc-blue', 'Looking Ahead', 'Recommendation algorithms, AI, and where I want to go next')}
        </div>
      </div>
    `
  },

  // =============================================
  // 10. PROJECTS — FLOWER POWER
  // =============================================
  'projects-flowerpower': {
    title: 'Flower Power — Sustainability Tracker',
    meta: 'coverpage.rebeca.dev › projects › flowerpower',
    content: `
      <div class="section-header">
        <div class="section-header-top">
          <div class="section-header-icon sh-green">${ICONS.code}</div>
          <h1>Flower Power — Gamified Sustainability Tracker</h1>
        </div>
        <p class="section-meta">coverpage.rebeca.dev › projects › flowerpower</p>
        <div class="section-tags">
          <span class="tag highlight">React</span>
          <span class="tag highlight">JavaScript</span>
          <span class="tag highlight">Firebase</span>
          <span class="tag">HTML/CSS</span>
          <span class="tag">Behavioral Design</span>
          <span class="tag">3-Person Team</span>
        </div>
      </div>

      <h2>What It Is</h2>
      <p>
        Flower Power is a gamified sustainability tracker app built as a group project at
        Maynooth University. It uses React, JavaScript, HTML, and CSS, integrating behavioral
        design principles to encourage eco-friendly habits. Users track their sustainable
        actions and watch their virtual garden grow.
      </p>

      <h2>My Role</h2>
      <p>
        In a team of 3, I was responsible for:
      </p>
      <ul>
        <li><strong>Frontend design</strong> — creating the visual interface and user experience</li>
        <li><strong>Firebase integration and authentication</strong> — which I learned and implemented entirely on my own</li>
        <li><strong>Backend-to-frontend integration</strong> — connecting the data layer to the UI</li>
      </ul>

      <h2>What It Meant to Me</h2>
      <p>
        A simpler project compared to <a class="cross-link" onclick="showSection('projects-filmoji')">Filmoji</a>,
        but an important one. Flower Power built the foundations of full-cycle software engineering
        for me — from concept to design to implementation to deployment. It was where I first
        experienced the satisfaction of seeing a feature I built come alive in a real application.
      </p>

      <div class="related-pages">
        <h3>Related Pages</h3>
        <div class="related-cards">
          ${relatedCard('projects-filmoji', ICONS.code, 'rc-green', 'Filmoji — AI Film Recommendations', 'The more complex project that followed')}
          ${relatedCard('projects-coverpage', ICONS.code, 'rc-green', 'CoverPage — This Application', 'My first solo full-stack project')}
          ${relatedCard('skills', ICONS.wrench, 'rc-yellow', 'Technical Skills', 'React, Firebase, and the growing toolkit')}
        </div>
      </div>
    `
  },

  // =============================================
  // 11. SKILLS
  // =============================================
  skills: {
    title: 'Technical Skills',
    meta: 'coverpage.rebeca.dev › skills',
    content: `
      <div class="section-header">
        <div class="section-header-top">
          <div class="section-header-icon sh-yellow">${ICONS.wrench}</div>
          <h1>Technical Skills</h1>
        </div>
        <p class="section-meta">coverpage.rebeca.dev › skills</p>
        <div class="section-tags">
          <span class="tag highlight">Java</span>
          <span class="tag highlight">JavaScript</span>
          <span class="tag highlight">Spring Boot</span>
          <span class="tag highlight">SQL</span>
          <span class="tag">Gemini AI</span>
          <span class="tag">Firebase</span>
          <span class="tag">Docker</span>
          <span class="tag">GCP</span>
        </div>
      </div>

      <h2>Languages</h2>
      <ul>
        <li><strong>Java</strong> — my strongest language, used across Filmoji and CoverPage</li>
        <li><strong>JavaScript (ES6+)</strong> — frontend development and full-stack projects</li>
        <li><strong>HTML5 & CSS3</strong> — responsive interfaces and Google-inspired design</li>
        <li><strong>SQL</strong> — database design, queries, and data management</li>
      </ul>

      <h2>AI & Data</h2>
      <ul>
        <li><strong>Gemini AI</strong> — API integration and response engineering</li>
        <li><strong>RAG</strong> — Retrieval-Augmented Generation architecture</li>
        <li><strong>Prompt Engineering</strong> — designing effective AI prompts for structured output</li>
        <li><strong>JSON</strong> — data interchange and API response parsing</li>
      </ul>

      <h2>Technical Systems</h2>
      <ul>
        <li><strong>RESTful APIs</strong> — design, implementation, and consumption</li>
        <li><strong>CORS Configuration</strong> — cross-origin resource sharing setup</li>
        <li><strong>Secret Management</strong> — secure API key handling</li>
        <li><strong>CRUD Operations</strong> — full data lifecycle management</li>
      </ul>

      <h2>Cloud & Tools</h2>
      <ul>
        <li><strong>Google Cloud Platform</strong> — Cloud Run, Cloud Build, Secret Manager</li>
        <li><strong>Firebase</strong> — Hosting, Authentication, Firestore</li>
        <li><strong>Git</strong> — version control and collaborative workflows</li>
        <li><strong>Docker</strong> — containerization for deployment</li>
        <li><strong>Supabase</strong> — open-source backend services</li>
      </ul>

      <h2>Soft Skills</h2>
      <ul>
        <li><strong>Creative Problem-Solving</strong> — finding unconventional solutions by combining diverse tools</li>
        <li><strong>Cross-functional Collaboration</strong> — working across disciplines with empathy and clarity</li>
        <li><strong>Technical Storytelling</strong> — explaining complex concepts simply and compellingly</li>
      </ul>

      <h2>My Toolkit Philosophy</h2>
      <p>
        My philosophy is: keep learning, go deep and wide, have as many tools in your toolbelt
        as possible. The more tools I have, the more chances for creativity to spark when
        combining them to solve problems.
        <a class="cross-link" onclick="showSection('projects-coverpage')">CoverPage</a> only exists
        because I learned about RAG and vectors from
        <a class="cross-link" onclick="showSection('projects-filmoji')">Filmoji</a>, which I only
        learned because I was curious about ML. That chain of learning fueling creativity is
        <a class="cross-link" onclick="showSection('why-apprenticeship')">exactly why the apprenticeship excites me</a>.
      </p>

      <div class="related-pages">
        <h3>Related Pages</h3>
        <div class="related-cards">
          ${relatedCard('projects-coverpage', ICONS.code, 'rc-green', 'CoverPage — This Application', 'Where Java, Spring Boot, RAG, and GCP come together')}
          ${relatedCard('projects-filmoji', ICONS.code, 'rc-green', 'Filmoji — AI Film Recommendations', 'pgvector, HuggingFace, and backend architecture')}
          ${relatedCard('looking-ahead', ICONS.lightbulb, 'rc-blue', 'Looking Ahead', 'The technologies I am excited to explore next')}
        </div>
      </div>
    `
  },

  // =============================================
  // 12. EDUCATION — MAYNOOTH
  // =============================================
  'education-maynooth': {
    title: 'Maynooth University',
    meta: 'coverpage.rebeca.dev › education › maynooth',
    content: `
      <div class="section-header">
        <div class="section-header-top">
          <div class="section-header-icon sh-green">${ICONS.graduation}</div>
          <h1>Maynooth University — Higher Diploma in Software Development</h1>
        </div>
        <p class="section-meta">coverpage.rebeca.dev › education › maynooth</p>
        <div class="section-tags">
          <span class="tag highlight">HDip Software Development</span>
          <span class="tag highlight">1.1 Honours (Projected)</span>
          <span class="tag">Sept 2025 – Sept 2026</span>
          <span class="tag">Equivalent to 4-Year CS Degree</span>
        </div>
      </div>

      <div class="stat-callout">
        <div class="stat">
          <div class="stat-number">1.1</div>
          <div class="stat-label">Projected Grade</div>
        </div>
        <div class="stat">
          <div class="stat-number">94.5%</div>
          <div class="stat-label">Java Bootcamp</div>
        </div>
        <div class="stat">
          <div class="stat-number">10</div>
          <div class="stat-label">Core Modules</div>
        </div>
      </div>

      <h2>The Program</h2>
      <p>
        I'm pursuing a Higher Diploma in Software Development, which is equivalent to a 4-year
        undergraduate Computer Science degree. Lectures end in May 2026, with final exams and
        official graduation in September 2026.
      </p>

      <h2>Modules</h2>
      <ul>
        <li>Mobile App Development</li>
        <li>Databases</li>
        <li>Computer Systems</li>
        <li>Algorithms and Data Structures 1 & 2</li>
        <li>Software Testing</li>
        <li>Object-Oriented Programming</li>
        <li>Software Project</li>
        <li>Web Information Processing</li>
        <li>Work Placement Preparation</li>
      </ul>

      <h2>The Java Bootcamp</h2>
      <p>
        The program started with a three-week intensive Java programming bootcamp covering
        first-year undergraduate CS material. I achieved a final grade of <strong>94.5%</strong>.
        The bootcamp is one of my favorite parts of the program because it was structured
        learning with lectures in the morning and labs in the afternoon to apply the knowledge
        — exactly the format the first year of the
        <a class="cross-link" onclick="showSection('why-apprenticeship')">Google apprenticeship ICT learning environment</a>
        will follow.
      </p>

      <h2>Campus Life</h2>
      <p>
        I'm involved in the Women in STEM society, the Tennis Society, and the LGBTQ+ society
        at Maynooth. Being part of Women in STEM is especially meaningful to me given
        <a class="cross-link" onclick="showSection('about')">where I come from</a> and my mission
        to encourage girls worldwide to pursue tech careers.
      </p>

      <div class="related-pages">
        <h3>Related Pages</h3>
        <div class="related-cards">
          ${relatedCard('education-fordham', ICONS.graduation, 'rc-green', 'Fordham University', 'Where the love of code began with C++')}
          ${relatedCard('why-apprenticeship', ICONS.heart, 'rc-blue', 'Why the Apprenticeship', 'How structured learning brings out my best work')}
          ${relatedCard('projects-filmoji', ICONS.code, 'rc-green', 'Filmoji', 'The group project where I discovered backend engineering')}
        </div>
      </div>
    `
  },

  // =============================================
  // 13. EDUCATION — FORDHAM
  // =============================================
  'education-fordham': {
    title: 'Fordham University',
    meta: 'coverpage.rebeca.dev › education › fordham',
    content: `
      <div class="section-header">
        <div class="section-header-top">
          <div class="section-header-icon sh-green">${ICONS.graduation}</div>
          <h1>Fordham University — BA in Film & Television Production</h1>
        </div>
        <p class="section-meta">coverpage.rebeca.dev › education › fordham</p>
        <div class="section-tags">
          <span class="tag highlight">BA Film & TV</span>
          <span class="tag highlight">New York City</span>
          <span class="tag">GPA 3.2/4.0</span>
          <span class="tag">Sept 2016 – May 2020</span>
        </div>
      </div>

      <h2>The Degree</h2>
      <p>
        I earned a Bachelor of Arts in Film and Television Production from Fordham University
        in New York City (GPA: 3.2/4.0, equivalent to 1.1 Honours). The program gave me a
        rigorous creative foundation, 3 competitive internships at
        <a class="cross-link" onclick="showSection('experience-internships')">top independent production companies</a>,
        and a crowdfunded thesis project.
      </p>

      <h2>The C++ Moment</h2>
      <p>
        When choosing a course to fulfill my mathematics requirement, instead of taking the
        easy route with Algebra I like most peers, I chose <strong>Introduction to C++</strong>
        — notoriously one of the hardest programming languages to learn. I loved it. I went to
        Professor Kadri's office hours constantly, bombarding him with questions until the logic
        clicked. It felt like a whole new world opened up to me.
      </p>
      <p>
        Looking back, that moment was the earliest sign that I belonged in engineering. I just
        didn't know it yet.
      </p>

      <h2>Thesis — The Art Thief</h2>
      <p>
        My senior thesis was <strong>The Art Thief</strong> — a crowdfunded irreverent De Stijl-style
        short film about the wild world of contemporary art. I wrote, produced, directed, budgeted,
        cast, drafted contracts, scouted locations, and requested permits. It later won
        <a class="cross-link" onclick="showSection('awards')">Best Film at the West London Film Festival</a>.
      </p>

      <div class="related-pages">
        <h3>Related Pages</h3>
        <div class="related-cards">
          ${relatedCard('education-sorbonne', ICONS.graduation, 'rc-green', 'Sorbonne University', 'Semester abroad directing in French')}
          ${relatedCard('education-maynooth', ICONS.graduation, 'rc-green', 'Maynooth University', 'The current chapter in software development')}
          ${relatedCard('experience-film', ICONS.camera, 'rc-red', 'Film & Television Career', 'The career that grew from this foundation')}
        </div>
      </div>
    `
  },

  // =============================================
  // 14. EDUCATION — SORBONNE
  // =============================================
  'education-sorbonne': {
    title: 'Sorbonne University',
    meta: 'coverpage.rebeca.dev › education › sorbonne',
    content: `
      <div class="section-header">
        <div class="section-header-top">
          <div class="section-header-icon sh-green">${ICONS.graduation}</div>
          <h1>Sorbonne University — Semester Abroad</h1>
        </div>
        <p class="section-meta">coverpage.rebeca.dev › education › sorbonne</p>
        <div class="section-tags">
          <span class="tag highlight">Paris, France</span>
          <span class="tag highlight">Film & TV Production</span>
          <span class="tag">GPA 3.25/4.0</span>
          <span class="tag">Jan – May 2019</span>
        </div>
      </div>

      <h2>The Experience</h2>
      <p>
        I spent a semester at the Sorbonne University in Paris studying Film and Television
        Production (GPA: 3.25/4.0). The highlight was directing a team of 6 film students
        <strong>entirely in French</strong>, navigating cultural nuances within a global team.
        Our group achieved the highest grade in the module: <strong>A+</strong>.
      </p>

      <h2>What It Taught Me</h2>
      <p>
        Leading a creative team in a second language forced me to communicate with absolute
        clarity — there was no room for ambiguity. I learned to adapt my communication style
        to different cultural contexts, a skill I now bring to
        <a class="cross-link" onclick="showSection('collaboration')">cross-functional collaboration</a>
        in software teams.
      </p>
      <p>
        Having lived and studied in Brazil, France, Ireland, and the United States, I bring a
        <a class="cross-link" onclick="showSection('personal')">global mindset</a> and cultural
        fluency that enriches every team I join.
      </p>

      <div class="related-pages">
        <h3>Related Pages</h3>
        <div class="related-cards">
          ${relatedCard('education-fordham', ICONS.graduation, 'rc-green', 'Fordham University', 'The home institution for this study abroad')}
          ${relatedCard('collaboration', ICONS.people, 'rc-blue', 'Collaboration & Leadership', 'Cross-cultural teamwork and communication')}
          ${relatedCard('personal', ICONS.person, 'rc-blue', 'Personal Qualities', 'Global mindset shaped by four countries')}
        </div>
      </div>
    `
  },

  // =============================================
  // 15. WHY GOOGLE
  // =============================================
  'why-google': {
    title: 'Why Google',
    meta: 'coverpage.rebeca.dev › why-google',
    content: `
      <div class="section-header">
        <div class="section-header-top">
          <div class="section-header-icon sh-blue">${ICONS.heart}</div>
          <h1>Why Google</h1>
        </div>
        <p class="section-meta">coverpage.rebeca.dev › why-google</p>
        <div class="section-tags">
          <span class="tag highlight">Values Alignment</span>
          <span class="tag highlight">User Experience</span>
          <span class="tag highlight">AI Innovation</span>
          <span class="tag">Diversity</span>
          <span class="tag">Dream Company</span>
        </div>
      </div>

      <h2>Values That Resonate</h2>
      <p>
        Google has always seemed like a company that values its people — that takes care of them,
        is transparent, and values creativity and innovation. Google understands that progress
        comes from encouraging employees to think differently and try new things without heavily
        punishing mistakes. I believe when people are happy they produce their best work, and
        Google embodies that philosophy.
      </p>

      <h2>User Experience Focus</h2>
      <p>
        Google's focus on user experience aligns deeply with my approach — I always think from
        the user's perspective first, how technology can help and improve lives. That was my
        starting point as a filmmaker and storyteller, and now it's my starting point as an
        engineer. <a class="cross-link" onclick="showSection('projects-coverpage')">CoverPage itself</a>
        is proof of that thinking.
      </p>

      <h2>AI Innovation</h2>
      <p>
        I'm excited by Google's approach to AI innovation — investing in reasoning models
        and new approaches rather than just scaling existing ones. That kind of forward-thinking
        experimentation is where I want to be. It connects directly to
        <a class="cross-link" onclick="showSection('looking-ahead')">what excites me about the future</a>
        of technology.
      </p>

      <h2>What Google Means to Me Personally</h2>
      <p>
        It's a dream. I cannot believe the girl from rural Brazil who was not encouraged to
        pursue STEM, who had to fight to get here, now has the privilege and honor to apply
        for a position at this company. It would mean that it's possible for all the girls in
        STEM from the middle of nowhere in Brazil — they can do it too. Representation matters,
        and I want to lead by example.
      </p>

      <div class="related-pages">
        <h3>Related Pages</h3>
        <div class="related-cards">
          ${relatedCard('why-apprenticeship', ICONS.heart, 'rc-blue', 'Why the Apprenticeship', 'Structured learning, toolkit philosophy, and the ICT format')}
          ${relatedCard('why-tech', ICONS.heart, 'rc-blue', 'Why Tech', 'The journey from film to engineering')}
          ${relatedCard('about', ICONS.person, 'rc-blue', 'About Rebeca', 'The full story behind the application')}
        </div>
      </div>
    `
  },

  // =============================================
  // 16. WHY APPRENTICESHIP
  // =============================================
  'why-apprenticeship': {
    title: 'Why the Apprenticeship',
    meta: 'coverpage.rebeca.dev › why-apprenticeship',
    content: `
      <div class="section-header">
        <div class="section-header-top">
          <div class="section-header-icon sh-blue">${ICONS.heart}</div>
          <h1>Why the Apprenticeship</h1>
        </div>
        <p class="section-meta">coverpage.rebeca.dev › why-apprenticeship</p>
        <div class="section-tags">
          <span class="tag highlight">Structured Learning</span>
          <span class="tag highlight">ICT Environment</span>
          <span class="tag highlight">Mentorship</span>
          <span class="tag">World-Class Training</span>
          <span class="tag">Toolkit Philosophy</span>
        </div>
      </div>

      <h2>I Want Structured Learning</h2>
      <p>
        The apprenticeship's first year in the ICT learning environment is exactly what I'm
        looking for — lectures, labs, projects, group work, mentorship. This format mirrors
        the Java bootcamp at <a class="cross-link" onclick="showSection('education-maynooth')">Maynooth</a>,
        which was one of my favorite learning experiences (94.5% grade). I thrive in structured
        learning environments with mentors and professors. I also thrive in group project work
        because of my
        <a class="cross-link" onclick="showSection('collaboration')">collaborative film background</a>.
      </p>

      <h2>Solid Foundations</h2>
      <p>
        I care deeply about building solid foundations and don't want to pick up bad habits.
        Google has a strong reputation for world-class training, and I trust that their program
        would encourage creativity, innovation, and excellence — values I share.
      </p>

      <h2>The Toolkit Philosophy</h2>
      <p>
        My philosophy is: <strong>keep learning, go deep and wide, have as many tools in your
        toolbelt as possible</strong>. The more tools I have, the more chances for creativity
        to spark when combining them to solve problems.
      </p>
      <p>
        <a class="cross-link" onclick="showSection('projects-coverpage')">CoverPage</a> only exists
        because I learned about RAG and vectors from
        <a class="cross-link" onclick="showSection('projects-filmoji')">Filmoji</a>, which I only
        learned because I was curious about ML. That chain of learning fueling creativity is
        how I work, and the apprenticeship would supercharge that process.
      </p>

      <div class="related-pages">
        <h3>Related Pages</h3>
        <div class="related-cards">
          ${relatedCard('why-google', ICONS.heart, 'rc-blue', 'Why Google', 'The company, the values, and the dream')}
          ${relatedCard('education-maynooth', ICONS.graduation, 'rc-green', 'Maynooth University', 'The Java bootcamp that mirrored the ICT format')}
          ${relatedCard('skills', ICONS.wrench, 'rc-yellow', 'Technical Skills', 'The toolkit built so far — and growing')}
        </div>
      </div>
    `
  },

  // =============================================
  // 17. WHY TECH
  // =============================================
  'why-tech': {
    title: 'Why Tech — The Transition Story',
    meta: 'coverpage.rebeca.dev › why-tech',
    content: `
      <div class="section-header">
        <div class="section-header-top">
          <div class="section-header-icon sh-blue">${ICONS.heart}</div>
          <h1>Why Tech — The Transition Story</h1>
        </div>
        <p class="section-meta">coverpage.rebeca.dev › why-tech</p>
        <div class="section-tags">
          <span class="tag highlight">Career Changer</span>
          <span class="tag highlight">Film to Engineering</span>
          <span class="tag">Curiosity-Driven</span>
          <span class="tag">Lifelong Learner</span>
        </div>
      </div>

      <h2>It Was Always There</h2>
      <p>
        Even growing up in rural Brazil, where I was never encouraged to pursue STEM, I found
        myself messing around with HTML while curating my Tumblr feed and teaching myself code
        to build simple video games. The curiosity was always there — it just didn't have
        a name yet.
      </p>

      <h2>The C++ Spark</h2>
      <p>
        At <a class="cross-link" onclick="showSection('education-fordham')">Fordham University</a>,
        when everyone else took Algebra I for their math requirement, I chose Introduction to
        C++. I loved it. Professor Kadri's office hours became my favorite part of the week.
        It felt like a whole new world opened up. Looking back, that was the earliest sign
        I belonged in engineering.
      </p>

      <h2>The Vodafone Catalyst</h2>
      <p>
        At <a class="cross-link" onclick="showSection('experience-vodafone')">Vodafone</a>, I was
        chosen to lead a digital transformation initiative because I'd been so vocal about my
        passion for technology. Implementing new software, migrating data, training the team —
        that was my first real taste of solving problems with technology, and it confirmed
        everything I'd been feeling.
      </p>

      <h2>The Natural Next Step</h2>
      <p>
        The transition from film to engineering wasn't random. The problem-solving, systems
        thinking, and creative approach I loved most in filmmaking are the same skills that
        drive great software engineering. Film taught me to see the big picture and the details
        simultaneously. Engineering lets me apply that to building things that help people.
      </p>
      <p>
        I want to be an example for girls around the world — even in the middle of nowhere,
        Brazil — that they very much belong in STEM and can help make the world a better place
        through technology.
      </p>

      <div class="related-pages">
        <h3>Related Pages</h3>
        <div class="related-cards">
          ${relatedCard('about', ICONS.person, 'rc-blue', 'About Rebeca', 'The full story from rural Brazil to Dublin')}
          ${relatedCard('why-google', ICONS.heart, 'rc-blue', 'Why Google', 'Why Google is where this journey leads')}
          ${relatedCard('experience-film', ICONS.camera, 'rc-red', 'Film & Television Career', 'The creative career that shaped my engineering mindset')}
        </div>
      </div>
    `
  },

  // =============================================
  // 18. COLLABORATION
  // =============================================
  collaboration: {
    title: 'Collaboration & Leadership',
    meta: 'coverpage.rebeca.dev › collaboration',
    content: `
      <div class="section-header">
        <div class="section-header-top">
          <div class="section-header-icon sh-blue">${ICONS.people}</div>
          <h1>Collaboration & Leadership Style</h1>
        </div>
        <p class="section-meta">coverpage.rebeca.dev › collaboration</p>
        <div class="section-tags">
          <span class="tag highlight">Scrum</span>
          <span class="tag highlight">Writers Room Method</span>
          <span class="tag">Empathy</span>
          <span class="tag">Systems Thinking</span>
          <span class="tag">Public Speaking</span>
        </div>
      </div>

      <h2>From Film Sets to Software Teams</h2>
      <p>
        My background in filmmaking has directly prepared me for agile software development.
        In TV screenwriting, we workshop ideas collaboratively in
        <a class="cross-link" onclick="showSection('experience-screenwriting')">writers rooms</a>.
        Writing code in a team is also workshopping ideas — the parallels are striking.
      </p>

      <h2>My Collaboration Framework</h2>
      <p>
        I bring structured collaboration techniques from screenwriting:
      </p>
      <ul>
        <li><strong>Everyone gets a turn to speak</strong> — no voice goes unheard</li>
        <li><strong>Feedback leads with what's working and why</strong> — build on strengths first</li>
        <li><strong>Constructive feedback requires reasoning backed by evidence</strong> — not personal preference</li>
        <li><strong>You always provide a potential solution</strong> — critique without a path forward isn't helpful</li>
      </ul>
      <p>
        This framework keeps morale high, people feel heard and valued, and critique stays professional.
      </p>

      <h2>Leading Scrum at Filmoji</h2>
      <p>
        When no one stepped up to lead our
        <a class="cross-link" onclick="showSection('projects-filmoji')">Filmoji</a> group's Scrum
        sessions, I naturally took charge — drawing on my experience directing film crews.
        My theatre background and client-facing experience at
        <a class="cross-link" onclick="showSection('experience-vodafone')">Vodafone</a> prepared
        me to feel comfortable leading sessions and public speaking — a quality not all CS students
        have practiced as much.
      </p>

      <h2>Empathy in Action</h2>
      <p>
        When my teammate Eric built a UI that looked great but didn't match my vision, I didn't
        blame him — I could see exactly how he interpreted what I said. My job became to clarify
        the vision. That's empathy and systems thinking in action. As a director, my job is to
        clarify objectives so everyone is on the same page, then trust my collaborators to bring
        their expertise and creative interpretation to the execution.
      </p>
      <p>
        My goal as a leader has always been to make every team member feel heard and valued,
        creating a safe and inspiring environment so people can produce their best work.
      </p>

      <div class="related-pages">
        <h3>Related Pages</h3>
        <div class="related-cards">
          ${relatedCard('experience-screenwriting', ICONS.edit, 'rc-red', 'Screenwriting Experience', 'Where the writers room method was born')}
          ${relatedCard('projects-filmoji', ICONS.code, 'rc-green', 'Filmoji', 'The project where I led Scrum sessions')}
          ${relatedCard('personal', ICONS.person, 'rc-blue', 'Personal Qualities', 'Curiosity, empathy, and a people-centric approach')}
        </div>
      </div>
    `
  },

  // =============================================
  // 19. AWARDS
  // =============================================
  awards: {
    title: 'Awards & Recognition',
    meta: 'coverpage.rebeca.dev › awards',
    content: `
      <div class="section-header">
        <div class="section-header-top">
          <div class="section-header-icon sh-yellow">${ICONS.trophy}</div>
          <h1>Awards & Recognition</h1>
        </div>
        <p class="section-meta">coverpage.rebeca.dev › awards</p>
        <div class="section-tags">
          <span class="tag highlight">Best Film</span>
          <span class="tag highlight">Best Short Play</span>
          <span class="tag">Film Festivals</span>
          <span class="tag">Theatre</span>
        </div>
      </div>

      <h2>Film</h2>
      <ul>
        <li><strong>The Art Thief</strong> — Best Film, West London Film Festival (2024). A crowdfunded De Stijl-style short film I wrote, produced, and directed at <a class="cross-link" onclick="showSection('education-fordham')">Fordham University</a></li>
        <li><strong>Crescent</strong> — Best Film, NY Short Film Festival (2017). A short film where I served as First Assistant Camera</li>
      </ul>

      <h2>Theatre</h2>
      <ul>
        <li><strong>Trapped Language of Love</strong> — Best Short Play, NY Theatre Summerfest (2017). A short play I directed</li>
      </ul>

      <h2>Academic</h2>
      <ul>
        <li><strong>94.5%</strong> — Java Programming Bootcamp, <a class="cross-link" onclick="showSection('education-maynooth')">Maynooth University</a> (2025)</li>
        <li><strong>A+</strong> — Film production module, <a class="cross-link" onclick="showSection('education-sorbonne')">Sorbonne University</a> (highest grade in the class)</li>
      </ul>

      <div class="related-pages">
        <h3>Related Pages</h3>
        <div class="related-cards">
          ${relatedCard('experience-film', ICONS.camera, 'rc-red', 'Film & Television Career', 'The productions behind the awards')}
          ${relatedCard('education-fordham', ICONS.graduation, 'rc-green', 'Fordham University', 'Where The Art Thief was born')}
          ${relatedCard('education-maynooth', ICONS.graduation, 'rc-green', 'Maynooth University', 'Where the 94.5% Java grade happened')}
        </div>
      </div>
    `
  },

  // =============================================
  // 20. PERSONAL
  // =============================================
  personal: {
    title: 'Personal Qualities',
    meta: 'coverpage.rebeca.dev › personal',
    content: `
      <div class="section-header">
        <div class="section-header-top">
          <div class="section-header-icon sh-blue">${ICONS.person}</div>
          <h1>Personal Qualities</h1>
        </div>
        <p class="section-meta">coverpage.rebeca.dev › personal</p>
        <div class="section-tags">
          <span class="tag highlight">Curiosity</span>
          <span class="tag highlight">Global Mindset</span>
          <span class="tag">Discipline</span>
          <span class="tag">Empathy</span>
          <span class="tag">Efficiency</span>
        </div>
      </div>

      <h2>How I Work</h2>
      <p>
        I'm a highly curious person who loves understanding the <em>why</em> of things. I learn
        by doing — trial and error. I don't shy away from challenges. I value efficiency and
        love finding ways to improve upon systems. The joy of coding for me stems from breaking
        down complex concepts into their smallest parts and figuring out the most efficient way
        to communicate them.
      </p>

      <h2>Global Mindset</h2>
      <p>
        Having lived and studied in <strong>Brazil, France, Ireland, and the United States</strong>,
        I bring cultural fluency and adaptability to every team. I've directed film crews in French at the
        <a class="cross-link" onclick="showSection('education-sorbonne')">Sorbonne</a>, managed
        executive accounts at <a class="cross-link" onclick="showSection('experience-vodafone')">Vodafone</a>,
        and collaborated with engineers at
        <a class="cross-link" onclick="showSection('education-maynooth')">Maynooth</a>.
        Different contexts, same core skill: connecting with people and communicating clearly.
      </p>

      <h2>Discipline & Growth</h2>
      <p>
        I practice CrossFit consistently, which has taught me discipline, mental endurance, and
        the satisfaction of tracking progress. The mindset of showing up every day, doing the
        work, and trusting the process applies equally to fitness and engineering.
      </p>

      <h2>Values</h2>
      <p>
        I believe in innovation through kindness, with a people-centric approach. I'm a member
        of the Women in STEM and LGBTQ+ societies at Maynooth. I want to be an example for
        girls around the world that they belong in STEM and can help make the world a better
        place through technology.
      </p>

      <div class="related-pages">
        <h3>Related Pages</h3>
        <div class="related-cards">
          ${relatedCard('about', ICONS.person, 'rc-blue', 'About Rebeca', 'The full story from rural Brazil to Dublin')}
          ${relatedCard('collaboration', ICONS.people, 'rc-blue', 'Collaboration & Leadership', 'Empathy, communication, and team dynamics')}
          ${relatedCard('interests', ICONS.star, 'rc-green', 'Interests', 'What I enjoy outside of engineering')}
        </div>
      </div>
    `
  },

  // =============================================
  // 21. INTERESTS
  // =============================================
  interests: {
    title: 'Interests',
    meta: 'coverpage.rebeca.dev › interests',
    content: `
      <div class="section-header">
        <div class="section-header-top">
          <div class="section-header-icon sh-green">${ICONS.star}</div>
          <h1>Interests</h1>
        </div>
        <p class="section-meta">coverpage.rebeca.dev › interests</p>
        <div class="section-tags">
          <span class="tag highlight">CrossFit</span>
          <span class="tag highlight">Film</span>
          <span class="tag highlight">Tennis</span>
          <span class="tag">Women in STEM</span>
          <span class="tag">LGBTQ+</span>
          <span class="tag">Travel</span>
        </div>
      </div>

      <h2>Fitness</h2>
      <p>
        I practice CrossFit consistently. It's taught me discipline, mental endurance, and the
        satisfaction of tracking measurable progress — a mindset that translates directly into
        how I approach engineering problems.
      </p>

      <h2>Film & Storytelling</h2>
      <p>
        Even as I transition into engineering, film remains a core part of who I am. I still
        love watching, analyzing, and discussing cinema. My
        <a class="cross-link" onclick="showSection('experience-film')">film background</a> continues
        to influence how I think about user experience, narrative structure, and creative
        problem-solving in code.
      </p>

      <h2>Campus Life at Maynooth</h2>
      <p>
        I'm active in three societies at
        <a class="cross-link" onclick="showSection('education-maynooth')">Maynooth University</a>:
      </p>
      <ul>
        <li><strong>Women in STEM</strong> — advocating for representation and supporting women in technology</li>
        <li><strong>Tennis Society</strong> — staying active and social outside the classroom</li>
        <li><strong>LGBTQ+ Society</strong> — community, belonging, and visibility</li>
      </ul>

      <h2>Travel & Languages</h2>
      <p>
        Having lived in four countries, I have a deep appreciation for cultural exchange. I speak
        Portuguese (native), English (fluent), and French (conversational). Each country has
        shaped my perspective and made me more adaptable.
      </p>

      <div class="related-pages">
        <h3>Related Pages</h3>
        <div class="related-cards">
          ${relatedCard('personal', ICONS.person, 'rc-blue', 'Personal Qualities', 'Curiosity, discipline, and a global mindset')}
          ${relatedCard('experience-film', ICONS.camera, 'rc-red', 'Film & Television Career', 'The creative career that shaped my thinking')}
          ${relatedCard('looking-ahead', ICONS.lightbulb, 'rc-blue', 'Looking Ahead', 'Technologies and ideas I am excited about')}
        </div>
      </div>
    `
  },

  // =============================================
  // 22. LOOKING AHEAD
  // =============================================
  'looking-ahead': {
    title: 'Looking Ahead',
    meta: 'coverpage.rebeca.dev › looking-ahead',
    content: `
      <div class="section-header">
        <div class="section-header-top">
          <div class="section-header-icon sh-blue">${ICONS.lightbulb}</div>
          <h1>Looking Ahead</h1>
        </div>
        <p class="section-meta">coverpage.rebeca.dev › looking-ahead</p>
        <div class="section-tags">
          <span class="tag highlight">Machine Learning</span>
          <span class="tag highlight">AI</span>
          <span class="tag">Recommendation Algorithms</span>
          <span class="tag">Image Recognition</span>
          <span class="tag">Deep Neural Networks</span>
        </div>
      </div>

      <h2>What Excites Me</h2>
      <p>
        The field I'm most excited to dive deeper into is <strong>machine learning and AI</strong>.
        My curiosity started with
        <a class="cross-link" onclick="showSection('projects-filmoji')">Filmoji</a>, where I built
        a recommendation engine using vector embeddings and cosine similarity. That project
        opened a door I haven't been able to close — and I don't want to.
      </p>

      <h2>Recommendation Algorithms</h2>
      <p>
        I'm fascinated by how platforms decide what to show you next. The intersection of user
        behavior, collaborative filtering, and content-based approaches creates systems that
        feel almost magical when they work well. Building Filmoji's recommendation engine from
        scratch gave me a taste of this world, and I want to go deeper.
      </p>

      <h2>Image Recognition & Deep Neural Networks</h2>
      <p>
        I'm drawn to computer vision and image recognition — the idea that machines can learn
        to "see" and interpret visual information. Deep neural networks represent the kind of
        complex, layered problem-solving that excites me. Understanding how these systems learn
        patterns from data connects to my broader interest in how intelligence — artificial
        or human — works.
      </p>

      <h2>A Vision: The AI Shopping Assistant</h2>
      <p>
        One idea I've been thinking about is an <strong>AI-powered online shopping assistant</strong>
        — imagine a personal stylist that lives in your phone. It would use image recognition
        to let you snap a photo of an outfit you like and find similar items across stores.
        A personalized "For You" feed that learns your style. A virtual try-on feature. An
        outfit builder that suggests combinations from your existing wardrobe. Smart wishlists,
        package tracking, return help, and even a yearly style recap.
      </p>
      <p>
        It's the kind of product where recommendation algorithms, image recognition, and
        user experience design all converge — exactly where my
        <a class="cross-link" onclick="showSection('skills')">technical skills</a> and
        <a class="cross-link" onclick="showSection('experience-film')">creative background</a>
        would meet.
      </p>

      <h2>The Toolkit Philosophy</h2>
      <p>
        This is exactly why I value the
        <a class="cross-link" onclick="showSection('why-apprenticeship')">toolkit philosophy</a>:
        keep learning, go deep and wide, and let unexpected connections between tools spark
        creative solutions. The apprenticeship at Google would give me access to the best
        mentors and resources to accelerate this journey.
      </p>

      <div class="related-pages">
        <h3>Related Pages</h3>
        <div class="related-cards">
          ${relatedCard('projects-filmoji', ICONS.code, 'rc-green', 'Filmoji', 'Where the ML curiosity started — vector embeddings and recommendation')}
          ${relatedCard('why-apprenticeship', ICONS.heart, 'rc-blue', 'Why the Apprenticeship', 'The toolkit philosophy and structured learning')}
          ${relatedCard('skills', ICONS.wrench, 'rc-yellow', 'Technical Skills', 'The foundation I am building on')}
        </div>
      </div>
    `
  },

  // =============================================
  // 23. CONTACT
  // =============================================
  contact: {
    title: 'Contact Rebeca Castilho',
    meta: 'coverpage.rebeca.dev › contact',
    content: `
      <div class="section-header">
        <div class="section-header-top">
          <div class="section-header-icon sh-red">${ICONS.mail}</div>
          <h1>Contact Rebeca Castilho</h1>
        </div>
        <p class="section-meta">coverpage.rebeca.dev › contact</p>
      </div>

      <h2>A Personal Note</h2>
      <p>
        Thank you for taking the time to explore CoverPage. If you've made it this far,
        I hope you've gotten a sense of who I am — not just as a developer, but as a person.
        I built this because I believe in showing, not telling. I'd love the chance to
        continue the conversation in person.
      </p>

      <h2>Get In Touch</h2>
      <ul>
        <li><strong>Email:</strong> <a class="cross-link" href="mailto:rebscastilho@gmail.com">rebscastilho@gmail.com</a></li>
        <li><strong>GitHub:</strong> <a class="cross-link" href="https://github.com/rcastilho97" target="_blank">github.com/rcastilho97</a></li>
        <li><strong>LinkedIn:</strong> <a class="cross-link" href="https://www.linkedin.com/in/rebeca-castilho/" target="_blank">linkedin.com/in/rebeca-castilho</a></li>
        <li><strong>Location:</strong> Dublin, Ireland</li>
      </ul>

      <div class="related-pages">
        <h3>Related Pages</h3>
        <div class="related-cards">
          ${relatedCard('about', ICONS.person, 'rc-blue', 'About Rebeca', 'The full story behind the application')}
          ${relatedCard('why-google', ICONS.heart, 'rc-blue', 'Why Google', 'Values, vision, and a personal dream')}
          ${relatedCard('projects-coverpage', ICONS.code, 'rc-green', 'CoverPage — This Application', 'How and why this was built')}
        </div>
      </div>
    `
  }

};
