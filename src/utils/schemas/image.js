import { makeColor } from '../colors'

export default {
  type: 'image',
  title: 'Image',
  description: '',
  icon: 'image',
  trigger: ':image',
  color: makeColor(8),
  fields: [
    'filename',
    'filepath',
    'metaInfo'
  ]
}
