import type { NextApiRequest, NextApiResponse } from 'next'

import { getTeamMemberBySlug } from './'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    res.status(405).end()
  }

  const slug = req.query?.name?.toString()
  const queryFields = req.query?.fields?.toString()

  const fields: string[] = []

  if (queryFields) {
    fields.push(...queryFields.split(','))
  }

  const content = getTeamMemberBySlug(slug, fields)
  res.status(200).json(content)
}