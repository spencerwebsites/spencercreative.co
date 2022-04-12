import type { GetStaticProps } from 'next'

import PageLayout from '../../components/PageLayout'
import ProjectList from '../../components/ProjectList'
import { getProjects } from '../api/projects'

type ProjectsProps = {
  projects: Project[]
}

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <PageLayout title="Projects">
      <ProjectList projects={projects} />
    </PageLayout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const projects = getProjects()

  return {
    props: { projects },
  }
}

export default Projects