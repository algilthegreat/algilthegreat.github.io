/**
 * Visuel génératif déterministe aux couleurs de la charte (cercles de la palette
 * secondaire), utilisé tant que les vraies photographies ne sont pas fournies.
 * Même `seed` → même composition, côté serveur comme côté client.
 */
const PALETTE = ['#FFE552', '#21AB88', '#869ECE', '#FF9575', '#7AB1E8', '#99C221', '#FFB7AE']
const GROUNDS = ['#3558A2', '#000000', '#F4F5F8', '#3558A2', '#ffffff']

function rng(seed) {
  let h = 1779033703 ^ seed.length
  for (let i = 0; i < seed.length; i++) {
    h = Math.imul(h ^ seed.charCodeAt(i), 3432918353)
    h = (h << 13) | (h >>> 19)
  }
  return () => {
    h = Math.imul(h ^ (h >>> 16), 2246822507)
    h = Math.imul(h ^ (h >>> 13), 3266489909)
    return ((h ^= h >>> 16) >>> 0) / 4294967296
  }
}

export default function Poster({ seed, color, label, ratio = 4 / 3, className = '', title, ground }) {
  const r = rng(seed)
  const W = 400
  const H = Math.round(W / ratio)
  const bg = ground ?? GROUNDS[Math.floor(r() * GROUNDS.length)]
  const accent = color ?? PALETTE[Math.floor(r() * PALETTE.length)]
  const others = PALETTE.filter((c) => c !== accent)
  const pick = () => others[Math.floor(r() * others.length)]
  const variant = Math.floor(r() * 4)
  const big = W * (0.45 + r() * 0.25)

  const shapes = []
  // Grand cercle principal (couleur de la discipline)
  shapes.push(<circle key="a" cx={W * (0.3 + r() * 0.4)} cy={H * (0.35 + r() * 0.3)} r={big / 2} fill={accent} />)
  if (variant === 0) {
    shapes.push(<circle key="b" cx={W * (0.75 + r() * 0.2)} cy={H * (0.15 + r() * 0.2)} r={W * 0.14} fill={pick()} />)
    shapes.push(<circle key="c" cx={W * (0.1 + r() * 0.15)} cy={H * (0.8 + r() * 0.1)} r={W * 0.1} fill={pick()} />)
  } else if (variant === 1) {
    const y = H * (0.55 + r() * 0.2)
    shapes.push(<rect key="b" x="0" y={y} width={W} height={H - y} fill={pick()} opacity="0.95" />)
    shapes.push(<circle key="c" cx={W * 0.82} cy={y} r={W * 0.12} fill={bg === '#000000' ? '#ffffff' : '#000000'} />)
  } else if (variant === 2) {
    for (let i = 0; i < 5; i++) {
      shapes.push(<circle key={`r${i}`} cx={W * 0.78} cy={H * 0.3} r={W * (0.06 + i * 0.06)} fill="none" stroke={pick()} strokeWidth="10" />)
    }
  } else {
    shapes.push(<path key="b" d={`M0 ${H} A ${W * 0.5} ${W * 0.5} 0 0 1 ${W * 0.9} ${H} Z`} fill={pick()} />)
    shapes.push(<circle key="c" cx={W * 0.85} cy={H * 0.2} r={W * 0.08} fill={pick()} />)
  }

  const textColor = bg === '#F4F5F8' || bg === '#ffffff' ? '#000000' : '#ffffff'

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      className={`block h-full w-full ${className}`}
      role={title ? 'img' : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      <rect width={W} height={H} fill={bg} />
      {shapes}
      {label && (
        <text x="24" y={H - 26} fill={textColor} fontSize="64" fontWeight="900" letterSpacing="-3" fontFamily="var(--font-figtree), sans-serif">
          {label}
        </text>
      )}
    </svg>
  )
}

export const initials = (name) =>
  name
    .split(/[\s-]+/)
    .filter((w) => /^[A-ZÀ-Ý]/.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
