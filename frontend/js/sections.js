// =============================================
// SECTIONS.JS — Inner page content
// All section pages are defined here as objects
// =============================================

const sections = {

  about: {
    title: 'About Rebeca Castilho',
    meta: 'coverpage.rebeca.dev › about',
    content: `
      <h2>Who I Am</h2>
      <p>
        I'm Rebeca Castilho, a creative professional based in Dublin, 
        Ireland, transitioning into software engineering. I'm applying 
        for Google's Software Development Apprenticeship in Engineering.
      </p>
      <h2>My Background</h2>
      <p>
        [Add your background here — fill this in during the 
        knowledge base interview session]
      </p>
      <h2>Why Engineering</h2>
      <p>
        [Add your story here]
      </p>
    `
  },

  experience: {
    title: 'Professional Experience',
    meta: 'coverpage.rebeca.dev › experience',
    content: `
      <h2>Film & Television</h2>
      <p>
        [Add your film and TV experience here]
      </p>
      <h2>Tech & Engineering</h2>
      <p>
        [Add your technical experience here]
      </p>
    `
  },

  projects: {
    title: 'Projects',
    meta: 'coverpage.rebeca.dev › projects',
    content: `
      <h2>CoverPage — This Application</h2>
      <p>
        An interactive cover letter built as a Google Search experience. 
        Spring Boot REST API backend, Gemini AI integration using RAG 
        architecture, vanilla HTML/CSS/JavaScript frontend. Built from 
        scratch as a Google Software Development Apprenticeship application.
      </p>
      <h2>Other Projects</h2>
      <p>
        [Add your other projects here]
      </p>
    `
  },

  skills: {
    title: 'Technical Skills',
    meta: 'coverpage.rebeca.dev › skills',
    content: `
      <h2>Languages</h2>
      <p>
        [Add your languages here — Java, Python, JavaScript etc]
      </p>
      <h2>Frameworks & Tools</h2>
      <p>
        [Add your frameworks and tools here]
      </p>
    `
  },

  why: {
    title: 'Why Google',
    meta: 'coverpage.rebeca.dev › why-google',
    content: `
      <h2>Why Google Specifically</h2>
      <p>
        [Add your three specific reasons here]
      </p>
      <h2>Why the Apprenticeship</h2>
      <p>
        [Add your reasoning here]
      </p>
    `
  },

  about_page: {
    title: 'About This Project',
    meta: 'coverpage.rebeca.dev › about-page',
    content: `
      <h2>What is CoverPage?</h2>
      <p>
        CoverPage is an interactive cover letter built as a Google Search 
        experience. Instead of sending a PDF, Rebeca Castilho built a 
        full-stack web application — a Spring Boot Java backend, Gemini 
        AI integration, and a Google-inspired frontend.
      </p>
      <h2>How It Works</h2>
      <p>
        Type any question about Rebeca into the search bar. The question 
        travels to a Spring Boot REST API, which uses RAG — Retrieval 
        Augmented Generation — to combine Rebeca's personal knowledge 
        base with the Gemini AI model. The answer appears in the AI 
        Overview box, spoken in Rebeca's own voice.
      </p>
      <h2>Technology Stack</h2>
      <p>
        Java 21 · Spring Boot 3.5 · Gemini AI API · RAG Architecture · 
        Vanilla HTML/CSS/JavaScript · Firebase Hosting · Railway Deployment
      </p>
    `
  },

  contact: {
    title: 'Contact Rebeca Castilho',
    meta: 'coverpage.rebeca.dev › contact',
    content: `
      <h2>Get In Touch</h2>
      <p>
        [Add your email address here]
      </p>
      <h2>Find Me Online</h2>
      <p>
        GitHub: <a href="https://github.com/YOUR_GITHUB" 
        target="_blank" style="color:#1a73e8">github.com/YOUR_GITHUB</a>
      </p>
      <p>
        LinkedIn: <a href="https://linkedin.com/in/YOUR_LINKEDIN" 
        target="_blank" style="color:#1a73e8">linkedin.com/in/YOUR_LINKEDIN</a>
      </p>
    `
  }

};