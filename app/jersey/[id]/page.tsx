// Server component — only handles static params generation
// The actual UI is in JerseyPageClient (client component)
import { JERSEYS } from '@/constants/jerseys'
import JerseyPageClient from './JerseyPageClient'

export function generateStaticParams() {
  return JERSEYS.map(j => ({ id: j.id }))
}

export default function JerseyPage({ params }: { params: { id: string } }) {
  return <JerseyPageClient id={params.id} />
}
