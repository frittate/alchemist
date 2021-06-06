import { makeColor } from '../colors'

export default {
  type: 'person',
  title: 'Person',
  description: '',
  icon: 'account',
  trigger: ':person',
  color: makeColor(76),
  fields: [
    'name',
    'connection',
    'first met at',
    'company',
    'birthday',
    'contact'
  ]
}
