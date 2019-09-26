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

// Single query example
const query = async () => {
  return await client.query('Mory 8, Warsaw 01-330')
}

// Queue query example
const queue = async () => {
  return await client.queue(['Mory 8, Warsaw 01-330', '1756 Naud St, Los Angeles', 'failed address'])
}
```
