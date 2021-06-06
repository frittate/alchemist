import * as d3 from 'd3'
import { moleculeSchemas } from './schemas/molecules'

export const makeColor = colorInput => {
  const map = (value, min1, max1, min2, max2) => (value - min1) * (max2 - min2) / (max1 - min1) + min2
  const colorRange = map(colorInput, 0, 100, 0, 1)
  return d3.interpolateWarm(colorRange)
}

export const colorPerMolecule = molecule => {
  const getMolecule = moleculeSchemas.filter(el => el.type === molecule)[0]

  /* eslint-disable-next-line no-prototype-builtins */
  if (getMolecule.hasOwnProperty('color')) {
    return d3.lab(getMolecule.color).hex()
  }
  return '#000'
}
