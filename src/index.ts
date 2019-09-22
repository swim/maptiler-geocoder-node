import * as request from 'request'
import rpn from 'request-promise-native'
import { MaptilerGeocoderParameters } from './typings'
import MaptilerGeocoderClientFactory from './client'

const base = rpn.defaults({
  method: 'GET',
  baseUrl: 'https://api.maptiler.com',
  url: '/geocoding',
  json: true,
  resolveWithFullResponse: true
})

export const createClient = (
  parameters: MaptilerGeocoderParameters,
  client: request.RequestAPI<request.Request, request.CoreOptions, request.RequiredUriUrl> | null): MaptilerGeocoderClientFactory => {
  client ? '' : client = base
  return new MaptilerGeocoderClientFactory(client, parameters)
}
