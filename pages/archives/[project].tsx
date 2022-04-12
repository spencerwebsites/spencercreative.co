import type { GetStaticProps, GetStaticPaths } from 'next'

import PageLayout from '../../components/PageLayout'
import { getArchive, getArchiveProjectBySlug } from '../api/archive'

type ArchiveProjectProps = {
  project: Project
}

const ArchiveProject = ({ project }: ArchiveProjectProps) => {
  return (
    <PageLayout
      title={ project.title }
      metaTitle={`${project.title} | Projects`}
    >

    </PageLayout>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  const projects = getArchive()

  return {
    paths: projects.map((project) => {
      return {
        params: {
          project: project.slug,
        },
      }
    }),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const params = context.params
  const projectSlug = params?.project?.toString()

  let project: MarkdownFileObject

  if (projectSlug) {
    project = getArchiveProjectBySlug(projectSlug, [])
  } else {
    project = {}
  }

  return {
    props: { project },
  }
}

export default ArchiveProject