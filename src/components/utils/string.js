import { identity, compose } from './func'
import { cleanFalsy, flatten } from './array'

const firstUpper = str => str.substr(0, 1).toUpperCase() + str.substr(1)

const lower = str => str.toLowerCase()

const unCamel = str => str.replace(/([A-Z])/g, ' $1').split(' ')

const compactFlat = compose(cleanFalsy, flatten)

const asWords = str =>
  compactFlat(((str || '').match(/[^\s_\-]+/g) || []).map(unCamel)).map(lower)

export const camelCase = str => asWords(str).reduce((accum, word, index) =>
   `${ accum }${ (index > 0 ? firstUpper : identity)(word) }`, '')

export const kebabCase = str => asWords(str).join('-')

export const snakeCase = str => asWords(str).join('_')

export const startCase = str => asWords(str).map(firstUpper).join(' ')

export const humanCase = str => firstUpper(asWords(str).join(' '))

export const randomId = () => Math.random().toString(36).substring(7)