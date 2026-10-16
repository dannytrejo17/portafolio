import { HeroGrid } from './components/HeroGrid'
import { ProjectCard } from './components/ProjectCard'
import { StackGrid } from './components/StackGrid'
import { site } from './data/site'

export default function App() {
  return (
    <div className="shell min-h-screen overflow-x-hidden">
      <header className="relative z-30 mx-auto flex max-w-6xl items-center justify-between px-5 py-6 md:px-10">
        <a href="#top" className="inline-flex items-center" aria-label="DS Systems">
          <img
            src="/ds-systems-logo-tight.jpg"
            alt="DS Systems"
            className="h-16 w-auto md:h-[4.5rem]"
          />
        </a>
        <nav className="flex items-center gap-7 text-sm font-medium text-mute">
          <a href="#sobre-mi" className="hidden transition hover:text-neon sm:inline">
            Sobre mí
          </a>
          <a href="#proyectos" className="transition hover:text-neon">
            Proyectos
          </a>
          <a href="#stack" className="hidden transition hover:text-neon sm:inline">
            Stack
          </a>
          <a href="#contacto" className="transition hover:text-neon">
            Contacto
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="relative overflow-hidden">
          <HeroGrid />
          <div className="relative z-20 mx-auto w-full max-w-6xl px-5 py-14 md:px-10 md:py-16">
            <p className="fade-up text-xs font-semibold uppercase tracking-[0.22em] text-neon">
              {site.role}
            </p>
            <h1 className="display fade-up-1 mt-6 max-w-3xl text-[clamp(2.4rem,5.5vw,4.25rem)] font-semibold leading-[1.05] text-ink">
              {site.name}
            </h1>
            <div className="line-in neon-line mt-7 h-px w-24 bg-neon" />
            <p className="fade-up-2 mt-7 max-w-lg text-lg leading-relaxed text-mute md:text-xl">
              {site.tagline}
            </p>
            <div className="fade-up-3 mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#proyectos"
                className="rounded-full border border-neon bg-[#0099a8] px-6 py-3.5 text-sm font-semibold text-deep transition hover:bg-[#00b8c9]"
              >
                Ver proyectos
              </a>
            </div>
          </div>
        </section>

        <section id="sobre-mi" className="border-t border-line">
          <div className="mx-auto max-w-6xl px-5 py-20 md:px-10 md:py-28">
            <h2 className="display text-3xl font-semibold tracking-tight md:text-5xl">Sobre mí</h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mute md:text-xl">
              {site.about.lead}
            </p>
            <ul className="mt-12 grid gap-4 md:grid-cols-3">
              {site.about.points.map((point) => (
                <li key={point.title} className="about-card border border-line bg-surface/70 p-6">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-neon">
                    {point.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-ink/90">{point.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="proyectos" className="border-t border-line bg-surface/60">
          <div className="mx-auto max-w-6xl px-5 py-20 md:px-10 md:py-28">
            <div className="max-w-xl">
              <h2 className="display text-3xl font-semibold tracking-tight md:text-5xl">
                Proyectos
              </h2>
              <p className="mt-4 text-mute md:text-lg">
                Productos web con auth, datos y flujos reales.
              </p>
            </div>

            <ul className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {site.projects.map((project, index) => (
                <li key={project.title}>
                  <ProjectCard project={project} index={index} />
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="stack" className="border-t border-line">
          <div className="mx-auto max-w-6xl px-5 py-20 md:px-10 md:py-24">
            <h2 className="display text-3xl font-semibold tracking-tight md:text-4xl">Stack</h2>
            <p className="mt-3 max-w-md text-mute">
              Tecnologías con las que construyo apps web.
            </p>
            <StackGrid items={site.stack} />
          </div>
        </section>

        <section id="contacto" className="border-t border-neon/20 bg-deep">
          <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-20 md:flex-row md:items-end md:justify-between md:px-10 md:py-28">
            <div className="max-w-lg">
              <h2 className="display text-3xl font-semibold tracking-tight md:text-5xl">
                ¿Hablamos?
              </h2>
              <p className="mt-4 text-base text-mute md:text-lg">
                Abierto a proyectos, colaboraciones y roles de desarrollo web.
              </p>
            </div>
            <div className="flex flex-col gap-5 md:items-end">
              <a
                href={site.links.whatsapp}
                target="_blank"
                rel="noreferrer"
                aria-label={`WhatsApp ${site.phone}`}
                className="inline-flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-[#06210f] shadow-[0_0_28px_rgba(37,211,102,0.35)] transition hover:bg-[#3ee57a]"
              >
                <img
                  src="https://cdn.simpleicons.org/whatsapp/06210f"
                  alt=""
                  width={26}
                  height={26}
                  className="h-[26px] w-[26px]"
                />
                <span className="flex flex-col items-start leading-tight">
                  <span>WhatsApp</span>
                  <span className="text-xs font-medium opacity-80">{site.phone}</span>
                </span>
              </a>
              <a
                href={`mailto:${site.email}`}
                className="display text-xl font-semibold text-neon neon-text transition hover:text-neon-soft md:text-2xl"
              >
                {site.email}
              </a>
              <div className="flex flex-wrap gap-5 text-sm font-medium text-mute">
                <a href={site.links.github} target="_blank" rel="noreferrer" className="hover:text-neon">
                  GitHub
                </a>
                <a href={site.links.linkedin} target="_blank" rel="noreferrer" className="hover:text-neon">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line bg-deep px-5 py-5 text-sm text-mute/70 md:px-10">
        <div className="mx-auto flex max-w-6xl justify-between">
          <span>
            © {new Date().getFullYear()} {site.name}
          </span>
          <span>React · Vite</span>
        </div>
      </footer>
    </div>
  )
}
