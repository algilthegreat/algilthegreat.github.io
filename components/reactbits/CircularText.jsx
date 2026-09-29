/** CircularText — inspiré de React Bits : texte en rotation sur un cercle. */
export default function CircularText({ text, className = '', size = 140 }) {
  const chars = Array.from(text)
  return (
    <div className={`relative animate-spin-slow ${className}`} style={{ width: size, height: size }} aria-hidden="true">
      {chars.map((c, i) => (
        <span
          key={i}
          className="absolute top-0 left-1/2 text-[11px] font-black tracking-widest"
          style={{ height: size / 2, transformOrigin: 'bottom center', transform: `translateX(-50%) rotate(${(360 / chars.length) * i}deg)` }}
        >
          {c}
        </span>
      ))}
    </div>
  )
}
