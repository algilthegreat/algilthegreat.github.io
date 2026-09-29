import { Music, Sparkles, Clapperboard, Palette, BookOpen, Drama, PenTool, Landmark, Utensils, Baby, Cpu, MessagesSquare } from 'lucide-react'

const icons = { Music, Sparkles, Clapperboard, Palette, BookOpen, Drama, PenTool, Landmark, Utensils, Baby, Cpu, MessagesSquare }

export default function DisciplineIcon({ name, className = 'size-6', ...rest }) {
  const Icon = icons[name] ?? Sparkles
  return <Icon className={className} aria-hidden="true" strokeWidth={2} {...rest} />
}
