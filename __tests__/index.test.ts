/// <reference types="jest" />

import { config } from 'dotenv'
import { resolve } from 'path'
import request from 'request'
import rpn from 'request-promise-native'
import { createClient } from '../src'
import { MaptilerGeocoderParameters } from '../src/MaptilerGeocoderClient'

config({
  path: resolve(__dirname, '../.env')
})

test('test creation of default client', () => {
  const params: MaptilerGeocoderParameters = {
    key: process.env.key
  }
  const client = createClient(params, null)
  expect(client.getParameters()).toBe(params)
})
