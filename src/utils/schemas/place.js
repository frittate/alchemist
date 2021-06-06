import { makeColor } from '../colors'

export default {
  type: 'place',
  title: 'Place',
  description: '',
  icon: 'map-marker',
  trigger: ':place',
  color: makeColor(12),
  fields: [
    'address',
    'specifics',
    'visited at'
  ]
}
