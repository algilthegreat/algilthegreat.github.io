'use client'
/** Redirection côté navigateur (le site statique n'a pas de redirections serveur). */
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function RedirectTo({ href }) {
  const router = useRouter()
  useEffect(() => router.replace(href), [router, href])
  return (
    <p className="container-site py-24">
      <a href={href} className="link-underline">{href}</a>
    </p>
  )
}
