import { makeColor } from '../colors'

export default {
  type: 'song',
  title: 'Song',
  description: '',
  trigger: ':song',
  icon: 'music-note-eighth',
  color: makeColor(28),
  fields: [
    'title',
    'artist',
    'album',
    'connected to'
  ]
}
