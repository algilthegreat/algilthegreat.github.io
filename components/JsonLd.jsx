/** Injecte des données structurées schema.org (JSON-LD). */
export default function JsonLd({ data }) {
  const payload = Array.isArray(data) ? { '@context': 'https://schema.org', '@graph': data } : { '@context': 'https://schema.org', ...data }
  return (
    <script
      type="application/ld+json"
      // Échappement de "<" pour éviter toute injection de balise dans le JSON
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload).replace(/</g, '\\u003c') }}
    />
  )
}
