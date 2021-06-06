import { makeColor } from '../colors'

export default {
  type: 'code',
  title: 'Code Snippet',
  description: '',
  icon: 'code-braces',
  trigger: ':code',
  color: makeColor(4),
  fields: [
    'snippet',
    'related to project'
  ]
}
