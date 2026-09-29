/** Logotype typographique du festival (barre bleue verticale reprise de la charte). */
export default function Logo({ inverted = false, className = '' }) {
  return (
    <span className={`inline-flex items-stretch gap-2.5 leading-none ${className}`}>
      <span aria-hidden="true" className={`w-1.5 ${inverted ? 'bg-tournesol' : 'bg-blue'}`} />
      <span className={`flex flex-col font-black tracking-tight uppercase ${inverted ? 'text-paper' : 'text-ink'}`}>
        <span className="text-[0.62rem] tracking-[0.2em]">Festival</span>
        <span className="text-[1.05rem]">France–Laos</span>
        <span className={`text-[0.62rem] tracking-[0.2em] ${inverted ? 'text-tournesol' : 'text-blue'}`}>2026</span>
      </span>
    </span>
  )
}
