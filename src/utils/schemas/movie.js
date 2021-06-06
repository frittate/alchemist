import { makeColor } from '../colors'

export default {
  type: 'movie',
  title: 'Movie/ Series',
  description: 'Motion picture in full length or an episode',
  trigger: ':movie',
  icon: 'filmstrip',
  color: makeColor(28),
  fields: [
    'title',
    'released',
    'location'
  ]
}
