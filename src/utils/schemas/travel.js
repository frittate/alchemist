import { makeColor } from '../colors'

export default {
  type: 'travel',
  title: 'Travel',
  description: '',
  trigger: ':travel',
  icon: 'palm-tree',
  color: makeColor(32),
  fields: [
    'start date:',
    'return date',
    'description'
  ]
}
