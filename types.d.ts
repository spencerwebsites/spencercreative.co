/* eslint-disable no-unused-vars */
type MarkdownFileObject = {
  title?: string
  slug?: string
  content?: string
  [x: string]: any
}

type MarkdownFileBase = {
  title: string
  slug: string
  content: string
  active: boolean
}

interface Project extends MarkdownFileBase {
  order: number
}
