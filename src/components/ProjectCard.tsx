type Project = {
  title: string
  year: string
  summary: string
  stack: readonly string[]
  live: string
  repo: string
  highlight: string
  image: string
}

type Props = {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: Props) {
  return (
    <article className="project-card group flex h-full flex-col overflow-hidden border border-line bg-surface transition duration-300 hover:-translate-y-1">
      <a href={project.live} className="relative block aspect-[16/10] overflow-hidden bg-deep">
        <img
          src={project.image}
          alt={`Captura de ${project.title}`}
          className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
        <span className="absolute left-4 top-4 border border-neon/30 bg-paper/90 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-neon backdrop-blur-sm">
          {String(index + 1).padStart(2, '0')} · {project.year}
        </span>
      </a>

      <div className="flex flex-1 flex-col p-6 md:p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neon">
          {project.highlight}
        </p>
        <h3 className="display mt-2 text-2xl font-semibold tracking-tight">{project.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-mute md:text-[15px]">
          {project.summary}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="border border-line px-2.5 py-1 text-xs font-medium text-mute"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-center gap-5 border-t border-line pt-5 text-sm font-semibold">
          <a
            href={project.live}
            className="text-neon underline decoration-neon/40 underline-offset-4 transition hover:decoration-neon"
          >
            Ver demo
          </a>
        </div>
      </div>
    </article>
  )
}
