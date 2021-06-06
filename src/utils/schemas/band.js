import { makeColor } from '../colors'

export default {
  type: 'band',
  title: 'Band',
  description: 'Someone who makes music',
  icon: 'account-music',
  trigger: ':band',
  color: makeColor(75),
  fields: [
    'albums:',
    'songs:'
  ]
}
