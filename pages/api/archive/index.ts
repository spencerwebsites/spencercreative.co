import fs from 'fs'
import { join } from 'path'

import matter from 'gray-matter'
import type { NextApiRequest, NextApiResponse } from 'next'

const md = require('markdown-it')()

export const archiveDirectory = join(process.cwd(), '_content/archive')

export function getArchiveProjectBySlug(
  slug: string,
  fields: string[] | undefined = undefined,
) {
  const realSlug = slug.replace(/\.md$/, '')

  const fullPath = join(archiveDirectory, `${realSlug}.md`)

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const theData: { [x: string]: any } = {
    ...data,
    slug: realSlug,
    content: md.render(content),
  }

  if (fields !== undefined && fields.length) {
    const filteredData: { [x: string]: any } = { slug: realSlug }

    fields.forEach(field => {
      if (field !== slug && theData[field]) {
        filteredData[field] = theData[field]
      }
    })

    return filteredData
  }

  return theData
}

export function getArchive(fields: string[] | undefined = undefined) {
  if (!fs.existsSync(archiveDirectory)) {
    return []
  }

  const slugs = fs.readdirSync(archiveDirectory)

  const content = slugs
    .map((slug) => getArchiveProjectBySlug(slug, fields))
    .sort((a, b) => (
      a.order < b.order ? -1 : 1
    ))

  return content
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    res.status(405).end()
  }

  const queryFields = req.query?.fields?.toString()

  const fields = []
  if (queryFields) {
    fields.push(...queryFields.split(','))
  }

  const content = getArchive(fields)
  res.status(200).json(content)
}