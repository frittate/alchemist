import { makeColor } from '../colors'

export default {
  type: 'conversation',
  title: 'Conversation',
  description: 'Talking to someone',
  icon: 'account-switch',
  trigger: ':conversation',
  color: makeColor(46),
  fields: [
    'participants:',
    'topic:'
  ]
}
