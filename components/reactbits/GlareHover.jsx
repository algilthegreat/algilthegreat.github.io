/** GlareHover — inspiré de React Bits : reflet qui traverse la carte au survol. */
export default function GlareHover({ children, className = '' }) {
  return (
    <div className={`group/glare relative overflow-hidden ${className}`}>
      {children}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(-45deg,transparent_40%,rgba(255,255,255,0.55)_50%,transparent_60%)] transition-transform duration-700 ease-out group-hover/glare:translate-x-full"
      />
    </div>
  )
}
