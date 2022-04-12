import type { NextApiRequest, NextApiResponse } from 'next'

import { getProjectBySlug } from './'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    res.status(405).end()
  }

  const slug = req.query?.project?.toString()
  const queryFields = req.query?.fields?.toString()

  const fields: string[] = []

  if (queryFields) {
    fields.push(...queryFields.split(','))
  }

  const content = getProjectBySlug(slug, fields)
  res.status(200).json(content)
}