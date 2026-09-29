'use client'
import { useActionState } from 'react'
import { Check, Send } from 'lucide-react'
import { sendContact } from '@/lib/forms'

export default function ContactForm({ labels, defaultSubject }) {
  const [state, action, pending] = useActionState(sendContact, { status: 'idle' })

  if (state.status === 'success') {
    return (
      <p role="status" className="flex items-center gap-3 border-2 border-menthe p-6 text-lg font-bold">
        <Check className="size-6 text-menthe" aria-hidden="true" /> {labels.sent}
      </p>
    )
  }

  const v = state.values ?? {}
  const input = 'mt-2 block min-h-12 w-full border-2 border-ink bg-paper px-4 text-base outline-none focus:border-blue'

  return (
    <form action={action} className="grid gap-5" noValidate>
      <div aria-hidden="true" className="hidden">
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="font-bold">
          {labels.name}
          <input name="name" required autoComplete="name" defaultValue={v.name} className={input} />
        </label>
        <label className="font-bold">
          {labels.email}
          <input name="email" type="email" required autoComplete="email" defaultValue={v.email} className={input} />
        </label>
      </div>
      <label className="font-bold">
        {labels.subject}
        <select name="subject" defaultValue={v.subject ?? defaultSubject ?? labels.subjects[0]} className={input}>
          {labels.subjects.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </label>
      <label className="font-bold">
        {labels.message}
        <textarea name="message" required rows={6} defaultValue={v.message} className={`${input} py-3`} />
      </label>
      {state.status === 'error' && (
        <p role="alert" className="font-semibold text-[#b42318]">
          {labels.error}
        </p>
      )}
      <button type="submit" disabled={pending} className="btn-primary justify-self-start disabled:opacity-60">
        <Send className="size-4" aria-hidden="true" /> {pending ? labels.sending : labels.send}
      </button>
    </form>
  )
}
