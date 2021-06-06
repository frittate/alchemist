import { makeColor } from '../colors'

export default {
  type: 'creativeWork',
  title: 'Creative Work',
  description: '',
  icon: 'atom-variant',
  trigger: ':creative',
  color: makeColor(90),
  fields: [
    'type:',
    'project:'
  ]
}
