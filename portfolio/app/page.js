import {
  profile, anthropicCert, experience, projects, publication,
  skills, certifications, education,
} from "../data/resume";

export default function Home() {
  return (
    <>
      <header className="top">
        <a href="#top" className="brand">{profile.name}</a>
        <nav aria-label="Sections">
          <a href="#work">Work</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div>
            <h1>{profile.name}</h1>
            <p className="lead">{profile.role} at TCS, working on the Apple account.</p>
            <p className="sub">{profile.summary}</p>
            <div className="actions">
              <a className="btn primary" href="/resume.pdf" target="_blank" rel="noreferrer">View resume</a>
              <a className="btn" href={`mailto:${profile.email}`}>Email me</a>
            </div>
          </div>
          <pre className="response" aria-label="Profile summary">
{`HTTP/1.1 200 OK

{
  "name": "${profile.name}",
  "role": "${profile.role}",
  "employer": "TCS",
  "account": "Apple",
  "since": "2025-12-29",
  "certified": "${anthropicCert.short}",
  "interests": ["RAG", "LLMs", "ZKPs"]
}`}
          </pre>
        </section>

        <section id="work">
          <h2>Experience</h2>
          {experience.map((e) => (
            <article key={e.company} className="entry">
              <div className="meta">{e.period}</div>
              <div>
                <h3>{e.title}{e.note ? `, ${e.note}` : ""}</h3>
                <p className="org">{e.company}</p>
                <ul>{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
              </div>
            </article>
          ))}
          <article className="entry">
            <div className="meta">{education.period}</div>
            <div>
              <h3>{education.degree}</h3>
              <p className="org">{education.school}, {education.grade}</p>
            </div>
          </article>
        </section>

        <section id="projects">
          <h2>Projects and publication</h2>
          {projects.map((p) => (
            <article key={p.name} className="entry">
              <div className="meta">Project</div>
              <div>
                <h3>{p.name}</h3>
                <ul>{p.points.map((x) => <li key={x}>{x}</li>)}</ul>
              </div>
            </article>
          ))}
          <article className="entry">
            <div className="meta">{publication.venue}</div>
            <div>
              <h3>{publication.title}</h3>
              <p>{publication.text}</p>
              <p><a href={publication.link} target="_blank" rel="noreferrer">Read the paper</a></p>
            </div>
          </article>
        </section>

        <section id="skills">
          <h2>Skills</h2>
          <dl className="skills">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group}>
                <dt>{group}</dt>
                <dd>{items.map((i) => <span className="chip" key={i}>{i}</span>)}</dd>
              </div>
            ))}
          </dl>
          <h3 className="subhead">Certifications</h3>
          <ul className="certs">
            {certifications.map((c, i) => (
              <li key={c} className={i === 0 ? "featured" : ""}>{c}</li>
            ))}
          </ul>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p>Open to conversations about backend, AI and ML work.</p>
          <p className="links">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </p>
        </section>
      </main>

      <footer>© {new Date().getFullYear()} {profile.name}. {profile.location}.</footer>
    </>
  );
}
