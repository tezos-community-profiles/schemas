export const profile_schema = `{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "nic": {
      "type": "string"
    },
    "pic": {
      "type": "string",
      "pattern": "^(ipfs://|onchfs://).*$"
    },
    "bio": {
      "type": "string"
    }
  },
  "required": ["nic", "pic", "bio"],
  "additionalProperties": false
}`
