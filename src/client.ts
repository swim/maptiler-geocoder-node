import * as request from 'request'
import { MaptilerGeocoderParameters } from './typings'

export default class MaptilerGeocoderClientFactory {
  private client: request.RequestAPI<request.Request, request.CoreOptions, request.RequiredUriUrl>;
  private parameters: MaptilerGeocoderParameters;

  /**
   * @param {RequestAPI} Client
   * @param {MaptilerGeocoderParameters} Options
   */
  constructor(
    Client: request.RequestAPI<request.Request, request.CoreOptions, request.RequiredUriUrl>,
    Parameters: MaptilerGeocoderParameters) {
    this.client = Client
    this.parameters = Parameters
  }

  getClient() {
    return this.client
  }

  getParameters() {
    return this.parameters
  }

  async query(query: string) {
    return await this.client.get(`/geocoding/${encodeURIComponent(query)}.json`, {
      qs: this.parameters
    })
  }

}
