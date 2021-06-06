import { makeColor } from '../colors'

export default {
  type: 'lifePeriod',
  title: 'Life Period',
  description: 'An interval of time where life was significantly structured by a bigger entity, i.e. university study.',
  icon: 'timeline-alert',
  trigger: ':life',
  color: makeColor(85),
  fields: [
    'start date:',
    'end date:',
    'occupation:',
    'goals:'
  ]
}
