# TCP Schema Validation

This module contains schemas for Tezos Community Profiles.

## Install

```
npm install --save ...
```

## Use

```
import { validate } from '...'

const profile = {
  nic: "asbjornenge",
  pic: "ipfs://....",
  bio: "Swinging madly across the sun"
}

validate('profile', profile)
```

## Schemas

```
profile   -   TCP Profile Data
proofs    -   WIP
```

enjoy.
