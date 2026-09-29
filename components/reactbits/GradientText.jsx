/** GradientText — inspiré de React Bits : dégradé animé aux couleurs secondaires. */
export default function GradientText({
  children,
  className = '',
  colors = ['#FFE552', '#FF9575', '#FFB7AE', '#7AB1E8', '#21AB88', '#FFE552'],
}) {
  return (
    <span
      className={`animate-shine bg-clip-text text-transparent ${className}`}
      style={{
        backgroundImage: `linear-gradient(90deg, ${colors.join(', ')})`,
        backgroundSize: '300% 100%',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        animationDuration: '8s',
      }}
    >
      {children}
    </span>
  )
}
