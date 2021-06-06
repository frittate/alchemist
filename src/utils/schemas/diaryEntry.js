import { makeColor } from '../colors'

export default {
  type: 'diaryEntry',
  title: 'Diary Entry',
  description: '',
  icon: 'calendar-edit',
  color: makeColor(6),
  trigger: ':diary',
  fields: [
    'day',
    'events',
    'moods'
  ]
}
