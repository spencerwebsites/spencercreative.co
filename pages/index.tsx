import type { GetStaticProps } from 'next'
import Link from 'next/link'

import ProjectList from '../components/ProjectList'
import Window from '../components/Window'

import { getProjects } from './api/projects'

type HomeProps = {
  projects: Project[]
}

const Home = ({ projects }: HomeProps) => {
  const displayProjects = projects.filter(p => p.active)

  return (
    <>
      <section
        // eslint-disable-next-line max-len
        className="bg-slate-200 -mt-12 -mx-wrap px-wrap lg:min-h-[75vh] pt-24 lg:pt-12"
      >
        <div
          // eslint-disable-next-line max-len
          className="col-span-12 lg:col-span-6 self-center text-center space-y-6 lg:text-left"
        >
          <h1>Building Modern Websites and Web Apps</h1>
          <p className="text-2xl">
            Specializing in custom Jamstack web solutions
          </p>
          <Link href="/contact">
            <a
              // eslint-disable-next-line max-len
              className="btn"
            >
              Start a Project
            </a>
          </Link>
        </div>
        <div className="col-span-12 lg:col-span-6 self-center">
          <Window image="https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2461&q=80" />
        </div>
      </section>
      <section>
        <h2 className="col-span-12">Active Projects</h2>
        <ProjectList projects={displayProjects} h3 />
      </section>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const projects = getProjects()

  return {
    props: { projects },
  }
}

export default Home
