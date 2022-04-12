import MetaHead from './MetaHead'

interface PageHeaderProps {
  title: string
  metaTitle?: string
}

export default function PageHeader({
  title,
  metaTitle,
}: PageHeaderProps) {
  return (
    <header className="mb-8">
      <MetaHead title={metaTitle || title} />
      <h1>{title}</h1>
    </header>
  )
}
