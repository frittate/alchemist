import { makeColor } from '../colors'

export default {
  type: 'exactLocation',
  title: 'Exact Location',
  description: '',
  icon: 'file-cabinet',
  trigger: ':location',
  color: makeColor(76),
  fields: [
    'located at:'
  ]
}
