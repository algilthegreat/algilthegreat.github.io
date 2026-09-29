/**
 * Envoi des formulaires depuis le navigateur (le site est exporté en statique pour GitHub Pages).
 * Les données validées sont transmises aux formulaires Formspree définis par
 * NEXT_PUBLIC_FORMSPREE_NEWSLETTER / NEXT_PUBLIC_FORMSPREE_CONTACT (URL https://formspree.io/f/…).
 */
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

async function forward(url, payload) {
  if (!url) {
    console.warn('[form] aucun formulaire Formspree configuré')
    return false
  }
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
    })
    return res.ok
  } catch (err) {
    console.error('[form] erreur d’envoi', err)
    return false
  }
}

export async function subscribeNewsletter(_prev, formData) {
  const email = String(formData.get('email') ?? '').trim().slice(0, 200)
  if (formData.get('website')) return { status: 'success' } // pot de miel anti-spam
  if (!EMAIL.test(email)) return { status: 'error' }
  const interests = formData.getAll('interests').map(String).slice(0, 10)
  const ok = await forward(process.env.NEXT_PUBLIC_FORMSPREE_NEWSLETTER, {
    type: 'newsletter',
    email,
    interests,
    locale: String(formData.get('locale') ?? 'fr'),
    date: new Date().toISOString(),
  })
  return { status: ok ? 'success' : 'error' }
}

export async function sendContact(_prev, formData) {
  if (formData.get('website')) return { status: 'success' }
  const data = {
    name: String(formData.get('name') ?? '').trim().slice(0, 120),
    email: String(formData.get('email') ?? '').trim().slice(0, 200),
    subject: String(formData.get('subject') ?? '').trim().slice(0, 120),
    message: String(formData.get('message') ?? '').trim().slice(0, 5000),
  }
  if (!data.name || !EMAIL.test(data.email) || data.message.length < 5) return { status: 'error', values: data }
  const ok = await forward(process.env.NEXT_PUBLIC_FORMSPREE_CONTACT, { type: 'contact', ...data, date: new Date().toISOString() })
  return ok ? { status: 'success' } : { status: 'error', values: data }
}
