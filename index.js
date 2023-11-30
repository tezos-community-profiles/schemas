import Ajv from 'ajv'
import { profile_schema } from './schemas.js'

const ajv = new Ajv()

const schemas = {
  profile: ajv.compile(JSON.parse(profile_schema))
}

export const validate = (schema, data) => {
  if (!schemas[schema]) throw new Error('No such schema')
  return schemas[schema](data) 
}
