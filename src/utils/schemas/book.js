import { makeColor } from '../colors'

export default {
  type: 'book',
  title: 'Book',
  description: '',
  icon: 'book-open-variant',
  trigger: ':book',
  color: makeColor(10),
  fields: [
    'author',
    'title',
    'isbn',
    'location',
    'image'
  ]
}
