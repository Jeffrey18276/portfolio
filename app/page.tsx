import {
  ArrowDownRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  ExternalLink,
  BrainCircuit,
  GraduationCap,
  FileText,
  Layers3,
} from "lucide-react";

const skills = [
  { title: "Backend", items: ["Java", "Spring Boot", "REST APIs", "SQL"] },
  { title: "AI / ML", items: ["LLMs", "RAG", "LangChain", "Neural Networks", "Deep Learning"] },
  { title: "Development", items: ["Python", "Flutter", "Firebase", "Git"] },
  { title: "Research", items: ["Zero-Knowledge Proofs", "Pedersen Commitments", "Federated Learning"] },
];

const projects = [
  {
    number: "01",
    title: "OTX ThreatLens AI",
    category: "AI · RAG · Threat Intelligence",
    description:
      "An AI-assisted threat intelligence application that uses retrieval-augmented generation to explore AlienVault OTX threat data and produce contextual answers and reports.",
    stack: ["Python", "Streamlit", "FAISS", "LangChain", "LLMs"],
    link: "https://github.com/Jeffrey18276",
    linkLabel: "Explore GitHub",
  },
  {
    number: "02",
    title: "Email Assistant",
    category: "AI · Automation",
    description:
      "A conversational email assistant project integrating Gmail authentication and language-model capabilities to help with email-related workflows.",
    stack: ["Python", "Streamlit", "Gmail API", "Groq", "OpenAI"],
    link: "https://github.com/Jeffrey18276/Email-Assistant",
    linkLabel: "View repository",
  },
  {
    number: "03",
    title: "RS-ZKP / RangeShield",
    category: "Research · Privacy · Federated Learning",
    description:
      "A privacy-enhancing zero-knowledge proof approach for federated learning in healthcare, using Pedersen commitments to support integrity and privacy of model updates.",
    stack: ["Python", "Zero-Knowledge Proofs", "Pedersen Commitments", "Federated Learning"],
    link: "https://www.igi-global.com/article/rs-zkp/394815",
    linkLabel: "Read publication",
  },
  {
    number: "04",
    title: "Next Word Prediction Model",
    category: "Deep Learning · NLP",
    description:
      "A next-word prediction model built around preprocessing, Byte Pair Encoding tokenization and a text-generation pipeline, with pretrained GPT weights.",
    stack: ["Python", "Transformers", "BPE", "Deep Learning"],
    link: "https://github.com/Jeffrey18276",
    linkLabel: "Explore GitHub",
  },
];

const experience = [
  {
    company: "Tata Consultancy Services (TCS)",
    role: "Spring Boot Backend Engineer",
    period: "Dec 2025 — Present",
    detail: "Working on the Apple Account project as a Spring Boot backend engineer.",
    current: true,
  },
  {
    company: "OWL Cyber Defense",
    role: "Engineering Intern",
    period: "Aug 2023 — Sep 2023",
    detail:
      "Configured and tested data diodes for secure data transfer, ran TCP and UDP packet-transfer simulations, and connected ESXi-hosted servers to OWL data diodes.",
    current: false,
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="#home" aria-label="Jeffrey home">
          <span className="brand-mark">J</span>
          <span>jeffrey<span className="muted">.dev</span></span>
        </a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="nav-cta" href="/resume.pdf" target="_blank" rel="noreferrer">
          Resume <Download size={14} />
        </a>
      </nav>

      <section className="hero shell" id="home">
        <div className="hero-copy">
          <div className="availability"><span className="status-dot" /> SOFTWARE ENGINEER · KERALA, INDIA</div>
          <h1>Building reliable<br /><span className="gradient-text">backend systems</span><br />and intelligent apps.</h1>
          <p className="hero-intro">
            I&apos;m <strong>Jeffrey Tom Shaji</strong>, a software engineer at TCS working on the
            Apple Account project. I build with Java and Spring Boot, and enjoy exploring
            AI/ML, LLM applications and privacy-preserving technologies.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore my work <ArrowDownRight size={17} /></a>
            <a className="button button-secondary" href="/resume.pdf" target="_blank" rel="noreferrer">View resume <FileText size={16} /></a>
          </div>
          <div className="social-links">
            <a href="https://github.com/Jeffrey18276" target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={13} /></a>
            <a href="https://www.linkedin.com/in/jeffrey-tom-shaji-0b95b521b" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={13} /></a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jeffreytomshaji29@gmail.com&su=Hello%20Jeffrey" target="_blank" rel="noreferrer"><Mail size={17} /> Email <ArrowUpRight size={13} /></a>
          </div>
        </div>
        <div className="hero-visual" aria-label="Developer profile card">
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />
          <div className="profile-card">
            <div className="card-top"><span>PROFILE / 2026</span><span className="card-live">● CURRENT ROLE</span></div>
            <div className="avatar">JS<span className="avatar-dot" /></div>
            <h3>Jeffrey Tom Shaji</h3>
            <p>Spring Boot Backend Engineer</p>
            <div className="profile-divider" />
            <div className="profile-row"><BriefcaseBusiness size={15} /><span>TCS · Apple Account</span></div>
            <div className="profile-row"><GraduationCap size={15} /><span>B.Tech Computer Science</span></div>
            <div className="profile-row"><MapPin size={15} /><span>Kerala, India</span></div>
            <div className="profile-tags"><span>JAVA</span><span>SPRING BOOT</span><span>AI / ML</span></div>
          </div>
          <div className="floating-chip chip-top"><Code2 size={15} /> Clean code</div>
          <div className="floating-chip chip-bottom"><BrainCircuit size={15} /> Curious mind</div>
        </div>
        <div className="hero-bottom"><span>SCROLL TO EXPLORE</span><span className="scroll-line" /></div>
      </section>

      <section className="section shell" id="about">
        <SectionHeading eyebrow="01 / ABOUT" title="A little about me" description="A computer science graduate who enjoys solving problems across backend engineering and applied AI." />
        <div className="about-grid">
          <div className="about-text">
            <p className="large-copy">I&apos;m interested in building software that is <span className="accent">useful, dependable and thoughtfully engineered.</span></p>
            <p>
              I graduated with a B.Tech in Computer Science and Engineering from VIT Chennai.
              Today, I work at TCS as a Spring Boot backend engineer on the Apple Account project.
              Alongside backend development, I explore LLMs, retrieval-augmented generation and
              privacy-focused machine learning through personal projects and research.
            </p>
            <a className="text-link" href="/resume.pdf" target="_blank" rel="noreferrer">More in my resume <ArrowUpRight size={15} /></a>
          </div>
          <div className="education-card">
            <div className="education-icon"><GraduationCap size={22} /></div>
            <p className="eyebrow">EDUCATION</p>
            <h3>Vellore Institute of Technology</h3>
            <p>Chennai, India</p>
            <div className="education-meta"><span>B.Tech · Computer Science & Engineering</span><strong>8.76 CGPA</strong></div>
            <span className="year-label">2021 — 2025</span>
          </div>
        </div>
      </section>

      <section className="section section-tint" id="experience">
        <div className="shell">
          <SectionHeading eyebrow="02 / EXPERIENCE" title="Where I&apos;ve worked" description="Experiences that have shaped how I approach engineering and problem-solving." />
          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={item.company}>
                <div className="timeline-marker"><span /></div>
                <div className="timeline-content">
                  <div className="timeline-top"><div><h3>{item.company}</h3><p className="role">{item.role}</p></div><span className={item.current ? "period current-period" : "period"}>{item.period}</span></div>
                  <p className="experience-detail">{item.detail}</p>
                  {item.current && <span className="project-tag">CURRENT ROLE</span>}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell" id="skills">
        <SectionHeading eyebrow="03 / TOOLKIT" title="Skills & technologies" description="Technologies I have worked with across professional, academic and personal projects." />
        <div className="skills-grid">
          {skills.map((group, index) => (
            <div className="skill-card" key={group.title}>
              <div className="skill-card-top"><span>0{index + 1}</span><Layers3 size={18} /></div>
              <h3>{group.title}</h3>
              <div className="skill-pills">{group.items.map((skill) => <span key={skill}>{skill}</span>)}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-tint" id="projects">
        <div className="shell">
          <SectionHeading eyebrow="04 / SELECTED WORK" title="Projects & research" description="A selection of things I have built, explored and contributed to." />
          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-card-top"><span>{project.number} / PROJECT</span><ExternalLink size={17} /></div>
                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                <a className="project-link" href={project.link} target="_blank" rel="noreferrer">{project.linkLabel} <ArrowUpRight size={15} /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell" id="certifications">
        <SectionHeading eyebrow="05 / LEARNING" title="Certifications & learning" />
        <div className="cert-list">
          <div><span className="cert-index">01</span><div><h3>Claude Certified Developer — Foundations (CCDV-F)</h3><p>Anthropic · Passed October 2026</p></div><span className="cert-status">CERTIFIED</span></div>
          <div><span className="cert-index">02</span><div><h3>Neural Networks and Deep Learning</h3><p>DeepLearning.AI · Coursera</p></div></div>
          <div><span className="cert-index">03</span><div><h3>Introduction to Generative AI & Large Language Models</h3><p>Course certificates</p></div></div>
          <div><span className="cert-index">04</span><div><h3>The Complete Flutter Development Bootcamp with Dart</h3><p>Development course</p></div></div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="shell contact-inner">
          <p className="eyebrow">06 / GET IN TOUCH</p>
          <h2>Have an interesting<br /><span className="gradient-text">problem to solve?</span></h2>
          <p className="contact-copy">I&apos;m always open to connecting with developers, learning from others and discussing interesting engineering ideas.</p>
          <a className="button button-primary" href="https://mail.google.com/mail/?view=cm&fs=1&to=jeffreytomshaji29@gmail.com&su=Hello%20Jeffrey" target="_blank" rel="noreferrer">Say hello <Mail size={17} /></a>
          <div className="contact-bottom">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jeffreytomshaji29@gmail.com&su=Hello%20Jeffrey" target="_blank" rel="noreferrer">jeffreytomshaji29@gmail.com</a>
            <div><a href="https://github.com/Jeffrey18276" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/jeffrey-tom-shaji-0b95b521b" target="_blank" rel="noreferrer">LinkedIn</a></div>
          </div>
        </div>
      </section>

      <footer className="footer shell"><a className="brand" href="#home"><span className="brand-mark">J</span><span>jeffrey<span className="muted">.dev</span></span></a><span>Designed & built by Jeffrey Tom Shaji · 2026</span><a href="#home">Back to top ↑</a></footer>
    </main>
  );
}
