import type { GetStaticProps, GetStaticPaths } from 'next'

import PageLayout from '../../components/PageLayout'
import { getProjects, getProjectBySlug } from '../api/projects'

type ProjectProps = {
  project: Project
}

const Project = ({ project }: ProjectProps) => {
  return (
    <PageLayout
      title={ project.title }
      metaTitle={`${project.title} | Projects`}
    >

    </PageLayout>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  const projects = getProjects()

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
    project = getProjectBySlug(projectSlug, [])
  } else {
    project = {}
  }

  return {
    props: { project },
  }
}

export default Project