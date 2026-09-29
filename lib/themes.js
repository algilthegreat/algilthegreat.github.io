/** Définition des pages thématiques : sélection des événements et gabarit. */
import { getEvents } from './data'

export const themes = {
  cinema: { key: 'cinema', path: '/cinema', color: '#7AB1E8', variant: 'films', select: () => getEvents().filter((e) => e.film) },
  musique: { key: 'musique', path: '/musique', color: '#FFE552', variant: 'grid', select: () => getEvents({ discipline: 'musique' }) },
  expositions: { key: 'expositions', path: '/expositions', color: '#FF9575', variant: 'exhibitions', select: () => getEvents().filter((e) => e.allDay) },
  rencontres: {
    key: 'rencontres', path: '/rencontres', color: '#21AB88', variant: 'grid',
    select: () => getEvents({ type: ['conference', 'debat', 'rencontre-pro', 'education', 'litterature'] }),
  },
  ateliers: { key: 'ateliers', path: '/ateliers', color: '#99C221', variant: 'workshops', select: () => getEvents().filter((e) => e.workshop) },
  jeunesse: {
    key: 'jeunesse', path: '/jeunesse', color: '#FFE552', variant: 'grid',
    select: () => getEvents().filter((e) => e.audience.some((a) => ['enfants', 'famille', 'adolescents'].includes(a))),
  },
}
