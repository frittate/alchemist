import { makeColor } from '../colors'

export default {
  type: 'thought',
  title: 'Thought',
  trigger: ':thought',
  icon: 'head-snowflake',
  color: makeColor(30),
  description: '',
  fields: [
    'occasion'
  ]
}
