/** ShinyText — inspiré de React Bits : reflet lumineux qui balaie le texte. */
export default function ShinyText({ children, className = '', base = 'rgba(255,255,255,0.72)', shine = '#ffffff' }) {
  return (
    <span
      className={`animate-shine bg-clip-text text-transparent ${className}`}
      style={{
        backgroundImage: `linear-gradient(110deg, ${base} 40%, ${shine} 50%, ${base} 60%)`,
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
    >
      {children}
    </span>
  )
}
