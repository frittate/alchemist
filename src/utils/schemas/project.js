import { makeColor } from '../colors'

export default {
  type: 'project',
  title: 'Project',
  description: '',
  icon: 'chart-bubble',
  trigger: ':project',
  color: makeColor(14),
  fields: [
    'Project title',
    'scope',
    'cooperation'
  ]
}
