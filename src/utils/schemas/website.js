import { makeColor } from '../colors'

export default {
  type: 'website',
  title: 'Website',
  description: '',
  icon: 'web',
  trigger: ':web',
  color: makeColor(42),
  fields: [
    'url: ',
    'project: '
  ]
}
