```
import { config } from 'dotenv'
import { resolve } from 'path'
import { createClient } from 'maptiler-geocoder-node'

config({
  path: resolve(__dirname, '../.env')
})

const client = new createClient({
  key: process.env.key
})
const res = await client.query('Mory 8, Warsaw 01-330')
```
