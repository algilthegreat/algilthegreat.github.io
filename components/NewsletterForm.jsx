'use client'
import { useActionState } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { subscribeNewsletter } from '@/lib/forms'

/** Formulaire newsletter. `full` affiche les centres d'intérêt. */
export default function NewsletterForm({ labels, locale, full = false, dark = false }) {
  const [state, action, pending] = useActionState(subscribeNewsletter, { status: 'idle' })

  if (state.status === 'success') {
    return (
      <p role="status" className={`flex items-center gap-3 text-lg font-bold ${dark ? 'text-tournesol' : 'text-menthe'}`}>
        <Check className="size-6" aria-hidden="true" /> {labels.success}
      </p>
    )
  }

  const field = dark ? 'border-paper bg-transparent text-paper placeholder:text-paper/50' : 'border-ink bg-paper text-ink placeholder:text-ink/40'

  return (
    <form action={action} className="w-full" noValidate>
      <input type="hidden" name="locale" value={locale} />
      <div aria-hidden="true" className="hidden">
        <label>
          Website <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      {full && (
        <fieldset className="mb-6">
          <legend className="kicker mb-3">{labels.interests}</legend>
          <div className="flex flex-wrap gap-2">
            {Object.entries(labels.options).map(([value, label]) => (
              <label key={value} className="chip has-[:checked]:border-ink has-[:checked]:bg-ink has-[:checked]:text-paper">
                <input type="checkbox" name="interests" value={value} className="size-4 accent-blue" />
                {label}
              </label>
            ))}
          </div>
        </fieldset>
      )}
      <label htmlFor={`nl-email-${full ? 'full' : 'mini'}`} className="kicker mb-2 block">
        {labels.email}
      </label>
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          id={`nl-email-${full ? 'full' : 'mini'}`}
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder={labels.placeholder}
          aria-invalid={state.status === 'error' || undefined}
          aria-describedby={state.status === 'error' ? 'nl-error' : undefined}
          className={`min-h-12 flex-1 border-2 px-4 text-base outline-none ${field}`}
        />
        <button type="submit" disabled={pending} className={`${dark ? 'btn-light' : 'btn-primary'} min-h-12 disabled:opacity-60`}>
          {pending ? labels.sending : labels.submit} <ArrowRight className="size-4" aria-hidden="true" />
        </button>
      </div>
      {state.status === 'error' && (
        <p id="nl-error" role="alert" className={`mt-2 text-sm font-semibold ${dark ? 'text-macaron' : 'text-[#b42318]'}`}>
          {labels.error}
        </p>
      )}
      <p className={`mt-3 text-xs ${dark ? 'text-paper/70' : 'text-ink/60'}`}>{labels.privacy}</p>
    </form>
  )
}
