import Image from 'next/image'
import Poster from './Poster'

/**
 * Photo d'un événement (remplit son parent, qui doit être `relative` et dimensionné),
 * avec repli sur le poster généré si aucune photo n'est fournie.
 */
export default function EventPhoto({ photo, seed, color, sizes, alt = '', priority = false, className = '' }) {
  if (!photo) return <Poster seed={seed} color={color} />
  return <Image src={photo} alt={alt} fill sizes={sizes} priority={priority} className={`object-cover ${className}`} />
}
