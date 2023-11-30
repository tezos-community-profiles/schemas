import { validate } from './index.js'
import assert from 'assert'

const valid_profile_1 = {
  "nic": "asbjornenge",
  "pic": "ipfs://...",
  "bio": "Swinging madly across the sun"
}
const valid_profile_2 = {
  "nic": "asbjornenge",
  "pic": "ipfs://...",
  "bio": "Swinging madly across the sun"
}
const invalid_profile_1 = {
  "nic": "asbjornenge",
  "pic": "ipfs://...",
  "bio": 0 
}
const invalid_profile_2 = {
  "nic": "asbjornenge",
  "pic": "ipfs://...",
  "bio": "YOLO",
  "not_allowed": "yolo"
}
const invalid_profile_3 = {
  "nic": "asbjornenge",
  "pic": "https://...",
  "bio": "Swinging madly across the sun"
}

assert(validate('profile', valid_profile_1))
assert(validate('profile', valid_profile_2))
assert(!validate('profile', invalid_profile_1))
assert(!validate('profile', invalid_profile_2))
assert(!validate('profile', invalid_profile_3))
assert(!validate('profile', {}))

// Throws is invalid schema name
try {
  validate('profilez', valid_profile_1)
  assert(false)
} catch(e) {
  assert(e.message == 'No such schema')
}
