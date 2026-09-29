/**
 * Aurora — inspiré de React Bits (version CSS, sans WebGL) :
 * nappes de couleurs de la charte qui ondulent lentement.
 */
export default function Aurora({ colors = ['#3558A2', '#7AB1E8', '#21AB88', '#FFE552'], className = '' }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {colors.map((c, i) => (
        <span
          key={i}
          className="animate-aurora absolute rounded-full opacity-70 mix-blend-screen blur-3xl"
          style={{
            background: c,
            width: `${55 + i * 8}vmax`,
            height: `${40 + i * 6}vmax`,
            left: `${[-20, 40, 10, 55][i % 4]}%`,
            top: `${[-30, -10, 45, 30][i % 4]}%`,
            animationDelay: `${i * -4}s`,
            animationDuration: `${16 + i * 5}s`,
          }}
        />
      ))}
      <span className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.35)_100%)]" />
    </div>
  )
}
