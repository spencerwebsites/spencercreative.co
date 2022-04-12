import Link from 'next/link'

type ProjectListProps = {
  projects: Project[]
  h3?: boolean
}

const ProjectList = ({ projects, h3 }: ProjectListProps) => {
  const Header = h3 ? 'h3' : 'h2'

  return (
    <>
      {projects.map((project) => (
        <article
          key={`project-${project.slug}`}
          className="col-span-12 md:col-span-6"
        >
          <Header>
            <Link href={`/projects/${project.slug}`}>{project.title}</Link>
          </Header>
        </article>
      ))}
    </>
  )
}

export default ProjectList