import { makeColor } from '../colors'

export default {
  type: 'quote',
  title: 'Quote',
  description: '',
  icon: 'message',
  trigger: ':quote',
  color: makeColor(18),
  fields: [
    'author',
    'source'
  ]
}
