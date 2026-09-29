/** StarBorder — inspiré de React Bits : bordure lumineuse animée autour d'un bouton. */
export default function StarBorder({ as: Tag = 'span', children, className = '', color = '#FFE552', ...rest }) {
  return (
    <Tag className={`relative inline-flex overflow-hidden p-[2px] ${className}`} {...rest}>
      <span
        aria-hidden="true"
        className="animate-star absolute -bottom-3 left-0 h-1/2 w-[300%] rounded-full opacity-80"
        style={{ background: `radial-gradient(circle, ${color}, transparent 12%)` }}
      />
      <span
        aria-hidden="true"
        className="animate-star absolute -top-3 right-0 h-1/2 w-[300%] rounded-full opacity-80 [animation-direction:alternate-reverse]"
        style={{ background: `radial-gradient(circle, ${color}, transparent 12%)` }}
      />
      <span className="relative z-10 inline-flex w-full">{children}</span>
    </Tag>
  )
}
