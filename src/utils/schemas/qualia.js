import { makeColor } from '../colors'

export default {
  type: 'qualia',
  title: 'Qualia',
  description: 'A certain type of individual feeling',
  icon: 'flower',
  trigger: ':qualia',
  color: makeColor(48),
  fields: [
    'description:',
    'related to:'
  ]
}
