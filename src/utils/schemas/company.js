import { makeColor } from '../colors'

export default {
  type: 'company',
  title: 'Company or Employer',
  description: '',
  icon: 'atom-variant',
  trigger: ':company',
  color: makeColor(99),
  fields: [
    'name:',
    'location:'
  ]
}
