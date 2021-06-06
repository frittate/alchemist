import { makeColor } from '../colors'

export default {
  type: 'vehicle',
  title: 'Vehicle',
  trigger: ':vehicle',
  icon: 'car',
  description: '',
  color: makeColor(38),
  fields: [
    'manufacturer',
    'type',
    'manufacturedDate',
    'registration',
    'location'
  ]
}
