import { makeColor } from '../colors'

export default {
  type: 'singularEvent',
  title: 'Singular Event',
  trigger: ':event',
  description: '',
  color: makeColor(24),
  icon: 'calendar-star',
  fields: [
    'place',
    'activity',
    'together with',
    'weather',
    'mode of transportation'
  ]
}
