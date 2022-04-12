import type { GetStaticProps } from 'next'

import PageLayout from '../../components/PageLayout'
import ProjectList from '../../components/ProjectList'
import { getArchive } from '../api/archive'

type ArchivesProps = {
  projects: Project[]
}

const Archives = ({ projects }: ArchivesProps) => {
  return (
    <PageLayout title="Archive">
      <ProjectList projects={projects} />
    </PageLayout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const projects = getArchive()

  return {
    props: { projects },
  }
}

export default Archives