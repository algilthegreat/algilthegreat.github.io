'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import Poster from './Poster'
import { Chip } from './ProgrammeExplorer'

/** Galerie en maçonnerie, filtres et visionneuse (lightbox) au clavier. */
export default function GalleryGrid({ items, filters, labels }) {
  const [filter, setFilter] = useState('')
  const [open, setOpen] = useState(-1)
  const dialogRef = useRef(null)
  const visible = items.filter((i) => !filter || i.tags.includes(filter))

  useEffect(() => {
    const d = dialogRef.current
    if (!d) return
    if (open >= 0 && !d.open) d.showModal()
    if (open < 0 && d.open) d.close()
  }, [open])

  const move = (step) => setOpen((o) => (o + step + visible.length) % visible.length)

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filtres">
        <Chip pressed={!filter} onClick={() => setFilter('')}>{labels.all}</Chip>
        {filters.map((f) => (
          <Chip key={f.slug} pressed={filter === f.slug} onClick={() => setFilter(filter === f.slug ? '' : f.slug)} count={items.filter((i) => i.tags.includes(f.slug)).length}>
            {f.label}
          </Chip>
        ))}
      </div>
      <p className="mt-4 text-sm text-ink/60">{labels.note}</p>

      <ul className="mt-8 columns-2 gap-4 md:columns-3 lg:columns-4">
        {visible.map((item, i) => (
          <li key={item.id} className="mb-4 break-inside-avoid">
            <button type="button" onClick={() => setOpen(i)} className="group block w-full overflow-hidden text-left" aria-label={item.caption}>
              <div style={{ aspectRatio: item.ratio, background: item.color }} className="overflow-hidden">
                <div className="relative h-full transition-transform duration-700 group-hover:scale-105">
                  {item.photo ? (
                    <Image src={item.photo} alt="" fill sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw" className="object-cover" />
                  ) : (
                    <Poster seed={item.seed} color={item.color} ratio={item.ratio} />
                  )}
                </div>
              </div>
              <span className="mt-2 block text-sm font-semibold">{item.caption}</span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        onClose={() => setOpen(-1)}
        onKeyDown={(e) => {
          if (e.key === 'ArrowRight') move(1)
          if (e.key === 'ArrowLeft') move(-1)
        }}
        className="m-0 h-dvh max-h-none w-full max-w-none bg-ink/95 p-0 text-paper backdrop:bg-transparent"
        aria-label={visible[open]?.caption}
      >
        {open >= 0 && visible[open] && (
          <div className="flex h-full flex-col items-center justify-center gap-4 p-4">
            {visible[open].photo ? (
              <div className="relative h-[75vh] w-full max-w-5xl">
                <Image src={visible[open].photo} alt={visible[open].caption} fill sizes="100vw" className="object-contain" />
              </div>
            ) : (
              <div className="w-full max-w-4xl" style={{ aspectRatio: visible[open].ratio, maxHeight: '75vh' }}>
                <Poster seed={visible[open].seed} color={visible[open].color} ratio={visible[open].ratio} />
              </div>
            )}
            <p className="font-bold">{visible[open].caption}</p>
            <div className="flex gap-2">
              <button type="button" onClick={() => move(-1)} className="grid size-12 place-items-center border-2 border-paper" aria-label="Précédent / Previous">
                <ChevronLeft className="size-6" aria-hidden="true" />
              </button>
              <button type="button" onClick={() => setOpen(-1)} className="grid size-12 place-items-center border-2 border-paper" aria-label="Fermer / Close">
                <X className="size-6" aria-hidden="true" />
              </button>
              <button type="button" onClick={() => move(1)} className="grid size-12 place-items-center border-2 border-paper" aria-label="Suivant / Next">
                <ChevronRight className="size-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        )}
      </dialog>
    </div>
  )
}
